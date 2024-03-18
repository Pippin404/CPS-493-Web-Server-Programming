const express = require('express');
//this is not a primary pipeline, its a router pipeline like in index.js. Offshoot pipeline. Super similar.
const app=express.Router();



app
    .get('/', (req, res) => {
        res.send(
            {name: "John", age: 100},
            {name: "Jane", age: 100}
        );
    })
    .get('/test', (req, res) => {
        res.send(
            {name: "test user" , age: 30}
        );
    })


const village = "New Paltz";

function hello(){
    return `Hello from ${village}`;
}

module.exports = {
    hello,village
}