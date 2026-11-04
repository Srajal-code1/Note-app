const express = require("express");
const app = express();
app.use(express.json());

const notes = [];

app.post("/notes", function(req, res) {
    const note = req.body.note;
    notes.push(note);
    res.json({
        msg: "Done!"
    })
})

app.get("/notes", function(req, res) {
    res.json({
        notes
    })
})

app.get("/", function (req, res) {
    res.sendFile("D:/100xSchool/Projects/week_09_Aunthentication/Note_app/Frontend/index.html");
})
app.listen(3000);