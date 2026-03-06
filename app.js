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
app.get('/Usuario', (req, res) => {
    res.render('Usuario/index');
});

// MOSTRAR
app.get('/Usuario/show/:id', (req, res) => {
    const userId = req.params.id;
    res.render('Usuario/show', { userId });
});

// EDITAR
app.get('/Usuario/edit/:id', (req, res) => {
    const userId = req.params.id;
    res.render('Usuario/edit', { userId });
});

// ADICIONAR
app.get('/Usuario/add', (req, res) => {
    res.render('Usuario/add');
});


//Rota para a pagina Histórico
app.get('/views/Histórico', (req, res) => {
    res.render('Histórico');
});

//Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});