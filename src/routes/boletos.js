const express = require('express');
const router = express.Router();

router.get('', function (req, res, next) {
    res.render('boletos/boletos')
});

module.exports = router;