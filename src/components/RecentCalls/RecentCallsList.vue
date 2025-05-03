<script>
import RecentCallsItem from './RecentCallsItem.vue'

let IdResentCallCounter = 0

const initRecentCall = contact => ({
  firstName: contact.firstName,
  secondName: contact.secondName,
  phoneNumber: contact.phoneNumber,
  id: ++IdResentCallCounter,
  timeAgo: 0,
})

export default {
  components: {
    RecentCallsItem,
  },
  props: ['selectedContact'],
  emits: ['resent-call-submitted'],
  methods: {
    handleClickRecentCall() {
      this.$emit('contact-submitted', initRecentCall(this.contact))
      this.contact = initRecentCall(contact)
    },
  },
}
</script>

<template>
  <div id="tab-2" class="col s12">
    <div class="container">
      <div class="row valign-wrapper">
        <div class="recent-call col s12">
          <ul id="app-recent-calls" class="collection">
            <RecentCallsItem
              v-for="recentCall of modelValue"
              :key="recentCall.id"
              :recentCall="recentCall"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
