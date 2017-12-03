const database = require('./database');
module.exports={
    getHomepage:getHomepage,
    postBooks:postBooks,
    getBooks:getBooks,
    getSingleBook:getSingleBook,
    deleteBook:deleteBook,
    bookqueryName:bookqueryName,
    updateBook:updateBook,
    createUser:createUser,
    getUsers:getUsers,
    getSingleUser:getSingleUser,
    deleteUser:deleteUser,
    updateUser:updateUser,
    userqueryFees:userqueryFees
    }


 function getHomepage(req,reply){
     return reply("Hello, Welcome to my book lending API");
}


function postBooks(req,reply){
    database.books.child(req.payload.isbn).set(req.payload,function(error){
       if(error){
            return reply("Data could not be saved");
       }
       else{
            return reply("saved to database");
       }
   });
}

function getBooks(req,reply){
 database.books.orderByKey().limitToFirst(5).once("value", function(data) {
  if(data.val()){
      return reply(data.val()); 
   }
   else{
       return reply("No books available");
   }
});
}

function updateBook(req,reply){
    database.books.child(req.payload.isbn).update(req.payload,function(error){
       if(error){
            return reply("Information not updated");
       }
       else{
            return reply("information updated");
       }
   });
}

function getSingleBook(req,reply){
 database.books.child(req.params.isbn).once("value", function(data) {
   if(data.val()){
      return reply(data.val()); 
   }
   else{
       return reply("No book with that isbn");
   }
});
}

function deleteBook(req,reply){
  let book= database.books.child(req.params.isbn).remove(function(error){
       if(error){
            return reply("Book not deleted");
       }
       else{
            return reply("Book deleted");
       }
  });
}

function bookqueryName(req,reply){
    if (req.query.genre) {
   database.books.orderByChild('genre').equalTo(req.query.genre).once("value", function(data) {
   if(data.val()!=null){
      return reply(data.val()); 
   }
       return reply("No book available with genre:"+`${req.query.genre}`);
});
}
else if (req.query.title) {
   database.books.orderByChild('title').equalTo(req.query.title).once("value", function(data) {
   if(data.val()!=null){
      return reply(data.val()); 
   }
       return reply("No book available with title:"+`${req.query.title}`);
});
}
 else if (req.query.author) {
   database.books.orderByChild('author').equalTo(req.query.author).once("value", function(data) {
   if(data.val()!=null){
      return reply(data.val()); 
   }
       return reply("No book available published by author:"+`${req.query.author}`);
});
}
else{
     return reply ('query not recognized. try searching by genre,title or author').code(404)
}
}



function createUser(req,reply){
   database.users.child(req.payload.id).set(req.payload,function(error){
       if(error){
            return reply("Data could not be saved");
       }
       else{
            return reply("saved to database");
       }
   });
  
}

function getUsers(req,reply){
 database.users.orderByKey().limitToFirst(5).once("value", function(data) {
  if(data.val()){
      return reply(data.val())
  }
  else{
      return reply("no users")
  }
});
}

function updateUser(req,reply){
    database.users.child(req.payload.id).update(req.payload,function(error){
       if(error){
            return reply("Information not updated");
       }
       else{
            return reply("information updated");
       }
   });
}

function getSingleUser(req,reply){
 database.users.child(req.params.id).once("value", function(data) {
   if(data.val()){
      return reply(data.val()); 
   }
   else{
       return reply("No user with that id");
   }
});
}

function deleteUser(req,reply){
  database.users.child(req.params.id).remove(function(error){
       if(error){
            return reply("User not deleted");
       }
       else{
            return reply("User deleted");
       }
  });
}

function userqueryFees(req,reply){
    if (req.query.late_fees) {
   database.users.orderByChild('late_fees').startAt(0).once("value", function(data) {
   if(data.val()!=null){
      return reply(data.val()); 
   }
       return reply("No user found having late fees");
});
}
else{
     return reply ('query not recognized. try searching by late_fees').code(404);
}
}
