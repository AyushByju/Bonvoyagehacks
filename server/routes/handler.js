const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Rohel Pereira",
        "msg": "Rohel is so sexy",
        "username": "Charqe"
    }];
    res.end(JSON.strigify(str));
});    

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

