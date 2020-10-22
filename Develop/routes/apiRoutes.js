const data = require("../db/db.json");



module.exports = function(app) {

app.get("/api/notes", (req, res) => {
  let i = 1;
  data.map(n => {
          n['id'] = i;
          i++;
  });
  console.log(data)
return res.json(data)

});
  
app.post("/api/notes", (req, res) => {
    


var newNote = req.body;
data.push(newNote);
res.json(newNote);


  });
  
app.delete("/api/notes/:id", (req, res) => {
var chosen = req.params.id;
data.splice(0, chosen)
res.json({ ok: true });
});

}