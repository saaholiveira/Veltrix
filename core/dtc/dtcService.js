const { parseDTC } = require('./dtcParser');

const dtcCodes = require('./dtcCodes');

class DTCService {

    constructor(connection) {
        this.connection = connection;
    }

    async getDTC() {

        await this.connection.write("03");

        const response = await this.connection.read();

        const codes = parseDTC(response);

        return codes.map(code => ({
            codigo: code,

            descricao:
                dtcCodes[code]?.descricao ||
                "Código desconhecido",

            severidade:
                dtcCodes[code]?.severidade ||
                "desconhecida"
        }));
    }

    async clearDTC() {

        await this.connection.write("04");

        return {
            sucesso: true
        };
    }
}

module.exports = DTCService;