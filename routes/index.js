const router = require('express').Router();
const path = require("path");
const apiRoutes = require('./api/');

router.get('/', (request, response) => {
    response.sendFile((path.join(__dirname, '/../public/index.html')));
});

router.get('/profile', (request, response) => {
    response.sendFile((path.join(__dirname, '/../public/profile.html')));
});

router.get('/classes', (request, response) => {
    response.sendFile((path.join(__dirname, '/../public/classes.html')));
});


router.use('/api', apiRoutes);

module.exports = router;