const express = require('express')
const db = require('./db')

const logger = require('morgan')
const bodyParser = require('body-parser')

const recipeController = require('./controllers/recipeController')
const reviewController = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true}))

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ msg: "I'm Starving!"})
})

app.get('/recipes', recipeController.getRecipes)
app.get('/recipes/:id', recipeController.getRecipe)
//app.get('/reviews', reviewController.getReviews)
//app.put('/recipes/:id', recipeController.updateRecipe)
// app.get('/reviews/:id', reviewController.getReview)
//app.post('/reviews', reviewController.createReview)
//app.delete('/recipes/:id', recipeController.deleteRecipe)

//app.get('/users', userController.getUsers)
//app.get('/users/:id', recipeController.getUser)
//app.put('/users/:id', userController.updateUser)
//app.delete('/users/:id', userController.deleteUser)


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))