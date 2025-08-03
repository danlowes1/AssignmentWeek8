


function fetchPosts() {
  fetch("http://localhost:3001/api/posts", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((posts) => {
      const postsContainer = document.getElementById("posts");
      postsContainer.innerHTML = "";
      posts.forEach((post) => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${post.title}</h3><p>${
          post.content
        }</p><small>By: ${post.postedBy} on ${new Date(
          post.createdOn
        ).toLocaleString()}</small>`;
        postsContainer.appendChild(div);
      });
    });
}

function createPost() {
  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;
  fetch("http://localhost:3001/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, content, postedBy: "User" }),
  })
    .then((res) => res.json())
    .then(() => {
      alert("Post created successfully");
      fetchPosts();
    });
}


document.addEventListener('DOMContentLoaded', () => {

    const heroes = [
        { id: 1, name: 'Jimmy Glass' },
        { id: 2, name: 'Hulk Hogan' },
        { id: 3, name: 'Nikola Tesla' },
        { id: 4, name: 'Marie Curie' }
    ];

    const postHeroDropdown = document.getElementById('post-hero-dropdown');
    const filterHeroDropdown = document.getElementById('filter-hero-dropdown');

    /** Example of JSDoc comment to document code.
     * Populates a given select element with options from an array of heroes.
     * @param {HTMLSelectElement} dropdownElement The select element to populate.
     * @param {Array<Object>} heroList The array of hero objects.
     * @param {string} defaultOptionText The text for the default (first) option.
     */
    function populateHeroDropdown(dropdownElement, heroList, defaultOptionText) {

        dropdownElement.innerHTML = '';

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = defaultOptionText;
        dropdownElement.appendChild(defaultOption);

        heroList.forEach(hero => {
            const option = document.createElement('option');
            option.value = hero.id; // Use hero.id for actual value
            option.textContent = hero.name;
            dropdownElement.appendChild(option);
        });
    }

    // Populate the 'Post a comment' dropdown
    populateHeroDropdown(postHeroDropdown, heroes, 'Please select your hero');

    // Populate the 'Filter On' dropdown
    populateHeroDropdown(filterHeroDropdown, heroes, 'Filter On: All Heroes');

    //  Add Event listeners for after update filter changes or form submissions 

    // Get the selected values in the dropdowns in on change event
    filterHeroDropdown.addEventListener('change', (event) => {
        const selectedHeroId = event.target.value;
        console.log('Filter selected:', selectedHeroId);
    });

    postHeroDropdown.addEventListener('change', (event) => {
        const selectedHeroId = event.target.value;
        console.log('Hero for new comment:', selectedHeroId);
    });
});



// Array to hold our forgotten heroes data
// In a real application, this data would come from a backend API or database.
// const forgottenHeroes = [
//     {
//         name: "Jimmy Glass",
//         description: "The legendary goalkeeper who scored that unforgettable last-minute goal to save Carlisle United from relegation. A true hero of the lower leagues.",
//         link: "#" // Placeholder for individual hero page link
//     },
//     {
//         name: "Joe Bloggs",
//         description: "A quintessential everyman, Joe Bloggs represents the unsung heroes in all walks of life. His story is one of quiet determination and everyday triumphs.",
//         link: "#"
//     },
//     {
//         name: "Jimmy Hill",
//         description: "A true football innovator, Jimmy Hill was a player, manager, and TV pundit who shaped the modern game. His influence is still felt today.",
//         link: "#"
//     },
//     {
//         name: "Hulk Hogan",
//         description: "The iconic professional wrestler whose charisma and larger-than-life persona defined an era of sports entertainment. Whatcha gonna do, brother?",
//         link: "#"
//     },
//     {
//         name: "Jimmy 'five' Bellies",
//         description: "A beloved character from the world of boxing, known for his larger-than-life personality and memorable antics. A true entertainer.",
//         link: "#"
//     }
// ];

// /**
//  * Function to create a single hero card HTML element.
//  * @param {object} hero - An object containing hero details (name, description, link).
//  * @returns {HTMLElement} The created div element representing a hero card.
//  */
// function createHeroCard(hero) {
//     const heroCard = document.createElement('div');
//     heroCard.classList.add('hero-card'); // Apply the hero-card class from style.css

//     heroCard.innerHTML = `
//         <h2 class="hero-name">
//             <a href="${hero.link}" class="hero-link">${hero.name}</a>
//         </h2>
//         <p class="hero-description">
//             ${hero.description}
//         </p>
//         <a href="comments.html" class="comments-link">View Comments</a>
//     `;
//     return heroCard;
// }

// /**
//  * Function to populate the heroes list on the page.
//  */
// function populateHeroesList() {
//     const heroesListContainer = document.getElementById('heroes-list');

//     // Clear any existing placeholder content (if any)
//     heroesListContainer.innerHTML = '';

//     // Iterate over the heroes array and create a card for each
//     forgottenHeroes.forEach(hero => {
//         const card = createHeroCard(hero);
//         heroesListContainer.appendChild(card);
//     });
// }

// // Ensure the DOM is fully loaded before trying to manipulate it
// document.addEventListener('DOMContentLoaded', populateHeroesList);
