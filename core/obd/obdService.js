const { enviarPID } = require('./commands');

const { limparResposta } = require('../parser/pidParser');

const { interpretarPID } = require('../pids');

const { parseDTC } = require('../dtc');

function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

class OBDService {

    constructor(connection) {
        this.connection = connection;
    }

    // PIDs
    async getPID(pid) {

        await enviarPID(this.connection, pid);

        await delay(300);

        let res = await this.connection.read();

        res = limparResposta(res);

        if (res.includes("NO DATA")) {
            throw new Error("Sem resposta do veículo");
        }

        if (!res.startsWith("41")) {
            throw new Error("PID não suportado");
        }

        return interpretarPID(pid, res);
    }

    // DTCs
    async getDTC() {

        await this.connection.write("03\r");

        await delay(300);

        let res = await this.connection.read();

        res = limparResposta(res);

        return parseDTC(res);
    }
}

module.exports = {
    OBDService
};