# bookLendingApi
## Team Members
* Gurjeet Singh
* Lovepreet Singh
* Harroop Kang

## About booklendingApi
* We have implemented this Api in c9 node.js environment using hapi,joi and firebase as database.
* To run this app locally, you have to change the port and host in the server connection in app.js.
* for a sample book data you can use following object

{
    "author": "jordan",
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
    "title": "butter"
}

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





