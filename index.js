import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) =>{
    res.render("index.ejs")
});

app.get("/views/trabajos/:jobs", (req,res) => {
    const jobs= req.params.jobs;
    res.render(`trabajos/${jobs}.ejs`)
});

app.post("/", (req,res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

