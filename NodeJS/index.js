const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("./abes.html");
const myServer = http.createServer((req,res)=>{
    res.statusCode = 200;
    // res.setHeader('Content-Type','text/html');
    res.end(home);
    // console.log("server1");
    // res.end('Hi this is my first server');
})
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

myServer.listen(8080,()=>{
    console.log("Server listening on port: 8080");
    
});

// const { log } = require('console');


// const fs = require('fs');
// fs.writeFileSync("./it-a.txt","we are student of IT");
// fs.writeFileSync("./Abes.txt","we are studnet of abes");

// const result = fs.readFileSync("./Abes.txt","utf-8");
// console.log(result);
// const result2 = fs.readFileSync("./it-a.txt","utf-8");
// console.log(result2);

// fs.writeFile("./it-a.txt","we are student of IT",()=>{});
// console.log("File is created");

// fs.readFile("./Abes.txt","utf-8",(error,result)=>{
//     if(error){
//         console.log("Error reading file:", error);
//     } else {
//         console.log("File content:", result);
//     }
// })

// fs.appendFileSync("./Abes.txt",`and i am in 3rd year of BTech`);
// fs.appendFile("./it-a.txt",` and i am in 3rd year of BTech`,()=>{});

//copy file
// fs.cpSync("./a1.txt","./b1.txt");
// fs.cp("./a1.txt","./b2.txt",(error,result)=>{
//     if(error){
//         console.log("Error copying file:", error);
//     }
//     else{
//         console.log("File copied successfully",result);
//     }
// });

//Delete file 
// fs.unlinkSync("./b2.txt"); 

// fs.existsSync("./b1.txt");


// const fs = require('fs');
// async function readJSON() {
//   const data = await fs.readFile("data.json", "utf8",(error,result)=>{
//     if(error){
//       console.log("Error reading file:", error);
//     }
//     else{
//         const jsonData = JSON.parse(result);
//         console.log(jsonData);
//     }
//   });
// }
// readJSON();

// const data = {
//   name: "Sana",
//   role: "Developer",
//   skills: ["Node.js", "Django"]
// };

// async function writeJSON() {
//   await fs.writeFile("data.json",JSON.stringify(data, null, 2),"utf8",(error)=>{
//     if(error){
//       console.log("Error writing file:", error);
//     }
//   console.log("JSON file written successfully");
// })};

// writeJSON();


// const os = require('os');
// console.log("operating hostname:", os.hostname());
// console.log("Operating System:", os.type());
// console.log("Platform:", os.platform());
// console.log("CPU Architecture:", os.arch());
// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());
// console.log("UserInfo:", os.userInfo());
// console.log("Uptime:", os.uptime());
// console.log("Home Directory:", os.homedir());

