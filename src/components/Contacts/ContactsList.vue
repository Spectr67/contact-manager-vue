<script>
import ContactItem from './ContactItem.vue'
import AddContactButton from '../../ui/AddContactButton.vue'

export default {
  components: { ContactItem, AddContactButton },

  props: ['modelValue'],

  emits: ['contact-click'],
}
</script>

<template>
  <div id="tab-3" class="col s12">
    <ul id="app-contacts" class="collection">
      <ContactItem
        v-for="contact of modelValue"
        :key="contact.id"
        :contact="contact"
        @contact-click="$emit('contact-click', $event)"
      />
    </ul>
    <AddContactButton />
  </div>
</template>
