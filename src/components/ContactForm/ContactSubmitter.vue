<script>
let idCounter = 0
const initContact = () => ({
  firstName: '',
  secondName: '',
  phoneNumber: '',
  id: ++idCounter,
  favorite: false,
})

export default {
  data() {
    return {
      contact: initContact(),
    }
  },
  emits: ['contact-submitted'],

  methods: {
    handleClick() {
      this.$emit('contact-submitted', { ...this.contact })
      this.contact = initContact()
    },
  },
}
</script>

<template>
  <div id="modal1" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="wrap-content row">
        <h5 class="header">Добавить контакт</h5>
        <form class="col s12" autocomplete="off">
          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="contact.firstName"
                id="firstName"
                name="firstName"
                type="text"
                autocomplete="new-password"
                required
              />
              <label for="firstName">Имя</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="contact.secondName"
                id="secondName"
                name="secondName"
                type="text"
                autocomplete="new-password"
                required
              />
              <label for="secondName">Фамилия</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="contact.phoneNumber"
                id="phone"
                name="phone"
                type="tel"
                autocomplete="new-password"
                required
              />
              <label for="phone">Телефон</label>
            </div>
          </div>

          <div class="row">
            <div class="col s12 center-align wrap-form-buttons">
              <div class="input-reset">
                <input type="reset" id="reset" />
                <label
                  for="reset"
                  class="transparent teal-text waves-effect waves-light btn modal-close"
                >
                  <i class="material-icons left">close</i>
                  Отмена
                </label>
              </div>

              <a
                id="appAddContact"
                @click="handleClick"
                class="btn-ok waves-effect waves-light btn modal-close"
              >
                <i class="material-icons left">check</i>
                <span>Добавить</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
