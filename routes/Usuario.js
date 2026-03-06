const express = require("express");
const router = express.Router();

router.get("/show/:id", (req, res) => {
    const userId = req.params.id;

    const user = getUserById(userId); 

    res.render("usuario/show", { user: user });
});

module.exports = router;