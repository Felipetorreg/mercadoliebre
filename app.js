const express = require("express");
const path = require("path"); // modulo nativo, no hay necesidad de instalarlo como en express que hice npm install express

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("servidor correindo en puerto 3000")
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})