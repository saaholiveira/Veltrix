function calcularRPM(resposta) {

    const bytes = resposta.split(' ');

    const A = parseInt(bytes[2], 16);
    const B = parseInt(bytes[3], 16);

    return ((A * 256) + B) / 4;
}

function calcularTemperatura(resposta) {

    const bytes = resposta.split(' ');

    const A = parseInt(bytes[2], 16);

    return A - 40;
}

function calcularCombustivel(resposta) {

    const bytes = resposta.split(' ');

    const A = parseInt(bytes[2], 16);

    return (A * 100) / 255;
}

function calcularVelocidade(resposta) {

    const bytes = resposta.split(' ');

    return parseInt(bytes[2], 16);
}

function calcularBateria(resposta) {

    const bytes = resposta.split(' ');

    const A = parseInt(bytes[2], 16);
    const B = parseInt(bytes[3], 16);

    return ((A * 256) + B) / 1000;
}

module.exports = {
    calcularRPM,
    calcularTemperatura,
    calcularCombustivel,
    calcularVelocidade,
    calcularBateria
};