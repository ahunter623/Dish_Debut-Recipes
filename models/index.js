const mongoose = require('mongoose')

const recipesSchema = require('./recipes')
const reviewsSchema = require('./reviews')

const Recipe = mongoose.model('Recipe', recipesSchema)
const Review = mongoose.model('Review', reviewsSchema)

module.exports = {
    Recipe,
    Review
}
