<script>
import FavoriteItem from './FavoriteItem.vue'

export default {
  components: { FavoriteItem },

  props: ['favorites'],
}
</script>

<template>
  <div id="tab-1" class="col s12">
    <div class="container">
      <FavoriteItem
        v-for="favorite of favorites"
        :key="favorite.id"
        :contact="favorite"
      />
    </div>
  </div>
</template>
