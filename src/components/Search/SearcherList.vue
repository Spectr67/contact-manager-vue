<script>
import SearcherItem from './SearcherItem.vue'

export default {
  components: { SearcherItem },

  props: ['findedContacts'],
}
</script>

<template>
  <div id="modal3" class="modal bottom-sheet modal-close non-overlay">
    <div class="modal-content">
      <div class="wrap-content">
        <h5 class="header">Найдено:</h5>
        <ul class="collection">
          <SearcherItem
            v-for="contact of findedContacts"
            :key="contact.id"
            :contact="contact"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
