const helmet = require('helmet');
var express = require('express');
const planjs = require('./plans/plans.js')
const shopjs = require('./shopping/shop.js')
const formjs = require('./form/form.js')

var app = express();
var PORT = 3000;

app.use(helmet());
app.use(express.json());

const compression = require('compression');

app.use(compression()); 

app.get("/", (req, res) => {
    res.status(200).json({ name: "some one" });
});


app.listen(process.env.PORT || 3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


app.get("/getPlan", planjs);
app.get("/getShoppingItems", shopjs);
app.get("/getFormDetails", formjs);
