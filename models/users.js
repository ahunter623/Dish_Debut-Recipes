const { Schema } = require('mongoose')

const usersSchema = new Schema (
    {
        user: { type: String, required: true },
        image: { type: String, required: true}, // Image
        
    }
)

module.exports = usersSchema