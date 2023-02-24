const mongoose = require('mongoose');

const user = 'dasvv', password = 'dasv', dbName = 'pruebas';

const uri = `mongodb+srv://${user}:${password}@cluster0.gbdva.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(uri, () => console.log("Connected to MongoDB Succesfully"));