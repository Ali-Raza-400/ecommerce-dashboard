const express = require('express')
const User = require("./models/User")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
require("./conn")
// connection 

// for displaying the data in response
// Routes
app.post("/register", async (req, res) => {

    let user = new User(req.body)
    let result = await user.save();
     result=result.toObject()
    delete result.password
    res.send(result)
})

app.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password")

        if (user) {
            res.send(user)
        } else {
            res.send({ result: "User not found" })
        }
    } else {
        res.send({ result: "User not found" })
    }
})

app.listen(5000, () => {
    console.log("lishening at port 5000")
})