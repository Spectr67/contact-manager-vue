export { queryToArray, findContactsByQueries }
function findContactsByQuery(query) {
  return findContactsByQueries(queryToArray(query), contacts)
}

function queryToArray(query) {
  return query
    .trim()
    .split(' ')
    .filter(q => q !== '')
}

function findContactsByQueries(queries, contacts) {
  let findedContacts = []
  queries.forEach(query => {
    const result = helper(query, contacts)
    findedContacts.push(result)
  })
  return removeClones(findedContacts.flat())
}

function helper(query, contacts) {
  return contacts.filter(
    contact =>
      compareWords(query, contact.firstName) ||
      compareWords(query, contact.secondName) ||
      compareWords(query, contact.phone)
  )
}

function compareWords(a, b) {
  return b.toLowerCase().includes(a.toLowerCase())
}

const removeClones = arr => Array.from(new Set(arr))
