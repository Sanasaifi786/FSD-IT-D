import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.post("/create", (req, res) => {
    const {file} = req.body;
    const filePath = path.join(__dirname, "file.txt");

    fs.writeFile(filePath, file, (err) => {
        if(err){
            console.error("Error creating file:", err);
            res.status(500).json({message: "Error creating file"});
        } else {
            res.status(200).json({message: "File created successfully"});
        }
    })
});

app.get("/read", (req, res) => {
    const file = path.join(__dirname, "file.txt");
    fs.readFile(file, "utf-8", (err, data) => {
        if(err){
            console.error("Error reading file:", err);
            res.status(500).json({message: "Error reading file"});
        } else {
            res.status(200).json({content: data});
        }
})
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

