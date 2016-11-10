'use strict';

const   express = require('express'),
        app = express(),
        PORT = process.env.PORT || 8080;
        
        app.use(express.static('app/public'));
        require('./app/routes.js')(app);
        
app.listen(PORT, ()=> console.log(`App is listening on Port ${PORT}`));

