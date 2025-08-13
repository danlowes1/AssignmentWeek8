// routes/hero_ai_find.js

// create a new router
const app = require("express").Router();

// import the models
const { Hero_ai_find } = require("../models/index");

// Route to add a new post
app.post("/", async (req, res) => {
  try {
    const { content, hero_id } = req.body;
    const hero_ai_find = await Hero_ai_find.create({ content , hero_id });
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
    // const hero_ai_find = await Post.findByPk(req.params.id);
    const hero_ai_find = await Hero_ai_find.findByPk(req.params.id);
    if (!hero_ai_find) {
      return res.status(404).json({ message: "Hero AI find not found" });
    }
    res.json(hero_ai_find);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving hero_ai_find" });
  }
});

// Route to update a hero_ai_find
app.put("/:id", async (req, res) => {
  try {
    const { content, findDate } = req.body;
    const post = await Hero_ai_find.update(
      { content, findDate },
      { where: { id: req.params.id } }
    );    
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error updating hero_ai_find" });
  }
});

// To update by hero_id
// app.put("/:id", async (req, res) => {
//   try {
//     const { content, findDate, hero_id } = req.body;
//     const [updated] = await Hero_ai_find.update(
//       { content, findDate, hero_id },
//       { where: { id: req.params.id } }
//     );

//     if (updated === 0) {
//       return res.status(404).json({ message: "Hero_ai_find not found" });
//     }

//     const updatedRecord = await Hero_ai_find.findByPk(req.params.id);
//     res.json(updatedRecord);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error updating hero_ai_find" });
//   }
// });








// Route to delete a hero_ai_find
app.delete("/:id", async (req, res) => {
  try {
    const hero_ai_find = await Hero_ai_find.destroy({ where: { id: req.params.id } });
    res.json(hero_ai_find);
  } catch (error) {
    res.status(500).json({ error: "Error deleting hero_ai_find" });
  }
});

// export the router
module.exports = app;
