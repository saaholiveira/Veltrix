const express = require('express');

const router = express.Router();

const monitoramentoController =
    require('../modules/monitoramento/monitoramento.controller');

router.get(
    '/',
    monitoramentoController.obterDados
);

module.exports = router;