import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
 
const app = express();
app.use(express.urlencoded());
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    })
 
app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("your result is " + result);
})

app.get("/bmiCalculator", function(req, res){
    res.sendFile(path.join(__dirname, "bmiCalculator.html"));
})

app.post("/bmiCalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    res.send("your result is " + bmi);

})

app.listen("3000", function () {
        console.log("Server running on port 3000.");
    })