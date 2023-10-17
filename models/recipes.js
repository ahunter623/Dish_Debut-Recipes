const { Schema } = require('mongoose')

const recipeSchema = new Schema (
    {
        name: { type: String, required: true }, // 
        ingredients: { type: String, required: true},
        instructions: { type: String, required: true},
        image: { type: String, required: true}, // Image
        review: { type: Schema.Types.ObjectId, ref: 'Review'} // user input
    }
)

module.exports = recipeSchema