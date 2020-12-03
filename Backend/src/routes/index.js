const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Testing...'))

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();   
   
    const token = jwt.sign({ _id: newUser._id }, 'secretKey' )
    res.status(200).json({token})
});

router.post('/signin', async (req, res) =>{

    const { email, password } = req.body;
    const user = await User.findOne({email})
    if(!user) return res.status(401).send("El email introducido no existe...")
});

module.exports = router;
