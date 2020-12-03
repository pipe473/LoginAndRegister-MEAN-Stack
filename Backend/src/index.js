const express = require('express');
const app = express();

require('./db');


app.listen(3000);
console.log('Server on Port', 3000);

