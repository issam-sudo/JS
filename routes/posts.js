const express = require('express');
const router =express.Router();
const Post = require('../models/Post');
router.get('/', (req, res) => {
    res.send('posts router create');
});


router.post('/', (req, res) => {
console.log(req.body);
});


router.get('/spec', (req, res) => {
    res.send('spec router create');
});

module.exports =router;