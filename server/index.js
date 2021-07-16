const express = require('express');
const routesHandler = require('./routes/handler.js');

const app = express();
app.use('/', routesHandler)

const PORT = 4000; // backend port 
app.listen(PORT, () => {
    console.log(`Server is runnong on port ${PORT}.`);
});
