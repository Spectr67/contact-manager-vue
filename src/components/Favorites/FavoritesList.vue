<script>
import FavoriteItem from './FavoriteItem.vue'

export default {
  components: {
    FavoriteItem,
  },
  props: ['modelValue'],
}
</script>

<template>
  <div id="tab-1" class="col s12">
    <div class="container">
      <FavoriteItem
        v-for="contact of modelValue"
        :key="contact.id"
        :contact="contact"
      />
    </div>
  </div>
</template>
