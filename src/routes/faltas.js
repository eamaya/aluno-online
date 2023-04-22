const express = require('express');
const router = express.Router();

router.get('', function (req, res, next) {
    res.render('faltas/falta')
});

module.exports = router;