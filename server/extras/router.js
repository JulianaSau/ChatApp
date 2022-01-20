const express = require("express");
const router = express.Router();

// On the server-side, we only need one route to connect to the client-side and the rest will be taken care of by the client-side.
router.get("/", (req, response) => {
    response.redirect("https://http://localhost:3000/");

})

module.exports = router;