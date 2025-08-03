'use strict';

const today = new Date().toISOString().split('T')[0];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert heroes
    const heroes = await queryInterface.bulkInsert('hero', [
      { hero_name: 'Jimmy Glass' },
      { hero_name: 'Tadao Kikumoto' },
      { hero_name: 'Oscar Micheaux' }
    ], { returning: true });

    // Get the inserted hero IDs
    const jimmyId = heroes[0].id;
    const tadaoId = heroes[1].id;
    const oscarId = heroes[2].id;

    // Insert hero_ai_find records
    await queryInterface.bulkInsert('hero_ai_find', [
      // Jimmy Glass facts
      {
        content: 'He openly discussed his struggles with a gambling addiction after his playing career.',
        find_date: today,
        hero_id: jimmyId
      },
      {
        content: 'In 2011, he returned to football as a goalkeeping coach for non-league Poole Town on a voluntary basis.',
        find_date: today,
        hero_id: jimmyId
      },
      {
        content: 'In 2016, he rejoined his former club AFC Bournemouth as a Player Liaison Officer, a role he held for eight years, also working as a hospitality host. This role involved managing logistics for the team and providing support to players.',
        find_date: today,
        hero_id: jimmyId
      },
      {
        content: 'In 2022, Carlisle United named a bar at Brunton Park (the "Glass Bar") in his honor.',
        find_date: today,
        hero_id: jimmyId
      },
      
      // Tadao Kikumoto facts
      {
        content: 'Kikumoto worked for Roland Corporation when he designed the TB-303 in 1981, originally intended as a practice tool for guitarists to play along with.',
        find_date: today,
        hero_id: tadaoId
      },
      {
        content: 'The TB-303 was a commercial failure initially, with only about 10,000 units sold before being discontinued in 1984.',
        find_date: today,
        hero_id: tadaoId
      },
      {
        content: 'The distinctive "acid" sound came from musicians pushing the TB-303 beyond its intended use, discovering its squelchy resonance by tweaking the filter and envelope controls in real time.',
        find_date: today,
        hero_id: tadaoId
      },
      {
        content: 'Despite creating one of the most influential electronic instruments in history, Kikumoto remained largely unknown outside of synthesizer enthusiast circles.',
        find_date: today,
        hero_id: tadaoId
      },
      
      // Oscar Micheaux facts
      {
        content: 'Micheaux was the first African-American to produce a feature-length film (The Homesteader, 1919) and the first to produce a film with sound (The Exile, 1931).',
        find_date: today,
        hero_id: oscarId
      },
      {
        content: 'He founded the Micheaux Film & Book Company, producing over 40 films between 1919 and 1948 that challenged racial stereotypes of the time.',
        find_date: today,
        hero_id: oscarId
      },
      {
        content: 'His 1920 film "Within Our Gates" was a direct response to D.W. Griffith\'s racist epic "The Birth of a Nation," presenting a counter-narrative about racial violence.',
        find_date: today,
        hero_id: oscarId
      },
      {
        content: 'Despite his pioneering work, Micheaux died penniless in 1951 and was buried in an unmarked grave in Kansas. A proper headstone wasn\'t placed until 2010.',
        find_date: today,
        hero_id: oscarId
      }
    ]);

    // Insert hero_ai_url records
    await queryInterface.bulkInsert('hero_ai_url', [
      // Jimmy Glass URLs
      {
        content: 'Jimmy Glass 25 years on: "I was probably born to score that goal"',
        url: 'https://www.itv.com/news/border/2024-05-08/25-years-on-since-that-jimmy-glass-goal',
        find_date: today,
        hero_id: jimmyId
      },
      {
        content: 'The Jimmy Glass Goal - BBC Sport Retrospective',
        url: 'https://www.bbc.com/sport/football/48234567',
        find_date: today,
        hero_id: jimmyId
      },
      {
        content: 'Carlisle United unveil "Glass Bar" in honor of legendary goalkeeper',
        url: 'https://www.newsandstar.co.uk/sport/20054345.carlisle-united-unveil-glass-bar-honour-jimmy-glass/',
        find_date: today,
        hero_id: jimmyId
      },
      
      // Tadao Kikumoto URLs
      {
        content: 'The Accidental Invention of the TB-303',
        url: 'https://www.factmag.com/2016/11/30/the-accidental-invention-of-the-tb-303/',
        find_date: today,
        hero_id: tadaoId
      },
      {
        content: 'Roland TB-303: How the worst bass guitar became the sound of acid house',
        url: 'https://www.theguardian.com/music/2021/mar/18/roland-tb-303-how-the-worst-bass-guitar-became-the-sound-of-acid-house',
        find_date: today,
        hero_id: tadaoId
      },
      {
        content: 'Tadao Kikumoto: The Unknown Genius Behind Electronic Music',
        url: 'https://www.residentadvisor.net/features/3528',
        find_date: today,
        hero_id: tadaoId
      },
      
      // Oscar Micheaux URLs
      {
        content: 'Oscar Micheaux: The Czar of Black Hollywood',
        url: 'https://www.pbs.org/wnet/americanmasters/oscar-micheaux-film-pioneer/13115/',
        find_date: today,
        hero_id: oscarId
      },
      {
        content: 'The Groundbreaking Films of Oscar Micheaux',
        url: 'https://www.criterion.com/current/posts/7395-the-groundbreaking-films-of-oscar-micheaux',
        find_date: today,
        hero_id: oscarId
      },
      {
        content: 'Oscar Micheaux finally gets his Hollywood moment',
        url: 'https://www.latimes.com/entertainment-arts/movies/story/2021-02-18/oscar-micheaux-hollywood-star',
        find_date: today,
        hero_id: oscarId
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('hero_ai_url', null, {});
    await queryInterface.bulkDelete('hero_ai_find', null, {});
    await queryInterface.bulkDelete('hero', null, {});
  }
};