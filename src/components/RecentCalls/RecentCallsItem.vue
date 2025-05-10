<script>
let IdRecentCallCounter = 0

const initRecentCall = contact => ({
  firstName: contact.firstName || 'Unknown number',
  secondName: contact.secondName || '',
  phoneNumber: contact.phoneNumber,
  id: ++IdRecentCallCounter,
  when: Date.now(),
  timeAgo: 0,
})
export default {
  props: ['phoneNumber', 'contacts'],
  emits: ['recent-call-submitted'],

  methods: {
    handleIncomingCall() {
      const foundContact = this.contacts.find(
        c => c.phoneNumber === this.phoneNumber
      )

      const recentCall = initRecentCall(
        foundContact || { phoneNumber: this.phoneNumber }
      )

      this.$emit('recent-call-submitted', recentCall)
    },
  },
}
</script>

<template>
  <li
    class="recent-call waves-effect collection-item avatar transparent z-depth-1"
  >
    <i class="material-icons circle teal darken-3">person</i>
    <span class="title"
      ><b
        >{{ recentCall.firstName }}{{ recentCall.secondName
        }}{{ recentCall.phoneNumber }}</b
      ></span
    >
    <p>
      <i>{{ recentCall.timeAgo }}</i>
    </p>
    <a href="#!" class="secondary-content">
      <i class="material-icons">phone</i>
    </a>
  </li>
</template>
