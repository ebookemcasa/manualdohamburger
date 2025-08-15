document.addEventListener('DOMContentLoaded', () => {
    // Elementos da página
    const resultsContainer = document.getElementById('search-results');
    const queryTitle = document.getElementById('query-title');
    
    // Elementos da Modal
    const modal = document.getElementById('recipe-modal');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOverlay = document.getElementById('modal-overlay');

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (queryTitle && query) {
        queryTitle.textContent = query;
    }

    // Função para fechar a modal
    const closeModal = () => {
        modal.classList.remove('is-active');
        document.body.classList.remove('modal-open');
    };

    // Eventos para fechar a modal
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Lógica da Pesquisa
    const performSearch = (searchQuery) => {
        const results = [];
        if (!searchQuery || searchQuery.trim() === '') return results;
        const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);

        for (const key in masterAulas) {
            const aula = masterAulas[key];
            const searchableText = [aula.title, aula.description, aula.module].join(' ').toLowerCase();
            const isMatch = searchTerms.every(term => searchableText.includes(term));
            if (isMatch) {
                results.push({ key, ...aula });
            }
        }
        return results;
    };
    
    // Mostra os resultados como cards clicáveis
    const displayResults = (results) => {
        if (!resultsContainer) return;
        resultsContainer.innerHTML = ''; 
        if (results.length === 0) {
            resultsContainer.innerHTML = `<p class="text-stone-600 text-center">Nenhum resultado encontrado para a sua pesquisa.</p>`;
            return;
        }
        results.forEach(aula => {
            const card = `
                <div data-aula-key="${aula.key}" class="aula-card block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <p class="text-sm font-bold text-amber-600">${aula.module}</p>
                    <h3 class="text-2xl font-bold text-stone-800 mt-1">${aula.title}</h3>
                    <p class="text-stone-600 mt-2">${aula.description}</p>
                </div>
            `;
            resultsContainer.innerHTML += card;
        });
    };
    
    // Event listener para abrir a modal ao clicar num resultado
    resultsContainer.addEventListener('click', (event) => {
        const card = event.target.closest('.aula-card');
        if (card) {
            const aulaKey = card.dataset.aulaKey;
            const aulaData = masterAulas[aulaKey];
            if (aulaData) {
                modalContent.innerHTML = generateRecipeHTML(aulaData); // Gera o HTML completo da aula
                modal.classList.add('is-active');
                document.body.classList.add('modal-open');
            }
        }
    });

    // Executa a pesquisa inicial
    const searchResults = performSearch(query);
    displayResults(searchResults);
    
    // ===================================================================================
    // FUNÇÕES GLOBAIS PARA GERAR O HTML DA AULA (copiadas de outras páginas)
    // ===================================================================================
    const formatNumber = (num) => {
        if (num < 1 && num > 0) return num.toFixed(2);
        if (num % 1 !== 0) return num.toFixed(1);
        return num;
    };
    const generateRecipeHTML = (recipeData) => {
         return `
            <div class="text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-amber-700">${recipeData.title}</h2>
                <p class="mt-4 max-w-3xl mx-auto text-stone-600 text-lg">${recipeData.description}</p>
            </div>
            <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div class="bg-stone-100 p-4 rounded-lg flex flex-col justify-center items-center"><span class="text-2xl">⏳</span><h4 class="font-bold text-stone-800">Preparo</h4><p class="text-stone-600 text-sm">${recipeData.details.tempoPreparo}</p></div>
                <div class="bg-stone-100 p-4 rounded-lg flex flex-col justify-center items-center"><span class="text-2xl">🍳</span><h4 class="font-bold text-stone-800">Cozimento</h4><p class="text-stone-600 text-sm">${recipeData.details.tempoCozimento}</p></div>
                <div class="bg-stone-100 p-4 rounded-lg flex flex-col justify-center items-center"><span class="text-2xl">🍽️</span><h4 class="font-bold text-stone-800">Rendimento</h4><p class="text-stone-600 text-sm">${recipeData.details.rendimento}</p></div>
                <div class="bg-stone-100 p-4 rounded-lg flex flex-col justify-center items-center"><span class="text-2xl">⭐</span><h4 class="font-bold text-stone-800">Dificuldade</h4><p class="text-stone-600 text-sm">${recipeData.details.dificuldade}</p></div>
            </div>
            <div class="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">
                <div class="lg:col-span-1">
                    <h3 class="text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-500 pb-2">Planeamento</h3>
                    ${recipeData.calculator ? `<div class="bg-stone-50 p-4 rounded-lg"><label class="block text-lg text-stone-700 mb-2 font-bold">${recipeData.calculator.label}</label><p class="text-stone-600">Ajuste as quantidades na página original da aula.</p></div>` : ''}
                    <div class="mt-6"><h4 class="font-bold text-lg mb-2 text-stone-700">Checklist de Ingredientes:</h4><ul class="space-y-1 text-stone-600 text-sm">${generateIngredientsHTML(recipeData.ingredients)}</ul></div>
                    <div class="mt-6"><h4 class="font-bold text-lg mb-2 text-stone-700">Utensílios Chave:</h4><ul class="space-y-2 text-stone-600 list-disc list-inside text-sm">${recipeData.details.utensilios.map(utensil => `<li>${utensil}</li>`).join('')}</ul></div>
                </div>
                <div class="lg:col-span-2">
                    <h3 class="text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-500 pb-2">Tutorial Detalhado</h3>
                    <div class="space-y-6">${recipeData.steps.map((step, index) => generateStepHTML(step, index)).join('')}</div>
                    ${recipeData.variacoes ? `<div class="mt-8"><h3 class="text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-500 pb-2">Variações e Dicas</h3><div class="prose prose-stone max-w-none bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 text-sm">${recipeData.variacoes.map(item => `<p>${item}</p>`).join('')}</div></div>` : ''}
                </div>
            </div>
        `;
    };
    const generateIngredientsHTML = (ingredients) => {
        let html = '';
        let currentHeading = '';
        ingredients.forEach(ing => {
            if(ing.heading && ing.heading !== currentHeading) {
                currentHeading = ing.heading;
                html += `<h5 class="font-bold text-stone-700 mt-3 mb-1">${currentHeading}:</h5>`;
            }
            html += `<li class="ingredient-item"><label class="flex items-center p-1 rounded-md hover:bg-stone-100"><input type="checkbox" class="mr-2 h-4 w-4 text-amber-600 focus:ring-amber-500 border-stone-300 rounded"><span class="flex-1 flex justify-between"><span>${ing.name}</span><span class="font-semibold text-right pl-2">${ing.base_qty} ${ing.unit}</span></span></label></li>`;
        });
        return html;
    };
    const generateStepHTML = (step, index) => {
        if (step.isSubRecipe) {
            return `<div class="p-4 rounded-lg bg-amber-50 border-l-4 border-amber-400"><h4 class="font-bold text-xl text-amber-800 mb-4">${step.title}</h4><div class="space-y-4">${step.subSteps.map(subStep => `<div class="ml-4"><h5 class="font-semibold text-lg text-stone-800 mb-1">${subStep.title}</h5><div class="prose prose-stone max-w-none text-sm"><p>${subStep.description}</p><details class="mt-3 text-xs"><summary class="font-bold text-blue-800">Ver o porquê</summary><div class="mt-2 bg-blue-50 text-blue-800 rounded-md p-3">${subStep.porque}</div></details><details class="mt-2 text-xs"><summary class="font-bold text-red-800">Ver ponto crítico</summary><div class="mt-2 bg-red-50 text-red-800 rounded-md p-3">${subStep.pontoCritico}</div></details></div></div>`).join('')}</div></div>`;
        }
        return `<div class="p-4 rounded-lg bg-stone-50 border-l-4 border-stone-200"><h4 class="font-bold text-xl text-stone-800 mb-2"><span class="bg-amber-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-base">${index + 1}</span> ${step.title}</h4><div class="prose prose-stone max-w-none pl-11 text-sm"><p>${step.description}</p><details class="mt-3 text-xs"><summary class="font-bold text-blue-800">Ver o porquê</summary><div class="mt-2 bg-blue-50 text-blue-800 rounded-md p-3">${step.porque}</div></details><details class="mt-2 text-xs"><summary class="font-bold text-red-800">Ver ponto crítico</summary><div class="mt-2 bg-red-50 text-red-800 rounded-md p-3">${step.pontoCritico}</div></details></div>${step.timer ? `<div class="mt-4 pl-11 flex items-center gap-4"><button class="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm">Timer (${Math.floor(step.timer/60)}m)</button></div>` : ''}</div>`;
    };
});
