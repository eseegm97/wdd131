const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description: 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
];

function displayArticles() {
    const articlesContainer = document.querySelector('.articles-container');

    const detailsColumn = document.createElement('div');
    const contentColumn = document.createElement('div');
    const filtersColumn = document.createElement('div');

    detailsColumn.classList.add('details-column');
    contentColumn.classList.add('content-column');
    filtersColumn.classList.add('filters');

    articles.forEach(article => {
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('article-details');
        detailsDiv.innerHTML = `
            <p><strong>Published:</strong> ${article.date}</p>
            <p><strong>Ages:</strong> ${article.ages}</p>
            <p><strong>Genre:</strong> ${article.genre}</p>
            <p><strong>Rating:</strong> ${article.stars}</p>
        `;
        detailsColumn.appendChild(detailsDiv);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('article-content');
        contentDiv.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description}</p>
        `;
        contentColumn.appendChild(contentDiv);
    });

    filtersColumn.innerHTML = `<p>Filters will go here</p>`;

    articlesContainer.appendChild(detailsColumn);
    articlesContainer.appendChild(contentColumn);
    articlesContainer.appendChild(filtersColumn);
}

displayArticles();