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
// app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

const apiKey = process.env.API_KEY;
let requestBody = {
    key: apiKey,  
    of: "json",
    lang: "auto",
}

app.use(express.static('../../dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile("index.html", {root: "../../dist"})
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', function (req, res) {
    const inputData = req.body.inputText;
    requestBody["txt"] = inputData;
    // const options = {
    //     host: 'https://api.meaningcloud.com',
    //     path: '/sentiment-2.1',
    //     method: 'POST',
    //     body: JSON.stringify(requestBody)
    // };
    console.log(req.body.inputText);
    console.log(requestBody);
    const formularData = new FormData();
    formularData.append('key', apiKey);
    // formularData.append('of', 'json');
    formularData.append('lang', 'en');
    formularData.append('txt', inputData)
    console.log(formularData)
    // request.open('POST', 'https://api.meaningcloud.com/sentiment-2.1');
    // request.send(formularData);
    // request.post({uri: 'https://api.meaningcloud.com/sentiment-2.1', formData: formularData}, function(error, response, body){
    //                 console.log(body); 
    //             }); 
    formularData.submit('https://api.meaningcloud.com/sentiment-2.1',function(err, res) {
        console.log(res);
    });
    // fetch('https://api.meaningcloud.com/sentiment-2.1', {
    //     credentials: 'same-origin',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(requestBody),
    // })
    // .then(res => res.json())
    // .then(function(res) {
    //     console.log = res.body
    // })
    res.send(mockAPIResponse)
})
