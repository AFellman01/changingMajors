const router = require("express").Router();

router.post("/auth/user", (req, res) => {
	res.send({
		message: "Authenticated"
	});
});

module.exports = router;