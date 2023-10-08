
import express  from "express";
import User from "../models/User.js";

const router = express.Router();

let users = [
    {
        id : 1,
        name : "majid",
        email : "majid@gmail.com"
    },
    {
        id : 2,
        name : "Hussain",
        email : "hussain@gmail.com"
    }
]


router.get("/", (req,res) => {
    res.status(200).send({users: users})

})

router.post("/", async (req, res) => {
    console.log("req====", req.body)
    const user = await new User(req.body).save()
    res.status(200).send({message: "successfully", user})

})

export default router;