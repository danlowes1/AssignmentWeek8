// import all models
const Post = require("./post");
const Hero = require("./hero");
const User = require("./user");
const Hero_ai_find = require("./hero_ai_find");
const Hero_ai_url = require("./hero_ai_url");

/// Hero>Post 1 to many
Post.belongsTo(Hero, {
  foreignKey: "heroId",
  as: "hero",
});

Hero.hasMany(Post, {
  foreignKey: "heroId",
  as: "hero_posts",
});
///Hero>Hero_ai_find  1 to many //
Hero_ai_find.belongsTo(Hero, {
  foreignKey: "heroId",
  as: "hero_ai_find",
});

Hero.hasMany(Hero_ai_find, {
  foreignKey: "heroId",
  as: "Hero_hero_ai_find",
});
///Hero>Hero_ai_url 1 to many 
Hero_ai_url.belongsTo(Hero, {
  foreignKey: "heroId",
  as: "hero_ai_url",
});

Hero.hasMany(Hero_ai_url, {
  foreignKey: "heroId",
  as: "Hero_hero_ai_url",
});

///User>Post 1 to many 
Post.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

User.hasMany(Post, {
  foreignKey: "userId",
  as: "user_posts",
});


module.exports = {
  Post,
  Hero,
  User,
  Hero_ai_find,
  Hero_ai_url
};
