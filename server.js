require('dotenv').config();  // read .env file using dontenv module
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));

// Allow front-end access to node_module folder
app.use('/scripts', express.static('${__dirname}/node_modules/'));

// Listen for http requests on port 3000
app.listen(port, () => {
    console.log('Listening on %d', port);
});