<script>
import RecentCallsItem from './RecentCallsItem.vue'

export default {
  components: {
    RecentCallsItem,
  },
  props: ['modelValue'],
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
