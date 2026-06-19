const Connection = require('../../core/obd/connection');
const DTCService = require('../../core/dtc/dtcService');

const connection = new Connection();

const dtcService = new DTCService(connection);
class DTCController {

    async listar(req, res) {

        try {

            const dtcs = await dtcService.getDTC();

            return res.json({
                sucesso: true,
                dtcs
            });

        } catch (error) {

            return res.status(500).json({
                sucesso: false,
                erro: error.message
            });
        }
    }

    async limpar(req, res) {

        try {

            const resultado =
                await dtcService.clearDTC();

            return res.json(resultado);

        } catch (error) {

            return res.status(500).json({
                sucesso: false,
                erro: error.message
            });
        }
    }
}

module.exports = new DTCController();