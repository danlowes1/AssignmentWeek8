const sequelize = require("../config/connection");
const { Hero, HeroAiFind, HeroAiUrl, Post } = require("../models");

const heroData = require("./heroes.json");
const heroFindData = require("./hero_ai_finds.json");
const heroUrlData = require("./hero_ai_urls.json");
const postData = require("./posts.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const createdHeroes = await Hero.bulkCreate(heroData, { returning: true });

  // Create a map for easier access by name
  const heroMap = {};
  createdHeroes.forEach(hero => {
    heroMap[hero.hero_name] = hero.id;
  });

  // Add hero_id to each hero_ai_find record
  const findsWithIds = heroFindData.map(find => ({
    ...find,
    hero_id: heroMap[find.hero_name]
  }));

  const urlsWithIds = heroUrlData.map(url => ({
    ...url,
    hero_id: heroMap[url.hero_name]
  }));

  await HeroAiFind.bulkCreate(findsWithIds);
  await HeroAiUrl.bulkCreate(urlsWithIds);
  await Post.bulkCreate(postData); // if needed

  console.log("Seeding complete.");
  process.exit(0);
};

seedDatabase();




// // Import required packages
// const sequelize = require("../config/connection");

// // import models
// const { Post } = require("../models");

// // add data and seeding for Category model

// // import seed data
// const postData = require("./posts.json");

// // Seed database
// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await Post.bulkCreate(postData);

//   process.exit(0);
// };

// // Call seedDatabase function
// seedDatabase();
