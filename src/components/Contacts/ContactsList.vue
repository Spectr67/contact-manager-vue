<script>
import ContactItem from './ContactItem.vue'
import AddContactButton from './AddContactButton.vue'

export default {
  components: {
    ContactItem,
    AddContactButton,
  },
}
</script>

<template>
  <div id="tab-3" class="col s12">
    <ul id="app-contacts" class="collection">
      <ContactItem />
    </ul>
    <AddContactButton />
  </div>
</template>
