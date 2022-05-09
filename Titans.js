import mongoose from 'mongoose';
import {connectionString} from './credentials.js';

const { Schema } = mongoose;

console.log(connectionString)

mongoose.connect(connectionString, {
    dbName: 'projects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const titanSchema = new Schema({
 title: { type: String, required: true },
 name: String,
 dex: String,
 str: String,
 dex: String,
 cha: String,
 con: String,
 int: String,
 wis: String


});

export const Titan = mongoose.model('Titan', titanSchema);