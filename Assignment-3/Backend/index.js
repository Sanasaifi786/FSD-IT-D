const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("./app.html");
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.end(home);
})
server.listen(8080,()=>{
    console.log("Server is running on port",8080);
    
})