const express = require('express');
const router = express.Router();
const Falta = require('../models/falta');
const faltasDB = require('../data/faltas.json');

router.get('/', function (req, res, next) {
    const faltas = [];
    faltasDB.data.forEach(item => {
        const nota = new Falta(item.disciplina,item.faltas);
        faltas.push(nota);
    });
    res.render('faltas/index',{faltas:faltas});
});

module.exports = router;