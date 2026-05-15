// core/pids/index.js

const engine = require('./engine');
const vehicle = require('./vehicle');

const PIDS = {

    // Engine
    "010C": engine.calcularRPM,
    "0105": engine.calcularTemperatura,

    // Vehicle
    "010D": vehicle.calcularVelocidade,
    "012F": vehicle.calcularCombustivel,
    "0142": vehicle.calcularBateria
};

function interpretarPID(pid, resposta) {

    const func = PIDS[pid];

    if (!func) {
        throw new Error("PID não suportado");
    }

    return func(resposta);
}

module.exports = {
    interpretarPID
};