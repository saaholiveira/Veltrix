const { OBDService } = require('./core/obd/obdService');

const BluetoothConnection = require('./core/obd/connection');

const connection = new BluetoothConnection();

const obdService = new OBDService(connection);

async function iniciar() {

    try {

        await connection.connect();

        console.log("Conectado ao OBD2");

        const rpm = await obdService.getPID("010C");

        console.log("RPM:", rpm);

        const temp = await obdService.getPID("0105");

        console.log("Temperatura:", temp);

    } catch (err) {

        console.log("Erro:", err.message);
    }
}

iniciar();