import { Titan } from "../models/Titans";

// return all records
Titan.find({}).lean()
  .then((titans) => {
    console.log(titans);
  })
  .catch(err => next(err));