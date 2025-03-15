import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

console.log(getRandomListEntry(recipes));

function tagsTemplate(tags) {
    let html = '';
    tags.forEach(tag => {
        html += `<span class="tag">${tag}</span>`;
    });
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty" aria-label="Empty star">⭐</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${ratingTemplate(recipe.rating)}
                </span>
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

function renderRecipes(recipeList) {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = '';

    recipeList.forEach(recipe => {
        const recipeHTML = recipeTemplate(recipe);
        recipesContainer.innerHTML += recipeHTML;
    });
}

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
               recipe.description.toLowerCase().includes(query) ||
               recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
               recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query));
    });

    console.log("Filtered Recipes:", filtered);

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
    e.preventDefault();

    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase();

    if (query.trim() === '') {
        renderRecipes(recipes);
    } else {
        const filteredRecipes = filterRecipes(query);
        renderRecipes(filteredRecipes);
    }
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchHandler);

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

init();
