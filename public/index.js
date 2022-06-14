let recipeContainer = document.getElementById('recipeContainer');
let apiKey = "51fc497b03704f1abcaf3f960ebc1148";
let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

let addRecipeBtn = document.querySelector('#newrecipe');
let newRecipeInput = document.querySelector('#newrecipeinput');

const fetchAllRecipes = async () => {
    try {
    const response = await fetch(url);
    const recipesJson = await response.json();
    console.log(recipesJson.results[0]);

    for (i=0; i < 20; i++) {
        let recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipesJson.results[i].title;
        let recipeImage = document.createElement('img');
        recipeImage.src = recipesJson.results[i].image;

        recipeContainer.appendChild(recipeTitle);
        recipeContainer.appendChild(recipeImage);

    };
    }
    catch (err) {
        console.error(err);
    }
};

fetchAllRecipes();

addRecipeBtn.addEventListener("click", () => {
    console.log("new recipe added!");
})