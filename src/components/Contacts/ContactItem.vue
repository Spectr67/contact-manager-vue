<script>
export default {
  props: ['contact'],

  emits: ['contact-click'],
}
</script>

<template>
  <li
    @click="$emit('contact-click', contact)"
    href="#modal2"
    class="contact modal-trigger collection-item transparent waves-effect"
  >
    <div class="container">
      <div class="row valign-wrapper">
        <div class="col s4">
          <span
            class="teal darken-1 teal-text text-lighten-4 pic circle center-align material-symbols-outlined"
            >person</span
          >
        </div>
        <div class="col s4">
          <span class="">
            <b>{{ contact.firstName }} {{ contact.secondName }}</b>
          </span>
        </div>
        <div class="col s4">
          <span class="badge new">{{ contact.phoneNumber }}</span>
        </div>
      </div>
    </div>
  </li>
</template>
