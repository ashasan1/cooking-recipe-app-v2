const router = require('express').Router();
const path = require("path");
let apiKey = "51fc497b03704f1abcaf3f960ebc1148";
let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

router.get('/', (request, response) => {
    response.sendFile((path.join(__dirname, '/../public/index.html')));
});

router.get('/', async (request, response) => {
    try {
        const recipeData = await fetch(url);
        let rec = response.status(200).json(recipeData);
        console.log(recipeData);
    }
    catch (error) {
        console.log(error)
    }
});

module.exports = router;