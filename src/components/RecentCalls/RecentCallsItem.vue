<script>
export default {
  props: ['recentCall'],
}
</script>

<template>
  <li
    class="recent-call waves-effect collection-item avatar transparent z-depth-1"
  >
    <i class="material-icons circle teal darken-3">person</i>
    <span class="title">
      <b>
        {{ recentCall.foundContact?.firstName }}
        &nbsp; {{ recentCall.foundContact?.secondName }} &nbsp;
        {{ recentCall.phoneNumber }}</b
      >
    </span>
    <p>
      <i>{{ recentCall.timeAgo }}</i>
    </p>
    <a href="#!" class="secondary-content">
      <i class="material-icons">phone</i>
    </a>
  </li>
</template>
