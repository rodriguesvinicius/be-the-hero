const express = require("express");
const cors = require('cors');
const routes = require('./routes');

const app = express();



app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log("Servidor Rodando")
})