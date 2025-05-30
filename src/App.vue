<script>
import ContactEditer from './components/ContactForm/ContactEditer.vue'
import ContactSubmitter from './components/ContactForm/ContactSubmitter.vue'
import ContactsList from './components/Contacts/ContactsList.vue'
import Searcher from './components/Search/Searcher.vue'
import RecentCallsList from './components/RecentCalls/RecentCallsList.vue'
import FavoritesList from './components/Favorites/FavoritesList.vue'
import SearcherResult from './components/Search/SearcherList.vue'
import ContactPreview from './components/ContactPreview.vue'
import UINavagation from './ui/UINavagation.vue'

let IdRecentCallCounter = 0

const initRecentCall = (phoneNumber, that) => ({
  phoneNumber: phoneNumber,
  get foundContact() {
    return that.contacts.find(c => c.phoneNumber === phoneNumber)
  },
  id: ++IdRecentCallCounter,
  when: Date.now(),
  timeAgo: 0,
})

export default {
  components: {
    ContactEditer,
    ContactSubmitter,
    ContactsList,
    Searcher,
    RecentCallsList,
    FavoritesList,
    SearcherResult,
    ContactPreview,
    UINavagation,
  },

  data() {
    return {
      contacts: [],
      recentCalls: [],
      selectedContact: null,
      filteredContacts: [],
    }
  },

  computed: {
    favorites() {
      return this.contacts.filter(contact => contact.isFavorite)
    },
  },

  methods: {
    addRecentCallByPhoneNumber(phoneNumber) {
      const recentCall = initRecentCall(phoneNumber, this)
      console.log(recentCall.foundContact)
      this.recentCalls.push(recentCall)
    },

    handleContactUpdate(updatedContact) {
      if (updatedContact) {
        this.contacts = this.contacts.map(contact =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      }
    },

    handleSearchResult(result) {
      this.filteredContacts = result
    },

    handleDeleteContact(contactToDelete) {
      contactToDelete.firsName = 'Petya'
      this.contacts = this.contacts.filter(
        contact => contact.id !== contactToDelete.id
      )
      this.selectedContact = null
    },

    handleFavoriteToggle(contact) {
      const target = this.contacts.find(c => c.id === contact.id)
      if (target) {
        target.isFavorite = !target.isFavorite
      }
    },
    handleRecentCall(contact) {
      this.recentCalls.unshift(contact)
    },
  },
}
</script>

<template>
  {{ selectedContact }}
  <div class="wrapper teal lighten-5">
    <nav class="nav-extended teal">
      <Searcher :contacts="contacts" @search-result="handleSearchResult" />

      <!-- кнопки выбора меню -->
      <UINavagation />
    </nav>

    <div>
      <ContactsList
        v-model="contacts"
        @contact-click="selectedContact = $event"
      />

      <FavoritesList
        :favorites="favorites"
        @call="addRecentCallByPhoneNumber($event)"
      />

      <RecentCallsList
        :recentCalls="recentCalls"
        @call="addRecentCallByPhoneNumber($event)"
      />
    </div>
  </div>

  <ContactSubmitter @contact-submitted="contacts.push($event)" />

  <ContactPreview
    :contact="selectedContact"
    @handle-delete="handleDeleteContact"
    @handle-favorite="handleFavoriteToggle"
    @call="addRecentCallByPhoneNumber($event)"
  />

  <ContactEditer
    :selectedContact="selectedContact"
    @contact-updated="handleContactUpdate"
  />
  <SearcherResult
    :findedContacts="filteredContacts"
    @call="addRecentCallByPhoneNumber($event)"
  />
</template>
