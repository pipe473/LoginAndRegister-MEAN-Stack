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

router.post('/signin', async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email})
    if(!user) return res.status(401).send("El email introducido no existe!");
    if(user.password !== password) return res.status(401).send('Contraseña fallida!');

    const token = jwt.sign({_id: user._id}, 'secretKey');
    return res.status(200).json({token});
});

router.get('/tasks', (req, res) => {
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
});

router.get('/private-tasks', verifyToken, (req, res) => {
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
});

router.get('/profile', verifyToken, (req, res) => {
    res.send(req.userId);
})

module.exports = router;

function verifyToken(req, res, next) {
    // console.log(req.headers.authorization);  
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request!');        
    }  
    
    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized Request');
    }

    const payload = jwt.verify(token, 'secretKey')
    req.userId = payload._id;
    next();
}
