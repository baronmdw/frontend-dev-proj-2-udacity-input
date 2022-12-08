var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const http = require('http');
const request = require('request');
const FormData = require('form-data');

dotenv.config();

const app = express()

app.use(bodyParser.json())

const apiKey = process.env.API_KEY;
let requestBody = {
    key: apiKey,  
    of: "json",
    lang: "auto",
}

global.outputData = {};

app.use(express.static('../../dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile("index.html", {root: "../../dist"})
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', function (req, res) {
    const inputData = req.body.inputText;
    requestBody["txt"] = inputData;
    
    // Create FormData Object and fill with content necessary to get proper response from Meaningcloud API sentiment analysis
    const formularData = new FormData();
    formularData.append('key', apiKey);
    formularData.append('of', 'json');
    formularData.append('lang', 'en');
    formularData.append('txt', inputData)

    
    // send FormData Object to Meaningcloud api sentiment analysis
    formularData.submit('https://api.meaningcloud.com/sentiment-2.1',function(error, response) {
        let responseString = "";
        // responsestring generated from http.incomingMessage object snippets
        response.on('data', (dataPart) => {
            responseString += dataPart;
        })
        // when responsestring is finished: generate JSON object and send as response.
        response.on('end', () => {
            console.log(responseString);
            res.send(JSON.parse(responseString));
        })
    })
    
})

async function submitFormular(formularData) {
    
}