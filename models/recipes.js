const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const recipeSchema = new Schema (
    {
        name: { type: String, required: true },
        description: { type: String, required: true},
        image: { type: String, required: true}, // Image
        review: { type: Schema.Types.ObjectId, ref: 'Review'} // user input
    },
    { timestamps: true },
)


module.exports = recipeSchema;