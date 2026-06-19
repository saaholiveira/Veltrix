const monitoramentoService =
    require('./monitoramento.service');

class MonitoramentoController {

    async obterDados(req, res) {

        try {

            const dados =
                await monitoramentoService.obterDados();

            return res.json({
                sucesso: true,
                dados
            });

        } catch (error) {

            return res.status(500).json({
                sucesso: false,
                erro: error.message
            });
        }
    }
}

module.exports =
    new MonitoramentoController();