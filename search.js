document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('search-results');
    const queryTitle = document.getElementById('query-title');
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (queryTitle && query) {
        queryTitle.textContent = query;
    }

    const performSearch = (searchQuery) => {
        const results = [];
        if (!searchQuery || searchQuery.trim() === '') {
            return results;
        }

        const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);

        for (const key in masterAulas) {
            const aula = masterAulas[key];
            const searchableText = [
                aula.title,
                aula.description,
                aula.module
            ].join(' ').toLowerCase();

            const isMatch = searchTerms.every(term => searchableText.includes(term));

            if (isMatch) {
                results.push(aula);
            }
        }
        return results;
    };

    const displayResults = (results) => {
        if (!resultsContainer) return;
        resultsContainer.innerHTML = ''; 

        if (results.length === 0) {
            resultsContainer.innerHTML = `<p class="text-stone-600 text-center">Nenhum resultado encontrado para a sua pesquisa.</p>`;
            return;
        }

        results.forEach(aula => {
            const card = `
                <a href="${aula.url}" class="aula-card block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <p class="text-sm font-bold text-amber-600">${aula.module}</p>
                    <h3 class="text-2xl font-bold text-stone-800 mt-1">${aula.title}</h3>
                    <p class="text-stone-600 mt-2">${aula.description}</p>
                </a>
            `;
            resultsContainer.innerHTML += card;
        });
    };

    const searchResults = performSearch(query);
    displayResults(searchResults);
});