<script>
export default {
  props: ['contact'],
  emits: ['handle-delete', 'handle-favorite', 'call'],
  methods: {
    handleDelete() {
      this.$emit('handle-delete', this.contact)
    },
    handleFavorite() {
      this.$emit('handle-favorite', this.contact)
    },
    handleClickRecentCall() {
      this.$emit('handle-click-recent-call', this.contact)
    },
  },
}
</script>

<template>
  <div id="modal2" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="wrap-content contact-detail">
        <div class="top teal">
          <div class="row">
            <div class="col s6 center-align teal-text text-lighten-3">
              <i class="material-symbols-outlined person">person</i>
            </div>
            <div class="col s6 right-align teal-text text-lighten-5">
              <span
                class="modal-close material-symbols-outlined"
                :class="{ 'non-fill': !contact?.isFavorite }"
                @click="handleFavorite"
              >
                star
              </span>
              <span class="modal-close material-symbols-outlined">edit</span>
              <span
                class="modal-close material-symbols-outlined"
                @click="handleDelete"
                >delete</span
              >
            </div>
          </div>
          <h5 class="center-align white-text">
            {{ contact?.firstName }} {{ contact?.secondName }}
          </h5>
        </div>
        <div class="bottom">
          <div class="container" @click="$emit('call', contact.phoneNumber)">
            <div class="row valign-wrapper">
              <div class="col s12">
                <ul class="collection">
                  <li
                    class="waves-effect collection-item avatar transparent z-depth-1"
                  >
                    <i class="material-icons circle teal darken-3">person</i>
                    <span class="title"
                      ><b>{{ contact?.phoneNumber }}</b></span
                    >
                    <p>
                      <i>Позавчера</i>
                      <!-- last time call ??? -->
                    </p>
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">phone</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
