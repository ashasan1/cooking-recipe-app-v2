let apiKey = "51fc497b03704f1abcaf3f960ebc1148";

let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

const fetchRecipes = async () => {
    try {
          const response = await fetch(url);
    const recipesJson = await response.json();
    console.log(recipesJson);
    }
    catch {
        console.log(error);
    }
}
