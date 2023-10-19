const { Recipe } = require('../models')

module.exports = {
    getRecipes,
    getRecipe
}

async function getRecipe(req, res) {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getRecipe(req, res) {
    try {
        const id = req.params.id
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe)
        }
        return res.status(404).send(`${Recipe} isn't a real recipe.`)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
