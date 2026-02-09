// const http = require("http");
// const myServer = http.createServer((req,res)=>{
//     console.log("server1");
//     res.end('Hi this is my first server');

//     if(req.url=='/')
//     {
//         res.end("<h1>ABES Engineering College Ghaziabad</h1> <br> <img src='https://cache.careers360.mobi/media/article_images/2024/6/20/ABESEC-Ghaziabad.jpg' style='height: 400px; weight: 400px'>");
//     }
//     else if(req.url == '/about')
//     {
//         res.end("<h1>We are a student of BTech</h1>");
//     }
//     else if(req.url == '/contact')
//     {
//         res.end("<h1>sanasaifi@gmail.com</h1>");
//     }
//     else if(req.url == '/class')
//     {
//         res.end("<h1>FSD - IT - A</h1>")
//     }
//     else{
//         res.end("404 : Page Not Found");
//     }
// });

// myServer.listen(8080,()=>{
//     console.log("Server listening on port: 8080");
    
// })

// const { log } = require('console');
const fs = require('fs');
// fs.writeFileSync("./it-a.txt","we are student of IT");
// fs.writeFileSync("./Abes.txt","we are studnet of abes");

// const result = fs.readFileSync("./Abes.txt","utf-8");
// console.log(result);
// const result2 = fs.readFileSync("./it-a.txt","utf-8");
// console.log(result2);

fs.writeFile("./it-a.txt","we are student of IT",()=>{});
console.log("File is created");

