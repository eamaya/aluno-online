const express = require('express');
const router = express.Router();
const Falta = require('../models/falta');
const faltasDB = require('../data/faltas.json');

router.get('', function (req, res, next) {
    const faltas = [];
    faltasDB.data.forEach(function(item, index) {
        const falta = new Falta(item.disciplina, item.a1, item.a2, item.a3);
        faltas.push(faltas);
    });
    res.render('faltas/lista', { faltas: faltas });
});

module.exports = router;