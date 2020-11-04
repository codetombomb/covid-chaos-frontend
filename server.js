// Utilizing 'dotenv' and 'express' node_modules for server

require('dotenv').config();  // read .env files 
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Set the public folder as the root
app.use(express.static('public'));

// Allow front-end access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules`));

// Listen for HTTP request on port 3000
app.listen(port, () => {
    console.log('listening on %d', port)
});