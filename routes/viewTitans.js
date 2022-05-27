import express from "express";
import { titansModel } from "../src/models/titans.model.js";
const router = express.Router();


//GET ALL
router.get("/api/viewtitans", async (req, res, next) => {
    try{
        const results = await titansModel.find()
        res.send(results)
    } catch(error){
        res.send('error')
    }

});

// GET ONE
router.get('/api/viewtitan', (req, res) => {
    if(!req.query.name){
        return res.status(400).send("missing url parameter: titan name")
    }

    titansModel.findOne({
        name: req.query.name
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

    



export default router