const http = require('http') // grabbing http module 

// call back functions 
const server = http.createServer((req,res) => {
    if(req.url==='/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Here is our short history');
    }
    res.end(`
    <h1>OOps!</h1>
    <p>We can't seem to find the page you are looking</p>
    <a href="/">Back Home</a>`); // response gayo vane close gareko
})

server.listen(8000)