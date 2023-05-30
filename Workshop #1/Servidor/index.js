const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
//middlewares
app.use(bodyParser.json());
app.use(cors({
  domains: '*',
  methods: "*"
}));

//routes
app.get('/tipocambio', function (req, res) {
  res.json({
    "TipoCompraDolares" : "620",
    "TipoVentaDolares" : "621",
    "TipoCompraEuros" : "731.85",
    "TipoVentaEuros" : "761.9"
  });
});
app.get('/paises', function (req, res){
    res.json({
        "Countries" : [
            {"Nombre" : "Colombia", "Moneda" : "cop"},
            {"Nombre" : "Corea del Sur", "Moneda" : "krw"},
            {"Nombre" : "Dinamarca", "Moneda" : "dkk"},
            {"Nombre" : "Bolivia", "Moneda" : "bob"},
            {"Nombre" : "Canada", "Moneda" : "cad"},
            {"Nombre" : "Filipinas", "Moneda" : "php"},
            {"Nombre" : "Guatemala", "Moneda" : "gtq"},
            {"Nombre" : "India", "Moneda" : "inr"},
            {"Nombre" : "Japon", "Moneda" : "jpy"},
            {"Nombre" : "Noruega", "Moneda" : "nok"}
        ]
    });
});
//start the app
app.listen(3000, () => console.log(`BBCR Exchange type service listening on port 3000!`))