const API_KEY = '2c13fe575e05457eb33bf47a6265d826'
const API_URL = 'https://api.spoonacular.com/recipes'

async function searchRecipeByName() {
    const recipeName = document.getElementById("recipeNameInput").value;
    const recipeNameResults = document.getElementById("recipeNameResults");
    recipeNameResults.innerHTML = "";

    try {
        const response = await axios.get(`/searchRecipeByName?name=${recipeName}`);
        if (response.status === 200) {
            const recipes = response.data;
            recipes.forEach(recipe => {
                const li = document.createElement("li");
                li.textContent = recipe.title;
                recipeNameResults.appendChild(li);
            });
        } else {
            throw new Error('Failed to find recipes');
        }
    } catch (error) {
        console.error('Error searching for recipes by name:', error.message);
    }
}

async function searchRecipeByIngredient() {
    const ingredient = document.getElementById("ingredientInput").value;
    const ingredientResults = document.getElementById("ingredientResults");
    ingredientResults.innerHTML = "";

    try {
        const response = await axios.get(`/searchRecipeByIngredient?ingredient=${ingredient}`);
        if (response.status === 200) {
            const recipes = response.data;
            recipes.forEach(recipe => {
                const li = document.createElement("li");
                li.textContent = recipe.title;
                ingredientResults.appendChild(li);
            });
        } else {
            throw new Error('Failed to find recipes');
        }
    } catch (error) {
        console.error('Error searching for recipes by ingredient:', error.message);
    }
}
