import { enviarPID } from './commands';
import { limparResposta } from '../parser/pidParser';
import { interpretarPID } from '../pids';
import { parseDTC } from '../dtc'; // importante

function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

export class OBDService {
    constructor(connection) {
        this.connection = connection;
    }

    // 🔹 PIDs normais
    async getPID(pid) {
        await enviarPID(this.connection, pid);

        await delay(300);

        let res = await this.connection.read();

        res = limparResposta(res);

        if (!res.includes("41")) {
            throw new Error("PID não suportado");
        }

        return interpretarPID(pid, res);
    }

    // 🔹 DTCs (CÓDIGOS DE ERRO)
    async getDTC() {
        await this.connection.write("03\r");

        await delay(300);

        let res = await this.connection.read();

        res = limparResposta(res);

        return parseDTC(res);
    }
}