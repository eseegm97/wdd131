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
            html += `<span aria-hidden="true" class="icon-star-empty">⭐</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <div class="recipes">
            <section class="recipe-item">
                <img src="${recipe.image}" alt="${recipe.name}">
                <section class="recipe-blurb">
                    <h3>${recipe.name}</h3>
                    ${ratingTemplate(recipe.rating)}
                    <p>${recipe.description}</p>
                    <div class="tags">${tagsTemplate(recipe.tags)}</div>
                </section>
            </section>
        </div>
    </figure>`;
}
const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
    const recipesContainer = document.getElementById('recipes-container');
    
    recipesContainer.innerHTML = '';
    
    recipeList.forEach(recipe => {
        const recipeHTML = recipeTemplate(recipe);
        
        recipesContainer.innerHTML += recipeHTML;
    });
}

function init() {
    const recipe = getRandomListEntry(recipes);
    
    renderRecipes([recipe]);
}

init();
