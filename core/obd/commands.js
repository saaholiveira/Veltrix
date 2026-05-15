async function enviarPID(connection, pid) {

    await connection.write(pid + "\r");
}

module.exports = {
    enviarPID
};