console.log("Arquivo iniciou");
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let usuario = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
];

let meucarro = [
    {id: 1, modelo: "Mazda-MX7", ano: "1997", cod_obd2: "elm20183eth"},
    {id: 2, modelo: "Jetta GLI", ano: "2018", cod_obd2: "elm3916vat"},
];


//Rota principal
app.get('/', (req, res) => {
  const user = usuario[1];
  const meucarroAtual = meucarro[0];

  res.render('index', { user, meucarroAtual });
});

//Importando as rotas

//Rota para a pagina MeuCarro
app.get('/meucarro', (req, res) => {
    const user = meucarro[0]; 
    res.render('meucarro/index', { user });
});

// Rota GET - mostrar formulário e lista
app.get('/meucarro/add', (req, res) => {
    res.render('meucarro/add', { carros: meucarro }); // envia todos os carros
});

// Rota POST - adicionar carro
app.post('/meucarro/add', (req, res) => {
    const novoCarro = {
        id: meucarro.length + 1,
        modelo: req.body.modelo,
        ano: req.body.ano,
        cod_obd2: req.body.cod_obd2
    };

    meucarro.push(novoCarro);

    res.redirect('/meucarro/add'); // recarrega a mesma página mostrando a lista atualizada
});

//Rota para a pagina Monitoramento
app.get('/monitoramento', (req, res) => {
    res.render('monitoramento');
});

//Rota para a pagina Usuário
// LISTAR
app.get('/usuario', (req, res) => {
    res.render('usuario/index', { usuarios: usuario });
});

// MOSTRAR
app.get('/usuario/show/:id', (req, res) => {

    const user = {
         id: usuario.length + 1,
        modelo: req.body.nome,
        ano: req.body.email
    };

    meucarro.push(user);

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
// Mostrar formulário de adicionar usuário
app.get('/usuario/add', (req, res) => {
    res.render('usuario/add', { usuarios: usuario }); // envia o array
});

// Receber dados do formulário
app.post('/usuario/add', (req, res) => {
    const novoUsuario = {
        id: usuario.length + 1,
        nome: req.body.nome,
        email: req.body.email
    };
    usuario.push(novoUsuario);
    res.redirect('/usuario/add'); // volta pra mesma página com lista atualizada
});

//Rota para a pagina Histórico
app.get('/historico', (req, res) => {
    const user = { data: '2026-03-27' }; // exemplo
    res.render('historico', { user });
});

// ROTA MEUCARRO


//Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
