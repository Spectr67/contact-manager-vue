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
      this.recentCalls.push(contact)
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

      <FavoritesList :favorites="favorites" />

      <RecentCallsList
        :recentCalls="recentCalls"
        :selectedContact="selectedContact.phoneNumber"
      />
    </div>
  </div>

  <ContactSubmitter @contact-submitted="contacts.push($event)" />

  <ContactPreview
    :contact="selectedContact"
    @handle-delete="handleDeleteContact"
    @handle-favorite="handleFavoriteToggle"
    @handle-click-recent-call="handleRecentCall"
  />

  <ContactEditer
    v-if="selectedContact"
    :selectedContact="selectedContact"
    @contact-updated="handleContactUpdate"
  />
  <SearcherResult :findedContacts="filteredContacts" />
</template>
