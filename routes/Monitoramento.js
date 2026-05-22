const express = require('express');

const router = express.Router();

const controller =
require('../modules/monitoramento/monitoramento.controller');

router.get('/dtc', controller.getDTC);

router.delete('/dtc', controller.clearDTC);

module.exports = router;