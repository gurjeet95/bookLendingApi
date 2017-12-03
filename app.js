let hapi =require("hapi")
let server = new hapi.Server();
server.connection({
    port : process.env.PORT,
    host:  process.env.IP
})

server.route(require('./routes'));

server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log(`server is listening on: ${server.info.uri}`)
})