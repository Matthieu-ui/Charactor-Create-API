import express from "express";
import { titansModel } from "../src/models/titans.model.js";
const api = express.Router()



api.get('/getAll', (req, res) => {
    titansModel.find().lean().then((data) => {
        res.json({ success: true, data: data });
    })
        .catch((err) => {
            res.json({ success: false, error: err.message, method: "getAll" })
        })
})

api.get("/getByName/:name", (req, res) => {
    titansModel.findOne({ name: req.params.name }, (err, titan) => {
        if (err || !titan) {
            res.status(200).json({"message":"Database error, titan not found"});
        } else {
            res.json( titan );
         }
    })

})

api.get("/getById/:id", (req, res) => {
    titansModel.findOne({ _id: req.params.id }, (err, titan)  => {
        if (err || !titan) {
            res.json({ success: false, error: "Titan ID not found" });
        } else {
            res.json({ success: true, data: titan });
            return;
        }
        
    })
    
})


api.post('/add', (req, res) => {
    const newTitan = {'name': req.body.name, 'str': req.body.str, 'dex': req.body.dex, 'con': req.body.con, 'int': req.body.int, 'wis': req.body.wis, 'cha': req.body.cha}
    titansModel.updateOne({'name': req.body.name,}, newTitan, {upsert:true}, (err, titan) => {
      if (err || !titan) {
        res.status(200).json({"message":"error - something went wrong"});
    } else {
        res.json( newTitan );
     }
    });
  });

  api.get("/delete/:name", (req, res) => {
      titansModel.deleteOne({name: req.params.name}, (err, titan) => {
        if (err || !titan) {
            res.json({ success: false, error: "Titan not found" });
        } else {
            res.json( titan );
        }
      })
  })


export { api }