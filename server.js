const express = require('express');
const db = require('./db');
const recipeController = require('./controllers/recipeController');
const reviewController = require('./controllers/reviewController');

const PORT = process.env.PORT || 3001;
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = require('morgan');
const bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ msg: "Who's Hungry?" });
});

app.get('/recipes', recipeController.getRecipes);
app.get('/recipes/:id', recipeController.getRecipe);
app.post('/recipes', recipeController.createRecipe);

app.put('/recipes/:id', recipeController.updateRecipe);
app.delete('/recipes/:id', recipeController.deleteRecipe);



app.get('/reviews', reviewController.getReviews);
app.post('/reviews', reviewController.createReview);

//app.put('/reviews/:id', reviewController.updateReview);
//app.delete('/reviews/:id', reviewController.deleteReview);


app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
