function limparResposta(resposta) {
    return resposta
        .replace(/\r/g, '')
        .replace(/\n/g, '')
        .replace(/>/g, '')
        .trim();
}

function calcularCombustivel(resposta) {

    resposta = limparResposta(resposta);

    const bytes = resposta.split(' ');

    const A = parseInt(bytes[2], 16);

    return (A * 100) / 255;
}

function calcularBateria(resposta) {

    resposta = limparResposta(resposta);

    const bytes = resposta.split(' ');

    const A = parseInt(bytes[2], 16);
    const B = parseInt(bytes[3], 16);

    return ((A * 256) + B) / 1000;
}

function calcularVelocidade(resposta) {

    resposta = limparResposta(resposta);

    const bytes = resposta.split(' ');

    return parseInt(bytes[2], 16);
}

module.exports = {
    calcularCombustivel,
    calcularBateria,
    calcularVelocidade
};