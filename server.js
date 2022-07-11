const express = require('express');
const path = require('path');

const app = express();
const PORT = proccess.env.PORT || 3001;

// routes
const apiRoutes = require('./routes')
const htmlRoutes = require('./routes')

app.use(express.static('public'));

