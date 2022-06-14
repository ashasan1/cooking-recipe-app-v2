const router = require('express').Router();

router.get('/', (request, response) => {
    response.sendFile('../public/index.html');
})
