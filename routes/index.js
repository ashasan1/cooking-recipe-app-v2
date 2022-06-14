const router = require('express').Router();
const path = require("path");
const htmlRoutes = require('./htmlRoutes');

router.get('/', (request, response) => {
    response.sendFile((path.join(__dirname, '/../public/index.html')));
});

module.exports = router;