const router = require('express').Router();
const path = require("path");
const axios = require("axios");
const req = require('express/lib/request');
const res = require('express/lib/response');

const { Recipe } = require('../../models');

router.get('/', async (request, response) => {
    try {
        const recipeData = Recipe.findAll();
        console.log(recipeData);
    }
    catch (error) {
        console.log(error);
    }
});

router.post('/', async (request, response) => {
    const recipe = {
        title: request.body.title,
        recipe: request.body.recipe
    }
    response.status(201).json(recipe);
});

module.exports = router;