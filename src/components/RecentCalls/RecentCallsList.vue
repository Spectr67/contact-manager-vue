<script>
import RecentCallsItem from './RecentCallsItem.vue'

export default {
  components: {
    RecentCallsItem,
  },
  props: ['recentCalls', 'selectedContact'],
}
</script>

<template>
  <div id="tab-2" class="col s12">
    <div class="container">
      <div class="row valign-wrapper">
        <div class="recent-call col s12">
          <ul id="app-recent-calls" class="collection">
            <RecentCallsItem
              :selectedPhone="selectedContact"
              v-for="recentCall of recentCalls"
              :key="recentCall.phoneNumber"
              :recentCall="recentCall"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
