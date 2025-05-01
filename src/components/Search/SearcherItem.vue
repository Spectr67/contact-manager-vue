<script>
export default {
  props: ['contact'],
}
</script>

<template>
  <li class="collection-item avatar">
    <i class="material-icons circle green">assessment</i>
    <span class="title">{{ contact.firstName }}{{ contact.secondName }}</span>
    <p>{{ contact.phoneNumber }}</p>
    <a href="#!" class="secondary-content">
      <i class="material-icons">phone</i>
    </a>
  </li>
</template>
