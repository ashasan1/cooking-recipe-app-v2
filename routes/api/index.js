const router = require('express').Router();
const path = require("path");
const recipeRoutes = require('./recipe-routes.js')

router.use('/recipes', recipeRoutes);


module.exports = router;