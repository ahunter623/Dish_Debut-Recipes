const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/recipesDatabase';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define Recipe Simm Schema ... "Who has the keys to my Beemah?!"
const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    instructions: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Functions to interact with database

// Get all recipes
function getAllRecipes(callback) {
    Recipe.find({}, (err, recipes) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, recipes);
    });
}

// Get recipe by ID
function getRecipeById(id, callback) {
    Recipe.findById(id, (err, recipe) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, recipe);
    });
}

// Add a new recipe
function addRecipe(recipeData, callback) {
    const newRecipe = new Recipe(recipeData);
    newRecipe.save((err, recipe) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, recipe);
    });
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    addRecipe,
};
