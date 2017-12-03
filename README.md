# bookLendingApi
## Team Members
* Gurjeet Singh
* Lovepreet Singh
* Harroop Kang

## About booklendingApi
* We have implemented this Api in c9 node.js environment using hapi,joi and firebase as database.
* To run this app locally, you have to change the port and host in the server connection in app.js.
## for a sample book data you can use following object

    { "author": "jordan",
    "copies": [
        {
            "editionDate": "08-12-2016",
            "editionName": "second",
            "issued": {
                "isIssued": "true",
                "issuedTo": "gurjeet",
                "reserved": "true"
            }
        }
    ],
    "genre": "food",
    "isbn": "222",
    "publication": {
        "cityPublished": "surrey",
        "date": "10-28-2016",
        "publisher": "newpress"
    },
    "title": "butter"}


## for a sample user data you can use following object


        {"id": "100288825",
        "name": "Gurjeet",
         "email": "gv9810@gmail.com",
        "booksBorrowed": [
            {
                "borrowed": "butter",
                "dueDate": "08-12-2016"
            }
        ],
        "booksReserved": "peace",
       	"late_fees": 500}


* for posting a new book(send book object as request payload):POST  /books

* for getting all books: 
GET /books

* for updating book(send book object as request payload with changes to other fields except isbn): 
PUT /books

* for getting a single book:
GET /books/222

* for deleting a book:
DELETE /books/222

* for quering a book with genre:
GET /books/?genre=food

* for quering a book with title:
GET /books/?title=butter

* for quering a book with author:
GET /books/?author=jordan

## users table
* for creating a new user(send user object as request payload):POST  /users
* For getting all users: GET /users
* For updating user(send user object as request payload with chnges to other field except id): PUT /users 
* For getting a single user: GET /users/100288825
* For deleting a single user: DELETE /users/100288825
* For quering a user with late_fees:GET /users/?late_fees=any
### I am using postman to test my API.
#### Note: POST /users = url-where-your-app-is -running/users.   Similarly, define path for each of above method as this.




