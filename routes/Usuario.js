const express = require("express");
const router = express.Router();

// Rota para exibir detalhes de um usuário específico
router.get("/show/:id", (req, res) => {
  const userId = req.params.id;
  // Aqui você pode buscar os detalhes do usuário no banco de dados usando o userId
  // Por exemplo, suponha que você tenha uma função getUserById para isso:
  const user = getUserById(userId); // Substitua por sua lógica de acesso ao banco de dados
  res.render("Usuario/show", { user: user });
});

module.exports = router;
