document.addEventListener('DOMContentLoaded', () => {
    // Wait for the DOM to be fully loaded

    // Function to search recipes by name
    const searchRecipeByName = async () => {
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
                throw new Error('Failed to fetch recipes');
            }
        } catch (error) {
            console.error('Error searching for recipes by name:', error.message);
        }
    };

    // Function to search recipes by ingredient
    const searchRecipeByIngredient = async () => {
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
                throw new Error('Failed to fetch recipes');
            }
        } catch (error) {
            console.error('Error searching for recipes by ingredient:', error.message);
        }
    };

    // Attach click event listeners to the buttons
    const recipeNameButton = document.getElementById("recipeNameButton");
    recipeNameButton.addEventListener("click", searchRecipeByName);

    const ingredientButton = document.getElementById("ingredientButton");
    ingredientButton.addEventListener("click", searchRecipeByIngredient);
});
