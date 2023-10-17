const { Schema } = require('mongoose')

const reviewsSchema = new Schema (
    {
        recipeName: { type: Schema.Types.ObjectId, ref:'Recipe' }, // drop-down menu 
        comment: { type: String, required: true} // input field
    }
)

module.exports = reviewsSchema