const mongoose = require('mongoose')

// Import all Model files
const Recipe = require('./recipes');
const User = require('./users'); // ** Working on User Model **

// Establish a connection to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/recipesDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export the models
module.exports = {
    Recipe,
    User, // ** Working on User Model **
};