const express = require('express');
const router = express.Router();
const Boleto = require('../models/boleto');
const boletosDB = require('../data/boletos.json');

router.get('/', function (req, res, next) {
    const boletos = [];
    boletosDB.data.forEach(item => {
        const nota = new Boleto(item.valor,item.vencimento);
        boletos.push(nota);
    });
    res.render('boletos/index',{boletos:boletos});
});

module.exports = router;