const parseDTC = require('../parser/dtcParser');

class DTCService {

    constructor(connection) {
        this.connection = connection;
    }

    async getDTC() {

        await this.connection.write("03");

        const response = await this.connection.read();

        return parseDTC(response);
    }
}

module.exports = DTCService;