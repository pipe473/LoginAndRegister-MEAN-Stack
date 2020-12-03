const { Router } = require('express');
const router = Router();

const User = require('../models/User');

router.get('/', (req, res) => res.send('Testing...'))

router.post('/signup', (req, res) => {
    res.send('Register');
})

module.exports = router;
