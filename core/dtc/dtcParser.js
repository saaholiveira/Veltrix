function hexToDTC(hex) {

    const first = parseInt(hex[0], 16);

    const typeMap = ['P', 'C', 'B', 'U'];

    const firstLetter = typeMap[first >> 2];

    const secondDigit = (first & 0x3).toString();

    return `${firstLetter}${secondDigit}${hex.slice(1)}`;
}

function parseDTC(response) {

    const cleaned = response
        .replace(/[\r\n >]/g, '')
        .replace(/^43/, '');

    const dtcs = [];

    for (let i = 0; i < cleaned.length; i += 4) {

        const code = cleaned.slice(i, i + 4);

        if (code.length < 4) continue;

        if (code === '0000') continue;

        dtcs.push(hexToDTC(code));
    }

    return dtcs;
}

module.exports = {
    parseDTC
};