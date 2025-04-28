<script>
import ContactEditer from './components/ContactForm/ContactEditer.vue'
import ContactSubmitter from './components/ContactForm/ContactSubmitter.vue'
import ContactsList from './components/Contacts/ContactsList.vue'
import Searcher from './components/Search/Searcher.vue'
import RecentCallsList from './components/RecentCalls/RecentCallsList.vue'
import FavoritesList from './components/Favorites/FavoritesList.vue'
import SearcherResult from './components/Search/SearcherResult.vue'
import ContactPreview from './components/ContactPreview.vue'

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
  },
}
</script>

<template>
  <div class="wrapper teal lighten-5">
    <nav class="nav-extended teal">
      <Searcher />

      <!-- кнопки выбора меню -->
      <div class="nav-content">
        <ul class="tabs tabs-transparent">
          <li class="tab">
            <a href="#tab-1">
              <span class="material-symbols-outlined">star</span>
            </a>
          </li>
          <li class="tab">
            <a href="#tab-2">
              <span class="material-symbols-outlined">chronic</span>
            </a>
          </li>
          <li class="tab">
            <a class="active" href="#tab-3">
              <span class="material-symbols-outlined">people</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div>
      <ContactsList />

      <FavoritesList />

      <RecentCallsList />
    </div>
  </div>

  <ContactSubmitter />

  <ContactPreview />

  <SearcherResult />
</template>
