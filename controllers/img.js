const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: "4913057d21ec49a49a1aadb0f792b40e",
});

const handleApiCall = (req, res) => {
app.models
  .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => {
    res.json(data);
  })
  .catch(err => res.status(400).json("unalble to work with API!"))
}

const handleImg = (req, res, db) => {
  const { id } = req.body;
  db("users").where("id", "=", id)
  .increment("enteries", 1)
  .returning("entries")
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json("Unable to get entries!"));
}

module.exports = {
  handleImg,
  handleApiCall
};
