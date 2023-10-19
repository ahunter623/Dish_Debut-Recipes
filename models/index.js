const mongoose = require('mongoose')

const recipesSchema = require('./recipes')
const reviewsSchema = require('./reviews')

const Recipe = mongoose.model('recipe', recipesSchema)
const Review = mongoose.model('review', reviewsSchema)

module.exports = {
    Recipe,
    Review
}