const users = require('../models/users')
const express = require('express');
//this is not a primary pipeline, its a router pipeline like in index.js. Offshoot pipeline. Super similar.
const app=express.Router();
//controller knows about express. model does not (See users for its domain)


app
    .get('/', (req, res) => {
        const all = users.getAll();
        res.send(all)
    })
    .get('/test', (req, res) => {
        const testUser = users.get(1);
        res.send(testUser);
    })
    .get('/:id', (req, res) => {
        const user = users.get(req.params.id);
        res.send(user);
    })
    .get('/search', (req, res) => {

        const search = req.query.q;
        const result = users.search(search);
        res.send(result);

    })


module.exports = app;