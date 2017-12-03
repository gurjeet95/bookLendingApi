const firebase = require('firebase');
firebase.initializeApp({
  databaseURL:"https://booklendingapi.firebaseio.com"
})

const books = firebase.database().ref('books');
const users=  firebase.database().ref('users');

module.exports={
    books:books,
    users:users,
}