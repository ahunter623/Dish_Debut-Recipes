const { Recipe } = require('../models');


async function getRecipes(req, res) {
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

const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save()
        return res.status(201).json({
            recipe,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params;
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipe) {
            return res.status(200).json(recipe)
        }
        throw new Error("Recipe not updated")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted");
        }
        throw new Error("Recipe not deleted");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    //getAllRecipes,
    //getUserById,
    updateRecipe,
    deleteRecipe
}