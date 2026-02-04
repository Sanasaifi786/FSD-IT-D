const http = require("http");
const myServer = http.createServer((req,res)=>{
    console.log("server1");
    res.end('Hi this is my first server');
});

myServer.listen(8080,()=>{
    console.log("Server listening on port: 8080");
    
})