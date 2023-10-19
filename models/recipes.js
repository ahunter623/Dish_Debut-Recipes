const { Schema } = require('mongoose')

const recipesSchema = new Schema (
    {
        name: { type: String, required: true },
        description: { type: String, required: true},
        image: { type: String, required: true}, // Image
        review: { type: Schema.Types.ObjectId, ref: 'Review'} // user input
    }
)

module.exports = recipesSchema