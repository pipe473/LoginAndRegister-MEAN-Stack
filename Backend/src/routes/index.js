const { Router } = require('express');
const router = Router();

const User = require('../models/User');

router.get('/', (req, res) => res.send('Testing...'))

router.post('/signup', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);      
    res.send('Testing SignUp');
})

module.exports = router;
