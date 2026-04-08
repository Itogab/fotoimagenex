import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
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
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get("/", (req,res) =>{
    res.render("index.ejs")
});

app.get("/views/trabajos/:jobs", (req,res) => {
    const jobs= req.params.jobs;
    res.render(`trabajos/${jobs}.ejs`)
});

app.post("/send-email", (req,res) => {
    console.log(req.body);
    
    const {name, phone, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:process.env.GMAIL_USER,
            pass:process.env.GMAIL_PASS
        }
    })

    console.log(transporter)
    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject:`Nuevo mensaje de ${name}`,
        text:
        `Nombre: ${name}
         Teléfono: ${phone}
         Email: ${email}
         Mensaje: ${message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.error("Error occurred: ", error);
            res.status(500).send('Error al enviar mail. Por favor intentelo mas tarde.')
        } else{
            console.log('Email sent: ', info.response);
            res.send('Email sent successfully!')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

