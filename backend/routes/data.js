const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.post('/add', async (req,res)=>{
    const {name, value} = req.body;
    const data = new Data({name,value});
    await data.save();
    res.send(data);
});
module.exports = router;