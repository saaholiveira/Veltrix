// core/pids/index.js

const engine = require('./engine');
const vehicle = require('./vehicle');

const PIDS = {
    "010C": engine.calcularRPM,
    "0105": engine.calcularTemperatura,
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