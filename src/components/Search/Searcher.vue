<script>
import {
  queryToArray,
  findContactsByQueries,
} from '../../functions/searchFunctions.js'

export default {
  props: ['contacts'],

  data() {
    return {
      findedContacts: [],
    }
  },

  methods: {
    handleSearch(event) {
      const query = event.target.value
      const queries = queryToArray(query)
      const results = findContactsByQueries(queries, this.contacts)
      this.$emit('search-result', results)
    },
  },
}
</script>
<template>
  <div class="nav-wrapper">
    <form>
      <div class="input-field">
        <input
          @input="handleSearch"
          class="teal-text text-lighten-5"
          id="search"
          type="search"
          placeholder="Поиск в контактах"
          required
        />
        <label class="label-icon" for="search"
          ><i class="material-icons">search</i></label
        >
        <i class="material-icons">close</i>
      </div>
    </form>
  </div>
</template>
