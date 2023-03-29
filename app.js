// @author: Amir Armion
// @version: V.01

const { distance } = require("./mathHelpers");
const express      = require("express");
const app          = express();
const port         = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


let isCalculated = false;
let disPoints    = 0;
let coordinate   = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
};

app.get("/", (req, res) => {
    res.render("index", { isCalculated, disPoints, coordinate });
});


app.post("/", (req, res) => {

    coordinate.x1 = Number(req.body.x1);
    coordinate.y1 = Number(req.body.y1);    
    coordinate.x2 = Number(req.body.x2);
    coordinate.y2 = Number(req.body.y2);

    disPoints     = distance(coordinate.x1, coordinate.y1, coordinate.x2, coordinate.y2);

    isCalculated  = true;

    res.redirect("/");
});


app.listen(port, () => {
    console.log(`🚀 Server has started on "http://localhost:${port}"`);
});
