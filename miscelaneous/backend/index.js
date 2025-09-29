const express = require("express")
const app = express()
const port = 9191;

app.listen(port, () => {
    console.log("Server started on port " + port)
})

app.get("/register", (req, res) => {
    console.log("GET data:", req.query)
    res.send("we got it (GET request)")
})

app.post("/register", (req, res) => {
    console.log("POST data:", req.body)
    res.send("we got the post response")
})
