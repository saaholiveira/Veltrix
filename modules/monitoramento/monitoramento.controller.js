const Connection =
require('../../core/obd/connection');

const { DTCService } =
require('../../core/dtc');

const connection = new Connection();

const dtcService =
new DTCService(connection);

exports.getDTC = async (req, res) => {

    try {

        const result =
        await dtcService.getDTC();

        res.json(result);

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });
    }
};

exports.clearDTC = async (req, res) => {

    try {

        const result =
        await dtcService.clearDTC();

        res.json(result);

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });
    }
};