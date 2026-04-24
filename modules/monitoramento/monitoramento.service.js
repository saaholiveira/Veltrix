import { OBDService } from '../../core/obd/obdService';

class MonitoramentoService {
    constructor(connection) {
        this.obd = new OBDService(connection);
    }

    async getDados() {
        return {
            rpm: await this.obd.getPID("010C"),
            temperatura: await this.obd.getPID("0105"),
            combustivel: await this.obd.getPID("012F")
        };
    }
}

export default MonitoramentoService;