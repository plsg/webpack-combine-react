const path = require('path');
const router = require('express').Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.get('*', (req, res) => {
    const route = path.join(__dirname, '..', '..', 'dist', 'index.html');
    res.sendFile(route);
});


module.exports = router;