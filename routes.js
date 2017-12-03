const datahandling = require('./datahandling')
const validation = require('./validation')
module.exports = [
  {
    method: 'GET',
    path: '/',
    handler:datahandling.getHomepage
  },
  {
    method: 'POST',
    path: '/books',
    handler:datahandling.postBooks,
    config:{validate:{payload:validation.bookSchema}}
  },
  {
    method: 'PUT',
    path: '/books',
    handler:datahandling.updateBook,
    config:{validate:{payload:validation.bookSchema}}
  },
  {
    method: 'GET',
    path: '/books',
    handler:datahandling.getBooks
  },
  
  {
      method:'GET',
      path:'/books/{isbn}',
      handler:datahandling.getSingleBook
},
  {
      method:'DELETE',
      path:'/books/{isbn}',
      handler:datahandling.deleteBook
    },
     {
    method: 'GET',
    path: '/books/{p*}',
    handler: datahandling.bookqueryName
},
  {
    method: 'POST',
    path: '/users',
     handler:datahandling.createUser,
    config:{validate:{payload:validation.userSchema}}
 },
  {
    method: 'GET',
    path: '/users',
    handler:datahandling.getUsers
  },
  
  {
    method: 'PUT',
    path: '/users',
    handler:datahandling.updateUser,
    config:{validate:{payload:validation.UserSchema}}
  },
  
  {
      method:'GET',
      path:'/users/{id}',
      handler:datahandling.getSingleUser
},
  {
      method:'DELETE',
      path:'/users/{id}',
      handler:datahandling.deleteUser
    },
     {
    method: 'GET',
    path: '/users/{p*}',
    handler: datahandling.userqueryFees
}
]