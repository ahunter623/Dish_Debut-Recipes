const axios = require('axios')

const API_KEY = '2c13fe575e05457eb33bf47a6265d826'
const API_URL = 'https://api.spoonacular.com/recipes'

async function searchRecipeByName(req, res) {
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
        res.status(500).json({ error: 'Failed to find recipes' })
    }
}

async function searchRecipeByIngredient(req, res) {
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
        res.status(500).json({ error: 'Failed to find recipes' })
    }
}

module.exports = {
    searchRecipeByName,
    searchRecipeByIngredient,
}
