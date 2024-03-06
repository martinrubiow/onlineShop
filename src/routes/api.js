const router = require('express').Router();

const express= require('express');
const app= express();

router.use('/products', require('./api/products'));
router.use('/users', require('./api/users'));

module.exports=app;