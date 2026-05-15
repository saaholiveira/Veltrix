// core/parser/pidParser.js

function limparResposta(resposta) {

    return resposta
        .replace(/[^A-F0-9 ]/gi, '')
        .trim();
}

function separarBytes(resposta) {

    resposta = limparResposta(resposta);

    return resposta.split(' ');
}

module.exports = {
    limparResposta,
    separarBytes
};