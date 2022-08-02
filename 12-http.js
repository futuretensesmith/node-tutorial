const http = require('http');
// *** req is a request object ***
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page.')
    }

    if (req.url === '/about') {
        res.end('This is the about page.')
    }
    else {
        res.end(`
        <h1>Ooops!</h1>
        <p>That page doesnt exist.</p>
        <a href="/">back home</a>
        `)
    }


})

server.listen(5000)