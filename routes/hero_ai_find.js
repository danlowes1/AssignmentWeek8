// create a new router
const app = require("express").Router();

// import the models
const { Hero_ai_find } = require("../models/index");

// Route to add a new post
app.post("/", async (req, res) => {
  try {
    const { content } = req.body;
    const hero_ai_find = await Hero_ai_find.create({ content });
    res.status(201).json(hero_ai_find);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding hero_ai_find", error: error });
  }
});

// Route to get all posts
app.get("/", async (req, res) => {
  try {
    console.log("Getting all heroes");
    const hero_ai_finds = await Hero_ai_find.findAll();
    console.log(hero_ai_finds);
    res.json(hero_ai_finds);
  } catch (error) {
    res.status(500).json({ message: "Error adding hero_ai_find", error: error });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const hero_ai_find = await Post.findByPk(req.params.id);
    res.json(hero_ai_find);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving hero_ai_find" });
  }
});

// Route to update a hero_ai_find
app.put("/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const post = await Hero_ai_find.update(
      { name },
      { where: { id: req.params.id } }
    );
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error updating hero_ai_find" });
  }
});

// Route to delete a hero_ai_find
app.delete("//:id", async (req, res) => {
  try {
    const hero_ai_find = await hero_ai_find.destroy({ where: { id: req.params.id } });
    res.json(hero_ai_find);
  } catch (error) {
    res.status(500).json({ error: "Error deleting hero_ai_find" });
  }
});

// export the router
module.exports = app;
