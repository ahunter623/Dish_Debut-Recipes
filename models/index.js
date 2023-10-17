const mongoose = require('mongoose')

const recipesSchema = require('./recipes')
const reviewsSchema = require('./reviews')
const usersSchema = require('./users')

const Recipe = mongoose.model('recipe', recipesSchema)
const Review = mongoose.model('review', reviewsSchema)
const User = mongoose.model('user', usersSchema)

module.exports = {
    Recipe,
    Review,
    User
}