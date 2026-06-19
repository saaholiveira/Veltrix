const express = require('express');

const router = express.Router();

const dtcController =
    require('../modules/dtc/dtc.controller');

router.get('/', dtcController.listar);

router.delete('/', dtcController.limpar);

module.exports = router;