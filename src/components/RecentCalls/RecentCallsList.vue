<script>
import RecentCallsItem from './RecentCallsItem.vue'

export default {
  components: { RecentCallsItem },

  props: ['recentCalls'],

  emits: ['call'],
}
</script>

<template>
  <div id="tab-2" class="col s12">
    <div class="container">
      <div class="row valign-wrapper">
        <div class="recent-call col s12">
          <ul id="app-recent-calls" class="collection">
            <RecentCallsItem
              v-for="recentCall in recentCalls.slice().reverse()"
              :key="recentCall.id"
              :recent-call="recentCall"
              @click="$emit('call', recentCall.phoneNumber)"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
