let IdResentCallCounter = 0

const initRecentCall = contact => ({
  firstName: contact.firstName,
  secondName: contact.secondName,
  phoneNumber: contact.phoneNumber,
  id: ++IdResentCallCounter,
  when: Date.now(),
  timeAgo() {
    return Date.now() - this.when
  },
})

let contact = {
  firstName: 'Ivan',
  secondName: 'Petrov',
  phoneNumber: '9459232525',
}

let recentCall = initRecentCall(contact)

console.log(recentCall.when)
console.log(recentCall.timeAgo())
setTimeout(() => {
  console.log(recentCall.timeAgo())
}, 1000)
