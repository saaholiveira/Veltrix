const Connection = require('../../core/obd/connection');
const { OBDService } = require('../../core/obd/obdService');
const DTCService = require('../../core/dtc/dtcService');

class MonitoramentoService {

    constructor() {

        const connection = new Connection();

        this.obdService =
            new OBDService(connection);

        this.dtcService =
            new DTCService(connection);
    }

    async obterDados() {

     const rpm =
    await this.obdService.getPID('010C');

const temperatura =
    await this.obdService.getPID('0105');

const combustivel =
    await this.obdService.getPID('012F');

const bateria =
    await this.obdService.getPID('0142');

        const dtcs =
            await this.dtcService.getDTC();

        return {
            rpm,
            temperatura,
            combustivel,
            bateria,
            dtcs
        };
    }
}

module.exports =
    new MonitoramentoService();