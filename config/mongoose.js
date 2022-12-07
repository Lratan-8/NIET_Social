const mongoose = require('mongoose');
//because we are in the development environment, therefore we will use development in our name.
//There are many environment in our organisation, development, testing, production
mongoose.connect('mongodb://localhost/niet_social_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connectin to mongoDB"));
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;