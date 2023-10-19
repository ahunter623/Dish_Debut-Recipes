const db = require('../db')
const mongoose = require('mongoose');
const Recipe = require('../models/recipes')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const mongoose = require('mongoose');
const Recipe = require('../models/recipes');

mongoose.connect('mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const recipesData = [
    {
        title: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale", "black pepper"],
        instructions: "Boil spaghetti. Cook guanciale. Mix eggs, pecorino cheese, and black pepper. Combine all ingredients and serve."
    },
    {
        title: "Chicken Alfredo",
        ingredients: ["chicken breasts", "fettuccine", "heavy cream", "butter", "parmesan cheese"],
        instructions: "Cook chicken. Cook fettuccine. Make a cream sauce with heavy cream, butter, and parmesan cheese. Combine and serve."
    },
    // ** Add more recipes **
];

async function seedRecipes() {
    try {
        await Recipe.deleteMany({});
        const createdRecipes = await Recipe.create(recipesData);
        console.log(`${createdRecipes.length} recipes seeded successfully.`);
    } catch (error) {
        console.error('Error seeding recipes:', error);
    } finally {
        mongoose.connection.close();
    }
}


    await Recipe.insertMany(recipes)
    console.log("The real magic happens in the kitchen!")

const run = async () => {
    await main()
    db.close()
}

run()