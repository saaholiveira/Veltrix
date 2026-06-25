const db = require('../database/connection');

class HistoricoService {

    async salvarLeitura(dados) {

        const [result] = await db.execute(
            `
            INSERT INTO historico_obd
            (rpm, temperatura, combustivel, bateria)
            VALUES (?, ?, ?, ?)
            `,
            [
                dados.rpm,
                dados.temperatura,
                dados.combustivel,
                dados.bateria
            ]
        );

        return result.insertId;
    }

    async listarHistorico() {

        const [rows] = await db.execute(
            'SELECT * FROM historico_obd ORDER BY data_leitura DESC'
        );

        return rows;
    }
}

module.exports = new HistoricoService();