const express = require("express");
const router = express.Router();

router.get("/meucarro/show/:id", (req, res) => {
    const userId = req.params.id;

    const user = getUserById(userId); 

    res.render("meucarro/show", { user: user });
});
module.exports = router;