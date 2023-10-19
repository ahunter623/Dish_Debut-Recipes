const express = require('express')
const db = require('./db')
const axios = require('axios')

const logger = require('morgan')
const bodyParser = require('body-parser')

//const recipeController = require('./controllers/recipeController')
//const reviewController = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001
const app = express()

const cors = require('cors')

const API_KEY = '2c13fe575e05457eb33bf47a6265d826';
const API_URL = 'https://api.spoonacular.com/recipes'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true}))
app.use(express.static('public'))

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ msg: "I'm Starving!"})
})

//app.get('/recipes', recipeController.getRecipes)
//app.get('/recipes/:id', recipeController.getRecipe)
//app.get('/reviews', reviewController.getReviews)
//app.put('/recipes/:id', recipeController.updateRecipe)
// app.get('/reviews/:id', reviewController.getReview)
//app.post('/reviews', reviewController.createReview)
//app.delete('/recipes/:id', recipeController.deleteRecipe)

//app.get('/users', userController.getUsers)
//app.get('/users/:id', recipeController.getUser)
//app.put('/users/:id', userController.updateUser)
//app.delete('/users/:id', userController.deleteUser)


app.get('/searchRecipeByName', async (req, res) => {
    const recipeName = req.query.name;
    try {
        const response = await axios.get(`${API_URL}/complexSearch`, {
            params: {
                apiKey: API_KEY,
                query: recipeName,
            }
        });

        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

app.get('/searchRecipeByIngredient', async (req, res) => {
    const ingredient = req.query.ingredient;
    try {
        const response = await axios.get(`${API_URL}/findByIngredients`, {
            params: {
                apiKey: API_KEY,
                ingredients: ingredient,
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});