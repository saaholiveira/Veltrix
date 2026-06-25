const historicoService = require('../services/historicoService');

class HistoricoController {

    async listar(req, res) {

        try {

            const dados = await historicoService.listarHistorico();

            res.json(dados);

        } catch (error) {

            res.status(500).json({
                erro: error.message
            });

        }
    }
}

module.exports = new HistoricoController();