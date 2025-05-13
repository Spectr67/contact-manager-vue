<script>
export default {
  props: ['selectedContact'],

  emits: ['contact-updated'],

  data() {
    return {
      updatedContact: {},
    }
  },

  methods: {
    handleUpdate() {
      this.$emit('contact-updated', { ...this.selectedContact })
    },
  },
}
</script>

<template>
  <div id="modal10" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="wrap-content row">
        <h5 class="header">Редактировать Контакт</h5>
        <form class="col s12" autocomplete="off">
          <div class="row">
            <div class="input-field col s12">
              <input
                :value="selectedContact.firstName"
                id="firstName"
                name="firstName"
                type="text"
                autocomplete="new-password"
              />
              <label for="firstName">Имя</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                :value="selectedContact.secondName"
                id="secondName"
                name="secondName"
                type="text"
                autocomplete="new-password"
              />
              <label for="secondName">Фамилия</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                :value="selectedContact.phoneNumber"
                id="phone"
                name="phone"
                type="tel"
                autocomplete="new-password"
              />
              <label for="phone">Телефон</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12 center-align wrap-form-buttons">
              <div class="input-reset">
                <input type="reset" id="reset" class="" />
                <label
                  for="reset"
                  class="transparent teal-text waves-effect waves-light btn modal-close"
                >
                  <i class="material-icons left">Отмена</i>
                  Отмена
                </label>
              </div>
              <a
                id="appAddContact"
                @click="handleUpdate"
                class="btn-ok waves-effect waves-light btn modal-close"
              >
                <i class="material-icons left">check</i>
                <span>Сохранить изменения</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
