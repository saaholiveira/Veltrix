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

module.exports = {
    calcularRPM,
    calcularTemperatura
};