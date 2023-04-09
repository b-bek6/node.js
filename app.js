// /* node event loop */

// setInterval(()=>{
//     console.log('hello world')
// }, 2000)
// console.log(`I will run first`)
// // process stays alive unless
// // kill process control + c
// // unexpected error  /

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log('request event')
//     res.end('Hello world')
// })
// server.listen(3001);

/* ASYNCHRONOUS PATTERNS */
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end(`<h1>This is home page</h1>`)
    }
    if(req.url === '/about'){
        //BLOCKING CODE !!!
        // for(let i = 0; i< 1000; i++){
        //     for(let j = 0; j< 1000; j++){
        //         console.log(`${i} ${j}`);
        //     }
        // }
        res.end("THis is about page");
    }
    res.end("End page");
})
server.listen(5001, "localhost", () => {
    console.log("server is listeninng on port 5001...")
})