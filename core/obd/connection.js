class Connection {

    async connect() {

        console.log("Bluetooth conectado");
    }

    async write(command) {

        console.log("Comando enviado:", command);
    }

    async read() {

        // resposta fake para testes

        return "41 0C 1A F8";
    }
}

module.exports = Connection;