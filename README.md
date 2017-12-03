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
        "publisher": "jordan"
    },
    "title": "butter"
}
