
require('dotenv').config();

const express = require('express')
const port = 3000;
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Add Cors
const cors = require("cors");
const corsOptions = require("./src/utils/corsOptions");
app.use(cors(corsOptions));

//init database Conection
const dbConnect = require("./src/services/db/dbConnection")


// use Routes
const userRoute = require('./src/routes/indexRouter');
for (const [key, value] of Object.entries(userRoute)) {
    app.use(`/api/v1/${key}`, value);
}

//server creation
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})




