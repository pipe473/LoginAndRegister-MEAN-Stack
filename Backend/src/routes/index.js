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
    if(!user) return res.status(401).send("El email introducido no existe!");
    if(user.password !== password) return res.status(401).send('Contraseña fallida!');

    const token = jwt.sign({_id: user._id}, 'secretKey');
    return res.status(200).json({token});
});

router.get('/tasks', (req, res) =>{
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'Lorem ipsum',
            date: "2020-12-03T13:41:23.839Z"
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'Lorem ipsum',
            date: "2020-12-03T13:41:23.839Z"
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'Lorem ipsum',
            date: "2020-12-03T13:41:23.839Z"
        }        
    ])
})

module.exports = router;
