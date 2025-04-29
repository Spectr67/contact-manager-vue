<script>
import ContactEditer from './components/ContactForm/ContactEditer.vue'
import ContactSubmitter from './components/ContactForm/ContactSubmitter.vue'
import ContactsList from './components/Contacts/ContactsList.vue'
import Searcher from './components/Search/Searcher.vue'
import RecentCallsList from './components/RecentCalls/RecentCallsList.vue'
import FavoritesList from './components/Favorites/FavoritesList.vue'
import SearcherResult from './components/Search/SearcherResult.vue'
import ContactPreview from './components/ContactPreview.vue'
import UINavagation from './components/ui/UINavagation.vue'

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
      favorites: [],
      selectedContact: null,
    }
  },
}
</script>

<template>
  {{ contacts }}
  <div class="wrapper teal lighten-5">
    <nav class="nav-extended teal">
      <Searcher />

      <!-- кнопки выбора меню -->
      <UINavagation />
    </nav>

    <div>
      <ContactsList
        v-model="contacts"
        @contact-click="selectedContact = $event"
      />

      <FavoritesList v-model="favorites" />

      <RecentCallsList v-model="recentCalls" />
    </div>
  </div>

  <ContactSubmitter @contact-submitted="contacts.push($event)" />

  <ContactPreview v-if="selectedContact" :contact="selectedContact" />

  <SearcherResult />
</template>
