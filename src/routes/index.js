const { Router } = require("express")
const router = Router()
router.get("", (req, res) => {

    res.send("SUCCESS")
})

router.get("/test", (req, res) => {
    const data = {
        name: { first: "Raphael", last: "Bravo" },
        age: 21
    }
    res.json(data)
})

module.exports = router