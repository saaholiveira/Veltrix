export function limparResposta(res) {
    return res.replace(/[^A-F0-9 ]/gi, '').trim();
}