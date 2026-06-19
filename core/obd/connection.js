class Connection {

    constructor() {
        this.lastCommand = "";
    }

    async connect() {
        console.log("Bluetooth conectado");
    }

    async write(command) {
        this.lastCommand = command.trim();
        console.log("Comando enviado:", command);
    }

    async read() {

        if (this.lastCommand === "010C")
            return "41 0C 1A F8";

        if (this.lastCommand === "0105")
            return "41 05 5A";

        if (this.lastCommand === "012F")
            return "41 2F 80";

        if (this.lastCommand === "0142")
            return "41 42 36 B0";

        if (this.lastCommand === "03")
            return "43 03 01 01 71";

        return "NO DATA";
    }
}

module.exports = Connection;