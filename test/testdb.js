import { Titan } from "../Titans.js";

// return all records
Titan.find({}).lean()
  .then((titans) => {
    console.log(titans);
  })
  .catch(err => next(err));