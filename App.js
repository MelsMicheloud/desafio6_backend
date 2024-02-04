import { Express } from "express";

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())

app.liste(4000,() => {
    console.log("Server funcionando en el puerto 4000")
});

module.exports = app;