const { default: axios } = require("axios");

let recipeSubmit = document.querySelector("#recipeSubmit");
let recipeText = document.querySelector("#recipe");
let recipeTitle = document.querySelector("#title");

recipeSubmit.addEventListener("click", () => {
    console.log("clicked!");
    axios.post('/api/recipes/add', {
        title: recipeTitle.value,
        recipe: recipeText.value
    })
    .then((response) => {
        console.log(response);
    })
    .catch( (error) => {
        console.log(error);
    })
})