console.log("Arquivo iniciou");
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

//configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let usuarios = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
];

//Rota principal
app.get('/', (req, res) => {
    res.render('index');
});

//Importando as rotas

//Rota para a pagina MeuCarro
app.get('/views/MeuCarro', (req, res) => {
    res.render('MeuCarro');
});

//Rota para a pagina Monitoramento
app.get('/views/Monitoramento', (req, res) => {
    res.render('Monitoramento');
});

//Rota para a pagina Usuário
// LISTAR
app.get('/usuario', (req, res) => {
    res.render('usuario/index');
});

// MOSTRAR
app.get('/usuario/show/:id', (req, res) => {

    const user = {
        id: req.params.id,
        nome: "João da Silva",
        email: "joao@email.com",
        data_nascimento: new Date(1990, 5, 10)
    };

    res.render('usuario/show', { user });

});

// EDITAR
app.get('/usuario/edit/:id', (req, res) => {
    
    const user = {
        id: req.params.id,
        nome: "João da Silva",
        email: "joao@email.com",
        data_nascimento: new Date(1990, 5, 10)
    };

    res.render('usuario/edit', { user });
});

app.post('/usuario/edit/:id', (req, res) => {
    
    const user = usuarios.find(u => u.id == req.params.id);
    if (user) {
        user.nome = req.body.nome;
        user.email = req.body.email;
    }

    res.redirect('/usuario')
});
// ADICIONAR
app.get('/usuario/add', (req, res) => {
    res.render('usuario/add');
});


//Rota para a pagina Histórico
app.get('/views/Histórico', (req, res) => {
    res.render('Histórico');
});

//Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});