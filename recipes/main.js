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

function recipeTemplate(recipe) {
	return `<figure class="recipe">
        <div class="recipes">
            <section class="sweet-potato-waffle">
                <img src="images/sweet-potato-waffle-md.jpg" alt="Sweet potato waffles">
                <section class="sweet-potato-waffle-blurb">
                    <h3>Sweet Potato Waffles</h3>
                    <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star-empty">⭐</span>
                        <span aria-hidden="true" class="icon-star-empty">☆</span>
                    </span>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Primis fames ut mus, cubilia torquent aliquam et aliquet. Laoreet fermentum luctus enim eu sapien. Maecenas nascetur integer per inceptos sodales pellentesque dapibus.</p>
                </section>
            </section>
        </div>
    </figure>`;
}