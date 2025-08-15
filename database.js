const masterAulas = {
    "fundamentos-da-cozinha-arroz": {
        "title": "Aula 01: O Arroz Perfeito (Soltinho)",
        "description": "Dominar o arroz branco soltinho é o primeiro passo para se sentir confiante na cozinha. Com esta técnica, você aprenderá a importância de cada etapa para um resultado que nunca falha.",
        "calculatorLabel": "Chávenas de Arroz Cru:",
        "calculatorUnit": "arroz-input",
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "15 min",
            "tempoDescanso": "5 min",
            "rendimento": "2 porções por chávena",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela com tampa",
                "Garfo",
                "Copo medidor"
            ]
        },
        "dicaDeMestre": "Depois de soltar o arroz com o garfo, coloque um pano de prato limpo entre a panela e a tampa durante o descanso. O pano absorve o excesso de vapor, garantindo um arroz ainda mais seco e soltinho.",
        "steps": [
            {
                "title": "O Refogado (Base de Sabor)",
                "description": "Numa panela, aqueça o azeite em lume médio. Adicione o alho e refogue até perfumar (cerca de 30s). Adicione o arroz e 'frite-o' por cerca de 1 minuto, mexendo sempre. Este passo é crucial.",
                "porque": "Este processo, chamado 'selar' o arroz, reveste cada grão com gordura. Isto ajuda a manter os grãos separados durante o cozimento, evitando que o amido se liberte em excesso e crie um resultado empapado.",
                "pontoCritico": "Não deixe o alho queimar, senão amargará todo o prato. O objetivo é apenas libertar o seu aroma. Ao 'fritar' o arroz, mexa constantemente para que todos os grãos sejam revestidos."
            },
            {
                "title": "A Cozedura Perfeita",
                "description": "Adicione a água **já a ferver** à panela. Tempere com sal e mexa uma única vez para distribuir os grãos. Reduza para o lume mais baixo possível, semi-tape a panela e cozinhe por 10 a 15 minutos, ou até a água ser absorvida.",
                "porque": "Adicionar água fervente mantém a temperatura constante e inicia o cozimento imediatamente e de forma uniforme. Não mexer mais evita que o amido se solte dos grãos, o que é o principal culpado do arroz 'papa'.",
                "pontoCritico": "Resista à tentação de mexer! Apenas confie no processo. O lume deve ser o mais baixo que o seu fogão permite para que a água evapore lentamente.",
                "timer": 720
            },
            {
                "title": "O Descanso (O Passo Secreto)",
                "description": "Quando a água tiver sido absorvida, desligue o lume, tape completamente a panela e deixe o arroz descansar por pelo menos 5 minutos. Depois deste tempo, solte os grãos gentilmente com um garfo.",
                "porque": "O vapor residual dentro da panela termina o cozimento dos grãos de forma suave e uniforme. Este passo é o que garante a textura perfeita e evita que os grãos do fundo cozinhem mais do que os de cima.",
                "pontoCritico": "Não salte o descanso. Se servir imediatamente, o arroz pode parecer um pouco húmido. Os 5 minutos de descanso fazem toda a diferença.",
                "timer": 300
            }
        ],
        "variacoes": [
            "<strong>Arroz com Cenoura:</strong> Adicione cenoura ralada junto com o arroz para 'fritar'.",
            "<strong>Arroz com Brócolos:</strong> Adicione pequenos floretes de brócolos nos últimos 5 minutos de cozimento, por cima do arroz.",
            "<strong>Arroz Amarelo:</strong> Adicione uma pitada de açafrão-da-terra (cúrcuma) na água para dar cor e um sabor extra."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-arroz"
    },
    "fundamentos-da-cozinha-molho": {
        "title": "Aula 02: Molho de Tomate Caseiro",
        "description": "Abandone os molhos de compra. Fazer o seu próprio molho de tomate é simples, mais saudável e resulta num sabor incomparavelmente mais fresco e autêntico. É a base perfeita para massas, pizzas, lasanhas e muito mais.",
        "calculatorLabel": "Quilos de Tomate Fresco:",
        "calculatorUnit": "tomate-input",
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "45 min",
            "tempoDescanso": "N/A",
            "rendimento": "~750ml por kg de tomate",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela grande",
                "Faca",
                "Colher de pau"
            ]
        },
        "dicaDeMestre": "Para um molho com uma textura mais aveludada, passe-o por um passador de legumes (passe-vite) ou bata-o com uma varinha mágica no final do cozimento. Se não tiver nenhum dos dois, um liquidificador também serve (com cuidado, pois o molho estará quente).",
        "steps": [
            {
                "title": "Preparar os Tomates",
                "description": "Lave bem os tomates. Pode usá-los com pele e sementes para um molho mais rústico ou, para um resultado mais refinado, retire-as. Para retirar a pele, faça um 'X' na base de cada tomate, mergulhe em água fervente por 30 segundos e depois em água gelada. A pele sairá facilmente.",
                "porque": "Retirar a pele e as sementes resulta num molho menos ácido e com uma textura mais suave. O choque térmico (branqueamento) é a técnica profissional para pelar tomates de forma eficiente.",
                "pontoCritico": "Use sempre tomates bem maduros. Tomates verdes ou pouco maduros resultarão num molho ácido e com menos cor."
            },
            {
                "title": "O <span class=\"tooltip\" data-tooltip=\"Refogado lento de aromáticos (como cebola e alho) em gordura (azeite, manteiga) para criar uma base de sabor profunda para um prato.\">Sofrito</span> (A Base Aromática)",
                "description": "Numa panela grande, aqueça o azeite em lume médio. Adicione a cebola e refogue até ficar macia e translúcida (cerca de 5-7 minutos). Junte o alho e cozinhe por mais um minuto. Este refogado constrói a primeira camada de sabor do molho.",
                "porque": "Cozinhar a cebola lentamente liberta os seus açúcares naturais, conferindo uma doçura de base ao molho. O alho é adicionado depois pois cozinha mais rápido e queima facilmente.",
                "pontoCritico": "Não doure a cebola, apenas a deixe 'suar' e ficar macia. Se a cebola ou o alho queimarem, o molho ficará amargo."
            },
            {
                "title": "Cozinhar e Apurar o Sabor",
                "description": "Adicione os tomates picados (ou triturados) à panela. Tempere com sal, pimenta e a pitada de açúcar (se usar). Adicione o ramo de manjericão inteiro. Deixe levantar fervura, reduza para o lume mais baixo possível e cozinhe, semi-tampado, por pelo menos 45 minutos.",
                "porque": "O cozimento lento e prolongado ('apurar') é o que funde todos os sabores, evapora o excesso de água e concentra a doçura do tomate. O manjericão inteiro infunde o seu sabor sem se desintegrar.",
                "pontoCritico": "Mexa o molho ocasionalmente para não colar no fundo da panela. Quanto mais tempo cozinhar, mais espesso e saboroso ficará.",
                "timer": 2700
            }
        ],
        "variacoes": [
            "<strong>Molho 'Arrabbiata':</strong> Adicione uma malagueta seca ou flocos de pimenta ao refogado de alho para um toque picante.",
            "<strong>Com Vegetais:</strong> Adicione cenoura e aipo picados junto com a cebola (um <span class='tooltip' data-tooltip='Base clássica de 2 partes de cebola, 1 de cenoura e 1 de aipo, usada para dar sabor a molhos, sopas e estufados.'>mirepoix</span>) para uma base de sabor mais complexa.",
            "<strong>Com Vinho:</strong> Depois de refogar o alho, adicione um pouco de vinho tinto e deixe evaporar antes de juntar os tomates."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-molho"
    },
    "fundamentos-da-cozinha-caldo": {
        "title": "Aula 03: Caldo de Legumes Caseiro",
        "description": "Este é um dos grandes segredos da cozinha profissional. Um bom caldo caseiro é a alma de sopas, risotos e molhos, elevando qualquer prato de 'bom' para 'inesquecível'.",
        "calculatorLabel": "Litros de Água:",
        "calculatorUnit": "caldo-input",
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "1 hora",
            "tempoDescanso": "N/A",
            "rendimento": "~1 litro de caldo por 1.5L de água",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela grande (caldeirão)",
                "Coador de malha fina"
            ]
        },
        "dicaDeMestre": "Guarde as aparas de legumes (cascas de cebola, pontas de cenoura, talos de salsa) num saco no congelador. Quando tiver uma boa quantidade, use-as para fazer o seu caldo. É uma forma fantástica de reduzir o desperdício e aproveitar 100% dos ingredientes.",
        "steps": [
            {
                "title": "A Base Aromática",
                "description": "Não precisa de picar finamente. Corte a cebola, cenoura e aipo em pedaços grandes e grosseiros. A casca da cebola pode ser mantida para dar uma cor dourada ao caldo. Esmague os dentes de alho com a lateral da faca para libertar os seus óleos.",
                "porque": "O objetivo é a extração lenta do sabor. Pedaços grandes são ideais para cozimentos longos e fáceis de coar no final.",
                "pontoCritico": "Evite usar vegetais crucíferos como brócolos ou couve-flor em excesso, pois podem deixar o caldo com um sabor amargo."
            },
            {
                "title": "A Extração a Frio",
                "description": "Coloque todos os vegetais e aromáticos (louro, pimenta em grão) numa panela grande. Cubra com água fria. É importante começar com água fria.",
                "porque": "Começar com água fria permite uma extração de sabor muito mais eficiente. À medida que a água aquece lentamente, ela 'puxa' os sabores dos vegetais de forma gradual e completa.",
                "pontoCritico": "Nunca adicione sal ao seu caldo base. A falta de sal torna-o um ingrediente versátil. Você irá temperar com sal o prato final (a sopa, o risoto) onde usar o caldo."
            },
            {
                "title": "O Cozimento Gentil",
                "description": "Leve a panela ao lume alto até levantar fervura. Assim que ferver, reduza imediatamente para o lume mais baixo possível. O caldo deve cozinhar num <span class='tooltip' data-tooltip='Cozinhar um líquido logo abaixo do ponto de fervura, com apenas algumas bolhas suaves a subir à superfície.'>simmer</span> muito, muito gentil por pelo menos 1 hora.",
                "porque": "Ferver o caldo vigorosamente torna-o turvo e pode extrair sabores amargos. O cozimento lento e gentil é a chave para um caldo límpido e com sabor puro.",
                "pontoCritico": "Se formar alguma espuma na superfície, pode retirá-la com uma escumadeira para um caldo ainda mais limpo.",
                "timer": 3600
            },
            {
                "title": "Coar e Armazenar",
                "description": "Após o tempo de cozimento, desligue o lume. Coe o caldo através de um coador de malha fina, descartando os sólidos. O seu 'ouro líquido' está pronto. Deixe arrefecer e guarde no frigorífico (até 5 dias) ou congele em porções (até 3 meses).",
                "porque": "Coar remove todas as impurezas e fibras, deixando apenas o sabor puro. Congelar em porções (ex: cuvetes de gelo) é extremamente prático para o uso no dia a dia.",
                "pontoCritico": "Deixe o caldo arrefecer completamente antes de o tapar e guardar no frigorífico, para evitar a proliferação de bactérias."
            }
        ],
        "variacoes": [
            "<strong>Caldo de Cogumelos:</strong> Adicione cogumelos secos (porcini) para um sabor <span class='tooltip' data-tooltip='O 'quinto gosto', profundo e saboroso, encontrado em queijos curados, cogumelos e carnes.'>umami</span> intenso.",
            "<strong>Caldo Tostado:</strong> Asse os legumes no forno a 200°C até ficarem bem dourados antes de os colocar na panela com água. Isto resultará num caldo mais escuro e com sabor tostado.",
            "<strong>Caldo de Frango:</strong> Adicione uma carcaça de frango assado ou pedaços de frango com osso junto com os legumes para um caldo de ave rico."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-caldo"
    },
    "fundamentos-da-cozinha-ovo": {
        "title": "Aula 04: O Ovo Estrelado Perfeito",
        "description": "Parece simples, mas um ovo estrelado perfeito é uma arte. Com esta técnica, você conseguirá sempre uma clara totalmente cozida, bordas rendadas e uma gema cremosa e perfeitamente líquida para mergulhar o pão.",
        "calculatorLabel": "Quantidade de Ovos:",
        "calculatorUnit": "ovo-input",
        "details": {
            "tempoPreparo": "2 min",
            "tempoCozimento": "3-4 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 por pessoa",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira antiaderente pequena",
                "Tampa ou prato",
                "Espátula de silicone"
            ]
        },
        "dicaDeMestre": "Para uma apresentação de restaurante, quebre o ovo primeiro numa peneira fina sobre uma tigela. O excesso de clara líquida (a parte mais aguada) irá escorrer, deixando apenas a clara mais espessa. O resultado é um ovo estrelado mais compacto e redondo.",
        "steps": [
            {
                "title": "A Temperatura Certa",
                "description": "Aqueça uma frigideira antiaderente em lume **médio-baixo**. Este é o passo mais importante. Adicione a manteiga ou azeite e deixe aquecer lentamente. A gordura deve brilhar, mas não fumegar.",
                "porque": "Lume alto cozinha a parte de baixo do ovo muito rápido, deixando a clara de cima crua e a gema superaquecida. O lume baixo permite um cozimento gentil e controlado.",
                "pontoCritico": "Se a manteiga espumar e ficar castanha, a frigideira está demasiado quente. Retire do lume, deixe arrefecer um pouco e comece de novo."
            },
            {
                "title": "Quebrar o Ovo Corretamente",
                "description": "Quebre o ovo primeiro numa tigela pequena, não diretamente na frigideira. Isto permite-lhe remover qualquer pedaço de casca e garante que a gema não se parte ao cair na panela. Deslize o ovo cuidadosamente da tigela para a frigideira.",
                "porque": "Este passo dá-lhe controlo total sobre o processo, evitando acidentes e garantindo um resultado perfeito.",
                "pontoCritico": "Ovos frescos têm uma gema mais firme e menos probabilidade de se partirem. Use os ovos mais frescos que tiver."
            },
            {
                "title": "O Truque do Vapor",
                "description": "Deixe o ovo fritar sem mexer por cerca de 2 minutos, até as bordas da clara estarem firmes. Adicione uma colher de sopa de água na frigideira (num canto, longe do ovo) e tape imediatamente com uma tampa ou um prato.",
                "porque": "Esta é a técnica 'basted egg'. A água cria vapor instantaneamente, que fica preso pela tampa. O vapor cozinha suavemente a superfície da clara e da gema, garantindo que a clara fica totalmente cozida sem que a gema endureça.",
                "pontoCritico": "Tape rapidamente para não deixar o vapor escapar. Um pingo de água é suficiente. Demasiada água irá cozer o ovo em vez de o fritar."
            },
            {
                "title": "Finalização e Tempero",
                "description": "Cozinhe tapado por mais 1-2 minutos, ou até a clara estar opaca e firme. Deslize o ovo para o prato. Tempere com sal e pimenta apenas agora.",
                "porque": "Temperar o ovo na frigideira pode fazer com que a gema fique manchada e com uma textura estranha. Temperar no prato mantém a aparência perfeita.",
                "pontoCritico": "Sirva imediatamente. Um ovo estrelado perfeito não espera por ninguém!",
                "timer": 90
            }
        ],
        "variacoes": [
            "<strong>Com Ervas:</strong> Polvilhe com cebolinho ou salsa picada no final.",
            "<strong>Picante:</strong> Adicione uma pitada de flocos de pimenta ou páprica fumada.",
            "<strong>Sunny-side up vs Over easy:</strong> A nossa técnica resulta num 'sunny-side up' cozido no vapor. Para um 'over easy', não adicione água, e em vez disso, vire cuidadosamente o ovo e cozinhe por 10 segundos do outro lado."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-ovo"
    },
    "fundamentos-da-cozinha-maionese": {
        "title": "Aula 05: Maionese Caseira (A Emulsão)",
        "description": "Dominar uma emulsão estável é uma das técnicas mais gratificantes na cozinha. Nesta aula, você aprenderá a ciência por trás da maionese e como criar um molho incrivelmente cremoso e versátil, muito superior a qualquer versão de compra.",
        "calculatorLabel": "Quantidade de Gemas:",
        "calculatorUnit": "maionese-input",
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "~250ml por gema",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Tigela redonda",
                "Batedor de arame (fouet)",
                "Pano húmido"
            ]
        },
        "dicaDeMestre": "Coloque a tigela sobre um pano de prato húmido enrolado. Isto cria uma base antiderrapante, libertando as duas mãos: uma para bater vigorosamente e outra para adicionar o óleo em fio contínuo. É o truque que torna o processo muito mais fácil.",
        "steps": [
            {
                "title": "A Base da <span class=\"tooltip\" data-tooltip=\"Mistura estável de dois líquidos que normalmente não se misturam, como óleo e água. A gema e a mostarda atuam como agentes emulsionantes.\">Emulsão</span>",
                "description": "Numa tigela, junte a gema de ovo, a mostarda e o sumo de limão/vinagre. Todos os ingredientes devem estar à temperatura ambiente. Bata bem com um batedor de arames até a mistura ficar homogénea e ligeiramente mais pálida.",
                "porque": "A gema contém lecitina e a mostarda contém mucilagem, ambos são agentes emulsionantes poderosos. Eles criam a ponte entre as moléculas de gordura (óleo) e de água (limão/vinagre). A temperatura ambiente facilita esta ligação.",
                "pontoCritico": "Ingredientes frios (especialmente a gema) podem fazer com que a emulsão não se forme corretamente. Garanta que tudo está à temperatura ambiente."
            },
            {
                "title": "Adicionar o Óleo (O Passo Crítico)",
                "description": "Este é o momento que define o sucesso. Enquanto bate vigorosamente, comece a adicionar o óleo **gota a gota**. Literalmente, uma gota de cada vez no início. Assim que notar que a mistura começa a engrossar (a 'agarrar'), pode começar a adicionar o óleo num fio muito fino e contínuo.",
                "porque": "As moléculas emulsionantes precisam de tempo para 'agarrar' cada pequena gota de óleo e envolvê-la na base de água. Se adicionar demasiado óleo de uma vez, as moléculas ficam sobrecarregadas e a mistura separa-se.",
                "pontoCritico": "Paciência. Se apressar o início, a maionese vai 'talhar' (separar). Se isso acontecer, não deite fora! Numa tigela limpa, comece com uma nova gema e vá adicionando a mistura talhada aos poucos, como se fosse o óleo."
            },
            {
                "title": "Ajustar a Consistência e o Sabor",
                "description": "Continue a adicionar óleo em fio, batendo sempre, até a maionese atingir a consistência desejada. Deverá ficar espessa, cremosa e formar picos. No final, tempere com sal e pimenta branca. Prove e ajuste a acidez com mais limão, se necessário.",
                "porque": "A quantidade de óleo determina a espessura. Mais óleo resulta numa maionese mais firme. O tempero no final permite-lhe controlar o sabor perfeitamente.",
                "pontoCritico": "Se a maionese ficar demasiado espessa, adicione uma colher de chá de água morna ou sumo de limão para a diluir ligeiramente. Use pimenta branca para não criar pontinhos pretos no molho."
            }
        ],
        "variacoes": [
            "<strong>Aioli (Maionese de Alho):</strong> Esmague 1-2 dentes de alho junto com a gema no início.",
            "<strong>Com Ervas:</strong> No final, adicione salsa, cebolinho ou estragão picados.",
            "<strong>Cor e Sabor:</strong> Misture uma colher de chá de pasta de pimentão, caril em pó ou páprica fumada no final para criar maioneses com sabores diferentes."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-maionese"
    },
    "fundamentos-da-cozinha-cebola": {
        "title": "Aula 06: Cebola Caramelizada Perfeita",
        "description": "Aprenda a transformar uma simples cebola num condimento adocicado, profundo e complexo. A caramelização é uma técnica de paciência que recompensa com um sabor incrível para hambúrgueres, sopas, quiches e muito mais.",
        "calculatorLabel": "Quantidade de Cebolas Grandes:",
        "calculatorUnit": "cebola-input",
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "30-50 min",
            "tempoDescanso": "N/A",
            "rendimento": "Reduz para ~1/4 do volume inicial",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira larga e de fundo grosso",
                "Colher de pau"
            ]
        },
        "dicaDeMestre": "Para acelerar ligeiramente o processo e adicionar uma camada de sabor, adicione uma colher de sopa de vinagre balsâmico nos últimos 5 minutos de cozimento. Ajuda a intensificar a cor e adiciona uma acidez adocicada.",
        "steps": [
            {
                "title": "O Corte e a Preparação",
                "description": "Descasque as cebolas, corte-as ao meio e depois em fatias finas e uniformes. A uniformidade do corte é importante para que cozinhem por igual. Numa frigideira larga de fundo grosso, derreta a manteiga com o azeite em lume médio-baixo.",
                "porque": "Uma frigideira larga permite que as cebolas fiquem mais espalhadas, promovendo a evaporação da água e a caramelização, em vez de cozinharem a vapor. A mistura de manteiga (sabor) e azeite (ponto de fumo mais alto) é ideal.",
                "pontoCritico": "Não use lume alto. A tentação é grande, mas resultará em cebolas queimadas por fora e cruas por dentro."
            },
            {
                "title": "A Paciência da Transformação",
                "description": "Adicione as cebolas à frigideira e tempere com sal. Cozinhe em lume baixo a médio-baixo, mexendo ocasionalmente (a cada 5-10 minutos), por 30 a 50 minutos. As cebolas irão passar por várias fases: primeiro amolecem, depois ficam translúcidas, douradas e, finalmente, atingem um castanho profundo.",
                "porque": "Este processo lento quebra as moléculas de açúcar complexas da cebola em açúcares simples, que depois caramelizam, criando centenas de novos compostos de sabor. O sal ajuda a extrair a humidade da cebola, acelerando o processo.",
                "pontoCritico": "A chave é 'ocasionalmente'. Se mexer demasiado, as cebolas não ganham cor. Se mexer de menos, podem queimar. Encontre o equilíbrio.",
                "timer": 2400
            },
            {
                "title": "O <span class=\"tooltip\" data-tooltip=\"Adicionar um líquido (água, vinho, caldo) a uma panela quente para soltar os pedaços de comida caramelizados (fond) do fundo.\">Deglacear</span> (O Toque Final)",
                "description": "Quando as cebolas estiverem bem escuras e caramelizadas, um fundo acastanhado ('fond') terá se formado na frigideira. Adicione uma ou duas colheres de sopa de água (ou vinho branco/vinagre) para 'deglacear', raspando o fundo com a colher para soltar todo esse sabor. Deixe o líquido evaporar completamente.",
                "porque": "O 'fond' no fundo da panela é sabor puro e concentrado. Deglacear dissolve esse sabor e incorpora-o de volta nas cebolas, resultando num sabor final muito mais rico e complexo.",
                "pontoCritico": "Faça este passo rapidamente e com a frigideira quente para que o líquido evapore e não deixe as cebolas ensopadas."
            }
        ],
        "variacoes": [
            "<strong>Sopa de Cebola Francesa:</strong> Esta é a base perfeita para a sopa. Basta adicionar caldo de carne e tostar uma fatia de pão com queijo Gruyère por cima.",
            "<strong>Com Tomilho:</strong> Adicione alguns ramos de tomilho fresco junto com as cebolas para um aroma extra.",
            "<strong>Doce e Salgado:</strong> Use em hambúrgueres, sanduíches de queijo quente, pizzas, ou como cobertura para carnes grelhadas."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-cebola"
    },
    "fundamentos-da-cozinha-mirepoix": {
        "title": "Aula 07: Mirepoix (A Base Aromática)",
        "description": "Aprenda a fazer a 'Santíssima Trindade' da culinária clássica. O Mirepoix é uma base de vegetais aromáticos que, cozinhada lentamente, forma a espinha dorsal de sabor de inúmeras sopas, molhos e estufados.",
        "calculatorLabel": "Peso final desejado (em gramas):",
        "calculatorUnit": "mirepoix-input",
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "10-15 min",
            "tempoDescanso": "N/A",
            "rendimento": "Base para 1 receita grande",
            "dificuldade": "Fácil",
            "utensilios": [
                "Faca de Chef afiada",
                "Tábua de corte",
                "Panela ou frigideira"
            ]
        },
        "dicaDeMestre": "Pode congelar o mirepoix já refogado em pequenas porções (como em cuvetes de gelo). Depois, basta adicionar um ou dois cubos diretamente à panela para iniciar qualquer receita, poupando imenso tempo.",
        "steps": [
            {
                "title": "A Proporção Clássica 2:1:1",
                "description": "O Mirepoix tradicional consiste em **2 partes de cebola, 1 parte de cenoura e 1 parte de aipo**, por peso. Descasque a cebola e a cenoura e corte todos os três vegetais em cubos pequenos e uniformes (um corte <span class='tooltip' data-tooltip='Corte em cubos muito pequenos e uniformes, com cerca de 3mm de lado.'>brunoise</span> ou um pouco maior).",
                "porque": "A cebola é a base principal de sabor e doçura. A cenoura adiciona mais doçura e cor, enquanto o aipo contribui com um sabor ligeiramente amargo e fresco que equilibra o conjunto. A proporção é a chave para este equilíbrio clássico.",
                "pontoCritico": "O tamanho do corte depende do tempo de cozimento do prato final. Para pratos rápidos, use um corte mais fino. Para estufados longos, pode usar um corte maior."
            },
            {
                "title": "'Suar' os Vegetais (<span class=\"tooltip\" data-tooltip=\"Cozinhar vegetais em lume baixo, geralmente com tampa, para que libertem a sua humidade e amoleçam sem ganhar cor.\">Sweating</span>)",
                "description": "Numa panela em lume médio-baixo, aqueça a manteiga ou azeite. Adicione o mirepoix picado e uma pitada de sal. Cozinhe lentamente, mexendo ocasionalmente, por 10-15 minutos. O objetivo é que os vegetais fiquem muito macios e translúcidos, mas **sem dourar**.",
                "porque": "Este processo, chamado 'suar' os vegetais, quebra as suas paredes celulares e liberta os seus açúcares e sabores naturais de forma suave. Cozinhar sem dourar cria uma base de sabor limpa, doce e complexa.",
                "pontoCritico": "Mantenha o lume baixo. Se os vegetais começarem a dourar, você está a caramelizá-los, o que cria um perfil de sabor diferente (mais tostado), conhecido como 'pinçage'. Para um mirepoix clássico, evite a cor.",
                "timer": 720
            },
            {
                "title": "Pronto para Usar",
                "description": "Assim que os vegetais estiverem macios e a sua cozinha cheirar maravilhosamente bem, o mirepoix está pronto. A partir daqui, ele torna-se o primeiro passo para inúmeras receitas. Pode adicionar alho, extrato de tomate, carne para dourar, ou simplesmente cobrir com caldo para fazer uma sopa.",
                "porque": "Ter uma base de sabor bem construída é o que separa uma receita amadora de uma profissional. O mirepoix é essa base.",
                "pontoCritico": "O mirepoix não é um prato final, mas sim o começo. É a tela em branco sobre a qual você irá pintar os outros sabores da sua receita."
            }
        ],
        "variacoes": [
            "<strong>Mirepoix Branco:</strong> Substitua a cenoura por alho-francês (parte branca) para pratos de cor clara, como molhos de peixe ou veloutés.",
            "<strong>Santíssima Trindade Cajun:</strong> Na culinária da Louisiana, a cenoura é substituída por pimentão verde.",
            "<strong>Com Alho e Ervas:</strong> Adicione alho picado nos últimos minutos e/ou ervas como tomilho e louro para mais complexidade."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-mirepoix"
    },
    "fundamentos-da-cozinha-risoto": {
        "title": "Aula 08: Risoto Base (A Técnica da Cremosidade)",
        "description": "Domine a arte do risoto e abra um mundo de possibilidades na sua cozinha. Esta aula foca-se na técnica essencial para obter um risoto perfeitamente cremoso, 'al dente' e cheio de sabor, sem precisar de natas.",
        "calculatorLabel": "Chávenas de Arroz de Risoto:",
        "calculatorUnit": "risoto-input",
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "25-30 min",
            "tempoDescanso": "2 min",
            "rendimento": "2 porções por chávena",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela larga e de fundo grosso",
                "Concha",
                "Panela pequena para o caldo"
            ]
        },
        "dicaDeMestre": "O segredo da cremosidade não está nas natas, mas sim no amido do arroz. Ao mexer constantemente, você 'raspa' a camada exterior de amido de cada grão, que se dissolve no caldo e cria um molho naturalmente cremoso e aveludado.",
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo: A Preparação Essencial",
                "subSteps": [
                    {
                        "title": "O Caldo Quente",
                        "description": "O passo mais importante acontece antes de começar. Despeje o seu caldo (ver Aula 03) numa panela pequena e mantenha-o num <span class=\"tooltip\" data-tooltip=\"Cozinhar um líquido logo abaixo do ponto de fervura, com apenas algumas bolhas suaves a subir à superfície.\">simmer</span> gentil durante todo o processo.",
                        "porque": "Adicionar caldo frio ao arroz quente causaria um choque térmico, interrompendo o cozimento e impedindo que o grão liberte o seu amido de forma correta. Caldo quente garante um cozimento contínuo e cremosidade.",
                        "pontoCritico": "O caldo deve estar sempre quente ao lado da panela do risoto. É uma regra inquebrável."
                    },
                    {
                        "title": "O Sofrito",
                        "description": "Numa panela larga, derreta metade da manteiga em lume médio. Adicione a cebola picada e refogue lentamente até ficar macia e translúcida, mas sem ganhar cor (cerca de 5 minutos).",
                        "porque": "Esta base de cebola adocicada constrói a primeira camada de sabor do risoto.",
                        "pontoCritico": "Não queime a cebola. Se começar a dourar, baixe o lume."
                    }
                ]
            },
            {
                "title": "A <span class=\"tooltip\" data-tooltip=\"Termo italiano para 'tostar'. É o processo de fritar o arroz na gordura antes de adicionar o líquido, selando o exterior do grão.\">Tostatura</span> do Arroz",
                "description": "Adicione o arroz à panela e aumente um pouco o lume. Mexa constantemente por cerca de 2 minutos, até os grãos ficarem quentes ao toque e as suas bordas se tornarem translúcidas.",
                "porque": "Tostar o arroz sela o exterior do grão. Isto ajuda-o a absorver o caldo lentamente sem se desmanchar, e a libertar o amido de forma gradual, o que é essencial para a cremosidade.",
                "pontoCritico": "Não deixe o arroz ganhar cor, apenas tostar. Continue a mexer para que todos os grãos sejam aquecidos por igual.",
                "timer": 120
            },
            {
                "title": "Deglacear com Vinho",
                "description": "Adicione o vinho branco de uma só vez. Mexa constantemente enquanto o vinho borbulha e o cheiro a álcool evapora. Continue até o vinho ser quase totalmente absorvido pelo arroz.",
                "porque": "O vinho adiciona uma camada de acidez e complexidade que equilibra a riqueza do risoto. A evaporação do álcool deixa apenas o sabor.",
                "pontoCritico": "Use um vinho branco seco que você beberia. Se não for bom para beber, não será bom para cozinhar."
            },
            {
                "title": "O Cozimento com o Caldo",
                "description": "Reduza o lume para médio. Comece a adicionar o caldo quente, uma concha de cada vez. Mexa o risoto com frequência, mas não precisa de ser sem parar. Adicione a próxima concha de caldo apenas quando a anterior tiver sido quase totalmente absorvida. Repita o processo por 15 a 18 minutos.",
                "porque": "Este método de adição gradual de líquido, combinado com a agitação, é o que 'massaja' os grãos de arroz, fazendo com que libertem o seu amido cremoso. É assim que a magia acontece.",
                "pontoCritico": "Prove o arroz a partir dos 15 minutos. Ele deve estar 'al dente': cozido, mas com uma leve resistência no centro. Não o cozinhe demais!",
                "timer": 1080
            },
            {
                "title": "A <span class=\"tooltip\" data-tooltip=\"Termo italiano para 'bater com manteiga'. É o passo final de adicionar gordura (manteiga, queijo) fora do lume e bater vigorosamente para criar a emulsão final cremosa.\">Mantecatura</span> Final",
                "description": "Retire a panela do lume. Adicione a manteiga fria restante e o queijo parmesão ralado. Mexa vigorosamente por cerca de 1 minuto. O risoto ficará incrivelmente cremoso. Tape e deixe descansar por 2 minutos antes de servir.",
                "porque": "Adicionar a gordura fora do lume e bater cria uma emulsão final que dá ao risoto o seu brilho e textura aveludada característicos. A manteiga fria ajuda a estabilizar esta emulsão.",
                "pontoCritico": "Este passo deve ser feito fora do lume para não separar a gordura. O risoto deve estar 'all'onda' (ondulante), ou seja, cremoso o suficiente para se espalhar suavemente no prato, não ficar como um bolo sólido."
            }
        ],
        "variacoes": [
            "<strong>Risoto de Cogumelos:</strong> Refogue cogumelos fatiados depois da cebola e antes de adicionar o arroz.",
            "<strong>Risoto de Abóbora:</strong> Adicione puré de abóbora cozida junto com as últimas conchas de caldo.",
            "<strong>Risoto Primavera:</strong> Adicione ervilhas, espargos e outros vegetais verdes nos últimos 5 minutos de cozimento."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-risoto"
    },
    "fundamentos-da-cozinha-cortes": {
        "title": "Aula 09: Cortes Básicos de Legumes",
        "description": "Cozinhar como um chef começa com cortar como um chef. Aprender os cortes básicos não só torna os seus pratos mais bonitos, mas também garante que os ingredientes cozinhem de forma uniforme, resultando num sabor e textura superiores.",
        "calculatorLabel": "Quantidade de Legumes para praticar:",
        "calculatorUnit": "cortes-input",
        "details": {
            "tempoPreparo": "Variável",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "Uma nova habilidade!",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Faca de Chef bem afiada",
                "Tábua de corte estável"
            ]
        },
        "dicaDeMestre": "Segurança primeiro! Dobre os dedos da mão que segura o legume para dentro (a 'garra de urso'), usando os nós dos dedos como guia para a faca. A ponta da faca deve manter-se em contacto com a tábua. Nunca se apresse.",
        "steps": [
            {
                "title": "Criar uma Base Estável",
                "description": "Qualquer que seja o legume, o primeiro passo é sempre criar uma base plana e estável. Para uma cenoura ou batata, corte uma fatia fina de um dos lados. Para uma cebola, corte-a ao meio através da raiz. Coloque o lado plano virado para a tábua.",
                "porque": "Uma base estável impede que o legume role na tábua, o que é a principal causa de acidentes e cortes irregulares. É o passo de segurança mais importante.",
                "pontoCritico": "Nunca tente cortar um legume redondo sem primeiro criar uma base. Coloque um pano húmido por baixo da tábua de corte para que ela também não deslize."
            },
            {
                "title": "O Corte <span class=\"tooltip\" data-tooltip=\"Corte clássico francês em tiras muito finas e compridas, como palitos de fósforo.\">Julienne</span> (Tiras Finas)",
                "description": "Com a sua base estável, corte o legume em fatias finas e uniformes (ex: 2-3mm de espessura). Deite as fatias e empilhe-as. Agora, corte a pilha de fatias em palitos muito finos e uniformes. O resultado são tiras perfeitas, ideais para saladas, stir-fries ou como guarnição.",
                "porque": "O corte Julienne aumenta a área de superfície do legume, permitindo que cozinhe muito rapidamente ou que se misture delicadamente em saladas.",
                "pontoCritico": "A consistência é a chave. Tente fazer com que todos os palitos tenham a mesma espessura para um resultado profissional."
            },
            {
                "title": "O Corte <span class=\"tooltip\" data-tooltip=\"Corte clássico francês em cubos muito pequenos e uniformes (2-3mm), geralmente feito a partir de um corte Julienne.\">Brunoise</span> (Cubos Pequenos)",
                "description": "Comece por fazer o corte Julienne. Junte os palitos, alinhando-os. Com a ponta da faca como guia, corte os palitos transversalmente em cubos muito pequenos e uniformes. O resultado são cubos minúsculos, perfeitos para bases de molhos e sopas (<span class='tooltip' data-tooltip='Base clássica de 2 partes de cebola, 1 de cenoura e 1 de aipo, usada para dar sabor a molhos, sopas e estufados.'>mirepoix</span>).",
                "porque": "O corte Brunoise permite que os vegetais derretam na boca e libertem o seu sabor de forma uniforme num molho ou sopa, sem que se notem pedaços grandes.",
                "pontoCritico": "Mantenha os palitos Julienne bem juntos e alinhados para garantir que os cubos saiam uniformes e não em formas estranhas."
            }
        ],
        "variacoes": [
            "<strong>Bâtonnet:</strong> Um corte em palitos mais grossos, como batatas fritas (cerca de 6mm de espessura).",
            "<strong>Paysanne:</strong> Fatias finas e quadradas ou redondas, que seguem a forma natural do vegetal.",
            "<strong>Concassé:</strong> Tomates sem pele e sem sementes, cortados em cubos."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-cortes"
    },
    "fundamentos-da-cozinha-bechamel": {
        "title": "Aula 10: Molho Branco (Bechamel)",
        "description": "O Bechamel é um dos cinco 'molhos mãe' da culinária francesa. Dominar esta receita simples é abrir a porta para lasanhas, croque-monsieur, gratinados e inúmeros outros pratos cremosos e reconfortantes.",
        "calculatorLabel": "Litros de Leite:",
        "calculatorUnit": "bechamel-input",
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "10 min",
            "tempoDescanso": "N/A",
            "rendimento": "~1 litro de molho por litro de leite",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela de fundo grosso",
                "Batedor de arame (fouet)"
            ]
        },
        "dicaDeMestre": "Se o seu molho ficar com grumos, não entre em pânico! A solução mais rápida é passá-lo por um coador de malha fina. Alternativamente, alguns segundos com uma varinha mágica (mixer de mão) deixá-lo-ão perfeitamente liso e aveludado.",
        "steps": [
            {
                "title": "O <span class=\"tooltip\" data-tooltip=\"Pasta de gordura (manteiga) e farinha cozinhada, usada como agente espessante para molhos e sopas.\">Roux</span> (A Base Espessante)",
                "description": "Numa panela em lume médio, derreta a manteiga. Assim que derreter, adicione a farinha de uma só vez. Com um batedor de arames, mexa constantemente por cerca de 2 minutos. A mistura vai formar uma pasta e borbulhar.",
                "porque": "O 'roux' é o agente espessante do nosso molho. Cozinhar a farinha na manteiga por alguns minutos é essencial para eliminar o sabor de farinha crua e desagradável do resultado final.",
                "pontoCritico": "Não pare de mexer e não deixe o roux ganhar cor (a não ser que queira um 'roux blond' ou 'brun' para outros molhos). Para um Bechamel clássico, o roux deve ser branco.",
                "timer": 120
            },
            {
                "title": "Incorporar o Leite",
                "description": "Comece a adicionar o leite (quente ou à temperatura ambiente) ao roux, um pouco de cada vez. No início, adicione apenas o suficiente para transformar a pasta do roux num creme espesso, batendo vigorosamente para dissolver todos os grumos. Depois, pode adicionar o resto do leite em 2 ou 3 partes, continuando a bater.",
                "porque": "Esta adição gradual é a chave para um molho sem grumos. Diluir o roux numa pasta primeiro garante que ele se dissolverá suavemente no resto do líquido. Leite quente também ajuda a evitar grumos e acelera o processo.",
                "pontoCritico": "Use um batedor de arames (fouet), não uma colher. O batedor é muito mais eficaz para quebrar quaisquer potenciais grumos."
            },
            {
                "title": "Cozinhar até Engrossar",
                "description": "Continue a cozinhar em lume médio-baixo, mexendo regularmente (especialmente nos cantos da panela), por cerca de 5 a 10 minutos. O molho irá engrossar gradualmente até atingir uma consistência que cobre as costas de uma colher (nappé).",
                "porque": "O cozimento ativa o amido da farinha, que absorve o líquido e engrossa o molho. Este tempo também garante que o sabor da farinha esteja completamente cozido.",
                "pontoCritico": "Não pare de mexer ou o molho vai colar no fundo da panela e queimar. Raspe bem os cantos e o fundo da panela.",
                "timer": 480
            },
            {
                "title": "Finalizar e Temperar",
                "description": "Retire a panela do lume. Tempere com sal, pimenta branca (para não ter pontos pretos) e noz-moscada ralada na hora. O seu Bechamel está pronto.",
                "porque": "O tempero é sempre o último passo, permitindo um controlo preciso do sabor final. A noz-moscada é o tempero clássico e essencial do Bechamel, conferindo-lhe o seu aroma característico.",
                "pontoCritico": "Rale a noz-moscada na hora. O sabor e aroma são infinitamente superiores aos da noz-moscada pré-moída."
            }
        ],
        "variacoes": [
            "<strong>Molho Mornay (de Queijo):</strong> No final, fora do lume, adicione queijo ralado (como Gruyère, Emmental ou Cheddar) e mexa até derreter.",
            "<strong>Para Gratinar:</strong> Use uma camada generosa de Bechamel sobre lasanhas ou pratos de vegetais antes de levar ao forno.",
            "<strong>Infusão de Sabor:</strong> Aqueça o leite primeiro com meia cebola, uma folha de louro e alguns cravos-da-índia. Coe o leite antes de o adicionar ao roux para um sabor mais complexo."
        ],
        "module": "Fundamentos da Cozinha",
        "url": "fundamentos.html#receita-bechamel"
    },
    "receitas-de-carnes-bife": {
        "title": "Aula 01: O Bife Grelhado Perfeito",
        "description": "Aprenda a ciência e a arte de grelhar um bife, alcançando a combinação perfeita entre uma crosta caramelizada por fora e um interior suculento e no ponto desejado.",
        "calculatorLabel": "Peso do Bife (em gramas):",
        "calculatorUnit": "bife-input",
        "details": {
            "tempoPreparo": "35 min (inclui temp. ambiente)",
            "tempoCozimento": "4-8 min",
            "tempoDescanso": "5-10 min",
            "rendimento": "1 bife por pessoa",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Frigideira de ferro fundido ou fundo grosso",
                "Pinça de cozinha",
                "Termómetro de carne (recomendado)"
            ]
        },
        "dicaDeMestre": "Para uma crosta ainda mais saborosa (efeito 'steakhouse'), ao adicionar a manteiga no final, junte também um dente de alho esmagado e um ramo de tomilho. Incline a frigideira e regue o bife com esta manteiga aromática ('arrosage').",
        "steps": [
            {
                "title": "A Preparação da Carne",
                "description": "Retire o bife do frigorífico 30-40 minutos antes de cozinhar. Seque **muito bem** a superfície com papel toalha. Este é, talvez, o passo mais negligenciado e mais importante.",
                "porque": "A carne à temperatura ambiente cozinha de forma mais uniforme. A superfície seca é crucial para a <span class='tooltip' data-tooltip='Reação química entre aminoácidos e açúcares que ocorre com o calor, criando a crosta dourada e o sabor característico de 'assado'.'>Reação de Maillard</span>. Se a carne estiver húmida, ela irá cozinhar a vapor em vez de selar, e não criará a crosta desejada.",
                "pontoCritico": "Não tempere o bife com antecedência. O sal puxa a humidade para a superfície, o que prejudica a selagem. Tempere generosamente apenas no momento de ir para a frigideira."
            },
            {
                "title": "A Frigideira Vulcânica",
                "description": "Aqueça uma frigideira de ferro fundido ou de fundo grosso em lume alto até ficar extremamente quente. Deverá ver um leve fumo a sair dela. Adicione um fio de óleo com ponto de fumo alto (como girassol ou canola).",
                "porque": "A alta temperatura é essencial para criar uma crosta rapidamente, selando os sucos no interior da carne. Uma frigideira de material espesso retém melhor o calor e não arrefece quando a carne fria é adicionada.",
                "pontoCritico": "Não use azeite extra virgem para este passo, pois tem um ponto de fumo baixo e irá queimar. A frigideira deve estar a fumegar antes de o bife entrar."
            },
            {
                "title": "A Selagem Perfeita",
                "description": "Tempere um lado do bife com sal e pimenta e coloque-o na frigideira com esse lado para baixo. Pressione levemente. Não mexa no bife por 2-4 minutos. Tempere o lado de cima antes de virar.",
                "porque": "A ausência de movimento permite que a crosta se forme de maneira uniforme. Virar o bife constantemente 'cozinha-o' em vez de o 'grelhar'.",
                "pontoCritico": "Use uma pinça para virar o bife, nunca um garfo. Perfurar a carne faz com que os seus preciosos sucos se percam.",
                "timer": 180
            },
            {
                "title": "O Descanso Obrigatório",
                "description": "Retire o bife da frigideira para uma tábua ou grelha e deixe-o descansar por 5 a 10 minutos. O tempo de descanso deve ser, idealmente, metade do tempo de cozimento.",
                "porque": "Durante o cozimento, as fibras da carne contraem-se e empurram os sucos para o centro. O descanso permite que as fibras relaxem e os sucos se redistribuam por todo o bife, resultando numa carne muito mais suculenta.",
                "pontoCritico": "Se cortar a carne imediatamente, verá uma 'poça' de sucos a escorrer para a tábua. Isso é todo o sabor e suculência que está a perder. Seja paciente!",
                "timer": 450
            }
        ],
        "variacoes": [
            "<strong>Pontos da Carne (temp. interna):</strong> Mal passado: 52°C. Médio-mal passado: 57°C. Médio: 63°C. Médio-bem passado: 66°C.",
            "<strong>Molho de Manteiga e Ervas:</strong> Use a manteiga aromática do final para regar o bife já no prato.",
            "<strong>Com Pimenta Verde:</strong> Esmague grãos de pimenta verde e pressione sobre o bife antes de grelhar para uma crosta picante."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-bife"
    },
    "receitas-de-carnes-panela": {
        "title": "Aula 02: Carne de Panela (Estufado Perfeito)",
        "description": "Aprenda a transformar cortes de carne mais económicos em um prato rico, macio e que se desfaz à colher. O segredo está no cozimento lento e na construção de camadas de sabor.",
        "calculatorLabel": "Quilos de Carne:",
        "calculatorUnit": "panela-input",
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "2-3 horas",
            "tempoDescanso": "N/A",
            "rendimento": "Serve ~4 pessoas por kg",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela de fundo grosso (de ferro ou caçarola)",
                "Tábua de corte",
                "Colher de pau"
            ]
        },
        "dicaDeMestre": "Depois de refogar a base aromática, adicione uma colher de sopa de extrato de tomate e cozinhe por um minuto antes de adicionar o líquido. Este passo 'tosta' o extrato, aprofundando o sabor <span class='tooltip' data-tooltip='O 'quinto gosto', profundo e saboroso, encontrado em queijos curados, cogumelos e carnes.'>umami</span> e a cor do molho final.",
        "steps": [
            {
                "title": "Selar a Carne (O Passo do Sabor)",
                "description": "Seque os cubos de carne com papel toalha e tempere com sal e pimenta. Numa panela bem quente com azeite, doure a carne de todos os lados. Trabalhe em lotes, sem encher a panela. Retire a carne e reserve.",
                "porque": "Este passo não 'sela os sucos' (isso é um mito), mas cria sabor através da <span class='tooltip' data-tooltip='Reação química entre aminoácidos e açúcares que ocorre com o calor, criando a crosta dourada e o sabor característico de 'assado'.'>Reação de Maillard</span>. Os pedacinhos que ficam colados no fundo da panela (o 'fond') são a alma do nosso molho.",
                "pontoCritico": "Não sobrecarregue a panela. Se o fizer, a carne irá cozer no próprio vapor em vez de dourar, resultando numa carne cinzenta e sem sabor."
            },
            {
                "title": "Construir a Base de Sabor",
                "description": "Na mesma panela, reduza o lume e adicione a cebola e a cenoura, refogando até amaciarem. Adicione o alho e cozinhe por mais um minuto. Despeje o vinho tinto para <span class='tooltip' data-tooltip='Adicionar um líquido (vinho, conhaque, caldo) a uma panela quente para soltar os pedaços de comida caramelizados (fond) do fundo, incorporando-os ao molho.'>deglacear</span>, raspando bem o fundo da panela com uma colher de pau.",
                "porque": "Estamos a construir camadas de sabor. Os vegetais cozinham na gordura saborosa da carne, e o vinho dissolve o 'fond', trazendo todo aquele sabor concentrado para o molho.",
                "pontoCritico": "Raspe bem todo o fundo da panela. Esses pedacinhos queimados são ouro culinário."
            },
            {
                "title": "O Cozimento Lento e Mágico",
                "description": "Volte a colocar a carne na panela. Adicione o caldo quente até quase cobrir a carne, e a folha de louro. Deixe levantar fervura, reduza para o lume mais baixo possível, tape e deixe cozinhar por 2 a 3 horas.",
                "porque": "O cozimento lento e húmido quebra o colagénio (tecido conjuntivo) dos cortes de carne mais duros, transformando-o em gelatina macia que enriquece o molho e deixa a carne incrivelmente tenra.",
                "pontoCritico": "O líquido deve manter um <span class='tooltip' data-tooltip='Cozinhar um líquido logo abaixo do ponto de fervura, com apenas algumas bolhas suaves a subir à superfície.'>simmer</span> muito gentil, nunca uma fervura forte. Verifique a cada 45 minutos se precisa de mais líquido.",
                "timer": 9000
            }
        ],
        "variacoes": [
            "<strong>Com Batatas:</strong> Adicione batatas em cubos na última hora de cozimento.",
            "<strong>Com Cogumelos:</strong> Adicione cogumelos fatiados junto com a cebola e a cenoura.",
            "<strong>Na Panela de Pressão:</strong> O processo é o mesmo, mas o tempo de cozimento sob pressão reduz para cerca de 45-60 minutos."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-panela"
    },
    "receitas-de-carnes-costeleta": {
        "title": "Aula 03: Costeletas de Porco na Frigideira",
        "description": "Aprenda a técnica para nunca mais comer uma costeleta de porco seca. O segredo está na selagem correta, no controle da temperatura e em finalizar com uma manteiga aromática.",
        "calculatorLabel": "Número de Costeletas:",
        "calculatorUnit": "costeleta-input",
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "8-10 min",
            "tempoDescanso": "5 min",
            "rendimento": "1 por pessoa",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira de ferro fundido",
                "Pinça",
                "Termómetro de carne"
            ]
        },
        "dicaDeMestre": "Uma <span class='tooltip' data-tooltip='Solução de água e sal que hidrata e tempera a carne por dentro, garantindo suculência.'>salmoura</span> rápida de 30 minutos (1 litro de água para 2 colheres de sopa de sal) antes de cozinhar faz uma diferença incrível na suculência final da costeleta.",
        "steps": [
            {
                "title": "Preparar e Selar",
                "description": "Seque bem as costeletas com papel toalha e tempere generosamente com sal e pimenta. Numa frigideira quente em lume médio-alto, adicione um fio de óleo e sele as costeletas por 2-3 minutos de cada lado, até ficarem bem douradas.",
                "porque": "A superfície seca e o calor alto garantem uma excelente Reação de Maillard, criando uma crosta saborosa. Dourar a carne primeiro ajuda a manter a sua forma e sabor.",
                "pontoCritico": "Não sobrecarregue a frigideira. Se necessário, sele uma costeleta de cada vez para garantir que a temperatura da panela se mantém alta.",
                "timer": 180
            },
            {
                "title": "Aromatizar com Manteiga (<span class='tooltip' data-tooltip='Técnica de regar continuamente a carne com a gordura quente da própria frigideira, geralmente aromatizada com ervas e alho.'>Arrosage</span>)",
                "description": "Reduza o lume para médio-baixo. Adicione a manteiga, os dentes de alho esmagados e as ervas. Incline a frigideira e, com uma colher, regue constantemente as costeletas com a manteiga derretida e espumante por mais 1-2 minutos.",
                "porque": "Esta técnica não só adiciona um sabor incrível de manteiga tostada, alho e ervas, mas também ajuda a cozinhar a carne de forma mais gentil e uniforme.",
                "pontoCritico": "Cuidado para não queimar a manteiga. Ela deve espumar e ficar acastanhada (beurre noisette), mas não preta."
            },
            {
                "title": "Verificar a Temperatura e Descansar",
                "description": "O maior erro é cozinhar demais a carne de porco. Retire as costeletas da frigideira quando a temperatura interna atingir 60-61°C. Deixe-as descansar numa tábua por 5 minutos. A temperatura subirá para os 63°C ideais durante o descanso.",
                "porque": "A carne de porco moderna é segura para ser consumida ligeiramente rosada. Cozinhá-la até ficar branca resulta em carne seca. O descanso, como sempre, é crucial para a redistribuição dos sucos.",
                "pontoCritico": "Um termómetro de carne é a única forma de garantir a perfeição. É um investimento pequeno com um retorno enorme no sabor e textura.",
                "timer": 300
            }
        ],
        "variacoes": [
            "<strong>Molho Rápido de Frigideira:</strong> Depois de retirar as costeletas, deglaceie a frigideira com um pouco de vinho branco ou caldo, raspe o fundo e deixe reduzir um pouco.",
            "<strong>Agridoce:</strong> Sirva com um chutney de maçã ou um molho agridoce.",
            "<strong>Com Crosta de Ervas:</strong> Misture pão ralado com ervas picadas e pressione sobre um lado da costeleta antes de grelhar."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-costeleta"
    },
    "receitas-de-carnes-almondegas": {
        "title": "Aula 04: Almôndegas ao Sugo",
        "description": "Aprenda a fazer almôndegas clássicas, incrivelmente macias e saborosas, que cozinham lentamente num rico molho de tomate caseiro. Um prato de conforto que agrada a todas as idades.",
        "calculatorLabel": "Gramas de Carne Moída:",
        "calculatorUnit": "almondegas-input",
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "30-40 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve ~4 pessoas com 500g",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tigela grande",
                "Frigideira",
                "Panela para o molho"
            ]
        },
        "dicaDeMestre": "O segredo para almôndegas extra macias e húmidas é um 'panade': uma mistura de pão (ou pão ralado) demolhado em líquido (leite ou água). O amido e o líquido criam uma rede que retém a humidade e impede que as proteínas da carne se contraiam demasiado, resultando em maciez.",
        "steps": [
            {
                "title": "A Mistura Perfeita (Sem Exageros)",
                "description": "Numa tigela grande, faça o 'panade': desfaça o pão no leite e deixe absorver por uns minutos. Adicione a carne moída, o parmesão, o ovo, a salsa, sal e pimenta. Misture tudo com as mãos ou um garfo, mas apenas até os ingredientes estarem combinados.",
                "porque": "Trabalhar demasiado a carne desenvolve as suas proteínas (miosina), o que resulta em almôndegas duras e borrachudas. Uma mistura gentil mantém a textura leve e macia.",
                "pontoCritico": "Assim que os ingredientes estiverem ligados, pare de misturar. É o segredo número um para almôndegas tenras."
            },
            {
                "title": "Moldar e Selar",
                "description": "Com as mãos ligeiramente húmidas, molde bolas do tamanho de uma noz. Numa frigideira quente com um fio de azeite, doure as almôndegas de todos os lados. Não precisam de cozinhar por completo, o objetivo é apenas criar uma crosta saborosa.",
                "porque": "A selagem cria a Reação de Maillard, adicionando uma camada de sabor profundo que as almôndegas não teriam se fossem cozinhadas diretamente no molho. Também ajuda a manter a sua forma.",
                "pontoCritico": "Trabalhe em lotes para não arrefecer a frigideira. As almôndegas devem 'fritar', não 'cozer'."
            },
            {
                "title": "Cozinhar no Molho (Sugo)",
                "description": "Enquanto sela as almôndegas, prepare um molho de tomate simples numa panela grande, refogando a cebola e o alho e juntando o tomate. Adicione as almôndegas seladas ao molho a ferver brandamente. Deixe cozinhar em lume baixo, semi-tapado, por pelo menos 30 minutos.",
                "porque": "Cozinhar as almôndegas no molho permite uma troca de sabores fantástica: as almôndegas absorvem o sabor do tomate, e a carne e a gordura das almôndegas enriquecem o molho, tornando-o mais complexo.",
                "pontoCritico": "O molho deve manter um <span class='tooltip' data-tooltip='Cozinhar um líquido logo abaixo do ponto de fervura, com apenas algumas bolhas suaves a subir à superfície.'>simmer</span> gentil. Uma fervura forte pode desmanchar as almôndegas mais macias.",
                "timer": 1800
            }
        ],
        "variacoes": [
            "<strong>Recheadas com Queijo:</strong> Coloque um pequeno cubo de mozzarella no centro de cada almôndega antes de a enrolar.",
            "<strong>Versão Light:</strong> Use carne de peru ou frango moída e asse as almôndegas em vez de as fritar antes de as colocar no molho.",
            "<strong>Em Sanduíche (Meatball Sub):</strong> Sirva as almôndegas com o molho num pão baguete, com queijo derretido por cima."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-almondegas"
    },
    "receitas-de-carnes-rosbife": {
        "title": "Aula 05: Rosbife Caseiro Perfeito",
        "description": "Aprenda a técnica para um rosbife digno de charcutaria: uma crosta de temperos intensa por fora e um interior rosado, macio e fatiado finamente. Ideal para sanduíches ou como prato principal frio.",
        "calculatorLabel": "Peso da Peça de Carne (kg):",
        "calculatorUnit": "rosbife-input",
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "30-40 min por kg",
            "tempoDescanso": "20-30 min",
            "rendimento": "Fatias para várias sanduíches",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Frigideira que possa ir ao forno",
                "Termómetro de carne",
                "Barbante de cozinha (opcional)"
            ]
        },
        "dicaDeMestre": "Para um cozimento mais uniforme e uma forma redonda perfeita, amarre a peça de carne com barbante de cozinha a cada 2-3 cm antes de a temperar. Isto compacta a carne e garante que as pontas não cozinhem mais rápido que o centro.",
        "steps": [
            {
                "title": "A Crosta de Temperos",
                "description": "Seque bem a peça de carne. Numa tigela, misture o sal, pimenta, alho em pó e ervas. Pincele toda a superfície da carne com a mostarda Dijon e depois pressione a mistura de temperos secos por todos os lados, criando uma crosta.",
                "porque": "A mostarda atua como uma 'cola' para os temperos, garantindo que eles formem uma crosta saborosa e aderente durante o cozimento, além de adicionar a sua própria camada de sabor e acidez.",
                "pontoCritico": "Seja generoso com os temperos. A crosta é uma parte fundamental do sabor do rosbife."
            },
            {
                "title": "A Selagem Inicial",
                "description": "Numa frigideira muito quente que possa ir ao forno, adicione um fio de óleo e sele todos os lados da carne, incluindo as pontas, até criar uma crosta bem dourada e escura.",
                "porque": "A selagem em alta temperatura cria a Reação de Maillard, que é responsável pela maior parte do sabor complexo do exterior do rosbife. Este passo é puramente para sabor, não para 'selar sucos'.",
                "pontoCritico": "Gire a peça de carne com uma pinça para garantir que todos os lados, sem exceção, fiquem bem dourados."
            },
            {
                "title": "Assar com Precisão",
                "description": "Transfira a frigideira para um forno pré-aquecido a 180°C. Asse até a temperatura interna atingir o ponto desejado (52°C para mal passado/rosado é o ideal para rosbife). Use um termómetro!",
                "porque": "O forno proporciona um calor envolvente e mais gentil que a frigideira, cozinhando o interior da carne de forma uniforme sem queimar a crosta exterior. O termómetro é a única forma de garantir o ponto perfeito.",
                "pontoCritico": "Confie no termómetro, não no tempo. O tempo é apenas uma estimativa. Retirar a carne na temperatura exata é o que define um rosbife perfeito.",
                "timer": 2400
            },
            {
                "title": "O Descanso Longo e o Arrefecimento",
                "description": "Retire o rosbife do forno e coloque-o sobre uma grelha para descansar por pelo menos 20-30 minutos. Depois do descanso, envolva-o em película aderente e leve ao frigorífico por pelo menos 2 horas antes de fatiar.",
                "porque": "O descanso redistribui os sucos. O arrefecimento posterior firma a carne, o que é absolutamente essencial para conseguir fatias finíssimas sem que a carne se desfaça.",
                "pontoCritico": "Não tente fatiar o rosbife quente ou mesmo morno. A sua estrutura estará demasiado macia. A refrigeração é um passo obrigatório para o rosbife clássico de fatiar.",
                "timer": 1500
            }
        ],
        "variacoes": [
            "<strong>Para Sanduíches:</strong> Sirva as fatias finas em pão ciabatta com mostarda, rúcula e picles.",
            "<strong>Como Prato Principal:</strong> Sirva com um molho de raiz-forte (horseradish) e puré de batata.",
            "<strong>Diferentes Crostas:</strong> Experimente adicionar páprica fumada, cominhos ou sementes de coentros moídas à mistura de temperos."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-rosbife"
    },
    "receitas-de-carnes-lombo": {
        "title": "Aula 06: Lombo de Porco Assado com Ervas",
        "description": "Um assado impressionante e surpreendentemente fácil. Aprenda a técnica de selar e assar para um lombo de porco que fica húmido por dentro, dourado por fora e infundido com o aroma de alho e ervas.",
        "calculatorLabel": "Peso do Lombo (kg):",
        "calculatorUnit": "lombo-input",
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "40-60 min",
            "tempoDescanso": "10 min",
            "rendimento": "Serve ~4 pessoas por kg",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira que possa ir ao forno",
                "Termómetro de carne"
            ]
        },
        "dicaDeMestre": "O erro mais comum é cozinhar demais o lombo de porco. A regra dos '25 minutos por 500g' é apenas uma guia. Confie no termómetro: retire o lombo do forno quando atingir 61-62°C. Ele chegará aos 63°C perfeitos durante o descanso.",
        "steps": [
            {
                "title": "Preparar e Temperar",
                "description": "Seque bem a peça de lombo. Com uma faca pequena, faça pequenos furos na carne e insira lascas de alho. Esfregue toda a superfície generosamente com sal, pimenta, as folhas de ervas frescas picadas e um fio de azeite.",
                "porque": "Inserir o alho na carne infunde sabor de dentro para fora. A camada de temperos exterior criará uma crosta aromática durante a selagem e o cozimento.",
                "pontoCritico": "Não tenha medo de temperar bem. A carne de porco beneficia de um tempero robusto."
            },
            {
                "title": "Selar para Sabor",
                "description": "Numa frigideira grande e quente que possa ir ao forno, adicione um fio de azeite e sele todos os lados do lombo até ficarem bem dourados. Isto deve levar cerca de 5-8 minutos no total.",
                "porque": "A selagem cria a Reação de Maillard, que é responsável pela cor dourada e por uma camada de sabor complexo na superfície da carne.",
                "pontoCritico": "Garanta que a frigideira está bem quente antes de adicionar a carne para conseguir uma selagem rápida e eficaz."
            },
            {
                "title": "Assar com Controlo",
                "description": "Com o lombo ainda na frigideira, adicione o vinho branco para <span class='tooltip' data-tooltip='Adicionar um líquido (vinho, conhaque, caldo) a uma panela quente para soltar os pedaços de comida caramelizados (fond) do fundo.'>deglacear</span>. Leve a frigideira para o forno pré-aquecido a 180°C. Asse até a temperatura interna atingir 61-62°C.",
                "porque": "Terminar no forno permite um cozimento mais uniforme do interior da peça, sem queimar o exterior. O vinho cria um vapor aromático e a base para um molho.",
                "pontoCritico": "Mais uma vez, o termómetro é o seu melhor amigo. É a única forma de garantir um lombo suculento e não seco.",
                "timer": 3000
            },
            {
                "title": "Descansar para Suculência",
                "description": "Retire o lombo do forno, coloque-o numa tábua de corte e deixe-o descansar por 10 minutos antes de o fatiar. Pode usar os sucos que ficaram na frigideira para fazer um molho rápido.",
                "porque": "O descanso é essencial para que os sucos se redistribuam pela carne, garantindo que cada fatia seja húmida e saborosa.",
                "pontoCritico": "Não cubra o lombo firmemente com alumínio durante o descanso, pois o vapor irá amolecer a crosta que você criou. Se precisar, coloque uma folha de alumínio frouxamente por cima.",
                "timer": 600
            }
        ],
        "variacoes": [
            "<strong>Com Frutas:</strong> Asse o lombo com fatias de maçã ou pedaços de ameixa seca na frigideira.",
            "<strong>Glacê de Mel e Mostarda:</strong> Pincele o lombo com uma mistura de mel e mostarda nos últimos 10 minutos de forno.",
            "<strong>Recheado:</strong> Abra o lombo ao meio (sem separar as partes), recheie com uma mistura de espinafres, queijo e nozes, enrole e amarre antes de selar."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-lombo"
    },
    "receitas-de-carnes-frango-assado": {
        "title": "Aula 07: Frango Assado Inteiro",
        "description": "O frango assado é o prato de conforto por excelência. Nesta aula, vamos desmistificar o processo para você conseguir um frango com pele estaladiça, carne suculenta e um sabor incrível que irá impressionar toda a família.",
        "calculatorLabel": "Peso do Frango (kg):",
        "calculatorUnit": "frango-assado-input",
        "details": {
            "tempoPreparo": "20 min (+ tempo de salga a seco)",
            "tempoCozimento": "~1h 20min por 1.5kg",
            "tempoDescanso": "15 min",
            "rendimento": "4-6 porções",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Assadeira",
                "Barbante de cozinha",
                "Papel toalha",
                "Pincel de cozinha"
            ]
        },
        "dicaDeMestre": "Para um sabor ainda mais profundo, prepare uma manteiga composta: amasse manteiga amolecida com alho picado, raspas de limão, salsa, tomilho e alecrim. Com cuidado, solte a pele do peito do frango e espalhe esta manteiga por baixo da pele antes de assar.",
        "steps": [
            {
                "title": "A Preparação (Salga a Seco)",
                "description": "Seque a ave por completo com papel toalha. Tempere generosamente toda a superfície e a cavidade com sal e pimenta. Se tiver tempo, deixe o frango descoberto no frigorífico por pelo menos 1 hora (ou até 24 horas).",
                "porque": "A salga a seco desidrata a pele, o que é o segredo número um para uma pele ultra crocante após assar.",
                "pontoCritico": "Não lave o frango! Isso espalha bactérias pela cozinha e adiciona humidade, que é inimiga da pele crocante."
            },
            {
                "title": "Amarrar e Aromatizar",
                "description": "Pré-aqueça o forno a 200°C. Coloque o limão e o alho cortados ao meio dentro da cavidade do frango com as ervas. Amarre as pernas com barbante de cozinha para garantir um cozimento uniforme.",
                "porque": "Amarrar o frango (trussing) garante que ele cozinhe de forma mais uniforme. Os aromáticos na cavidade libertam vapor saboroso que perfuma a carne de dentro para fora.",
                "pontoCritico": "Não encha demasiado a cavidade, pois o ar quente precisa de circular."
            },
            {
                "title": "Assar com Perfeição",
                "description": "Coloque o frango numa assadeira. Pincele toda a pele com azeite ou manteiga derretida. Asse por cerca de 20 minutos por cada 500g, mais 20 minutos extra (ex: 1.5kg = 80min).",
                "porque": "A gordura na pele ajuda na condução do calor e a dourar. A temperatura interna é o guia mais fiável.",
                "pontoCritico": "Use um termómetro na parte mais grossa da coxa (sem tocar no osso). O frango está pronto quando atinge 74°C.",
                "timer": 4800
            },
            {
                "title": "O Descanso Dourado",
                "description": "Retire o frango do forno e deixe-o descansar por 15 minutos antes de cortar.",
                "porque": "O descanso permite a redistribuição dos sucos, mantendo a carne (especialmente o peito) húmida.",
                "pontoCritico": "Durante o descanso, o frango libertará mais sucos. Não os desperdice! Despeje-os sobre o frango fatiado ou use-os para fazer um molho."
            }
        ],
        "variacoes": [
            "<strong>Cama de Legumes:</strong> Asse o frango sobre uma cama de batatas, cenouras e cebolas.",
            "<strong>Frango à Cerveja:</strong> Asse o frango 'sentado' numa lata de cerveja meio cheia para uma carne incrivelmente húmida.",
            "<strong>Especiarias do Mundo:</strong> Esfregue o frango com páprica fumada e cominhos para um toque espanhol."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-frango-assado"
    },
    "receitas-de-carnes-salmao": {
        "title": "Aula 08: Salmão Grelhado com Pele Crocante",
        "description": "Aprenda a técnica de restaurante para um salmão no ponto perfeito – húmido e lascando facilmente – com uma pele tão crocante que é a melhor parte do prato.",
        "calculatorLabel": "Postas de Salmão (180g cada):",
        "calculatorUnit": "salmao-input",
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "6-8 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 por pessoa",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira antiaderente de boa qualidade",
                "Espátula de peixe (flexível)"
            ]
        },
        "dicaDeMestre": "Depois de colocar o salmão na frigideira (pele para baixo), use a espátula para pressionar levemente o topo do filé por 10 a 15 segundos. Isso evita que a pele se contraia e enrole, garantindo um contacto total com a panela e uma crocância uniforme.",
        "steps": [
            {
                "title": "A Preparação do Peixe",
                "description": "Retire o salmão do frigorífico 15 minutos antes. Use a parte de trás de uma faca para 'raspar' a pele e remover qualquer excesso de humidade ou escamas. Seque a pele **muito bem** com papel toalha. Tempere ambos os lados generosamente com sal e pimenta.",
                "porque": "A pele seca é o segredo absoluto para a crocância. Qualquer humidade irá criar vapor e impedir que a pele frite e fique estaladiça.",
                "pontoCritico": "Não pule este passo de secagem. É a diferença entre uma pele borrachenta e uma pele perfeitamente crocante."
            },
            {
                "title": "Grelhar com a Pele para Baixo",
                "description": "Aqueça uma frigideira antiaderente em lume médio-alto com um fio de óleo. Quando o óleo estiver quente e a brilhar, coloque o salmão com a pele para baixo. Pressione-o com uma espátula por 15 segundos. Reduza o lume para médio e deixe cozinhar por 4-6 minutos.",
                "porque": "Cozinhar a maior parte do tempo com a pele para baixo protege a carne delicada do salmão do calor direto. A gordura da pele derrete e ajuda a 'fritar' a própria pele, deixando-a estaladiça.",
                "pontoCritico": "Você verá a linha de cozimento a subir pela lateral do filé. Quando estiver cozido em cerca de 75% do caminho, está na hora de virar.",
                "timer": 300
            },
            {
                "title": "O 'Beijo' Final",
                "description": "Vire o salmão e cozinhe por apenas mais 30 a 60 segundos do outro lado. O objetivo é apenas terminar o cozimento do topo, não criar uma crosta do lado da carne. Retire da frigideira e sirva imediatamente.",
                "porque": "Este 'beijo' de calor é tudo o que a carne precisa para ficar no ponto sem secar. Cozinhar demais este lado resultaria num peixe seco.",
                "pontoCritico": "Sirva sempre com a pele crocante virada para cima para que não amoleça em contacto com o molho ou acompanhamento no prato."
            }
        ],
        "variacoes": [
            "<strong>Molho de Limão e Manteiga:</strong> Na mesma frigideira, depois de retirar o salmão, adicione sumo de limão e manteiga para um molho rápido.",
            "<strong>Com Endro (Dill):</strong> Sirva com um molho de iogurte e endro fresco.",
            "<strong>Asiático:</strong> Pincele com uma mistura de molho de soja, mel e gengibre antes de servir."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-salmao"
    },
    "receitas-de-carnes-bolonhesa": {
        "title": "Aula 09: Molho Bolonhesa Clássico",
        "description": "Aprenda a fazer um verdadeiro Ragù alla Bolognese, um molho de carne rico, complexo e cozinhado lentamente, muito diferente das versões rápidas. É a alma de uma grande lasanha ou de um tagliatelle fresco.",
        "calculatorLabel": "Gramas de Carne Moída:",
        "calculatorUnit": "bolonhesa-input",
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "2-4 horas",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 6-8 pessoas por kg",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela de fundo grosso (caçarola)",
                "Colher de pau"
            ]
        },
        "dicaDeMestre": "O segredo de um bolonhesa autêntico é o cozimento longo e o uso de leite. Adicionar leite à carne e deixá-lo evaporar antes do vinho torna a carne mais tenra e o molho final mais cremoso e equilibrado.",
        "steps": [
            {
                "title": "A Base de Sabor (Sofrito)",
                "description": "Numa panela grande de fundo grosso, cozinhe a pancetta em lume médio até libertar a sua gordura. Adicione o <span class='tooltip' data-tooltip='Base clássica de 2 partes de cebola, 1 de cenoura e 1 de aipo.'>mirepoix</span> picado e refogue lentamente na gordura da pancetta por cerca de 10 minutos, até os vegetais estarem muito macios e adocicados.",
                "porque": "A gordura da pancetta cria uma base de sabor rica e salgada. Cozinhar o mirepoix lentamente ('suar') liberta os seus açúcares e constrói a fundação do molho.",
                "pontoCritico": "Não apresse o sofrito. A paciência aqui é recompensada com um sabor final muito mais profundo."
            },
            {
                "title": "Cozinhar a Carne e os Líquidos",
                "description": "Adicione a carne moída, aumente o lume e cozinhe, desfazendo-a com uma colher, até toda a humidade evaporar e a carne começar a fritar e a dourar. Adicione o leite e cozinhe, mexendo, até evaporar por completo. Repita o processo com o vinho.",
                "porque": "Dourar bem a carne cria a Reação de Maillard. O leite amacia as fibras da carne. O vinho adiciona acidez. Deixar cada líquido evaporar completamente antes de adicionar o próximo permite que cada sabor penetre na carne de forma distinta.",
                "pontoCritico": "É crucial que cada líquido evapore completamente. Você deve ouvir a carne a 'fritar' novamente antes de adicionar o próximo ingrediente."
            },
            {
                "title": "O Cozimento Lento e Longo",
                "description": "Adicione o tomate amassado, o caldo, sal e pimenta. Deixe levantar fervura, reduza para o lume mais baixo possível, de modo que o molho borbulhe muito gentilmente. Cozinhe, semi-tapado, por pelo menos 2 a 3 horas.",
                "porque": "Este é o segredo de um verdadeiro ragù. O tempo funde todos os sabores, quebra as fibras da carne e cria um molho espesso, rico e aveludado. A complexidade do sabor aumenta exponencialmente com o tempo.",
                "pontoCritico": "Mexa a cada 30 minutos para garantir que não cola no fundo. Se o molho secar demais, adicione um pouco mais de caldo ou água.",
                "timer": 9000
            }
        ],
        "variacoes": [
            "<strong>Com Louro:</strong> Adicione uma folha de louro junto com o tomate.",
            "<strong>Finalização:</strong> Tradicionalmente, não leva muitas ervas. É servido simplesmente com massa fresca (tagliatelle) e queijo parmesão ralado na hora.",
            "<strong>Congelamento:</strong> Bolonhesa congela extremamente bem, e o sabor fica ainda melhor no dia seguinte."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-bolonhesa"
    },
    "receitas-de-carnes-pure": {
        "title": "Aula 10: Puré de Batata Cremoso",
        "description": "O acompanhamento perfeito para quase tudo. Aprenda a técnica para um puré de batata aveludado, rico, cremoso e completamente livre de grumos ou textura 'cola'.",
        "calculatorLabel": "Quilos de Batata:",
        "calculatorUnit": "pure-input",
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas por kg",
            "dificuldade": "Fácil",
            "utensilios": [
                "Espremedor de batata ou passe-vite",
                "Panela grande",
                "Batedor de arame (fouet)"
            ]
        },
        "dicaDeMestre": "O maior inimigo de um puré cremoso é a água. Depois de escorrer as batatas, volte a colocá-las na panela quente em lume baixo por um minuto. Isso fará com que qualquer excesso de humidade evapore, resultando num puré que absorve melhor a manteiga e o leite.",
        "steps": [
            {
                "title": "Cozinhar as Batatas",
                "description": "Descasque as batatas e corte-as em pedaços uniformes. Coloque-as numa panela, cubra com água fria e adicione uma boa quantidade de sal. Leve a ferver e cozinhe até as batatas estarem muito macias (um garfo deve entrar e sair sem qualquer resistência).",
                "porque": "Começar com água fria cozinha as batatas de forma mais uniforme. Salgar a água tempera as batatas de dentro para fora. Cozinhá-las até estarem a desfazer-se facilita o processo de as espremer.",
                "pontoCritico": "Não cozinhe as batatas de menos. Se estiverem duras, o puré ficará com grumos."
            },
            {
                "title": "Espremer, Nunca Bater",
                "description": "Escorra bem a água. Passe as batatas quentes por um espremedor de batata ou um <span class='tooltip' data-tooltip='Utensílio de cozinha que mói e coa alimentos moles, ideal para purés lisos.'>passe-vite</span> para uma tigela. Nunca use um processador de alimentos ou liquidificador.",
                "porque": "Um espremedor ou passe-vite cria uma textura leve e fofa. Um processador ou liquidificador trabalha demais o amido da batata, quebrando as suas células e libertando amido em excesso, o que transforma o puré numa pasta elástica e 'cola'.",
                "pontoCritico": "Esprema as batatas enquanto ainda estão quentes. É muito mais fácil e resulta numa textura melhor."
            },
            {
                "title": "A Cremosidade Final",
                "description": "Com as batatas espremidas na tigela, adicione a manteiga fria em cubos e incorpore com um batedor de arames ou espátula. Aos poucos, adicione o leite ou as natas quentes, mexendo suavemente até atingir a consistência desejada. Tempere com sal, pimenta branca e noz-moscada ralada na hora.",
                "porque": "Adicionar a manteiga primeiro reveste as moléculas de amido com gordura, resultando num puré mais rico. O líquido quente é absorvido mais facilmente, mantendo o puré quente e cremoso.",
                "pontoCritico": "Adicione o líquido aos poucos. É fácil adicionar mais, mas impossível de remover se o puré ficar demasiado líquido."
            }
        ],
        "variacoes": [
            "<strong>Puré de Alho Assado:</strong> Asse uma cabeça de alho no forno, esprema os dentes e misture no puré.",
            "<strong>Com Queijo:</strong> Misture queijo parmesão, gruyère ou cheddar ralado no final.",
            "<strong>Com Ervas:</strong> Adicione cebolinho, salsa ou tomilho picados para um toque de frescura."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-pure"
    },
    "receitas-de-carnes-vinagrete": {
        "title": "Aula 11: Vinagrete Básico",
        "description": "Aprenda a fazer um molho de salada clássico e versátil. Dominar a proporção e a técnica da emulsão do vinagrete é um superpoder na cozinha, permitindo-lhe temperar qualquer salada na perfeição.",
        "calculatorLabel": "Quantidade de Azeite (ml):",
        "calculatorUnit": "vinagrete-input",
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "Molho para várias saladas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tigela",
                "Batedor de arame (fouet) ou frasco com tampa"
            ]
        },
        "dicaDeMestre": "O método mais fácil e rápido: coloque todos os ingredientes num frasco com tampa, feche bem e agite vigorosamente por 15 segundos. A emulsão forma-se perfeitamente e pode guardar o que sobrar no mesmo frasco, no frigorífico.",
        "steps": [
            {
                "title": "A Proporção Clássica 3:1",
                "description": "A regra de ouro para um vinagrete equilibrado é **3 partes de gordura (azeite) para 1 parte de ácido (vinagre)**. Numa tigela, junte o vinagre, a mostarda Dijon, o sal e a pimenta. Bata com um batedor de arames para dissolver o sal.",
                "porque": "Esta proporção cria um equilíbrio perfeito entre a riqueza do azeite e a acidez do vinagre. A mostarda não só adiciona sabor, mas atua como um <span class='tooltip' data-tooltip='Agente que ajuda a misturar e estabilizar dois líquidos que normalmente não se misturam, como óleo e água.'>emulsionante</span>, ajudando a unir o molho.",
                "pontoCritico": "Dissolver o sal no vinagre antes de adicionar o azeite é importante, pois o sal não se dissolve facilmente em gordura."
            },
            {
                "title": "A <span class=\"tooltip\" data-tooltip=\"Mistura estável de dois líquidos que normalmente não se misturam. Neste caso, o azeite e o vinagre são unidos pela mostarda.\">Emulsão</span>",
                "description": "Enquanto bate continuamente com o batedor de arames, comece a adicionar o azeite num fio fino e constante. Continue a bater até todo o azeite ser incorporado e o molho engrossar ligeiramente, formando uma mistura estável.",
                "porque": "Adicionar o azeite lentamente enquanto se bate quebra-o em gotículas minúsculas que são suspensas no vinagre, com a ajuda da mostarda. É isto que cria um molho homogéneo em vez de duas camadas separadas.",
                "pontoCritico": "Não precisa de ser tão lento como na maionese, mas adicionar o azeite em fio em vez de tudo de uma vez resulta numa emulsão mais estável e duradoura."
            }
        ],
        "variacoes": [
            "<strong>Com Mel:</strong> Adicione uma colher de chá de mel para um toque agridoce, ideal para saladas com queijo de cabra ou nozes.",
            "<strong>Com Alho:</strong> Adicione um dente de alho muito finamente picado ou esmagado.",
            "<strong>Com Ervas Frescas:</strong> No final, junte salsa, cebolinho ou orégãos frescos picados."
        ],
        "module": "Receitas de Carnes",
        "url": "carnes.html#receita-vinagrete"
    },
    "receitas-com-aves-frango-grelhado": {
        "title": "Aula 01: Peito de Frango Grelhado (Suculento)",
        "description": "Aprenda a dominar a arte do peito de frango grelhado. Com esta técnica, você obterá um resultado incrivelmente suculento e saboroso, perfeito para saladas, sanduíches ou como prato principal. Nunca mais sirva um frango seco!",
        "calculatorLabel": "Nº de Peitos de Frango:",
        "calculatorUnit": "frango-grelhado-input",
        "details": {
            "tempoPreparo": "5 min (+15 min de salmoura)",
            "tempoCozimento": "10-14 min",
            "tempoDescanso": "5 min",
            "rendimento": "1 porção por peito",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira de fundo grosso",
                "Pinça de cozinha",
                "Papel toalha",
                "Termómetro de carne (opcional, mas recomendado)"
            ]
        },
        "dicaDeMestre": "Para saber o ponto perfeito sem termómetro, pressione o frango com o dedo. Se estiver macio e elástico como a parte gordinha da sua mão na base do polegar, está pronto. Se estiver firme, passou do ponto.",
        "steps": [
            {
                "title": "A <span class=\"tooltip\" data-tooltip=\"Solução de água e sal que hidrata e tempera a carne por dentro.\">Salmoura</span> Rápida (Opcional, mas Revolucionário)",
                "description": "Numa taça, dissolva completamente o sal na água fria. Mergulhe os peitos de frango, garantindo que estão totalmente submersos. Deixe repousar por 15 a 30 minutos na bancada.",
                "porque": "A salmoura (brine) é uma solução de sal que, por osmose, ajuda as fibras da carne a absorver e reter mais humidade. Isto resulta num frango que se mantém húmido e bem temperado por dentro mesmo após o cozimento em alta temperatura.",
                "pontoCritico": "Não ultrapasse os 30 minutos, ou o frango pode ficar salgado demais. É crucial secar muito bem a superfície do frango após a salmoura para garantir que ele doure (reação de Maillard) em vez de cozinhar a vapor.",
                "timer": 900
            },
            {
                "title": "Preparação e Temperos",
                "description": "Retire o frango da salmoura e seque-o meticulosamente com papel toalha em todos os lados. Regue com azeite e tempere generosamente com pimenta preta. Se não fez a salmoura, tempere agora também com sal.",
                "porque": "Uma superfície seca é essencial para a Reação de Maillard, que cria a crosta dourada e saborosa. O azeite ajuda a conduzir o calor uniformemente e evita que o frango cole na frigideira.",
                "pontoCritico": "Seque, seque e seque mais um pouco! Qualquer humidade na superfície irá gerar vapor e impedir a formação da crosta desejada."
            },
            {
                "title": "Grelhar com Precisão",
                "description": "Aqueça uma frigideira de fundo grosso em lume médio-alto até ficar bem quente. Coloque o peito de frango e não o mova por 5-7 minutos. Vire e cozinhe por mais 5-7 minutos do outro lado, ou até um termómetro interno marcar 72°C.",
                "porque": "O lume alto cria a crosta rapidamente, selando os sucos no interior. Não mover o frango permite que a crosta se forme de maneira uniforme. Cozinhar até a temperatura correta evita que o frango fique cru ou seco.",
                "pontoCritico": "Resista à tentação de virar o frango a toda a hora. A temperatura interna continuará a subir alguns graus durante o descanso, por isso retirá-lo aos 72°C é o ideal para que atinja os 74°C (ponto seguro) sem passar do ponto.",
                "timer": 360
            },
            {
                "title": "O Descanso Essencial",
                "description": "Retire o frango da frigideira para uma tábua de corte e deixe-o descansar por pelo menos 5 minutos antes de fatiar.",
                "porque": "Durante o cozimento, os sucos da carne concentram-se no centro. O descanso permite que esses sucos se redistribuam por todo o peito, garantindo que cada fatia seja húmida e saborosa.",
                "pontoCritico": "Se cortar o frango imediatamente, todos os sucos valiosos escorrerão para a tábua, resultando numa carne seca e sem graça. Não salte este passo!",
                "timer": 300
            }
        ],
        "variacoes": [
            "<strong>Ervas e Especiarias:</strong> Adicione alho em pó, páprica fumada, orégãos secos ou pimenta caiena aos temperos para variar o sabor.",
            "<strong>Marinada Cítrica:</strong> Em vez da salmoura, marine o frango por 30 minutos numa mistura de azeite, sumo de limão, alho picado e salsa.",
            "<strong>Finalização com Manteiga:</strong> No último minuto na frigideira, adicione uma colher de manteiga, um dente de alho esmagado e um ramo de tomilho. Incline a frigideira e regue o frango com a manteiga espumante."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-frango-grelhado"
    },
    "receitas-com-aves-frango-assado": {
        "title": "Aula 02: Frango Assado Inteiro",
        "description": "O frango assado é o prato de conforto por excelência. Nesta aula, vamos desmistificar o processo para você conseguir um frango com pele estaladiça, carne suculenta e um sabor incrível que irá impressionar toda a família.",
        "calculatorLabel": "Peso do Frango (kg):",
        "calculatorUnit": "frango-assado-input",
        "details": {
            "tempoPreparo": "20 min (+ tempo de salga a seco)",
            "tempoCozimento": "~1h 20min por 1.5kg",
            "tempoDescanso": "15 min",
            "rendimento": "4-6 porções",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Assadeira",
                "Barbante de cozinha",
                "Papel toalha",
                "Pincel de cozinha"
            ]
        },
        "dicaDeMestre": "Para um sabor ainda mais profundo, prepare uma manteiga composta: amasse manteiga amolecida com alho picado, raspas de limão, salsa, tomilho e alecrim. Com cuidado, solte a pele do peito do frango e espalhe esta manteiga por baixo da pele antes de assar.",
        "steps": [
            {
                "title": "A Preparação (Salga a Seco)",
                "description": "Retire os miúdos de dentro do frango. Seque a ave por completo, por dentro e por fora, com papel toalha. Tempere generosamente toda a superfície e a cavidade com sal e pimenta. Se tiver tempo, deixe o frango descoberto no frigorífico por pelo menos 1 hora (ou até 24 horas).",
                "porque": "A salga a seco (dry brine) atua como a salmoura, temperando a carne profundamente. Deixar o frango descoberto no frio desidrata a pele, o que é o segredo número um para uma pele ultra crocante após assar.",
                "pontoCritico": "Não lave o frango! Isso espalha bactérias pela cozinha e adiciona humidade, que é inimiga da pele crocante. A secagem com papel toalha é fundamental."
            },
            {
                "title": "Amarrar e Aromatizar",
                "description": "Pré-aqueça o forno a 200°C. Corte o limão e a cabeça de alho ao meio e coloque-os dentro da cavidade do frango, juntamente com os ramos de ervas. Cruzes as pernas do frango e amarre-as com barbante de cozinha. Dobre as pontas das asas para baixo do corpo.",
                "porque": "Amarrar o frango (trussing) garante que ele cozinhe de forma mais uniforme, evitando que as pernas e asas cozinhem rápido demais. Os aromáticos na cavidade libertam vapor saboroso que perfuma a carne de dentro para fora.",
                "pontoCritico": "Não encha demasiado a cavidade, pois o ar quente precisa de circular. Amarrar firmemente é importante para a forma final do frango."
            },
            {
                "title": "Assar com Perfeição",
                "description": "Coloque o frango numa assadeira, com o peito para cima. Pincele toda a pele com azeite ou manteiga derretida. Asse por cerca de 20 minutos por cada 500g, mais 20 minutos extra (ex: 1.5kg = 60min + 20min = 80min).",
                "porque": "A gordura na pele ajuda na condução do calor e a dourar. O tempo de cozimento é uma estimativa; a temperatura interna é o guia mais fiável.",
                "pontoCritico": "O método mais seguro é usar um termómetro de carne na parte mais grossa da coxa (sem tocar no osso). O frango está pronto quando atinge 74°C. Se o peito começar a dourar demasiado rápido, cubra-o frouxamente com papel de alumínio.",
                "timer": 4800
            },
            {
                "title": "O Descanso Dourado",
                "description": "Retire o frango do forno e transfira-o para uma tábua. Deixe-o descansar por 15 minutos antes de cortar.",
                "porque": "Tal como no frango grelhado, o descanso é vital. Num frango inteiro, é ainda mais importante, pois permite a redistribuição de uma grande quantidade de sucos, mantendo a carne (especialmente o peito) húmida.",
                "pontoCritico": "Durante o descanso, o frango libertará mais sucos na tábua. Não os desperdice! Despeje-os sobre o frango fatiado ou use-os para fazer um molho rápido."
            }
        ],
        "variacoes": [
            "<strong>Cama de Legumes:</strong> Asse o frango sobre uma cama de batatas, cenouras, cebolas e alho. Os legumes cozinharão nos sucos do frango, criando um acompanhamento delicioso.",
            "<strong>Frango à Cerveja:</strong> Em vez dos aromáticos na cavidade, coloque uma lata de cerveja (meio cheia) no interior do frango e asse-o 'sentado' na lata. A cerveja evapora e deixa a carne incrivelmente húmida.",
            "<strong>Especiarias do Mundo:</strong> Experimente esfregar o frango com páprica fumada e cominhos para um toque espanhol, ou com açafrão, gengibre e canela para um sabor marroquino."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-frango-assado"
    },
    "receitas-com-aves-strogonoff": {
        "title": "Aula 03: Strogonoff de Frango Clássico",
        "description": "Esqueça os strogonoffs sem graça. Nesta aula, você aprenderá a fazer a versão clássica, cremosa e cheia de sabor, com frango dourado e cogumelos frescos, finalizado de uma forma que garante a máxima cremosidade.",
        "calculatorLabel": "Gramas de Frango:",
        "calculatorUnit": "strogonoff-input",
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "20 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4 pessoas (com 500g)",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira larga",
                "Tábua de corte",
                "Faca afiada"
            ]
        },
        "dicaDeMestre": "Para um toque de requinte, <span class=\"tooltip\" data-tooltip=\"Adicionar um líquido (vinho, conhaque, caldo) a uma panela quente para soltar os pedaços de comida caramelizados do fundo, incorporando-os ao molho.\">deglaceie</span> a frigideira com um cálice de conhaque ou brandy depois de refogar os cogumelos e antes de voltar com o frango. Deixe o álcool evaporar completamente. Isso adiciona uma camada incrível de sabor ao molho.",
        "steps": [
            {
                "title": "Dourar o Frango",
                "description": "Tempere os cubos de frango com sal e pimenta. Aqueça um fio de azeite numa frigideira larga em lume médio-alto. Doure o frango em lotes, sem amontoar, até que todos os lados estejam bem dourados. Retire e reserve.",
                "porque": "Dourar o frango em lotes (Reação de Maillard) cria uma crosta saborosa e deixa 'fond' (pequenos pedaços caramelizados) na frigideira, que é a base de sabor do nosso molho. Amontoar o frango faria com que ele cozinhasse no próprio vapor, ficando pálido e borrachudo.",
                "pontoCritico": "Não sobrecarregue a frigideira! É o erro mais comum. A paciência de dourar em 2 ou 3 lotes é recompensada com um sabor muito superior."
            },
            {
                "title": "Construir o Molho",
                "description": "Na mesma frigideira, adicione mais um pouco de azeite se necessário. Refogue a cebola até ficar translúcida. Adicione o alho e os cogumelos fatiados e cozinhe até os cogumelos libertarem a sua água e começarem a dourar. Adicione o ketchup e a mostarda e cozinhe por 1 minuto, mexendo.",
                "porque": "Cozinhar os aromáticos e os cogumelos na gordura e no 'fond' do frango constrói camadas de sabor. Cozinhar o ketchup e a mostarda por um minuto concentra o seu sabor e remove a acidez crua.",
                "pontoCritico": "Não adicione os cogumelos com a cebola. Deixe a cebola amaciar primeiro, depois adicione os cogumelos. Se os cogumelos ficarem apertados, cozinhe-os em lotes também."
            },
            {
                "title": "A Finalização Cremosa",
                "description": "Volte com o frango (e quaisquer sucos acumulados) para a frigideira. Envolva tudo no molho. Desligue o lume. Espere 30 segundos e só então adicione as natas (creme de leite). Misture suavemente para incorporar. Prove e ajuste o sal e a pimenta.",
                "porque": "Adicionar as natas com o lume desligado é o segredo para evitar que o molho talhe (separe). O calor residual da panela é suficiente para aquecer as natas sem fervê-las.",
                "pontoCritico": "JAMAIS deixe o strogonoff ferver depois de adicionar as natas. Isso irá estragar a textura aveludada do molho. Sirva imediatamente."
            }
        ],
        "variacoes": [
            "<strong>Strogonoff de Carne:</strong> Substitua o frango por tiras de filé mignon ou alcatra.",
            "<strong>Cogumelos Variados:</strong> Use um mix de cogumelos como shitake e portobello para um sabor mais complexo.",
            "<strong>Acompanhamento Clássico:</strong> Sirva com arroz branco e batata palha fininha e crocante."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-strogonoff"
    },
    "receitas-com-aves-coxas-assadas": {
        "title": "Aula 04: Coxas de Frango Assadas com Batatas",
        "description": "A refeição de tabuleiro definitiva. Prática, deliciosa e com o mínimo de louça para lavar. Aprenda a técnica para obter coxas de frango com pele crocante e batatas douradas e macias, tudo na mesma assadeira.",
        "calculatorLabel": "Número de Coxas de Frango:",
        "calculatorUnit": "coxas-assadas-input",
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "45-55 min",
            "tempoDescanso": "5 min",
            "rendimento": "1 coxa por pessoa",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tabuleiro grande",
                "Tigela grande",
                "Papel toalha"
            ]
        },
        "dicaDeMestre": "Para batatas ainda mais crocantes, faça uma pré-cozedura. Ferva as batatas cortadas em água com sal por 7-10 minutos. Escorra bem e agite-as no escorredor para 'arrepiar' as bordas. Essas bordas ficarão incrivelmente crocantes no forno.",
        "steps": [
            {
                "title": "Preparar o Tabuleiro",
                "description": "Pré-aqueça o forno a 200°C. Seque muito bem as coxas de frango com papel toalha. Descasque as batatas e corte-as em pedaços de tamanho uniforme (cerca de 3-4 cm).",
                "porque": "Pele de frango seca é sinónimo de pele crocante. Batatas de tamanho uniforme garantem que todas cozinhem ao mesmo tempo.",
                "pontoCritico": "Não pule a secagem do frango, é o passo mais importante para a textura da pele. Se as batatas forem muito grandes, demorarão mais a cozinhar que o frango."
            },
            {
                "title": "Temperar Generosamente",
                "description": "Numa tigela grande, junte as coxas de frango e as batatas. Regue com azeite e polvilhe com sal, pimenta, páprica e alho em pó. Use as mãos para misturar tudo muito bem, garantindo que cada peça esteja uniformemente coberta.",
                "porque": "Temperar tudo junto na tigela garante uma cobertura de temperos e gordura muito mais eficaz do que tentar temperar já no tabuleiro.",
                "pontoCritico": "Seja generoso com o tempero, especialmente o sal. Batatas absorvem muito sal."
            },
            {
                "title": "Assar em Camada Única",
                "description": "Disponha o frango e as batatas num tabuleiro grande, numa única camada, sem sobrepor. Deixe algum espaço entre as peças. Coloque os ramos de ervas por cima. Asse por 45-55 minutos, virando as batatas a meio do tempo, até o frango estar cozido (74°C) e a pele bem dourada e crocante.",
                "porque": "O espaço entre as peças permite que o ar quente circule, assando e dourando em vez de cozinhar a vapor. A camada única é a regra de ouro para assados.",
                "pontoCritico": "Se o tabuleiro ficar muito cheio, use dois! É preferível a amontoar tudo num só. O frango estará cozido quando os sucos saírem limpos ao perfurar a parte mais grossa."
            }
        ],
        "variacoes": [
            "<strong>Outros Vegetais:</strong> Adicione pedaços de cenoura, cebola roxa ou pimentão ao tabuleiro nos últimos 20 minutos.",
            "<strong>Toque Cítrico:</strong> Esprema o sumo de meio limão sobre tudo antes de levar ao forno.",
            "<strong>Versão Picante:</strong> Adicione uma colher de chá de pimenta caiena ou flocos de pimenta seca à mistura de temperos."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-coxas-assadas"
    },
    "receitas-com-aves-frango-xadrez": {
        "title": "Aula 05: Frango Xadrez",
        "description": "Aprenda a fazer em casa este ícone da cozinha sino-americana, com pedaços de frango macios, vegetais crocantes e um molho agridoce e salgado na medida certa. O segredo está na preparação (mise en place) e na alta temperatura.",
        "calculatorLabel": "Gramas de Frango:",
        "calculatorUnit": "frango-xadrez-input",
        "details": {
            "tempoPreparo": "25 min",
            "tempoCozimento": "10-15 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 3-4 pessoas (com 500g)",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Wok ou frigideira grande",
                "Tigelas para mise en place",
                "Faca afiada"
            ]
        },
        "dicaDeMestre": "O segredo do sucesso de qualquer stir-fry é o '<span class=\"tooltip\" data-tooltip=\"Termo francês que significa 'tudo no seu lugar'. É o processo de preparar e organizar todos os ingredientes antes de começar a cozinhar.\">mise en place</span>'. Tenha TODOS os ingredientes cortados, os molhos medidos e tudo ao lado do fogão ANTES de ligar o lume. O processo de cozimento é tão rápido que não há tempo para cortar nada a meio.",
        "steps": [
            {
                "title": "Marinar o Frango (<span class=\"tooltip\" data-tooltip=\"Técnica chinesa de marinar a carne (geralmente com amido de milho e clara de ovo) para criar uma camada protetora que a mantém macia e suculenta durante o cozimento em alta temperatura.\">Velveting</span>)",
                "description": "Numa tigela, misture os cubos de frango com 1 colher de sopa de shoyu e 1 colher de sopa de amido de milho. Envolva bem e reserve enquanto prepara os outros ingredientes.",
                "porque": "Esta técnica chinesa chamada 'velveting' (aveludar) cria uma fina camada protetora no frango. O amido de milho protege a carne do calor intenso, mantendo-a incrivelmente macia e suculenta por dentro.",
                "pontoCritico": "Certifique-se de que cada pedaço de frango está levemente coberto pela mistura; não deve haver excesso de líquido."
            },
            {
                "title": "Saltear em Alta Temperatura",
                "description": "Aqueça um wok ou frigideira grande em lume alto com um fio de óleo vegetal. Adicione o frango e espalhe-o numa camada única. Deixe dourar por 1-2 minutos sem mexer, depois salteie até estar cozido. Retire da frigideira e reserve. Na mesma frigideira, salteie a cebola e os pimentões cortados em quadrados por 2-3 minutos.",
                "porque": "O calor alto é essencial para um stir-fry. Ele cozinha os ingredientes rapidamente, mantendo os vegetais crocantes e o frango com uma textura selada por fora.",
                "pontoCritico": "Não tenha medo do lume alto! A frigideira deve estar a fumegar levemente quando adiciona o óleo. Cozinhe o frango e os vegetais separadamente para manter a temperatura elevada."
            },
            {
                "title": "Juntar Tudo no Molho",
                "description": "Volte com o frango para a frigideira junto com os vegetais. Despeje a mistura do molho sobre tudo e cozinhe por 1-2 minutos, mexendo sempre, até o molho engrossar e cobrir todos os ingredientes. Desligue o lume, misture o amendoim e sirva imediatamente.",
                "porque": "O molho é adicionado no final para não queimar os seus componentes (como o açúcar e o óleo de gergelim) e para apenas engrossar o suficiente para cobrir os ingredientes, sem ficar pesado.",
                "pontoCritico": "O molho vai engrossar rapidamente devido ao amido de milho da marinada do frango. Esteja pronto para servir assim que atingir a consistência desejada."
            }
        ],
        "variacoes": [
            "<strong>Adicionar Gengibre e Alho:</strong> Refogue 1 colher de chá de gengibre e alho picados antes de adicionar os pimentões.",
            "<strong>Outros Vegetais:</strong> Brócolos, cogumelos ou broto de bambu são excelentes adições.",
            "<strong>Nível de Picante:</strong> Adicione pimenta dedo-de-moça picada ou flocos de pimenta seca junto com os vegetais para um toque picante."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-frango-xadrez"
    },
    "receitas-com-aves-tirinhas-fritas": {
        "title": "Aula 06: Tirinhas de Frango Crocantes",
        "description": "Aprenda a fazer tirinhas de frango (tenders) com uma crosta dourada, super crocante e um interior suculento. O segredo está numa massa (polme) leve e na temperatura correta da fritura.",
        "calculatorLabel": "Gramas de Frango:",
        "calculatorUnit": "tirinhas-fritas-input",
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "10-15 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 2-3 pessoas (com 500g)",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela funda ou fritadeira",
                "Escumadeira",
                "Grelha de metal para escorrer"
            ]
        },
        "dicaDeMestre": "Para uma crocância extra e duradoura, experimente a técnica da dupla fritura. Frite as tirinhas uma primeira vez por 2-3 minutos até ficarem cozidas mas pálidas. Retire, deixe descansar por 5 minutos, aumente o lume e frite novamente por 1-2 minutos até ficarem bem douradas.",
        "steps": [
            {
                "title": "A Massa Leve e Aerada",
                "description": "Numa tigela, misture os ingredientes secos da massa: farinha, amido de milho, fermento, sal e páprica. Pouco antes de fritar, despeje a água com gás gelada e misture com um garfo ou batedor de arame apenas até incorporar. Não misture demais!",
                "porque": "A água com gás gelada e o fermento criam bolhas de ar na massa, resultando numa crosta incrivelmente leve e crocante, similar à de tempura. Misturar pouco evita o desenvolvimento do glúten, o que manteria a massa leve em vez de pesada e massuda.",
                "pontoCritico": "A massa deve ter a consistência de massa de panqueca. Se estiver muito grossa, adicione mais um pouco de água com gás. Alguns grumos são bons, indicam que não foi misturada em excesso."
            },
            {
                "title": "Preparar para a Fritura",
                "description": "Seque bem as tiras de frango com papel toalha. Aqueça o óleo numa panela funda até atingir 180°C. Se não tiver termómetro, o óleo está pronto quando um palito de madeira imerso borbulhar vigorosamente.",
                "porque": "Aderência! A massa adere melhor ao frango seco. A temperatura correta do óleo é crucial: se estiver muito frio, a comida ficará encharcada; se estiver muito quente, queimará por fora antes de cozinhar por dentro.",
                "pontoCritico": "Segurança em primeiro lugar! Nunca encha a panela mais do que a metade com óleo para evitar transbordamentos."
            },
            {
                "title": "Fritar por Imersão",
                "description": "Mergulhe cada tira de frango na massa, deixe o excesso escorrer e coloque-a cuidadosamente no óleo quente. Frite em pequenos lotes por 3-5 minutos, virando na metade do tempo, até dourar e ficar crocante. Retire com uma escumadeira e escorra numa grelha de metal.",
                "porque": "Fritar em lotes evita que a temperatura do óleo caia drasticamente, o que comprometeria a crocância. Escorrer numa grelha permite que o ar circule e evita que a parte de baixo fique encharcada, como aconteceria num prato com papel toalha.",
                "pontoCritico": "Não use um prato com papel toalha para escorrer! O vapor ficará preso por baixo e amolecerá a crosta que você trabalhou tanto para criar. A grelha é a escolha profissional.",
                "timer": 240
            }
        ],
        "variacoes": [
            "<strong>Empanado Diferente:</strong> Para uma crosta mais rústica, passe o frango na farinha, depois num ovo batido, e por fim em farinha de pão (panko).",
            "<strong>Molhos para Mergulhar:</strong> Sirva com molho agridoce, barbecue, maionese de alho ou mostarda e mel.",
            "<strong>Sanduíche de Frango Frito:</strong> Coloque as tirinhas num pão brioche com picles e maionese picante."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-tirinhas-fritas"
    },
    "receitas-com-aves-kiev": {
        "title": "Aula 07: Frango à Kiev",
        "description": "Um clássico da culinária europeia que é pura indulgência. Aprenda a técnica para criar um peito de frango empanado e crocante que, ao ser cortado, revela um coração de manteiga de alho e ervas derretida. É um prato que impressiona!",
        "calculatorLabel": "Nº de Peitos de Frango:",
        "calculatorUnit": "kiev-input",
        "details": {
            "tempoPreparo": "30 min + 1h de congelação",
            "tempoCozimento": "15-20 min",
            "tempoDescanso": "5 min",
            "rendimento": "1 por pessoa",
            "dificuldade": "Avançado",
            "utensilios": [
                "Martelo de carne",
                "Película aderente",
                "Panela para fritar"
            ]
        },
        "dicaDeMestre": "O segredo absoluto para evitar que a manteiga vaze é o duplo congelamento. Congele a manteiga de ervas primeiro e, depois de rechear e empanar o frango, leve-o novamente ao congelador por pelo menos 30 minutos. Isso solidifica tudo e dá à crosta tempo de cozinhar antes que a manteiga derreta completamente.",
        "steps": [
            {
                "title": "Preparar e Congelar a Manteiga",
                "description": "Numa tigela, misture a manteiga amolecida, o alho e a salsa. Tempere com uma pitada de sal. Divida a mistura em porções, forme pequenos cilindros ou 'logs', enrole em película aderente e leve ao congelador por pelo menos 30 minutos para ficar bem firme.",
                "porque": "A manteiga precisa estar congelada para ser inserida no frango sem se desfazer e, mais importante, para que ela demore mais tempo a derreter durante a fritura, evitando que vaze prematuramente.",
                "pontoCritico": "Certifique-se de que a manteiga está dura como uma pedra antes de a usar. Isso aumenta drasticamente a sua taxa de sucesso."
            },
            {
                "title": "Rechear e Selar o Frango",
                "description": "Coloque um peito de frango entre duas folhas de película aderente e bata com um martelo de carne até ter uma espessura uniforme de cerca de 0.5 cm. Tempere com sal e pimenta. Coloque um cilindro de manteiga congelada no centro e enrole o frango firmemente à volta, dobrando as pontas para dentro para selar completamente.",
                "porque": "Bater o frango não só o amacia, mas cria uma 'tela' grande e uniforme para enrolar a manteiga. A selagem é o passo mais crítico para o sucesso do prato.",
                "pontoCritico": "Verifique se não há buracos ou aberturas. O frango deve envolver a manteiga por completo. Use palitos para prender, se necessário, mas lembre-se de os remover depois."
            },
            {
                "title": "Empanar e Congelar (Novamente)",
                "description": "Prepare três pratos: um com farinha, um com o ovo batido e um com pão ralado (panko). Passe cada rolo de frango selado primeiro na farinha, depois no ovo e por fim no pão ralado, cobrindo bem. Coloque os frangos empanados num prato e leve ao congelador por mais 30 minutos.",
                "porque": "A camada de pão ralado (panko é melhor por ser mais crocante) cria uma barreira protetora. O segundo congelamento solidifica o rolo inteiro, tornando-o mais estável para a fritura e dando mais tempo para a crosta dourar antes que a manteiga derreta.",
                "pontoCritico": "Não salte o segundo congelamento! É a sua apólice de seguro contra vazamentos."
            },
            {
                "title": "Fritar com Cuidado",
                "description": "Aqueça o óleo a 170°C. Frite os frangos à kiev, um ou dois de cada vez, por cerca de 5-7 minutos, virando ocasionalmente, até ficarem bem dourados. Se forem muito grandes, pode finalizar no forno pré-aquecido a 180°C por mais 5-10 minutos para garantir que o interior cozinha.",
                "porque": "Uma temperatura ligeiramente mais baixa que o normal (170°C em vez de 180°C) permite que o calor penetre e cozinhe o frango sem queimar o exterior muito rapidamente.",
                "pontoCritico": "Se vir a manteiga a começar a vazar no óleo, retire o frango imediatamente. Deixe descansar por 5 minutos antes de servir para os sucos se assentarem."
            }
        ],
        "variacoes": [
            "<strong>Ervas Diferentes:</strong> Use estragão ou cebolinho na manteiga para um sabor mais clássico.",
            "<strong>Queijo Extra:</strong> Adicione um pouco de queijo ralado (gruyère ou mozzarella) à mistura de manteiga.",
            "<strong>Versão Assada:</strong> Para uma opção mais saudável, asse em forno a 200°C por 20-25 minutos, mas a fritura é o método tradicional e mais saboroso."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-kiev"
    },
    "receitas-com-aves-asas": {
        "title": "Aula 08: Asas de Frango Crocantes (Forno/Air Fryer)",
        "description": "Descubra o segredo científico para obter as asas de frango mais crocantes da sua vida, sem usar uma fritadeira. A técnica é simples, usa um ingrediente surpresa e resulta numa pele estaladiça e viciante.",
        "calculatorLabel": "Quilos de Asas de Frango:",
        "calculatorUnit": "asas-input",
        "details": {
            "tempoPreparo": "10 min (+ 1h de refrigeração)",
            "tempoCozimento": "40-50 min",
            "tempoDescanso": "5 min",
            "rendimento": "Serve 3-4 pessoas (por kg)",
            "dificuldade": "Fácil",
            "utensilios": [
                "Grelha de metal",
                "Tabuleiro",
                "Tigela grande"
            ]
        },
        "dicaDeMestre": "O ingrediente mágico é o fermento em pó (NÃO bicarbonato de sódio). O fermento é alcalino, o que aumenta o pH da pele do frango. Isso ajuda a quebrar as proteínas de forma mais eficiente e permite um dourado mais rápido e uma desidratação superior da pele, resultando numa crocância incomparável.",
        "steps": [
            {
                "title": "A Secagem é Fundamental",
                "description": "Seque cada asa de frango meticulosamente com papel toalha. Quanto mais seca a pele, mais crocante o resultado final. Coloque as asas secas numa tigela grande.",
                "porque": "A humidade é a inimiga número um da crocância. A energia do forno primeiro teria que evaporar a água antes de começar a dourar a pele. Começar com a pele seca acelera drasticamente o processo.",
                "pontoCritico": "Não seja tímido com o papel toalha. Gaste o tempo necessário para secar cada uma delas. Este passo simples faz uma diferença enorme."
            },
            {
                "title": "O Tempero Científico",
                "description": "Numa pequena tigela, misture o fermento em pó, o sal, o alho em pó, a páprica e a pimenta. Polvilhe esta mistura sobre as asas secas e use as mãos para garantir que cada asa está levemente e uniformemente coberta.",
                "porque": "O fermento, como explicado na dica, altera o pH da pele. Os outros temperos aderem à pele seca e criarão uma crosta saborosa durante o cozimento.",
                "pontoCritico": "Use fermento em pó (baking powder), que contém um ácido e uma base. NÃO use bicarbonato de sódio (baking soda), que é apenas uma base e pode deixar um sabor metálico desagradável."
            },
            {
                "title": "Refrigeração e Circulação de Ar",
                "description": "Coloque as asas temperadas sobre uma grelha de metal posicionada dentro de um tabuleiro. Disponha-as com espaço entre si. Leve ao frigorífico, descobertas, por pelo menos 1 hora (ou até 8 horas).",
                "porque": "A grelha permite que o ar circule por todos os lados da asa. A refrigeração com o ar frio e seco do frigorífico desidrata ainda mais a pele, preparando-a para a crocância máxima.",
                "pontoCritico": "Deixar as asas descobertas no frigorífico é um passo profissional. Garante a pele mais seca possível antes de entrar no forno."
            },
            {
                "title": "Assar em Duas Temperaturas",
                "description": "Pré-aqueça o forno a 120°C. Asse as asas por 30 minutos. Depois, aumente a temperatura para 220°C e asse por mais 20-25 minutos, virando-as a meio, até estarem bem douradas e super crocantes.",
                "porque": "A primeira fase a baixa temperatura derrete a gordura da pele lentamente sem queimar. A segunda fase a alta temperatura é o choque térmico que frita a pele na sua própria gordura derretida, criando a textura estaladiça.",
                "pontoCritico": "Não pule a primeira fase de baixa temperatura. Se for direto para a temperatura alta, a gordura não terá tempo de derreter e a pele pode queimar antes de ficar crocante."
            }
        ],
        "variacoes": [
            "<strong>Molho Buffalo Clássico:</strong> Depois de assadas, jogue as asas quentes numa tigela com manteiga derretida e molho de pimenta (Frank's RedHot é o clássico).",
            "<strong>Asiático Agridoce:</strong> Misture molho de soja, mel, gengibre e alho. Pincele sobre as asas nos últimos 5 minutos de cozimento.",
            "<strong>Na Air Fryer:</strong> Siga os passos de tempero e refrigeração. Cozinhe na air fryer a 200°C por cerca de 20-25 minutos, virando na metade, até ficarem crocantes."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-asas"
    },
    "receitas-com-aves-sopa": {
        "title": "Aula 09: Sopa de Frango Clássica (Canja)",
        "description": "Aprenda a fazer uma verdadeira canja de galinha a partir do zero. Uma sopa rica, reconfortante e cheia de sabor, feita com um caldo caseiro que é o verdadeiro segredo para um resultado que abraça a alma.",
        "calculatorLabel": "Litros de Água (para o caldo):",
        "calculatorUnit": "sopa-input",
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "1h 30 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 6-8 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela grande (caldeirão)",
                "Escumadeira",
                "Coador de malha fina"
            ]
        },
        "dicaDeMestre": "Para um caldo ainda mais rico e dourado, doure os pedaços de frango e os vegetais na panela com um pouco de azeite antes de adicionar a água. Essa caramelização inicial (Reação de Maillard) adiciona uma profundidade de sabor imensa ao caldo final.",
        "steps": [
            {
                "title": "Construir o Caldo Saboroso",
                "description": "Numa panela grande, junte o frango, a cebola, as cenouras, o aipo e a folha de louro. Cubra com a água fria e tempere com uma boa pitada de sal. Leve ao lume alto até começar a ferver.",
                "porque": "Começar com água fria permite uma extração mais lenta e completa dos sabores dos ingredientes para o caldo. O osso do frango é essencial, pois liberta colagénio, o que dá corpo e riqueza à sopa.",
                "pontoCritico": "Use pedaços de frango com osso e pele. Peito de frango sozinho resulta num caldo sem graça e sem corpo."
            },
            {
                "title": "Cozinhar Lenta e Gentilmente (<span class=\"tooltip\" data-tooltip=\"Cozinhar um líquido logo abaixo do ponto de fervura, com apenas algumas bolhas suaves a subir à superfície.\">Simmer</span>)",
                "description": "Assim que a água ferver, reduza o lume para o mínimo possível, de modo que a sopa mantenha apenas um borbulhar muito suave (simmer). Com uma escumadeira, retire qualquer espuma ou impureza que suba à superfície. Cozinhe, semi-tampado, por pelo menos 1 hora.",
                "porque": "Ferver o caldo vigorosamente torna-o turvo e emulsifica a gordura. Um 'simmer' gentil mantém o caldo claro e limpo. A remoção da espuma (impurezas e proteínas coaguladas) também contribui para um caldo mais límpido.",
                "pontoCritico": "A paciência é a chave. Não tenha pressa e não aumente o lume. Deixe o tempo fazer a sua magia."
            },
            {
                "title": "Coar e Desfiar",
                "description": "Com cuidado, retire os pedaços de frango e os vegetais da panela. Coe todo o caldo através de um coador de malha fina para outra panela limpa. Quando o frango estiver frio o suficiente para manusear, desfie toda a carne, descartando ossos e pele.",
                "porque": "Coar o caldo garante uma sopa final limpa e sem pedaços indesejados. O frango cozido lentamente no caldo fica incrivelmente macio e fácil de desfiar.",
                "pontoCritico": "Os vegetais usados para fazer o caldo já libertaram todo o seu sabor e podem ser descartados. Se quiser vegetais na sopa, adicione cenouras frescas picadas ao caldo coado."
            },
            {
                "title": "Finalizar a Canja",
                "description": "Leve o caldo coado novamente ao lume. Assim que ferver, adicione o arroz ou a massa e cozinhe de acordo com o tempo da embalagem. Quando estiver quase cozido, adicione o frango desfiado para reaquecer. Sirva quente, finalizado com salsa fresca e folhas de hortelã.",
                "porque": "Cozinhar o arroz ou a massa diretamente no caldo faz com que absorvam todo o sabor, ficando muito mais deliciosos do que se fossem cozidos em água.",
                "pontoCritico": "Adicione o frango desfiado apenas no final. Se ele cozinhar por muito tempo, pode ficar duro e fibroso."
            }
        ],
        "variacoes": [
            "<strong>Canja à Portuguesa:</strong> Adicione um chouriço de boa qualidade para cozinhar junto com o caldo para um sabor fumado.",
            "<strong>Sopa de Noodles de Frango:</strong> Em vez de arroz, use massa de ovo larga (egg noodles).",
            "<strong>Toque de Limão:</strong> Esprema um pouco de sumo de limão fresco em cada prato antes de servir para avivar os sabores."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-sopa"
    },
    "receitas-com-aves-peru": {
        "title": "Aula 10: Peito de Peru Assado (Suculento)",
        "description": "Diga adeus ao peru seco! Com a técnica infalível da salmoura e o controlo de temperatura, você vai aprender a assar um peito de peru que fica incrivelmente húmido, saboroso e perfeito para uma celebração ou um jantar especial.",
        "calculatorLabel": "Peso do Peito de Peru (kg):",
        "calculatorUnit": "peru-input",
        "details": {
            "tempoPreparo": "15 min + 2-4h de salmoura",
            "tempoCozimento": "~1h 15min por 1.5kg",
            "tempoDescanso": "20 min",
            "rendimento": "Serve 6-8 pessoas (por 1.5kg)",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Assadeira com grelha",
                "Termómetro de carne (essencial!)",
                "Recipiente grande para salmoura"
            ]
        },
        "dicaDeMestre": "O termómetro de carne não é opcional, é essencial. O peito de peru é uma carne muito magra e a janela entre o 'perfeitamente cozido' e o 'seco e fibroso' é muito pequena. Confiar na temperatura interna é a única forma de garantir a perfeição.",
        "steps": [
            {
                "title": "A <span class=\"tooltip\" data-tooltip=\"Solução de água e sal que hidrata e tempera a carne por dentro.\">Salmoura</span>: O Seguro de Vida da Suculência",
                "description": "Num recipiente grande o suficiente para submergir o peru, dissolva o sal e o açúcar na água. Pode aquecer uma parte da água para ajudar a dissolver, mas garanta que a salmoura está completamente fria antes de adicionar o peru. Mergulhe o peito de peru na salmoura, cubra e leve ao frigorífico por 2 a 4 horas.",
                "porque": "O peito de peru é extremamente magro e propenso a secar. A salmoura hidrata a carne profundamente e também a tempera por dentro. O açúcar ajuda no dourado da pele.",
                "pontoCritico": "Não deixe na salmoura por mais de 6 horas, ou a textura da carne pode começar a ficar um pouco 'esponjosa'. Garanta que o peru está totalmente submerso."
            },
            {
                "title": "Secar e Temperar",
                "description": "Retire o peru da salmoura e descarte o líquido. Lave o peru rapidamente em água fria para remover o excesso de sal da superfície e seque-o COMPLETAMENTE com papel toalha, por dentro e por fora. Pré-aqueça o forno a 190°C. Misture as ervas picadas na manteiga derretida e pincele toda a superfície do peru.",
                "porque": "Lavar remove o sal superficial, evitando que fique salgado demais. Secar a pele é crucial para que ela fique crocante e dourada no forno. A manteiga adiciona sabor e ajuda a dourar.",
                "pontoCritico": "A pele deve estar o mais seca possível. Qualquer humidade irá criar vapor e impedir a pele de ficar estaladiça."
            },
            {
                "title": "Assar com Controlo de Temperatura",
                "description": "Coloque o peru numa assadeira com grelha. Insira um termómetro de carne na parte mais espessa do peito, sem tocar no osso. Asse a 190°C até que a temperatura interna atinja 72°C. O tempo pode variar, mas estime cerca de 30 minutos por kg.",
                "porque": "A grelha permite que o calor circule por todo o lado. O termómetro é a única forma de saber o ponto exato. Retiramos a 72°C porque a temperatura continuará a subir durante o descanso.",
                "pontoCritico": "Confie no termómetro, não no relógio. Cada forno e cada peça de carne é diferente. Retirar o peru na temperatura certa é o passo que define o sucesso ou o fracasso."
            },
            {
                "title": "O Descanso Longo e Obrigatório",
                "description": "Retire o peru do forno e coloque-o numa tábua de corte. Deixe-o descansar, sem cobrir, por pelo menos 20 minutos antes de fatiar.",
                "porque": "Um descanso longo é vital para uma peça de carne grande. Permite que os sucos, que foram empurrados para o centro pelo calor, se redistribuam por toda a carne, garantindo que cada fatia seja húmida.",
                "pontoCritico": "Não cubra com papel alumínio, pois isso irá criar vapor e amolecer a pele crocante que você acabou de criar. A carne manter-se-á quente."
            }
        ],
        "variacoes": [
            "<strong>Glacê de Laranja e Mostarda:</strong> Nos últimos 20 minutos de cozedura, pincele o peru com uma mistura de sumo de laranja, mostarda Dijon e mel.",
            "<strong>Aromáticos:</strong> Coloque quartos de cebola e maçã debaixo da grelha na assadeira para criar um vapor aromático durante o cozimento.",
            "<strong>Servir com Molho Gravy:</strong> Use os sucos que escorreram para a assadeira para fazer um molho gravy clássico."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-peru"
    },
    "receitas-com-aves-caesar": {
        "title": "Aula 11: Salada Caesar com Frango Grelhado",
        "description": "Eleve a salada a prato principal. Aprenda a fazer o autêntico molho Caesar, cremoso e cheio de umami, e a combiná-lo com alface romana crocante, croutons caseiros e frango grelhado suculento.",
        "calculatorLabel": "Nº de Porções:",
        "calculatorUnit": "caesar-input",
        "details": {
            "tempoPreparo": "25 min",
            "tempoCozimento": "15 min (frango)",
            "tempoDescanso": "5 min (frango)",
            "rendimento": "Serve 2 como prato principal",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Tigela grande",
                "Batedor de arame (fouet)",
                "Ralador fino (para parmesão)"
            ]
        },
        "dicaDeMestre": "O segredo do sabor 'inconfundível' do molho Caesar são as anchovas. Não tenha medo! Elas dissolvem-se completamente e não deixam um gosto de peixe, mas sim uma profundidade salgada e de <span class=\"tooltip\" data-tooltip=\"Considerado o 'quinto gosto básico', para além de doce, salgado, azedo e amargo. É um sabor profundo, salgado e 'carnudo', encontrado em queijos curados, cogumelos e anchovas.\">umami</span> que é impossível de replicar.",
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo: O Frango Grelhado Perfeito",
                "subSteps": [
                    {
                        "title": "Temperar o Frango",
                        "description": "Seque bem os peitos de frango com papel toalha. Tempere generosamente com sal e pimenta e regue com um fio de azeite.",
                        "porque": "A superfície seca garante uma melhor reação de Maillard (a crosta dourada e saborosa) na frigideira quente.",
                        "pontoCritico": "Não pule a secagem. Frango húmido irá cozinhar a vapor em vez de grelhar, resultando numa textura borrachuda."
                    },
                    {
                        "title": "Grelhar com Precisão",
                        "description": "Aqueça uma frigideira em lume médio-alto. Coloque o frango e cozinhe por 5-7 minutos de cada lado, sem mexer, até estar dourado e cozido (72°C no interior).",
                        "porque": "Virar apenas uma vez garante uma crosta uniforme e bonita. A temperatura interna é a melhor forma de garantir um frango suculento e não seco.",
                        "pontoCritico": "Não sobrecarregue a frigideira. Grelhe um peito de cada vez se necessário para manter a temperatura alta."
                    },
                    {
                        "title": "Descansar e Fatiar",
                        "description": "Retire o frango para uma tábua e deixe descansar por 5 minutos antes de o fatiar. Este passo é crucial.",
                        "porque": "O descanso permite que os sucos se redistribuam pela carne, garantindo um frango húmido em cada fatia.",
                        "pontoCritico": "Cortar o frango imediatamente fará com que todos os sucos escorram, deixando a carne seca."
                    }
                ]
            },
            {
                "title": "Preparar os Componentes da Salada",
                "description": "Enquanto o frango descansa, lave e seque bem as folhas de alface romana. Se for fazer os croutons, corte pão em cubos, regue com azeite e sal, e asse a 180°C até dourar.",
                "porque": "A preparação antecipada é chave. A alface precisa estar completamente seca para o molho aderir e não a deixar aguada.",
                "pontoCritico": "Secar a alface é crucial. Use uma centrifugadora de saladas ou seque folha por folha com papel toalha."
            },
            {
                "title": "A <span class=\"tooltip\" data-tooltip=\"Mistura estável de dois líquidos que normalmente não se misturam, como óleo e água (ou sumo de limão). A gema de ovo atua como agente emulsionante.\">Emulsão</span> do Molho Caesar",
                "description": "Numa tigela, junte a gema de ovo, o alho em pasta, as anchovas picadas, o sumo de limão e o molho inglês. Com um batedor de arame (fouet), bata vigorosamente até obter uma mistura homogénea. A seguir, enquanto bate sem parar, comece a adicionar o azeite em fio, muito lentamente, até que o molho engrosse e emulsione.",
                "porque": "Este é o processo de criar uma emulsão. A lecitina na gema de ovo atua como um agente que une o óleo (gordura) e o sumo de limão (ácido), que normalmente não se misturariam, criando um molho cremoso e estável.",
                "pontoCritico": "A adição do azeite deve ser LENTA, gota a gota no início. Se adicionar o óleo muito rápido, a emulsão irá 'quebrar' e o molho ficará separado e oleoso."
            },
            {
                "title": "Finalizar o Molho e Montar a Salada",
                "description": "Depois de emulsionar todo o azeite, junte o queijo parmesão ralado na hora e pimenta preta moída. Prove e ajuste o sal, se necessário (as anchovas e o parmesão já são salgados). Numa tigela grande, junte as folhas de alface e regue com o molho aos poucos, misturando para cobrir. Adicione os croutons e o frango grelhado fatiado por cima.",
                "porque": "O parmesão é adicionado no final para manter a sua textura. Adicionar o molho aos poucos permite controlar a quantidade e garantir que a alface fica coberta, mas não encharcada.",
                "pontoCritico": "Rale o parmesão na hora. O queijo pré-ralado contém antiaglomerantes que alteram o sabor e a forma como se derrete no molho. Monte a salada apenas na hora de servir para manter a crocância."
            }
        ],
        "variacoes": [
            "<strong>Sem Ovo Cru:</strong> Se não se sentir confortável com gema crua, use 1 colher de sopa de maionese de boa qualidade como base para a emulsão no lugar da gema.",
            "<strong>Croutons Caseiros de Alho:</strong> Esfregue um dente de alho cortado nos cubos de pão antes de os levar a assar.",
            "<strong>Extra Umami:</strong> Adicione algumas alcaparras picadas ao molho para um toque extra de acidez e salinidade."
        ],
        "module": "Receitas com Aves",
        "url": "aves.html#receita-caesar"
    },
    "peixes-e-frutos-do-mar-escolha": {
        "title": "Aula 01: A Arte de Escolher e Limpar Peixe",
        "description": "Todo grande prato começa com um grande ingrediente. Esta aula é a mais fundamental de todas: como identificar o frescor de um peixe no mercado e como fazer a limpeza básica em casa com segurança.",
        "calculator": {
            "label": "Peixes para avaliar:",
            "unit": "escolha-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "15-20 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "Conhecimento para a vida",
            "dificuldade": "Fácil",
            "utensilios": [
                "Faca de filetar (flexível)",
                "Escamador de peixe (ou o lado não afiado de uma faca)",
                "Tábua de corte exclusiva para peixe"
            ]
        },
        "dicaDeMestre": "Tenha uma tábua de corte dedicada exclusivamente para peixes e frutos do mar para evitar contaminação cruzada. A madeira é porosa, mas as de plástico podem ser lavadas na máquina de lavar louça para uma higienização superior.",
        "ingredients": [
            {
                "name": "Peixe Inteiro Fresco",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Luvas de proteção (opcional)",
                "base_qty": 1,
                "unit": "par",
                "scalable": true
            },
            {
                "name": "Saco de lixo para as vísceras",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Como Escolher um Peixe Fresco (No Mercado)",
                "description": "Observe os 4 sinais de frescor: <strong>1. Olhos:</strong> devem estar brilhantes, claros e salientes, nunca opacos ou afundados. <strong>2. Guelras:</strong> levante o opérculo; as guelras devem ter uma cor vermelho vivo, nunca acastanhadas. <strong>3. Pele:</strong> deve ser brilhante, húmida e com as escamas bem presas. <strong>4. Toque:</strong> a carne deve ser firme e elástica ao toque, voltando ao lugar depois de pressionada.",
                "porque": "Estes são indicadores diretos da saúde e do tempo desde a captura do peixe. Um peixe que não passa neste teste já começou o seu processo de decomposição e nunca resultará num prato de alta qualidade.",
                "pontoCritico": "Confie no seu nariz. O peixe fresco cheira a mar e a maresia, nunca a 'peixe' ou amoníaco. Se tiver um cheiro forte e desagradável, não compre."
            },
            {
                "title": "Escamar o Peixe",
                "description": "Coloque o peixe dentro do lava-loiças ou sobre um jornal para conter a sujidade. Segurando o peixe firmemente pela cauda, use um escamador ou as costas de uma faca para raspar as escamas, trabalhando da cauda em direção à cabeça, contra o sentido das escamas.",
                "porque": "Remover as escamas é essencial para quase todos os métodos de cozimento (exceto quando a receita pede especificamente para mantê-las), pois são desagradáveis de comer.",
                "pontoCritico": "Faça este processo com cuidado para não se cortar nas barbatanas dorsais. Manter a área molhada ajuda a evitar que as escamas voem por toda a cozinha."
            },
            {
                "title": "Eviscerar (Remover as Vísceras)",
                "description": "Com uma faca afiada, faça uma incisão superficial na barriga do peixe, desde o ânus (pequeno orifício perto da cauda) até à cabeça. Insira os dedos e puxe as vísceras para fora. Lave bem a cavidade abdominal em água corrente fria.",
                "porque": "As vísceras decompõem-se rapidamente e podem conferir um sabor amargo à carne. A sua remoção é um passo crucial de limpeza.",
                "pontoCritico": "Tenha cuidado para não perfurar a vesícula biliar (uma pequena bolsa escura), pois o seu líquido é extremamente amargo e pode estragar a carne que tocar."
            },
            {
                "title": "Remover as Guelras e Finalizar",
                "description": "As guelras também podem dar um sabor amargo. Pode cortá-las com uma tesoura de cozinha ou simplesmente arrancá-las. Passe o peixe novamente por água fria, seque-o bem por dentro e por fora com papel toalha. Está pronto para ser cozinhado ou guardado no frigorífico.",
                "porque": "A limpeza final garante que todos os resíduos que podem afetar o sabor foram removidos. Secar o peixe é vital para o armazenamento e para futuras preparações, como grelhar.",
                "pontoCritico": "O peixe deve ser guardado na parte mais fria do frigorífico e consumido em 1 ou 2 dias. Se não for usar nesse período, o ideal é congelá-lo."
            }
        ],
        "variacoes": [
            "<strong>Filetar o Peixe:</strong> Uma técnica mais avançada, que consiste em separar a carne da espinha central, criando dois filés. Requer uma faca de filetar longa e flexível.",
            "<strong>Cortar em Postas:</strong> Para peixes maiores, pode cortar a peça inteira em postas grossas, mantendo a espinha central."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-escolha"
    },
    "peixes-e-frutos-do-mar-file": {
        "title": "Aula 02: Filé de Peixe na Frigideira (Pele Crocante)",
        "description": "Esta é a técnica mais versátil para o dia a dia. Aprenda a grelhar um filé de peixe (como robalo, dourada ou salmão) para obter um interior suculento e uma pele estaladiça que rivaliza com a de um restaurante.",
        "calculator": {
            "label": "Filés de peixe (180g cada):",
            "unit": "file-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "6-10 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 filé por pessoa",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira antiaderente ou de aço inox",
                "Espátula de peixe (flexível)"
            ]
        },
        "dicaDeMestre": "Depois de colocar o filé na frigideira (pele para baixo), use a espátula para pressionar levemente o topo por 15 segundos. Isso evita que a pele se contraia com o calor e enrole, garantindo um contacto total com a panela e uma crocância uniforme e perfeita.",
        "ingredients": [
            {
                "name": "Filé de Peixe com pele (Robalo, Dourada, Salmão)",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Azeite ou óleo de girassol",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sal fino e Pimenta Preta moída",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Limão para servir",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Preparação do Filé",
                "description": "Use a parte de trás de uma faca para 'raspar' a pele e remover qualquer excesso de humidade ou escamas. Seque a pele **meticulosamente** com papel toalha. Tempere ambos os lados generosamente com sal e pimenta apenas no momento de cozinhar.",
                "porque": "A pele completamente seca é o segredo número um para a crocância. Qualquer humidade irá criar vapor e impedir que a pele frite e fique estaladiça. Temperar no último momento evita que o sal 'puxe' a humidade para a superfície.",
                "pontoCritico": "Não subestime a secagem da pele. É o passo que separa uma pele crocante de uma pele borrachenta."
            },
            {
                "title": "Grelhar com a Pele para Baixo",
                "description": "Aqueça uma frigideira em lume médio-alto com um fio de óleo. Quando o óleo estiver quente, coloque o filé com a PELE PARA BAIXO. Pressione-o levemente com uma espátula por 15 segundos. Reduza o lume para médio e deixe cozinhar por 4 a 7 minutos, dependendo da espessura.",
                "porque": "Cozinhar 80-90% do tempo sobre a pele protege a carne delicada do peixe do calor direto, cozinhando-a de forma suave, enquanto a pele fica exposta ao calor necessário para ficar crocante. A gordura da pele derrete e ajuda neste processo.",
                "pontoCritico": "Resista à tentação de mexer ou virar o peixe. Você verá a linha de cozimento a subir pela lateral do filé. Quando estiver quase totalmente opaco, está na hora de virar.",
                "timer": 300
            },
            {
                "title": "O 'Beijo' Final",
                "description": "Vire o filé com cuidado e cozinhe por apenas 30 a 90 segundos do outro lado. Este tempo é apenas para terminar o cozimento do topo. Retire da frigideira e sirva imediatamente com a pele virada para cima.",
                "porque": "Este 'beijo' de calor é tudo o que a carne precisa para ficar no ponto sem secar. Cozinhar demais este lado resultaria num peixe seco e fibroso.",
                "pontoCritico": "Sirva sempre com a pele crocante virada para cima para que não amoleça em contacto com o molho ou acompanhamento no prato. Um espremidela de limão no final realça todos os sabores."
            }
        ],
        "variacoes": [
            "<strong>Com Manteiga e Ervas:</strong> Nos últimos segundos, adicione uma colher de manteiga, um dente de alho esmagado e um ramo de tomilho à frigideira e regue o peixe.",
            "<strong>Asiático:</strong> Pincele o peixe com uma mistura de molho de soja, mel e gengibre depois de o virar.",
            "<strong>Sem Pele:</strong> A técnica é a mesma, mas os tempos são mais curtos (2-3 minutos de cada lado) e o risco de secar o peixe é maior."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-file"
    },
    "peixes-e-frutos-do-mar-assado": {
        "title": "Aula 03: Peixe Inteiro Assado no Forno",
        "description": "Assar um peixe inteiro é uma forma rústica, saudável e impressionante de cozinhar. O osso e a pele protegem a carne, mantendo-a incrivelmente húmida e saborosa. Esta receita é uma refeição completa de tabuleiro.",
        "calculator": {
            "label": "Peso do Peixe Inteiro (kg):",
            "unit": "assado-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "20-30 min",
            "tempoDescanso": "5 min",
            "rendimento": "Serve 2-3 pessoas por kg",
            "dificuldade": "Fácil",
            "utensilios": [
                "Assadeira grande",
                "Faca",
                "Papel vegetal"
            ]
        },
        "dicaDeMestre": "Faça 2 a 3 cortes diagonais em cada lado do peixe, atravessando a pele e a carne até à espinha. Isto ajuda o calor a penetrar de forma mais uniforme, garante um cozimento mais rápido e permite que os temperos penetrem mais fundo na carne.",
        "ingredients": [
            {
                "name": "Peixe Inteiro (Robalo, Dourada, etc.), limpo",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Batatas pequenas, cortadas ao meio",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Tomates Cherry",
                "base_qty": 250,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Limão Siciliano, em rodelas",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Alho, dentes esmagados",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem",
                "base_qty": 50,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Vinho Branco Seco",
                "base_qty": 100,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Sal, Pimenta, Ervas (tomilho, alecrim)",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Pré-assar os Acompanhamentos",
                "description": "Pré-aqueça o forno a 200°C. Numa assadeira forrada com papel vegetal, tempere as batatas com azeite, sal e pimenta. Leve ao forno por 15 minutos.",
                "porque": "As batatas demoram mais tempo a cozinhar do que o peixe. Este passo inicial garante que tudo ficará cozido ao mesmo tempo no final.",
                "pontoCritico": "Não salte este passo, senão terá um peixe perfeitamente cozido e batatas cruas."
            },
            {
                "title": "Preparar e Temperar o Peixe",
                "description": "Enquanto as batatas assam, seque bem o peixe por dentro e por fora. Tempere generosamente a cavidade abdominal com sal, pimenta e ervas. Recheie a cavidade com rodelas de limão e dentes de alho esmagados. Faça os cortes diagonais na pele.",
                "porque": "Temperar a cavidade infunde sabor de dentro para fora. Os aromáticos (limão, alho) irão cozinhar a vapor dentro do peixe, perfumando a carne.",
                "pontoCritico": "Seque bem o peixe para que a pele tenha a oportunidade de dourar em vez de apenas cozinhar a vapor."
            },
            {
                "title": "Montar e Assar",
                "description": "Retire a assadeira do forno. Afaste as batatas para abrir espaço no centro para o peixe. Adicione os tomates cherry à assadeira. Regue tudo (peixe e vegetais) generosamente com azeite e deite o vinho branco no fundo da assadeira. Leve ao forno por 20 a 25 minutos.",
                "porque": "O vinho branco cria um vapor aromático que ajuda a cozinhar o peixe e cria um molho delicioso no fundo da assadeira. O azeite ajuda a dourar.",
                "pontoCritico": "O tempo de cozimento varia com o tamanho do peixe. O peixe está pronto quando a carne perto da espinha está opaca e se solta facilmente com um garfo.",
                "timer": 1350
            },
            {
                "title": "Servir",
                "description": "Retire do forno. Pode servir diretamente da assadeira, para um estilo mais rústico. Regue o peixe e os vegetais com o molho que se formou no fundo. Deixe descansar por 5 minutos antes de começar a servir.",
                "porque": "O breve descanso ajuda a carne a relaxar e a reter os seus sucos, mesmo num peixe assado.",
                "pontoCritico": "Para servir, use uma espátula para soltar a carne da espinha. O filé de cima deve sair facilmente, depois pode levantar a espinha central para aceder ao filé de baixo."
            }
        ],
        "variacoes": [
            "<strong>Com Azeitonas e Alcaparras:</strong> Adicione azeitonas pretas e alcaparras à assadeira para um sabor mediterrânico.",
            "<strong>Outros Vegetais:</strong> Fatias de funcho, pimentão ou cebola roxa também funcionam muito bem.",
            "<strong>Crosta de Sal:</strong> Para um peixe incrivelmente húmido, pode cobri-lo completamente com uma mistura de sal grosso e claras de ovo e assar. A crosta de sal é partida à mesa."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-assado"
    },
    "peixes-e-frutos-do-mar-papillote": {
        "title": "Aula 04: Peixe no Papillote",
        "description": "Aprenda a cozinhar 'en papillote' (em envelope), uma técnica francesa clássica que cozinha o peixe e os vegetais no seu próprio vapor. É um método saudável, rápido e que resulta num prato elegante e cheio de sabor concentrado.",
        "calculator": {
            "label": "Número de Envelopes (porções):",
            "unit": "papillote-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "12-15 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 por pessoa",
            "dificuldade": "Fácil",
            "utensilios": [
                "Papel vegetal (ou papel alumínio)",
                "Tesoura",
                "Tabuleiro"
            ]
        },
        "dicaDeMestre": "O segredo de um bom papillote está no <span class='tooltip' data-tooltip='Corte clássico francês em tiras muito finas e compridas, como palitos de fósforo.'>julienne</span> fino dos vegetais e na selagem perfeita do envelope. Vegetais finos cozinham no mesmo tempo que o peixe, e um envelope bem selado aprisiona todo o vapor e aroma.",
        "ingredients": [
            {
                "name": "Filé de Peixe Branco (Pescada, Tilápia)",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Cenoura, em julienne fino",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Curgete (Abobrinha), em julienne fino",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Alho-francês (parte branca), em julienne fino",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Vinho Branco Seco",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Manteiga",
                "base_qty": 2,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 2,
                "unit": "fios",
                "scalable": true
            },
            {
                "name": "Ramos de Tomilho ou Endro (Dill)",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar o Envelope e a Cama de Vegetais",
                "description": "Pré-aqueça o forno a 200°C. Corte um grande pedaço de papel vegetal (cerca de 40x30cm). Dobre-o ao meio e corte-o em forma de um grande coração. Abra o coração. Num dos lados, disponha uma 'cama' com os vegetais cortados em julienne.",
                "porque": "O formato de coração facilita a selagem posterior. A cama de vegetais não só adiciona sabor, mas também eleva ligeiramente o peixe, permitindo que o vapor circule por baixo dele.",
                "pontoCritico": "Os vegetais devem ser cortados muito finamente para que cozinhem no mesmo tempo que o peixe. Se forem demasiado grossos, ficarão crus."
            },
            {
                "title": "Montar o Papillote",
                "description": "Coloque o filé de peixe sobre a cama de vegetais. Tempere com sal e pimenta. Por cima do peixe, coloque um pequeno pedaço de manteiga, um ramo de ervas e regue com uma colher de sopa de vinho branco e um fio de azeite.",
                "porque": "Estamos a criar um ecossistema de sabor. A manteiga adiciona riqueza, as ervas e o vinho criam o vapor aromático que irá infundir o peixe e os vegetais.",
                "pontoCritico": "Não encha demasiado o envelope. Cada papillote é uma porção individual."
            },
            {
                "title": "Selar e Assar",
                "description": "Dobre a outra metade do coração de papel vegetal sobre o peixe. A partir de uma das pontas, comece a fazer pequenas dobras sucessivas, sobrepondo-as, para selar toda a borda do envelope. Coloque os envelopes num tabuleiro e leve ao forno por 12 a 15 minutos.",
                "porque": "A selagem perfeita é crucial para aprisionar o vapor. É este vapor que irá cozinhar os ingredientes. O envelope irá inchar no forno, o que é um bom sinal.",
                "pontoCritico": "Certifique-se de que a última dobra está bem apertada para que o envelope não se abra. O tempo de cozimento é rápido, não cozinhe demais.",
                "timer": 800
            },
            {
                "title": "Servir a Surpresa",
                "description": "Retire os envelopes do forno. A forma mais elegante de servir é colocar cada envelope fechado no prato do convidado e cortá-lo aberto à mesa com uma tesoura ou faca. O vapor aromático que se liberta é parte da experiência.",
                "porque": "Servir o envelope fechado maximiza o impacto sensorial da receita.",
                "pontoCritico": "Tenha cuidado ao abrir o envelope, pois o vapor estará muito quente."
            }
        ],
        "variacoes": [
            "<strong>Asiático:</strong> Use molho de soja, gengibre ralado, óleo de gergelim e cogumelos shiitake em vez dos vegetais e temperos clássicos.",
            "<strong>Mediterrânico:</strong> Use tomate cherry, azeitonas, alcaparras e orégãos.",
            "<strong>Com Camarão:</strong> Adicione alguns camarões junto com o filé de peixe."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-papillote"
    },
    "peixes-e-frutos-do-mar-moqueca": {
        "title": "Aula 05: Moqueca Baiana",
        "description": "Aprenda a fazer um dos pratos mais emblemáticos do Brasil. A moqueca é um estufado de peixe cremoso e vibrante, com os sabores característicos do azeite de dendê, leite de coco e pimentões.",
        "calculator": {
            "label": "Porções:",
            "unit": "moqueca-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "30 min",
            "tempoCozimento": "30-40 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela de barro ou caçarola larga",
                "Tábua de corte"
            ]
        },
        "dicaDeMestre": "O segredo para um peixe que não se desfaz é adicioná-lo ao molho apenas nos últimos 10-12 minutos de cozimento e evitar mexer demasiado depois disso. Deixe o calor do molho cozinhar o peixe gentilmente.",
        "ingredients": [
            {
                "name": "Postas de Peixe Branco Firme (Badejo, Robalo)",
                "base_qty": 800,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Camarões grandes, limpos",
                "base_qty": 300,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Suco de Limão",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Cebola grande em rodelas",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Pimentões (vermelho e amarelo) em rodelas",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Tomates maduros em rodelas",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Leite de Coco",
                "base_qty": 400,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Azeite de Dendê",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Coentros e Cebolinho picados",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Marinar o Peixe e o Camarão",
                "description": "Tempere as postas de peixe e os camarões com sal, pimenta, alho amassado e o suco de limão. Deixe marinar por pelo menos 20 minutos no frigorífico.",
                "porque": "A marinada não só tempera o peixe e o camarão por dentro, mas a acidez do limão também começa a firmar as suas proteínas, ajudando-os a manter a forma durante o cozimento.",
                "pontoCritico": "Não marine por mais de 1 hora, pois a acidez pode começar a 'cozinhar' demais a superfície do marisco."
            },
            {
                "title": "Montar as Camadas de Sabor",
                "description": "Numa panela de barro ou caçarola, regue o fundo com azeite de oliva. Faça uma 'cama' com metade da cebola, pimentões e tomates. Disponha as postas de peixe sobre esta cama. Cubra com o resto dos vegetais.",
                "porque": "Cozinhar em camadas protege o peixe do calor direto e permite que ele cozinhe no vapor aromático dos vegetais e do próprio molho, absorvendo todo o sabor.",
                "pontoCritico": "A panela de barro retém o calor maravilhosamente, mas se não tiver uma, uma caçarola larga e de fundo grosso funciona bem."
            },
            {
                "title": "O Cozimento do Molho e do Peixe",
                "description": "Regue tudo com o leite de coco e leve ao lume médio. Quando começar a ferver, reduza o lume, tape e cozinhe por cerca de 15 minutos. Adicione os camarões e o azeite de dendê, e cozinhe por mais 5-7 minutos, ou até os camarões ficarem rosados.",
                "porque": "O peixe cozinha primeiro no vapor do leite de coco e dos vegetais. Os camarões são adicionados no final, pois cozinham muito rápido. O dendê é adicionado no final para preservar o seu sabor e aroma característicos.",
                "pontoCritico": "Não cozinhe demais os camarões, senão ficam duros e borrachudos. Assim que mudam de cor, estão prontos.",
                "timer": 1200
            },
            {
                "title": "Finalizar com Frescura",
                "description": "Desligue o lume. Salpique generosamente com o coentro e o cebolinho frescos picados. Sirva imediatamente, acompanhado de arroz branco e farofa.",
                "porque": "As ervas frescas adicionadas no final trazem um contraste de frescor e aroma que corta a riqueza do leite de coco e do dendê, equilibrando o prato.",
                "pontoCritico": "Se não gosta de coentros, pode usar apenas salsa, mas o coentro é o sabor autêntico da moqueca."
            }
        ],
        "variacoes": [
            "<strong>Moqueca Capixaba:</strong> A versão do Espírito Santo não leva azeite de dendê nem leite de coco, sendo um prato mais leve, à base de azeite de oliva e urucum para dar cor.",
            "<strong>Apenas Peixe ou Camarão:</strong> Pode fazer a receita usando apenas um dos dois ingredientes principais.",
            "<strong>Com Banana-da-Terra:</strong> Adicione rodelas de banana-da-terra cozidas ao final para um toque agridoce."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-moqueca"
    },
    "peixes-e-frutos-do-mar-ceviche": {
        "title": "Aula 06: Ceviche Clássico",
        "description": "Domine a arte do ceviche, o prato peruano que conquistou o mundo. Aprenda a 'cozinhar' o peixe na acidez do limão e a equilibrar os sabores para um resultado fresco, vibrante e sofisticado.",
        "calculator": {
            "label": "Gramas de Peixe Branco:",
            "unit": "ceviche-input",
            "base_value": 400,
            "default_value": 400
        },
        "details": {
            "tempoPreparo": "20 min + 15 min de marinada",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 2-3 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Faca muito afiada",
                "Tigela de vidro",
                "Espremedor de citrinos"
            ]
        },
        "dicaDeMestre": "O segredo do ceviche de restaurante é o <span class='tooltip' data-tooltip='O 'leite' que resulta da marinada do peixe com o sumo de lima, pimenta, coentros e outros temperos. É a alma e o molho do ceviche.'>leche de tigre</span>. Prepare-o primeiro, misturando o sumo de lima, um pouco de peixe, talos de coentros, pimenta e alho num liquidificador. Coe e use este líquido super saboroso para marinar o peixe.",
        "ingredients": [
            {
                "name": "Peixe Branco Fresco e Firme (Robalo, Dourada)",
                "base_qty": 400,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Sumo de Lima fresco (não limão)",
                "base_qty": 240,
                "unit": "ml (aprox. 1 chávena)",
                "scalable": true
            },
            {
                "name": "Cebola Roxa em fatias finíssimas",
                "base_qty": 0.5,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Pimenta Dedo-de-Moça, sem sementes, picada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": false
            },
            {
                "name": "Coentros frescos picados",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Sal",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Acompanhamentos: Milho, Batata Doce cozida",
                "base_qty": 0,
                "unit": "Opcional",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "O Corte Perfeito",
                "description": "O peixe deve ser de altíssima qualidade e muito fresco. Corte o filé em cubos uniformes de cerca de 1.5 a 2 cm. Lave as fatias de cebola roxa em água gelada por 10 minutos.",
                "porque": "O corte uniforme garante que todos os pedaços de peixe 'cozinhem' por igual na marinada. Lavar a cebola roxa suaviza o seu sabor forte e a torna mais crocante.",
                "pontoCritico": "Use uma faca extremamente afiada para não 'esmagar' a carne delicada do peixe. A qualidade do peixe é 90% do sucesso do prato. Não use peixe congelado."
            },
            {
                "title": "A 'Cocção' Cítrica",
                "description": "Numa tigela de vidro, junte os cubos de peixe e tempere com sal. Adicione o sumo de lima fresco até quase cobrir o peixe. Junte a pimenta picada. Misture gentilmente e leve ao frigorífico.",
                "porque": "O ácido cítrico do sumo de lima <span class='tooltip' data-tooltip='Processo que modifica a estrutura de uma proteína, alterando a sua forma e propriedades. No ceviche, o ácido do limão faz o mesmo que o calor faria.'>denatura</span> as proteínas do peixe, alterando a sua aparência de translúcida para opaca, como se estivesse cozido pelo calor. O sal ajuda neste processo.",
                "pontoCritico": "Use sempre uma tigela de vidro ou cerâmica, nunca de metal, pois o ácido pode reagir com o metal e deixar um gosto desagradável."
            },
            {
                "title": "O Tempo da Marinada",
                "description": "O tempo de marinada é uma questão de gosto. Para um ceviche com o centro ainda cru e macio (estilo sashimi), 10 a 15 minutos é o suficiente. Para um peixe mais 'cozido' e firme, deixe por 20 a 30 minutos. Não mais que isso.",
                "porque": "O tempo determina o ponto do peixe. Pouco tempo resulta num peixe macio; muito tempo pode deixá-lo duro e borrachudo, pois o ácido continua a agir.",
                "pontoCritico": "A frescura é a chave. O ceviche deve ser preparado e servido imediatamente. Não é um prato que se possa guardar para depois.",
                "timer": 900
            },
            {
                "title": "Montagem Final",
                "description": "Escorra a maior parte do sumo de lima (o <span class='tooltip' data-tooltip='O 'leite' que resulta da marinada do peixe com o sumo de lima, pimenta, coentros e outros temperos. É a alma e o molho do ceviche.'>leche de tigre</span>). Junte a cebola roxa escorrida e os coentros picados. Misture, prove e ajuste o sal se necessário. Sirva imediatamente, acompanhado de batata doce cozida e milho, para equilibrar a acidez.",
                "porque": "A adição da cebola e dos coentros no final mantém a sua crocância e frescura. Os acompanhamentos adocicados como a batata doce são o contraponto perfeito para a acidez do prato.",
                "pontoCritico": "Não 'afogue' o ceviche no sumo da marinada ao servir. Ele deve ser um prato húmido, não uma sopa."
            }
        ],
        "variacoes": [
            "<strong>Ceviche Misto:</strong> Adicione camarão cozido e lulas em anéis.",
            "<strong>Com Manga:</strong> Adicione cubos de manga para um toque tropical e agridoce.",
            "<strong>Nikkei:</strong> Influência japonesa, adicionando um pouco de molho de soja, óleo de gergelim e gengibre ao leche de tigre."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-ceviche"
    },
    "peixes-e-frutos-do-mar-isca": {
        "title": "Aula 07: Isca de Peixe Crocante e Molho Tártaro",
        "description": "Aprenda a fazer o petisco de praia perfeito: iscas de peixe com uma crosta dourada e estaladiça, e um interior macio. A aula inclui um módulo para fazer o clássico molho tártaro caseiro, que é o par ideal.",
        "calculator": {
            "label": "Gramas de Filé de Peixe:",
            "unit": "isca-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "25 min",
            "tempoCozimento": "10-15 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 3-4 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela funda para fritar",
                "Escumadeira",
                "Grelha de metal para escorrer"
            ]
        },
        "dicaDeMestre": "O segredo para uma crosta que não se solta é o processo de empanar em três fases (farinha -> ovo -> farinha de rosca). A primeira camada de farinha seca a superfície do peixe e dá ao ovo algo a que se agarrar.",
        "ingredients": [
            {
                "name": "Filé de Peixe Branco Firme (Pescada, Cação)",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Ovos",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Farinha de Rosca (ou Panko)",
                "base_qty": 2,
                "unit": "chávenas",
                "scalable": true
            },
            {
                "name": "Óleo para fritar",
                "base_qty": 1,
                "unit": "litro",
                "scalable": false
            },
            {
                "name": "Sal, Pimenta, Páprica",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo: Molho Tártaro Caseiro",
                "subSteps": [
                    {
                        "title": "A Base",
                        "description": "Numa tigela, misture 1 chávena de maionese, 2 colheres de sopa de picles de pepino picados, 1 colher de sopa de alcaparras picadas, e 2 colheres de sopa de salsa ou cebolinho picados.",
                        "porque": "A combinação da base cremosa da maionese com os elementos ácidos e salgados (picles, alcaparras) e o frescor das ervas é o que define o molho tártaro clássico.",
                        "pontoCritico": "Pique os ingredientes muito finamente para uma textura agradável e para que os sabores se distribuam de forma homogénea."
                    },
                    {
                        "title": "Equilíbrio de Sabores",
                        "description": "Adicione 1 colher de chá de sumo de limão e pimenta moída a gosto. Misture bem e prove. Leve ao frigorífico por pelo menos 30 minutos para os sabores se fundirem.",
                        "porque": "O sumo de limão adiciona uma acidez fresca que realça os outros sabores. O descanso no frio permite que os sabores se 'casem', resultando num molho muito mais saboroso.",
                        "pontoCritico": "Faça o molho antes de fritar o peixe para dar tempo para os sabores se desenvolverem."
                    }
                ]
            },
            {
                "title": "Preparar o Peixe e a Linha de Produção",
                "description": "Corte os filés de peixe em tiras ('iscas') de cerca de 2cm de espessura. Seque-as bem com papel toalha e tempere com sal e pimenta. Prepare três pratos fundos: um com farinha de trigo (temperada com sal e páprica), um com os ovos batidos, e um com a farinha de rosca.",
                "porque": "Uma 'linha de produção' organizada (peixe -> farinha -> ovo -> rosca -> grelha) torna o processo de empanar muito mais rápido, limpo e eficiente.",
                "pontoCritico": "Use uma mão para os ingredientes secos (farinha, rosca) e outra para os húmidos (ovo) para evitar que os seus dedos fiquem empanados e com uma crosta grossa."
            },
            {
                "title": "Empanar Corretamente",
                "description": "Passe cada isca de peixe primeiro na farinha de trigo, cobrindo bem e sacudindo o excesso. Depois, mergulhe no ovo batido, deixando o excesso escorrer. Por fim, passe na farinha de rosca, pressionando levemente para garantir que a crosta adere bem.",
                "porque": "A farinha de trigo cria uma superfície seca para o ovo aderir. O ovo atua como 'cola' para a farinha de rosca. Pressionar no final compacta a crosta, tornando-a mais resistente.",
                "pontoCritico": "Sacudir o excesso de farinha em cada passo é importante para evitar uma crosta demasiado grossa e pesada."
            },
            {
                "title": "Fritar por Imersão",
                "description": "Aqueça o óleo numa panela funda a 180°C. Frite as iscas em pequenos lotes, sem encher a panela, por cerca de 3-4 minutos, ou até ficarem douradas e crocantes. Retire com uma escumadeira e escorra numa grelha de metal. Tempere com uma pitada extra de sal assim que saem do óleo.",
                "porque": "Fritar em lotes mantém a temperatura do óleo estável, garantindo uma fritura crocante e não gordurosa. Escorrer numa grelha permite que o ar circule e mantém a crocância. Salgar no final, enquanto ainda estão quentes, faz com que o sal adira melhor.",
                "pontoCritico": "Não use papel toalha para escorrer. O vapor preso por baixo amolecerá a crosta. A grelha de metal é a escolha profissional.",
                "timer": 210
            }
        ],
        "variacoes": [
            "<strong>Com Cerveja:</strong> Use cerveja gelada em vez de ovos para uma massa mais leve e aerada (tempura).",
            "<strong>Farinha Panko:</strong> Use pão ralado japonês (Panko) para uma crosta extra crocante e estaladiça.",
            "<strong>No Forno ou Air Fryer:</strong> Para uma versão mais saudável, disponha as iscas empanadas num tabuleiro, regue com azeite e asse a 200°C até dourar."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-isca"
    },
    "peixes-e-frutos-do-mar-salmao-molho": {
        "title": "Aula 08: Salmão ao Molho de Maracujá",
        "description": "Um prato com cara de restaurante, mas surpreendentemente simples. Aprenda a grelhar um salmão perfeito e a fazer um molho agridoce de maracujá através da técnica de <span class='tooltip' data-tooltip='Processo de ferver um líquido (como vinho, caldo ou sumo) para evaporar a água e concentrar intensamente os sabores.'>redução</span>.",
        "calculator": {
            "label": "Postas de Salmão (180g cada):",
            "unit": "salmao-molho-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "15-20 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 por pessoa",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Frigideira antiaderente",
                "Panela pequena para o molho",
                "Coador"
            ]
        },
        "dicaDeMestre": "Para um molho mais refinado, coe a polpa de maracujá para remover a maioria das sementes, mas guarde uma colher de sopa de sementes para adicionar de volta no final. Isso dá a aparência clássica ao molho sem o excesso de textura das sementes.",
        "ingredients": [
            {
                "name": "Posta de Salmão com pele",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true,
                "heading": "Para o Salmão"
            },
            {
                "name": "Azeite, Sal, Pimenta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Polpa de Maracujá fresco",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true,
                "heading": "Para o Molho"
            },
            {
                "name": "Mel ou Açúcar",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Vinho Branco Seco",
                "base_qty": 50,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Manteiga fria em cubos",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo: O Salmão Grelhado Perfeito",
                "subSteps": [
                    {
                        "title": "A Preparação do Filé",
                        "description": "Seque a pele do salmão meticulosamente com papel toalha. Tempere ambos os lados com sal e pimenta.",
                        "porque": "A pele seca é o segredo para ficar crocante. Sem humidade, a pele frita na gordura em vez de cozinhar a vapor.",
                        "pontoCritico": "Não tenha pena do papel toalha. A pele tem de estar o mais seca possível."
                    },
                    {
                        "title": "Grelhar com a Pele para Baixo",
                        "description": "Aqueça uma frigideira em lume médio-alto com um fio de óleo. Coloque o salmão com a pele para baixo e pressione levemente com uma espátula por 15 segundos. Cozinhe por 4-6 minutos, até a maior parte do filé mudar de cor.",
                        "porque": "Cozinhar sobre a pele protege a carne delicada do peixe, enquanto permite que a pele se torne uma iguaria estaladiça.",
                        "pontoCritico": "Deixe o peixe quieto. Não o vire nem o abane. Confie no processo e observe a linha de cozimento subir pela lateral."
                    },
                    {
                        "title": "O 'Beijo' Final",
                        "description": "Vire o salmão e cozinhe por apenas mais 30-60 segundos do outro lado para finalizar. Retire e reserve.",
                        "porque": "Este final rápido cozinha o topo do peixe sem o secar. O salmão deve ficar húmido e a lascar facilmente.",
                        "pontoCritico": "É melhor errar para menos do que para mais. O calor residual continuará a cozinhar o peixe depois de retirado da frigideira."
                    }
                ]
            },
            {
                "title": "A Construção do Molho",
                "description": "Na mesma frigideira onde grelhou o salmão, adicione o vinho branco para <span class='tooltip' data-tooltip='Adicionar um líquido (vinho, conhaque, caldo) a uma panela quente para soltar os pedaços de comida caramelizados (fond) do fundo.'>deglacear</span>, raspando quaisquer pedacinhos saborosos do fundo. Deixe o álcool evaporar. Adicione a polpa de maracujá (coada, se preferir) e o mel/açúcar.",
                "porque": "Usar a mesma frigideira incorpora os sabores do salmão no molho. A acidez do vinho e do maracujá é equilibrada pela doçura do mel.",
                "pontoCritico": "Certifique-se de que o álcool do vinho evapora completamente, senão o molho ficará com um gosto desagradável."
            },
            {
                "title": "A <span class='tooltip' data-tooltip='Processo de ferver um líquido (como vinho, caldo ou sumo) para evaporar a água e concentrar intensamente os sabores.'>Redução</span> e a Finalização",
                "description": "Deixe o molho ferver em lume médio-baixo, mexendo ocasionalmente, até que ele reduza de volume e engrosse ligeiramente, cobrindo as costas de uma colher (cerca de 5-10 minutos). Retire do lume e junte os cubos de manteiga fria, mexendo para emulsionar.",
                "porque": "A redução concentra o sabor do maracujá, tornando-o mais intenso. A manteiga no final ('monter au beurre') adiciona brilho, cremosidade e riqueza ao molho, equilibrando a acidez.",
                "pontoCritico": "A manteiga deve ser adicionada fora do lume para que emulsione corretamente e não se separe."
            },
            {
                "title": "Servir",
                "description": "Coloque o filé de salmão no prato e regue generosamente com o molho de maracujá quente. Acompanha bem com um puré de batata ou arroz de jasmim.",
                "porque": "A combinação do salmão rico e gorduroso com a acidez e doçura do molho de maracujá cria um equilíbrio de sabores clássico e delicioso.",
                "pontoCritico": "Regue o molho à volta ou apenas sobre a carne do salmão, evitando a pele para que ela se mantenha crocante."
            }
        ],
        "variacoes": [
            "<strong>Picante:</strong> Adicione uma pitada de pimenta caiena ou um pouco de pimenta dedo-de-moça picada ao molho.",
            "<strong>Com Gengibre:</strong> Um pouco de gengibre fresco ralado adiciona uma camada de calor e aroma.",
            "<strong>Outras Frutas:</strong> Esta técnica de redução funciona bem com outras frutas ácidas como manga, ananás ou cupuaçu."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-salmao-molho"
    },
    "peixes-e-frutos-do-mar-mexilhoes": {
        "title": "Aula 09: Mexilhões à Belga (Moules Frites)",
        "description": "Aprenda a fazer este prato clássico europeu que é sofisticado, incrivelmente saboroso e surpreendentemente rápido. O segredo está em limpar bem os mexilhões e criar um caldo aromático para os cozinhar a vapor.",
        "calculator": {
            "label": "Quilos de Mexilhões Frescos:",
            "unit": "mexilhoes-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "10-12 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 2 pessoas por kg",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela grande com tampa",
                "Escova dura",
                "Tigela"
            ]
        },
        "dicaDeMestre": "O erro mais comum é cozinhar demais os mexilhões. Eles estão prontos assim que as conchas se abrem. Cozinhar por mais tempo apenas os tornará duros e borrachudos. Retire-os do lume assim que a maioria estiver aberta.",
        "ingredients": [
            {
                "name": "Mexilhões frescos e vivos",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Cebola ou chalotas, picadas",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Alho, fatiado",
                "base_qty": 2,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Vinho Branco Seco",
                "base_qty": 200,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Manteiga",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Salsa fresca picada",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Batatas Fritas para acompanhar",
                "base_qty": 0,
                "unit": "Opcional",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Limpar os Mexilhões",
                "description": "Este é o passo mais importante. Coloque os mexilhões numa tigela com água fria. Descarte quaisquer mexilhões que estejam partidos ou que estejam abertos e não se fechem ao lhes dar uma leve pancada. Com uma escova dura, esfregue as conchas para remover qualquer sujidade. Puxe e descarte a 'barba' (um tufo de fibras que sai da concha).",
                "porque": "Mexilhões são filtros vivos e precisam de ser limpos. Os que estão partidos ou abertos estão mortos e não são seguros para consumo, devendo ser descartados.",
                "pontoCritico": "Se um mexilhão estiver ligeiramente aberto, dê-lhe uma pancada firme na bancada. Se estiver vivo, ele irá fechar-se lentamente. Se permanecer aberto, descarte-o."
            },
            {
                "title": "O Caldo Aromático",
                "description": "Numa panela grande e funda com tampa, derreta a manteiga em lume médio. Adicione a cebola (ou chalotas) e o alho e refogue até ficarem macios e translúcidos, sem ganhar cor.",
                "porque": "Esta base aromática irá criar o vapor saboroso que cozinhará os mexilhões, e o caldo resultante será um molho delicioso para mergulhar pão ou as batatas fritas.",
                "pontoCritico": "Use uma panela grande o suficiente para que os mexilhões tenham espaço para se abrirem. Eles quase dobram de volume."
            },
            {
                "title": "Cozinhar a Vapor",
                "description": "Aumente o lume para alto. Adicione os mexilhões limpos à panela e, imediatamente, despeje o vinho branco por cima. Tape a panela firmemente e cozinhe por 5 a 7 minutos, abanando a panela ocasionalmente.",
                "porque": "O calor alto e o vinho criam uma grande quantidade de vapor rapidamente, que fica preso na panela e cozinha os mexilhões. Abanar a panela ajuda a redistribuir os mexilhões para que cozinhem por igual.",
                "pontoCritico": "Não espie! Mantenha a tampa fechada para não deixar o vapor escapar.",
                "timer": 360
            },
            {
                "title": "Finalizar e Servir",
                "description": "Após 5 minutos, abra a tampa. A maioria dos mexilhões deverá estar aberta. Descarte quaisquer mexilhões que permaneceram fechados. Polvilhe com a salsa fresca picada e sirva imediatamente, numa tigela grande, com o caldo por cima. Acompanhe com batatas fritas e pão para ensopar.",
                "porque": "Os mexilhões que não se abrem após o cozimento estavam provavelmente mortos antes de cozinhar e devem ser descartados por segurança. O caldo é tão delicioso quanto os próprios mexilhões.",
                "pontoCritico": "Sirva imediatamente. Os mexilhões perdem a sua textura delicada se arrefecerem."
            }
        ],
        "variacoes": [
            "<strong>Com Natas:</strong> No final, retire os mexilhões e adicione um pouco de natas ao caldo, deixando engrossar ligeiramente antes de voltar a juntar os mexilhões.",
            "<strong>À Espanhola:</strong> Adicione chouriço picado e uma pitada de açafrão ao refogado inicial.",
            "<strong>Tailandês:</strong> Substitua o vinho por leite de coco e adicione capim-limão, gengibre e coentros."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-mexilhoes"
    },
    "peixes-e-frutos-do-mar-risoto": {
        "title": "Aula 10: Risoto de Frutos do Mar",
        "description": "A aula de graduação. Combine a técnica do risoto cremoso com o cozimento preciso de diferentes frutos do mar para criar um prato principal elegante e impressionante que é a essência da cozinha italiana costeira.",
        "calculator": {
            "label": "Porções:",
            "unit": "risoto-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "25 min",
            "tempoCozimento": "30-40 min",
            "tempoDescanso": "2 min",
            "rendimento": "Serve 3-4 pessoas",
            "dificuldade": "Avançado",
            "utensilios": [
                "Panela larga para risoto",
                "Frigideira separada",
                "Concha",
                "Panela para o caldo"
            ]
        },
        "dicaDeMestre": "O segredo para frutos do mar no ponto é cozinhá-los separadamente e adicioná-los ao risoto apenas no final. Se os cozinhar junto com o arroz desde o início, ficarão duros e borrachudos. Use a frigideira onde os salteou para <span class='tooltip' data-tooltip='Adicionar um líquido (vinho, conhaque, caldo) a uma panela quente para soltar os pedaços de comida caramelizados (fond) do fundo.'>deglacear</span> com vinho branco, e adicione esse líquido saboroso ao risoto.",
        "ingredients": [
            {
                "name": "Arroz para Risoto (Carnaroli é ideal)",
                "base_qty": 320,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Caldo de Peixe ou Legumes, quente",
                "base_qty": 1.5,
                "unit": "L",
                "scalable": true
            },
            {
                "name": "Camarões limpos",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Lulas em anéis",
                "base_qty": 150,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Mexilhões ou amêijoas, limpos",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Vinho Branco Seco",
                "base_qty": 150,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Chalota ou cebola, picada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Tomate cherry, ao meio",
                "base_qty": 150,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Salsa Fresca, Sal, Pimenta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo: A Base do Risoto Perfeito",
                "subSteps": [
                    {
                        "title": "Caldo Quente e Sofrito",
                        "description": "Mantenha o caldo de peixe a ferver suavemente numa panela ao lado. Numa panela larga, refogue a chalota picada em azeite até ficar translúcida. Adicione o arroz e faça a '<span class='tooltip' data-tooltip='Termo italiano para tostar o arroz na gordura antes de adicionar líquido.'>tostatura</span>' por 2 minutos, mexendo sempre. Deglaceie com metade do vinho branco e deixe evaporar.",
                        "porque": "Estes passos fundamentais (caldo quente, tostar o arroz) são a base para a textura cremosa do risoto.",
                        "pontoCritico": "Use um bom caldo de peixe caseiro, se possível. Faz toda a diferença."
                    },
                    {
                        "title": "Cozimento do Arroz",
                        "description": "Comece a adicionar o caldo quente, concha a concha, mexendo frequentemente, esperando que uma seja absorvida antes de adicionar a próxima. Este processo levará cerca de 18 minutos.",
                        "porque": "A agitação constante liberta o amido do arroz, criando a cremosidade natural do prato.",
                        "pontoCritico": "Comece a provar o arroz a partir dos 15 minutos para não o cozinhar demais. Deve estar 'al dente'."
                    }
                ]
            },
            {
                "title": "Saltear os Frutos do Mar",
                "description": "Enquanto o risoto cozinha, aqueça uma frigideira separada com azeite e alho. Salteie as lulas por 1-2 minutos e reserve. Na mesma frigideira, salteie os camarões até ficarem rosados e reserve. Por fim, adicione os mexilhões/amêijoas e o resto do vinho, tape e cozinhe até as conchas abrirem. Reserve tudo.",
                "porque": "Cada fruto do mar tem um tempo de cozimento diferente. Cozinhá-los separadamente garante que cada um esteja no seu ponto perfeito.",
                "pontoCritico": "Não cozinhe demais nada! Lulas e camarões ficam borrachudos muito rapidamente. O objetivo é apenas selá-los."
            },
            {
                "title": "Unir os Sabores",
                "description": "Quando o risoto estiver quase 'al dente' (faltando 2-3 minutos), adicione os tomates cherry e o líquido que se formou na panela dos mexilhões. Continue a cozinhar.",
                "porque": "O líquido dos mexilhões é puro sabor a mar e irá infundir o risoto. Os tomates precisam de um pouco de tempo para amolecerem.",
                "pontoCritico": "Este líquido é salgado, por isso, cuidado ao ajustar o sal do risoto no final."
            },
            {
                "title": "A Grande Finalização",
                "description": "Quando o arroz estiver no ponto, retire a panela do lume. Junte todos os frutos do mar salteados (camarões, lulas, mexilhões sem concha). Adicione um bom fio de azeite e a salsa fresca picada. Mexa vigorosamente para criar a <span class='tooltip' data-tooltip='Termo italiano para 'ondulante'. O risoto deve ser cremoso o suficiente para se espalhar suavemente no prato.'>onda</span> final ('mantecatura' sem queijo). Sirva imediatamente.",
                "porque": "A adição final fora do lume apenas aquece os frutos do mar sem os cozinhar demais. A agitação com o azeite cria a emulsão final, deixando o risoto brilhante e cremoso.",
                "pontoCritico": "Risoto de frutos do mar tradicionalmente não leva queijo parmesão para não mascarar o sabor delicado do mar. A cremosidade vem do amido e do azeite."
            }
        ],
        "variacoes": [
            "<strong>Com Açafrão:</strong> Adicione uma pitada de pistilos de açafrão ao caldo para um 'risotto alla milanese' com frutos do mar.",
            "<strong>Apenas Camarão:</strong> Simplifique usando apenas camarões e o seu caldo.",
            "<strong>Com Tinta de Choco:</strong> Para um visual dramático e um sabor profundo, adicione tinta de choco (lula) ao risoto nos últimos minutos."
        ],
        "module": "Peixes e Frutos do Mar",
        "url": "peixes.html#receita-risoto"
    },
    "acompanhamentos-risoto-base": {
        "title": "Aula 01: Risoto Milanês (A Base para Risotos)",
        "description": "O Risoto alla Milanese é o avô de todos os risotos. Ao dominar esta receita, você aprende os 3 Ts essenciais (Tostatura, Tecnica, Mantecatura) para criar qualquer variação de risoto com uma cremosidade perfeita e o grão 'al dente'.",
        "calculator": {
            "label": "Gramas de Arroz:",
            "unit": "risoto-base-input",
            "base_value": 320,
            "default_value": 320
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "2 min",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela larga e de fundo grosso",
                "Concha",
                "Panela para o caldo"
            ]
        },
        "dicaDeMestre": "O caldo deve estar sempre a ferver suavemente numa panela ao lado. Adicionar caldo frio ao risoto interrompe o cozimento, 'choca' o grão de arroz e prejudica a libertação do amido, resultando num risoto menos cremoso.",
        "ingredients": [
            {
                "name": "Arroz para Risoto (Arborio ou Carnaroli)",
                "base_qty": 320,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Caldo de Galinha ou Legumes, quente",
                "base_qty": 1.2,
                "unit": "L",
                "scalable": true
            },
            {
                "name": "Cebola pequena, picada finamente",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Vinho Branco Seco",
                "base_qty": 100,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Pistilos de Açafrão",
                "base_qty": 0.5,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Manteiga sem sal, fria em cubos",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Queijo Parmesão, ralado na hora",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar o Açafrão e o Sofrito",
                "description": "Coloque os pistilos de açafrão numa pequena tigela com uma concha de caldo quente para infundir. Numa panela larga, derreta metade da manteiga em lume médio e refogue a cebola ('sofrito') até ficar macia e translúcida, sem ganhar cor (cerca de 5-8 minutos).",
                "porque": "Infundir o açafrão previamente liberta a sua cor e sabor de forma mais eficaz. Um 'sofrito' lento e gentil cria uma base de sabor doce e aromática, sem a agressividade da cebola crua.",
                "pontoCritico": "Não deixe a cebola dourar. O objetivo é a doçura, não a caramelização."
            },
            {
                "title": "A 'Tostatura' (Tostar o Arroz)",
                "description": "Aumente o lume, adicione o arroz à panela e mexa constantemente por cerca de 2 minutos. Os grãos ficarão translúcidos nas bordas e com um centro branco opaco. Este passo é a 'tostatura'.",
                "porque": "Tostar o arroz sela o exterior do grão, ajudando-o a absorver o caldo lentamente sem se desmanchar. Também desenvolve um sabor levemente tostado, como o de nozes.",
                "pontoCritico": "Continue a mexer para que o arroz não queime. Você deve sentir o calor nos grãos ao tocar (com cuidado)."
            },
            {
                "title": "A Técnica (Vinho e Caldo)",
                "description": "Adicione o vinho branco e mexa até que o álcool evapore completamente. Comece a adicionar o caldo quente, uma concha de cada vez, mexendo frequentemente. Espere que o caldo seja quase totalmente absorvido antes de adicionar a próxima concha. A meio do processo, adicione o açafrão infundido.",
                "porque": "A adição gradual de líquido e a agitação constante fazem com que os grãos de arroz se friccionem, libertando o seu amido e criando a cremosidade natural do risoto. Este processo deve demorar cerca de 18 minutos.",
                "pontoCritico": "O risoto não precisa de ser mexido sem parar, mas sim frequentemente. O movimento é o que cria o creme.",
                "timer": 1080
            },
            {
                "title": "A 'Mantecatura' (Finalização Cremosa)",
                "description": "Quando o arroz estiver 'al dente' (cozido mas ainda com uma leve resistência no centro), retire a panela do lume. Adicione o resto da manteiga fria e o queijo parmesão ralado. Mexa vigorosamente para emulsionar a gordura e o amido. Tape e deixe descansar por 2 minutos antes de servir.",
                "porque": "Este passo final, a 'mantecatura', é o que cria a textura aveludada e a famosa 'onda' ('all'onda') do risoto perfeito. Fazer isto fora do lume evita que a gordura se separe.",
                "pontoCritico": "A manteiga deve estar fria para criar o choque térmico que ajuda na emulsão. Mexa com energia para incorporar ar e criar leveza."
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> O acompanhamento clássico para Ossobuco. Fantástico com um Lombo de Porco Assado ou um peito de frango grelhado simples.",
            "<strong>Risoto de Cogumelos:</strong> Salteie cogumelos separadamente e adicione-os no final, durante a 'mantecatura'.",
            "<strong>Risoto de Abóbora:</strong> Cozinhe puré de abóbora junto com o arroz para uma versão de outono."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-risoto-base"
    },
    "acompanhamentos-pure": {
        "title": "Aula 02: Puré de Batata Cremoso",
        "description": "O acompanhamento de conforto por excelência. Aprenda a técnica para um puré de batata aveludado, rico, cremoso e completamente livre de grumos ou da temida textura 'cola'.",
        "calculator": {
            "label": "Quilos de Batata:",
            "unit": "pure-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas por kg",
            "dificuldade": "Fácil",
            "utensilios": [
                "Espremedor de batata ou passe-vite",
                "Panela grande",
                "Batedor de arame (fouet)"
            ]
        },
        "dicaDeMestre": "O maior inimigo de um puré cremoso é a água. Depois de escorrer as batatas, volte a colocá-las na panela quente em lume baixo por um minuto. Isso fará com que qualquer excesso de humidade evapore, resultando num puré que absorve melhor a manteiga e o leite.",
        "ingredients": [
            {
                "name": "Batatas ricas em amido (ex: Asterix, Desiree)",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Manteiga sem sal, fria em cubos",
                "base_qty": 150,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Leite Gordo ou Natas (quente)",
                "base_qty": 200,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Noz-moscada, Sal, Pimenta Branca",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Cozinhar as Batatas",
                "description": "Descasque as batatas e corte-as em pedaços uniformes. Coloque-as numa panela, cubra com água fria e adicione uma boa quantidade de sal. Leve a ferver e cozinhe até as batatas estarem muito macias (um garfo deve entrar e sair sem qualquer resistência).",
                "porque": "Começar com água fria cozinha as batatas de forma mais uniforme. Salgar a água tempera as batatas de dentro para fora. Cozinhá-las até estarem a desfazer-se facilita o processo de as espremer.",
                "pontoCritico": "Não cozinhe as batatas de menos. Se estiverem duras, o puré ficará com grumos."
            },
            {
                "title": "Espremer, Nunca Bater",
                "description": "Escorra bem a água. Passe as batatas quentes por um espremedor de batata ou um <span class='tooltip' data-tooltip='Utensílio de cozinha que mói e coa alimentos moles, ideal para purés lisos.'>passe-vite</span> para uma tigela. Nunca use um processador de alimentos ou liquidificador.",
                "porque": "Um espremedor ou passe-vite cria uma textura leve e fofa. Um processador ou liquidificador trabalha demais o amido da batata, quebrando as suas células e libertando amido em excesso, o que transforma o puré numa pasta elástica e 'cola'.",
                "pontoCritico": "Esprema as batatas enquanto ainda estão quentes. É muito mais fácil e resulta numa textura melhor."
            },
            {
                "title": "A Cremosidade Final",
                "description": "Com as batatas espremidas na tigela, adicione a manteiga fria em cubos e incorpore com um batedor de arames ou espátula. Aos poucos, adicione o leite ou as natas quentes, mexendo suavemente até atingir a consistência desejada. Tempere com sal, pimenta branca e noz-moscada ralada na hora.",
                "porque": "Adicionar a manteiga primeiro reveste as moléculas de amido com gordura, resultando num puré mais rico. O líquido quente é absorvido mais facilmente, mantendo o puré quente e cremoso.",
                "pontoCritico": "Adicione o líquido aos poucos. É fácil adicionar mais, mas impossível de remover se o puré ficar demasiado líquido."
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> Ideal para pratos com molho, como Carne de Panela, Rosbife, Lombo Assado ou Bife Grelhado. Também é excelente com peixes mais ricos como o Salmão.",
            "<strong>Puré de Alho Assado:</strong> Asse uma cabeça de alho no forno, esprema os dentes e misture no puré.",
            "<strong>Com Queijo:</strong> Misture queijo parmesão, gruyère ou cheddar ralado no final."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-pure"
    },
    "acompanhamentos-batata-assada": {
        "title": "Aula 03: Batatas Assadas Crocantes",
        "description": "Aprenda os segredos para batatas assadas que são incrivelmente crocantes e douradas por fora, mas macias e fofas por dentro. O acompanhamento perfeito para qualquer assado.",
        "calculator": {
            "label": "Quilos de Batata:",
            "unit": "batata-assada-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "50-60 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 3-4 pessoas por kg",
            "dificuldade": "Fácil",
            "utensilios": [
                "Assadeira de metal",
                "Panela grande",
                "Escorredor"
            ]
        },
        "dicaDeMestre": "O segredo para a máxima crocância é 'agitar' as batatas pré-cozidas no escorredor. Isto cria uma superfície felpuda e irregular, que aumenta a área de superfície e resulta em inúmeros cantinhos estaladiços depois de assar.",
        "ingredients": [
            {
                "name": "Batatas para assar (ex: King Edward, Maris Piper)",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Azeite ou Gordura de Pato",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Dentes de Alho, esmagados",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Ramos de Alecrim Fresco",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Sal Grosso e Pimenta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Pré-cozinhar as Batatas",
                "description": "Pré-aqueça o forno a 200°C. Descasque as batatas e corte-as em pedaços grandes e uniformes. Cozinhe-as em água a ferver com sal por cerca de 10-12 minutos. Elas devem estar macias por fora, mas ainda firmes no centro.",
                "porque": "A pré-cozedura garante um interior macio e fofo. Se fossem diretamente para o forno, o exterior queimaria antes de o interior cozinhar.",
                "pontoCritico": "Não as cozinhe demais, ou elas desmanchar-se-ão. Um garfo deve entrar com alguma resistência.",
                "timer": 600
            },
            {
                "title": "O Segredo da Textura",
                "description": "Escorra bem as batatas e deixe-as no escorredor por 2 minutos para secarem com o vapor. Depois, tape o escorredor e agite-o vigorosamente por 5 segundos. As bordas das batatas devem ficar 'felpudas' e esbranquiçadas.",
                "porque": "Esta é a técnica chave! A superfície irregular irá agarrar a gordura e criar uma crosta incrivelmente crocante e texturizada no forno.",
                "pontoCritico": "Agite com intenção, mas não com força excessiva para não as transformar em puré."
            },
            {
                "title": "Assar até Dourar",
                "description": "Coloque o azeite ou gordura numa assadeira de metal e leve ao forno quente por 5 minutos para aquecer. Com cuidado, adicione as batatas à gordura quente. Vire-as para cobrir todos os lados e asse por 20 minutos. Vire as batatas, adicione o alho e o alecrim, e asse por mais 20-30 minutos, ou até estarem bem douradas e crocantes.",
                "porque": "Colocar as batatas na gordura já quente dá um 'choque' inicial que ajuda a criar a crosta. A assadeira de metal conduz melhor o calor do que a de vidro, promovendo uma melhor caramelização.",
                "pontoCritico": "Não sobrecarregue a assadeira. As batatas devem estar numa única camada para assarem, não cozinharem a vapor.",
                "timer": 1200
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> O par ideal para qualquer tipo de assado, como Frango Inteiro, Lombo de Porco ou Rosbife. Também fantásticas com um Bife Grelhado.",
            "<strong>Com Páprica:</strong> Adicione páprica fumada à gordura para uma cor e sabor extra.",
            "<strong>Com Parmesão:</strong> Polvilhe com queijo parmesão ralado nos últimos 10 minutos de cozimento."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-batata-assada"
    },
    "acompanhamentos-legumes-assados": {
        "title": "Aula 04: Legumes Assados (Cama de Legumes)",
        "description": "Aprenda a assar legumes para realçar a sua doçura natural. Esta técnica cria um acompanhamento colorido e saudável, ou a 'cama' perfeita sobre a qual pode assar uma peça de carne ou peixe.",
        "calculator": {
            "label": "Quilos de Legumes Variados:",
            "unit": "legumes-assados-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "30-40 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4 pessoas por kg",
            "dificuldade": "Fácil",
            "utensilios": [
                "Assadeira grande",
                "Faca"
            ]
        },
        "dicaDeMestre": "Não sobrecarregue a assadeira. Os legumes devem estar dispostos numa única camada com algum espaço entre eles. Se estiverem amontoados, eles irão cozinhar a vapor em vez de assar, resultando numa textura mole e sem a deliciosa caramelização.",
        "ingredients": [
            {
                "name": "Legumes variados (cenoura, batata doce, abóbora, pimentão, cebola roxa)",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Ervas secas (tomilho, orégãos) ou frescas (alecrim)",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta Preta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar os Legumes",
                "description": "Pré-aqueça o forno a 200°C. Lave e corte os legumes em pedaços uniformes, com cerca de 2-3 cm. Legumes mais duros como batatas e cenouras podem ser cortados um pouco mais pequenos que os mais macios como pimentões.",
                "porque": "O corte uniforme garante que todos os legumes cozinhem ao mesmo tempo. Ajustar o tamanho com base na densidade ajuda a sincronizar o ponto de cozimento.",
                "pontoCritico": "Deixe a casca em legumes como batatas e abóbora para mais textura e nutrientes."
            },
            {
                "title": "Temperar Generosamente",
                "description": "Numa tigela grande (ou diretamente na assadeira), misture os legumes com o azeite, sal, pimenta e ervas. Use as mãos para garantir que todos os pedaços estão bem revestidos com a gordura e os temperos.",
                "porque": "O azeite é crucial para a condução do calor e para evitar que os legumes sequem. Ele é o veículo que ajuda a criar a caramelização e a dourar a superfície.",
                "pontoCritico": "Não tenha medo de usar uma boa quantidade de azeite. Legumes secos no forno ficam murchos e sem graça."
            },
            {
                "title": "Assar até Caramelizar",
                "description": "Espalhe os legumes numa única camada numa assadeira grande. Leve ao forno por 30 a 40 minutos, virando-os a meio do tempo, até estarem macios por dentro e com as pontas douradas e caramelizadas.",
                "porque": "O calor seco do forno concentra os açúcares naturais dos legumes, intensificando o seu sabor de uma forma que o cozimento em água não consegue. Virar a meio garante um dourado uniforme.",
                "pontoCritico": "Cada forno é diferente. Fique de olho nos legumes nos últimos 10 minutos para garantir que não queimam.",
                "timer": 1800
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> Use como 'cama' para assar um Frango Inteiro ou um Lombo de Porco por cima. Os sucos da carne irão dar um sabor incrível aos legumes. Também é um excelente acompanhamento para Peixe Assado ou Grelhado.",
            "<strong>Com Mel ou Balsâmico:</strong> Nos últimos 10 minutos, regue com um fio de mel ou vinagre balsâmico para um glacê agridoce.",
            "<strong>Com Queijo Feta:</strong> Depois de retirar do forno, esfarele queijo feta por cima para um contraste salgado e cremoso."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-legumes-assados"
    },
    "acompanhamentos-farofa": {
        "title": "Aula 05: Farofa de Manteiga e Cebola",
        "description": "Um ícone da culinária brasileira. Aprenda a fazer uma farofa simples, húmida na medida certa, crocante e cheia de sabor, usando apenas alguns ingredientes. É o acompanhamento que adiciona textura a qualquer prato.",
        "calculator": {
            "label": "Chávenas de Farinha de Mandioca:",
            "unit": "farofa-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "10-15 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira larga",
                "Colher de pau"
            ]
        },
        "dicaDeMestre": "O segredo para uma farofa que não fica seca é a proporção de gordura e a temperatura. Toste a farinha em lume baixo, mexendo sempre, para que ela absorva a manteiga lentamente sem queimar, resultando numa textura perfeita.",
        "ingredients": [
            {
                "name": "Farinha de Mandioca (flocada ou fina)",
                "base_qty": 2,
                "unit": "chávenas",
                "scalable": true
            },
            {
                "name": "Manteiga",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Cebola grande, picada finamente",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta do Reino",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "A Base de Sabor",
                "description": "Numa frigideira larga em lume médio, derreta a manteiga. Adicione a cebola picada e uma pitada de sal. Refogue lentamente por 5 a 8 minutos, até a cebola ficar bem macia, translúcida e começar a dourar.",
                "porque": "Cozinhar a cebola lentamente na manteiga liberta a sua doçura natural, criando uma base de sabor rica e complexa que irá perfumar toda a farofa. O sal ajuda a extrair a humidade da cebola.",
                "pontoCritico": "Não apresse este passo. Uma cebola bem refogada é o segredo de uma farofa saborosa. Se queimar, o sabor amargo irá estragar o resultado."
            },
            {
                "title": "Tostar a Farinha",
                "description": "Reduza o lume para o mínimo. Adicione a farinha de mandioca à frigideira, toda de uma vez. Comece a mexer imediatamente com uma colher de pau, incorporando a farinha na manteiga e na cebola.",
                "porque": "Adicionar a farinha com o lume baixo impede que ela queime imediatamente, dando-lhe tempo para absorver a gordura e cozinhar lentamente.",
                "pontoCritico": "A partir deste momento, não pare de mexer. A farinha de mandioca queima muito facilmente."
            },
            {
                "title": "O Ponto Perfeito",
                "description": "Continue a mexer e a tostar a farinha em lume baixo por 3 a 5 minutos. A farofa estará pronta quando estiver dourada, com um aroma de nozes tostadas e completamente soltinha. Tempere com sal e pimenta a gosto.",
                "porque": "Este processo de tostar cozinha o sabor 'cru' da farinha e desenvolve a sua complexidade. O tempo exato depende do tipo de farinha e do seu gosto pessoal (mais clara ou mais escura).",
                "pontoCritico": "Prove a farofa para verificar o ponto. Ela deve estar crocante, mas não com gosto de queimado. Desligue o lume um pouco antes de atingir a cor desejada, pois ela continua a tostar com o calor residual da frigideira.",
                "timer": 240
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> Indispensável com Feijoada e Churrasco. Maravilhosa com Carne de Panela, Moqueca e para rechear Aves Assadas.",
            "<strong>Com Bacon e Linguiça:</strong> Frite cubos de bacon e linguiça antes de adicionar a cebola para uma versão mais rica.",
            "<strong>Com Ovos e Banana:</strong> Adicione ovos mexidos e rodelas de banana-da-terra frita no final para uma farofa completa."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-farofa"
    },
    "acompanhamentos-salada-caesar": {
        "title": "Aula 06: Salada Caesar Clássica (com Molho Caseiro)",
        "description": "Esqueça os molhos de compra. Aprenda a fazer uma verdadeira Salada Caesar, com um molho cremoso e complexo feito do zero e croutons caseiros. É uma salada que se impõe como prato principal.",
        "calculator": {
            "label": "Porções:",
            "unit": "salada-caesar-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "25 min",
            "tempoCozimento": "10 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Tigela grande",
                "Faca de chef",
                "Batedor de arame (fouet)"
            ]
        },
        "dicaDeMestre": "O segredo de um molho Caesar autêntico e seguro é usar uma gema de ovo pasteurizada ou fazer uma emulsão inicial com a gema, um pouco de água a ferver e o sumo de limão, batendo vigorosamente para 'cozinhar' a gema com o calor e o ácido.",
        "ingredients": [
            {
                "name": "Alface Romana",
                "base_qty": 2,
                "unit": "pés",
                "scalable": true
            },
            {
                "name": "Pão tipo italiano, em cubos",
                "base_qty": 200,
                "unit": "g",
                "scalable": true,
                "heading": "Para os Croutons"
            },
            {
                "name": "Azeite",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Dente de Alho",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true,
                "heading": "Para o Molho"
            },
            {
                "name": "Filés de Anchova em óleo, picados",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Gema de Ovo",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Mostarda Dijon",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Sumo de Limão Siciliano",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Óleo Vegetal Neutro",
                "base_qty": 120,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Queijo Parmesão ralado na hora",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            }
        ],
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo: Croutons Caseiros",
                "subSteps": [
                    {
                        "title": "Preparar e Temperar",
                        "description": "Pré-aqueça o forno a 180°C. Corte o pão em cubos de 2cm. Numa tigela, misture os cubos de pão com o azeite, sal e pimenta até estarem bem cobertos.",
                        "porque": "Croutons caseiros são infinitamente superiores aos de compra. O azeite garante que fiquem dourados e crocantes.",
                        "pontoCritico": "Use um pão ligeiramente velho ('dormido'), pois ele tem menos humidade e ficará mais crocante."
                    },
                    {
                        "title": "Assar até Dourar",
                        "description": "Espalhe os cubos de pão numa única camada num tabuleiro e leve ao forno por 10 a 15 minutos, virando a meio, até estarem dourados e estaladiços. Deixe arrefecer completamente.",
                        "porque": "Assar em vez de fritar resulta em croutons mais leves e uniformes. Deixar arrefecer é crucial para que atinjam a máxima crocância.",
                        "pontoCritico": "Fique de olho, pois eles podem queimar rapidamente no final.",
                        "timer": 600
                    }
                ]
            },
            {
                "title": "A Base do Molho Caesar",
                "description": "Numa tigela, use um garfo para amassar o dente de alho e os filés de anchova até formar uma pasta. Junte a gema de ovo, a mostarda Dijon e o sumo de limão. Bata bem com um batedor de arames.",
                "porque": "As anchovas fornecem o sabor <span class='tooltip' data-tooltip='O 'quinto gosto', profundo e saboroso, encontrado em queijos curados, anchovas e carnes.'>umami</span> salgado característico do molho. A gema e a mostarda são os emulsionantes que irão unir o óleo e o ácido.",
                "pontoCritico": "Pique e amasse muito bem as anchovas para que se dissolvam no molho sem deixar pedaços grandes."
            },
            {
                "title": "A Emulsão",
                "description": "Enquanto bate vigorosamente, adicione o óleo vegetal num fio fino e contínuo, como se estivesse a fazer maionese. Continue a bater até o molho engrossar e ficar cremoso. Incorpore metade do queijo parmesão ralado e tempere com pimenta preta.",
                "porque": "A adição lenta do óleo é o que permite a formação de uma <span class='tooltip' data-tooltip='Mistura estável de dois líquidos que normalmente não se misturam, como óleo e água.'>emulsão</span> estável. O parmesão adiciona mais sabor salgado e ajuda a engrossar.",
                "pontoCritico": "Se o molho ficar demasiado espesso, pode afiná-lo com uma colher de chá de água."
            },
            {
                "title": "Montagem Final",
                "description": "Lave e seque muito bem as folhas de alface. Rasgue-as em pedaços grandes com as mãos. Numa tigela grande, envolva delicadamente a alface com a quantidade desejada de molho. Adicione os croutons e o resto do parmesão ralado. Sirva imediatamente.",
                "porque": "Envolver a salada no último momento garante que a alface e os croutons se mantenham crocantes. Rasgar a alface em vez de a cortar evita que as bordas oxidem e fiquem escuras.",
                "pontoCritico": "Não 'afogue' a salada em molho. O objetivo é revestir levemente cada folha."
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> Sirva como acompanhamento para um Bife Grelhado ou adicione tiras de frango grelhado para a transformar num prato principal clássico.",
            "<strong>Sem Anchovas:</strong> Se não gostar, pode omitir ou substituir por algumas gotas de molho inglês (Worcestershire).",
            "<strong>Com Kale:</strong> Substitua a alface por couve kale, massajando as folhas com um pouco de molho antes de montar a salada para as amaciar."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-salada-caesar"
    },
    "acompanhamentos-cuscuz": {
        "title": "Aula 07: Cuscuz Marroquino com Frutas Secas",
        "description": "Aprenda a fazer cuscuz marroquino, o acompanhamento mais rápido e um dos mais versáteis. Esta versão com frutas secas e nozes adiciona um toque agridoce e uma textura incrível a qualquer prato.",
        "calculator": {
            "label": "Gramas de Cuscuz Seco:",
            "unit": "cuscuz-input",
            "base_value": 200,
            "default_value": 200
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "5 min",
            "tempoDescanso": "5 min",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tigela grande com tampa ou prato",
                "Garfo"
            ]
        },
        "dicaDeMestre": "O segredo para um cuscuz soltinho é a proporção de líquido e o método de 'soltar' os grãos. Use um garfo para fofar o cuscuz depois de hidratado, quebrando quaisquer grumos e incorporando ar.",
        "ingredients": [
            {
                "name": "Cuscuz Marroquino",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Caldo de Legumes ou Água, a ferver",
                "base_qty": 250,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Damascos secos, picados",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Amêndoas laminadas, tostadas",
                "base_qty": 30,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Hortelã fresca, picada",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sumo de Limão",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Hidratar o Cuscuz",
                "description": "Coloque o cuscuz seco numa tigela grande. Regue com uma colher de sopa de azeite e uma pitada de sal, e misture com os dedos para revestir os grãos. Despeje o caldo ou a água a ferver sobre o cuscuz.",
                "porque": "Revestir os grãos com azeite antes de hidratar ajuda a mantê-los separados, prevenindo a formação de grumos. O líquido quente cozinha o cuscuz por absorção.",
                "pontoCritico": "A proporção de líquido é crucial. Geralmente é 1 parte de cuscuz para 1.25 partes de líquido em volume. Verifique a embalagem, mas esta proporção é um bom ponto de partida."
            },
            {
                "title": "O Descanso Mágico",
                "description": "Assim que adicionar o líquido quente, tape imediatamente a tigela com uma tampa, um prato ou película aderente. Deixe descansar por 5 a 7 minutos, sem espiar.",
                "porque": "O vapor preso na tigela é o que cozinha o cuscuz na perfeição, deixando-o macio e leve. Abrir a tampa liberta o vapor e interrompe o processo.",
                "pontoCritico": "Não mexa durante o descanso. Confie no poder do vapor.",
                "timer": 360
            },
            {
                "title": "Fofar e Temperar",
                "description": "Após o descanso, destape a tigela. O cuscuz terá absorvido todo o líquido. Use um garfo para soltar e 'fofar' os grãos, quebrando gentilmente quaisquer aglomerados. Adicione os damascos, as amêndoas, a hortelã picada, o resto do azeite e o sumo de limão. Misture tudo e tempere com sal e pimenta a gosto.",
                "porque": "Fofar com um garfo separa os grãos e deixa o cuscuz leve e aerado. Adicionar os outros ingredientes depois de o cuscuz estar cozido mantém as suas texturas e sabores frescos.",
                "pontoCritico": "Toste as amêndoas numa frigideira seca antes de as usar para realçar o seu sabor e crocância."
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> Fantástico com pratos de inspiração do Médio Oriente ou Norte de África, como um Tagine de Borrego, Frango com Especiarias ou Espetadas de Cordeiro. Também funciona bem com Salmão Grelhado.",
            "<strong>Salada de Cuscuz:</strong> Adicione pepino, tomate e grão de bico para uma salada completa.",
            "<strong>Com Outros Frutos Secos:</strong> Use tâmaras, passas ou figos secos. Substitua as amêndoas por pistácios ou pinhões."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-cuscuz"
    },
    "acompanhamentos-ratatouille": {
        "title": "Aula 08: Ratatouille (Estufado Provençal)",
        "description": "Um prato rústico e vibrante da região da Provença, em França. O Ratatouille é um estufado de legumes de verão cozinhados lentamente em azeite, celebrando o sabor de cada componente.",
        "calculator": {
            "label": "Porções:",
            "unit": "ratatouille-input",
            "base_value": 6,
            "default_value": 6
        },
        "details": {
            "tempoPreparo": "25 min",
            "tempoCozimento": "45-60 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 6-8 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Caçarola grande ou panela de fundo grosso",
                "Faca de chef"
            ]
        },
        "dicaDeMestre": "O segredo de um grande Ratatouille, segundo os chefs, é cozinhar cada legume separadamente antes de os juntar. Isto permite que cada um desenvolva o seu sabor e textura próprios sem se transformar numa papa indistinta.",
        "ingredients": [
            {
                "name": "Beringela, em cubos de 2cm",
                "base_qty": 1,
                "unit": "unid. grande",
                "scalable": true
            },
            {
                "name": "Curgete (Abobrinha), em cubos de 2cm",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Pimentão (vermelho ou amarelo), em cubos",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Cebola, picada",
                "base_qty": 1,
                "unit": "unid. grande",
                "scalable": true
            },
            {
                "name": "Alho, fatiado",
                "base_qty": 4,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Tomate maduro, sem pele, picado",
                "base_qty": 800,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem",
                "base_qty": 6,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Ervas frescas (tomilho, louro, salsa)",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar a Beringela",
                "description": "Coloque os cubos de beringela num escorredor, polvilhe generosamente com sal e deixe 'suar' por 30 minutos. Depois, passe por água para remover o excesso de sal e seque muito bem com papel toalha.",
                "porque": "A beringela contém muita água e um ligeiro amargor. O sal extrai ambos, resultando numa textura mais firme e num sabor mais doce. Secar é crucial para que ela doure em vez de cozer.",
                "pontoCritico": "Não salte este passo. Faz uma diferença enorme na textura final da beringela."
            },
            {
                "title": "Cozinhar os Legumes Separadamente",
                "description": "Numa caçarola grande, aqueça um pouco de azeite e doure os cubos de beringela até ficarem macios. Retire e reserve. Faça o mesmo com a curgete, dourando-a e reservando. Por fim, faça o mesmo com os pimentões.",
                "porque": "Esta é a técnica profissional. Cada legume tem um teor de água e tempo de cozimento diferente. Cozinhá-los separadamente permite controlar o ponto de cada um e desenvolver o seu sabor individualmente.",
                "pontoCritico": "Não tenha pressa. Dê a cada legume o tempo necessário para dourar e caramelizar ligeiramente."
            },
            {
                "title": "Construir a Base e Juntar Tudo",
                "description": "Na mesma caçarola, adicione mais azeite e refogue a cebola até ficar macia. Junte o alho e cozinhe por mais um minuto. Adicione o tomate picado e as ervas (tomilho, louro). Cozinhe por 10 minutos para criar um molho base. Volte a colocar todos os legumes dourados na panela.",
                "porque": "Agora que cada legume está perfeitamente cozido, vamos juntá-los num molho de tomate para que os sabores se fundam e se casem.",
                "pontoCritico": "A partir de agora, mexa com cuidado para não desmanchar os legumes."
            },
            {
                "title": "O Cozimento Final",
                "description": "Tempere com sal e pimenta. Deixe o estufado cozinhar em lume muito baixo, semi-tapado, por pelo menos 20 minutos (ou até 1 hora, para um sabor mais profundo), para que os sabores se misturem bem. Finalize com salsa fresca picada.",
                "porque": "Este cozimento final lento é onde a mágica acontece e os sabores individuais se transformam num todo harmonioso.",
                "pontoCritico": "Ratatouille é ainda melhor no dia seguinte, quando os sabores tiveram tempo para se desenvolver completamente.",
                "timer": 1200
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> É um acompanhamento clássico para Cordeiro Assado, Peixe Branco Grelhado ou simplesmente servido com um ovo estrelado por cima e pão crocante.",
            "<strong>Versão do Filme (Confit Byaldi):</strong> Fatie os legumes muito finamente e disponha-os em espiral sobre uma base de molho de tomate para um visual impressionante.",
            "<strong>Com Azeitonas:</strong> Adicione azeitonas pretas no final para um toque salgado."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-ratatouille"
    },
    "acompanhamentos-cebola-caramelizada": {
        "title": "Aula 09: Cebolas Caramelizadas",
        "description": "Aprenda a transformar uma simples cebola num condimento adocicado, profundo e complexo. A caramelização é uma técnica de paciência que recompensa com um sabor incrível para hambúrgueres, sopas, quiches e muito mais.",
        "calculator": {
            "label": "Quilos de Cebola:",
            "unit": "cebola-caramelizada-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "45-60 min",
            "tempoDescanso": "N/A",
            "rendimento": "Reduz drasticamente de volume",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira larga e de fundo grosso",
                "Colher de pau"
            ]
        },
        "dicaDeMestre": "Para acelerar ligeiramente o processo e adicionar uma camada de sabor, adicione uma colher de sopa de vinagre balsâmico nos últimos 5 minutos de cozimento. Ajuda a intensificar a cor e adiciona uma acidez adocicada.",
        "ingredients": [
            {
                "name": "Cebolas (amarelas ou brancas)",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Manteiga",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 0.5,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Açúcar (opcional)",
                "base_qty": 1,
                "unit": "pitada",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "O Corte e a Preparação",
                "description": "Descasque as cebolas, corte-as ao meio e depois em fatias finas e uniformes. A uniformidade do corte é importante para que cozinhem por igual. Numa frigideira larga de fundo grosso, derreta a manteiga com o azeite em lume médio-baixo.",
                "porque": "Uma frigideira larga permite que as cebolas fiquem mais espalhadas, promovendo a evaporação da água e a caramelização, em vez de cozinharem a vapor. A mistura de manteiga (sabor) e azeite (ponto de fumo mais alto) é ideal.",
                "pontoCritico": "Não use lume alto. A tentação é grande, mas resultará em cebolas queimadas por fora e cruas por dentro."
            },
            {
                "title": "A Paciência da Transformação",
                "description": "Adicione as cebolas à frigideira e tempere com sal. Cozinhe em lume baixo a médio-baixo, mexendo ocasionalmente (a cada 5-10 minutos), por 45 a 60 minutos. As cebolas irão passar por várias fases: primeiro amolecem, depois ficam translúcidas, douradas e, finalmente, atingem um castanho profundo e uma textura de compota.",
                "porque": "Este processo lento quebra as moléculas de açúcar complexas da cebola em açúcares simples, que depois caramelizam (<span class='tooltip' data-tooltip='Processo químico que oxida o açúcar, criando uma cor acastanhada e um sabor complexo e adocicado.'>caramelização</span>), criando centenas de novos compostos de sabor. O sal ajuda a extrair a humidade da cebola.",
                "pontoCritico": "A chave é 'ocasionalmente'. Se mexer demasiado, as cebolas não ganham cor. Se mexer de menos, podem queimar. Encontre o equilíbrio.",
                "timer": 2700
            },
            {
                "title": "O <span class=\"tooltip\" data-tooltip=\"Adicionar um líquido (água, vinho, caldo) a uma panela quente para soltar os pedaços de comida caramelizados (fond) do fundo.\">Deglacear</span> (O Toque Final)",
                "description": "Quando as cebolas estiverem bem escuras e caramelizadas, um fundo acastanhado ('fond') terá se formado na frigideira. Adicione uma ou duas colheres de sopa de água (ou vinho branco/vinagre) para 'deglacear', raspando o fundo com a colher para soltar todo esse sabor. Deixe o líquido evaporar completamente.",
                "porque": "O 'fond' no fundo da panela é sabor puro e concentrado. Deglacear dissolve esse sabor e incorpora-o de volta nas cebolas, resultando num sabor final muito mais rico e complexo.",
                "pontoCritico": "Faça este passo rapidamente e com a frigideira quente para que o líquido evapore e não deixe as cebolas ensopadas."
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> O melhor amigo de um bom Hambúrguer Caseiro ou de um Bife Grelhado. Fantásticas em quiches, sanduíches de queijo quente, e como base para a clássica Sopa de Cebola Francesa.",
            "<strong>Armazenamento:</strong> Guardam-se bem no frigorífico por até uma semana e o sabor até melhora.",
            "<strong>Com Tomilho:</strong> Adicione alguns ramos de tomilho fresco junto com as cebolas para um aroma extra."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-cebola-caramelizada"
    },
    "acompanhamentos-gratinado": {
        "title": "Aula 10: Gratinado de Batata (Dauphinois)",
        "description": "O auge dos acompanhamentos de batata. Fatias finas de batata cozidas lentamente em natas e alho até ficarem incrivelmente macias, com uma crosta dourada e borbulhante. Uma receita indulgente para ocasiões especiais.",
        "calculator": {
            "label": "Quilos de Batata:",
            "unit": "gratinado-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "60-75 min",
            "tempoDescanso": "10 min",
            "rendimento": "Serve 6-8 pessoas por kg",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Travessa de ir ao forno (gratin)",
                "Mandoline (altamente recomendado) ou faca afiada"
            ]
        },
        "dicaDeMestre": "Não lave as fatias de batata depois de as cortar! O amido na superfície das batatas é crucial, pois ele irá libertar-se durante o cozimento e ajudar a engrossar as natas, criando um molho cremoso e coeso, em vez de uma sopa.",
        "ingredients": [
            {
                "name": "Batatas para cozer (ricas em amido)",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Natas (Creme de Leite) (35% de gordura)",
                "base_qty": 500,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Leite Gordo",
                "base_qty": 200,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Dente de Alho",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Noz-moscada, Sal, Pimenta Branca",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar a Base e as Batatas",
                "description": "Pré-aqueça o forno a 160°C. Descasque um dente de alho e esfregue-o por todo o interior da travessa que vai usar. Descasque as batatas e, usando uma <span class='tooltip' data-tooltip='Utensílio de cozinha com uma lâmina ajustável para cortar fatias extremamente finas e uniformes.'>mandoline</span> ou uma faca muito afiada, corte-as em fatias muito finas e uniformes (cerca de 2-3mm).",
                "porque": "Esfregar o alho infunde um sabor subtil em todo o prato. As fatias finas e uniformes são essenciais para que as batatas cozinhem por igual e absorvam o creme, criando a textura característica do gratinado.",
                "pontoCritico": "A mandoline é a melhor ferramenta para este trabalho, garantindo uniformidade. Se usar uma faca, trabalhe com paciência para manter a espessura consistente."
            },
            {
                "title": "Montar as Camadas",
                "description": "Disponha as fatias de batata na travessa, sobrepondo-as em camadas. Pode fazê-lo de forma organizada, como escamas de peixe, ou simplesmente espalhá-las. A cada duas ou três camadas, tempere generosamente com sal, pimenta branca e noz-moscada ralada na hora.",
                "porque": "Temperar entre as camadas garante que todo o gratinado fica saboroso, não apenas a camada de cima.",
                "pontoCritico": "Não pressione as camadas. Deixe-as relativamente soltas para que o líquido possa penetrar por todo o lado."
            },
            {
                "title": "Adicionar o Líquido e Assar",
                "description": "Numa tigela, misture as natas e o leite. Despeje a mistura sobre as batatas na travessa até que o líquido chegue quase à última camada, mas sem a cobrir completamente. Leve ao forno e asse por 60 a 75 minutos.",
                "porque": "A camada superior de batata, não coberta pelo líquido, irá dourar e ficar ligeiramente crocante, criando um contraste de texturas. O cozimento lento e a baixa temperatura permitem que as batatas cozinhem suavemente e absorvam o creme sem que este se separe.",
                "pontoCritico": "O gratinado está pronto quando as batatas estiverem completamente macias (um garfo ou faca deve entrar sem resistência) e o topo estiver dourado e borbulhante.",
                "timer": 3600
            },
            {
                "title": "O Descanso Essencial",
                "description": "Retire o gratinado do forno e, crucialmente, deixe-o descansar por pelo menos 10 a 15 minutos antes de servir.",
                "porque": "Este descanso permite que o amido das batatas e as natas assentem e terminem de engrossar, tornando o gratinado mais coeso e fácil de servir. Se o cortar imediatamente, ele estará demasiado líquido.",
                "pontoCritico": "Resista à tentação de o servir a ferver. O descanso melhora imenso a textura final."
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> É o acompanhamento de luxo para uma ocasião especial. Sirva com Rosbife, Lombo de Porco Assado ou um Bife Grelhado de alta qualidade.",
            "<strong>Com Queijo (Gratin Savoyard):</strong> Adicione queijo Gruyère ou Emmental ralado entre as camadas e por cima para uma versão ainda mais rica.",
            "<strong>Com Tomilho:</strong> Adicione alguns ramos de tomilho ao creme para um aroma extra."
        ],
        "module": "Acompanhamentos",
        "url": "acompanhamentos.html#receita-gratinado"
    },
    "massas-e-molhos-massa-fresca": {
        "title": "Aula 01: Massa Fresca Caseira (A Base de Tudo)",
        "description": "Aprenda a fazer massa de ovos fresca do zero. Uma habilidade transformadora que eleva qualquer prato de massa a um novo patamar. Vamos focar na proporção clássica e na técnica de amassar e esticar a massa.",
        "calculator": {
            "label": "Porções (100g por pessoa):",
            "unit": "massa-fresca-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "30 min",
            "tempoCozimento": "2-4 min",
            "tempoDescanso": "30 min",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Bancada de trabalho limpa",
                "Rolo da massa ou máquina de massa",
                "Faca afiada"
            ]
        },
        "dicaDeMestre": "O descanso da massa não é opcional. É durante este tempo que o glúten, desenvolvido durante a amassadura, relaxa. Tentar esticar uma massa que não descansou é uma batalha perdida; ela será elástica e irá encolher constantemente.",
        "ingredients": [
            {
                "name": "Farinha de Trigo Tipo 00 (ou normal)",
                "base_qty": 400,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Ovos grandes",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Sêmola de trigo (para polvilhar)",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "O Vulcão de Farinha",
                "description": "Numa bancada limpa, faça um monte com a farinha e crie um buraco no centro, como um vulcão. Quebre os ovos dentro do vulcão.",
                "porque": "Este método tradicional permite incorporar os ovos na farinha de forma gradual e controlada, evitando uma grande confusão.",
                "pontoCritico": "Faça um 'vulcão' com paredes altas o suficiente para que os ovos não vazem para os lados."
            },
            {
                "title": "A Amassadura",
                "description": "Com um garfo, comece a bater os ovos, incorporando lentamente a farinha das paredes do vulcão. Quando a massa começar a ficar muito espessa, use as mãos. Amasse vigorosamente por cerca de 10 minutos, empurrando a massa para a frente com a base da mão e dobrando-a sobre si mesma.",
                "porque": "A amassadura desenvolve as redes de glúten na farinha, o que dá à massa a sua estrutura elástica e a textura 'al dente' depois de cozida.",
                "pontoCritico": "A massa está pronta quando estiver lisa, elástica e não pegajosa. Se estiver muito seca, adicione uma colher de chá de água; se estiver muito pegajosa, polvilhe um pouco de farinha."
            },
            {
                "title": "O Descanso",
                "description": "Forme uma bola com a massa, enrole-a em película aderente ou cubra com uma tigela e deixe-a descansar à temperatura ambiente por pelo menos 30 minutos.",
                "porque": "O descanso relaxa o glúten, tornando a massa muito mais fácil de esticar. Saltar este passo resultará numa massa que encolhe e é difícil de trabalhar.",
                "pontoCritico": "Cubra bem a massa para que ela não seque na superfície, o que criaria uma crosta."
            },
            {
                "title": "Esticar e Cortar",
                "description": "Divida a massa em 4 porções. Achate uma porção e comece a esticá-la com um rolo ou através da máquina de massa, começando na espessura mais grossa e diminuindo gradualmente. Estique até obter uma folha fina. Polvilhe com sêmola, enrole e corte na largura desejada (tagliatelle, fettuccine).",
                "porque": "Esticar a massa de forma gradual alinha as redes de glúten, criando uma textura sedosa. A sêmola evita que a massa cole a si mesma.",
                "pontoCritico": "Trabalhe com uma porção de massa de cada vez, mantendo as outras cobertas para não secarem."
            }
        ],
        "variacoes": [
            "<strong>Massa Verde:</strong> Adicione 100g de espinafres cozidos, espremidos e picados aos ovos antes de os misturar.",
            "<strong>Massa de Sêmola:</strong> Para uma massa sem ovos (típica do sul da Itália), use 400g de sêmola de trigo duro e cerca de 200ml de água morna.",
            "<strong>Formatos:</strong> Uma vez esticada, a massa pode ser usada para lasanha, ravioli ou outros formatos recheados."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-massa-fresca"
    },
    "massas-e-molhos-pesto": {
        "title": "Aula 02: Molho Pesto Genovese Tradicional",
        "description": "Aprenda a fazer o verdadeiro Pesto de Gênova, um molho vibrante, fresco e aromático que não vai ao lume. O segredo está na qualidade dos ingredientes e na técnica para não oxidar o manjericão.",
        "calculator": {
            "label": "Porções:",
            "unit": "pesto-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Processador de alimentos ou almofariz",
                "Espátula"
            ]
        },
        "dicaDeMestre": "Para manter a cor verde vibrante do manjericão, coloque a lâmina do processador e a tigela no congelador por 15 minutos antes de usar. O calor da fricção é o que oxida e escurece o manjericão. Manter tudo frio minimiza este efeito.",
        "ingredients": [
            {
                "name": "Manjericão fresco (folhas)",
                "base_qty": 2,
                "unit": "chávenas grandes",
                "scalable": true
            },
            {
                "name": "Queijo Parmesão, ralado na hora",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Queijo Pecorino, ralado na hora (opcional)",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Pinoli (ou nozes)",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Alho",
                "base_qty": 2,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem de boa qualidade",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Sal grosso",
                "base_qty": 0.5,
                "unit": "c. de chá",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar os Ingredientes",
                "description": "Lave e seque completamente as folhas de manjericão. Se usar nozes em vez de pinoli, pode tostá-las levemente numa frigideira seca para realçar o sabor.",
                "porque": "Qualquer água nas folhas de manjericão pode diluir o molho e afetar a sua conservação. Secar bem é crucial.",
                "pontoCritico": "Use queijo ralado na hora. O queijo pré-ralado contém antiaglomerantes que alteram a textura e o sabor do molho."
            },
            {
                "title": "Processar o Pesto",
                "description": "No processador de alimentos, junte o manjericão, os pinoli (ou nozes), o alho, os queijos e o sal. Pulse algumas vezes para picar tudo grosseiramente. Com o processador a funcionar em velocidade baixa, adicione o azeite em fio, até obter uma emulsão cremosa.",
                "porque": "Adicionar o azeite em fio ajuda a criar uma emulsão estável, evitando que o molho se separe. Processar o mínimo possível também ajuda a evitar a oxidação do manjericão.",
                "pontoCritico": "Não processe demais até virar uma pasta lisa. O pesto deve ter alguma textura."
            }
        ],
        "variacoes": [
            "<strong>Com Rúcula:</strong> Substitua metade do manjericão por rúcula para um sabor mais picante.",
            "<strong>Com Tomate Seco:</strong> Adicione alguns tomates secos para um 'pesto rosso'.",
            "<strong>Vegano:</strong> Substitua os queijos por levedura nutricional e um pouco mais de frutos secos."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-pesto"
    },
    "massas-e-molhos-aglio-olio": {
        "title": "Aula 03: Spaghetti Aglio, Olio e Peperoncino",
        "description": "A receita que separa os amadores dos mestres. Com apenas 3 ingredientes principais, esta aula foca-se na técnica mais importante da cozinha italiana: a <span class='tooltip' data-tooltip='Mistura estável de gordura (azeite) e água (da cozedura da massa) para criar um molho cremoso.'>emulsão</span>. Aprenda a criar um molho cremoso sem usar natas ou queijo.",
        "calculator": {
            "label": "Gramas de Spaghetti:",
            "unit": "aglio-olio-input",
            "base_value": 400,
            "default_value": 400
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "10-12 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela grande para a massa",
                "Frigideira larga",
                "Pinça de cozinha"
            ]
        },
        "dicaDeMestre": "O segredo é a água do cozimento da massa. Ela está cheia de amido, que é um poderoso agente emulsionante. Nunca escorra a massa completamente; transfira-a diretamente da panela para a frigideira com uma pinça, trazendo consigo um pouco dessa água preciosa.",
        "ingredients": [
            {
                "name": "Spaghetti",
                "base_qty": 400,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Alho, fatiado finamente",
                "base_qty": 4,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem",
                "base_qty": 6,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Malagueta seca (Peperoncino) ou flocos de pimenta",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Salsa fresca picada",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Cozinhar a Massa",
                "description": "Cozinhe o spaghetti em bastante água a ferver com sal, seguindo as instruções da embalagem, mas retire-o 2 minutos antes do tempo indicado para 'al dente'.",
                "porque": "A massa irá terminar de cozinhar na frigideira com o molho. Retirá-la antes garante que ela não ficará demasiado cozida e que absorverá o sabor do molho.",
                "pontoCritico": "A água deve estar salgada como o mar. É a única oportunidade de temperar a massa por dentro."
            },
            {
                "title": "Infundir o Azeite",
                "description": "Enquanto a massa cozinha, aqueça o azeite numa frigideira larga em lume médio-baixo. Adicione o alho fatiado e a malagueta. Cozinhe lentamente até o alho ficar dourado pálido e perfumado.",
                "porque": "O calor baixo infunde o azeite com o sabor do alho sem o queimar. Alho queimado é amargo e estraga o prato.",
                "pontoCritico": "Este processo é delicado. Se o alho começar a ganhar cor demasiado rápido, retire a frigideira do lume."
            },
            {
                "title": "A Magia da Emulsão",
                "description": "Quando a massa estiver pronta, use uma pinça para a transferir diretamente para a frigideira. Adicione uma concha da água do cozimento da massa. Aumente o lume e comece a agitar e a mexer vigorosamente a massa na frigideira.",
                "porque": "A combinação do amido da água, do azeite e da agitação cria uma emulsão, um molho cremoso que adere perfeitamente à massa. Isto é o que os italianos chamam de 'mantecatura'.",
                "pontoCritico": "Continue a agitar. Você verá o líquido a transformar-se num molho opaco e aveludado. Se secar, adicione mais um pouco de água da massa."
            },
            {
                "title": "Finalizar",
                "description": "Quando a massa estiver 'al dente' e coberta por um molho cremoso, retire do lume. Junte a salsa fresca picada e sirva imediatamente.",
                "porque": "A salsa fresca adiciona uma nota de frescura que corta a riqueza do azeite.",
                "pontoCritico": "Este prato deve ser servido imediatamente, pois o molho pode secar se esperar."
            }
        ],
        "variacoes": [
            "<strong>Com Anchovas:</strong> Adicione 2 filetes de anchova ao azeite com o alho para um sabor mais profundo e salgado.",
            "<strong>Com Brócolos:</strong> Cozinhe alguns floretes de brócolos junto com a massa e salteie-os na frigideira.",
            "<strong>Com Limão:</strong> Adicione raspas de limão no final para um toque de acidez."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-aglio-olio"
    },
    "massas-e-molhos-carbonara": {
        "title": "Aula 04: Spaghetti alla Carbonara (O Original)",
        "description": "Aprenda a fazer o verdadeiro Carbonara, um dos pratos mais amados e mal-entendidos de Roma. O segredo é um molho incrivelmente cremoso feito apenas com gemas de ovo, queijo e a gordura do guanciale, sem uma única gota de natas.",
        "calculator": {
            "label": "Gramas de Spaghetti:",
            "unit": "carbonara-input",
            "base_value": 320,
            "default_value": 320
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "12-15 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Avançado",
            "utensilios": [
                "Frigideira larga",
                "Tigela",
                "Pinça de cozinha"
            ]
        },
        "dicaDeMestre": "O controlo da temperatura é tudo. A massa deve estar quente o suficiente para cozinhar as gemas e derreter o queijo, mas não tão quente a ponto de transformar as gemas em ovos mexidos. Trabalhe rápido e, se necessário, faça a mistura final fora do lume.",
        "ingredients": [
            {
                "name": "Spaghetti ou Rigatoni",
                "base_qty": 320,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Guanciale (bochecha de porco curada)",
                "base_qty": 150,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Gemas de Ovo",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Queijo Pecorino Romano, ralado fino",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Pimenta Preta moída na hora",
                "base_qty": 0,
                "unit": "Muita!",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "O Creme de Ovos e Queijo",
                "description": "Numa tigela, bata as gemas com a maior parte do queijo Pecorino e uma quantidade generosa de pimenta preta moída na hora, até obter uma pasta espessa.",
                "porque": "Preparar este creme à parte permite um controlo total sobre a sua consistência e garante que os ingredientes se misturam de forma homogénea antes de encontrarem o calor da massa.",
                "pontoCritico": "Use Pecorino Romano para o sabor autêntico, que é salgado e picante. Se não encontrar, o Parmesão é o segundo melhor substituto."
            },
            {
                "title": "Cozinhar o Guanciale",
                "description": "Corte o guanciale em tiras ou cubos. Numa frigideira fria, cozinhe o guanciale em lume médio-baixo até a gordura derreter e a carne ficar estaladiça e dourada. Retire o guanciale da frigideira, mas deixe a gordura derretida na panela.",
                "porque": "Começar com a frigideira fria permite que a gordura do guanciale derreta lentamente, resultando em pedaços crocantes e uma gordura líquida e saborosa, que é um componente essencial do molho.",
                "pontoCritico": "Não use azeite. O guanciale tem gordura suficiente. Se não encontrar guanciale, pode usar pancetta, mas o sabor não será o mesmo."
            },
            {
                "title": "A União Mágica",
                "description": "Cozinhe a massa em água salgada. Quando estiver 'al dente', transfira-a diretamente para a frigideira com a gordura do guanciale. Adicione uma concha da água da massa e mexa. Retire a frigideira do lume. Despeje o creme de ovos e queijo sobre a massa e mexa rapidamente e vigorosamente.",
                "porque": "Este é o momento crucial. O calor da massa e da gordura irá cozinhar as gemas suavemente, enquanto o amido da água da massa ajuda a criar um molho cremoso e emulsionado. Fazer isto fora do lume evita que os ovos talhem.",
                "pontoCritico": "Trabalhe muito rápido. Se a mistura parecer muito espessa, adicione mais um pouco de água da massa até atingir a cremosidade desejada."
            },
            {
                "title": "Servir",
                "description": "Junte a maior parte do guanciale crocante, misture e sirva imediatamente. Finalize cada prato com o resto do guanciale, mais queijo Pecorino e mais pimenta preta.",
                "porque": "O Carbonara espera por ninguém. Deve ser comido assim que é feito, enquanto o molho está perfeitamente cremoso.",
                "pontoCritico": "A pimenta preta moída na hora é um ingrediente chave, não apenas uma decoração."
            }
        ],
        "variacoes": [
            "<strong>Menos Intenso:</strong> Pode usar uma mistura de Pecorino e Parmesão se achar o Pecorino demasiado forte.",
            "<strong>Com um Ovo Inteiro:</strong> Algumas receitas usam 3 gemas e 1 ovo inteiro para um molho um pouco mais leve.",
            "<strong>Atenção:</strong> Adicionar natas (creme de leite) não é uma variação, é outra receita. O verdadeiro Carbonara não leva natas."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-carbonara"
    },
    "massas-e-molhos-alfredo": {
        "title": "Aula 05: Molho Alfredo Clássico",
        "description": "Aprenda a fazer o Fettuccine Alfredo original, um prato luxuoso e reconfortante que, na sua forma mais pura, leva apenas três ingredientes: massa, manteiga e queijo Parmigiano-Reggiano.",
        "calculator": {
            "label": "Gramas de Fettuccine:",
            "unit": "alfredo-input",
            "base_value": 400,
            "default_value": 400
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "10 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela grande",
                "Frigideira larga",
                "Pinça de cozinha"
            ]
        },
        "dicaDeMestre": "A qualidade dos ingredientes é tudo nesta receita. Use a melhor manteiga e, crucialmente, um pedaço de queijo Parmigiano-Reggiano verdadeiro, ralado na hora. A diferença de sabor e de como ele derrete é abismal.",
        "ingredients": [
            {
                "name": "Fettuccine fresco ou seco",
                "base_qty": 400,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Manteiga sem sal de boa qualidade",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Queijo Parmigiano-Reggiano, ralado fino",
                "base_qty": 150,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Pimenta Preta e Noz-moscada (opcional)",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar a Base",
                "description": "Cozinhe o fettuccine em água abundante e salgada. Numa frigideira larga, derreta a manteiga em lume muito baixo. Adicione uma concha da água do cozimento da massa à manteiga e mexa para criar uma emulsão inicial.",
                "porque": "A água do cozimento, rica em amido, é o ingrediente secreto que transforma a manteiga e o queijo num molho aveludado, em vez de uma separação gordurosa.",
                "pontoCritico": "Não deixe a manteiga ferver ou queimar. O lume deve ser o mais baixo possível."
            },
            {
                "title": "A Emulsão Final",
                "description": "Transfira a massa 'al dente' diretamente para a frigideira com a manteiga. Adicione o queijo Parmigiano-Reggiano ralado e mais uma concha de água da massa. Comece a mexer e a saltear vigorosamente.",
                "porque": "A agitação constante e o calor da massa são o que cria a emulsão. O queijo derrete e, com a ajuda do amido da água, une-se à manteiga para cobrir cada fio de massa num molho cremoso.",
                "pontoCritico": "Este processo deve ser rápido. Se o molho parecer muito espesso, adicione mais água da massa. Se parecer muito líquido, continue a mexer em lume baixo até engrossar."
            },
            {
                "title": "Servir Imediatamente",
                "description": "Assim que a massa estiver perfeitamente coberta por um molho cremoso e aveludado, sirva imediatamente. Finalize com um pouco mais de queijo e uma pitada de pimenta preta ou noz-moscada, se desejar.",
                "porque": "Como o Carbonara, o Alfredo deve ser comido no momento em que é feito, antes que o molho comece a solidificar.",
                "pontoCritico": "Não reaqueça este prato. O molho irá separar-se."
            }
        ],
        "variacoes": [
            "<strong>Versão Americana (com Natas):</strong> A versão popularizada nos EUA inclui natas (creme de leite) para um molho mais pesado e estável. Aqueça as natas com a manteiga antes de adicionar a massa e o queijo.",
            "<strong>Com Frango Grelhado:</strong> Sirva com tiras de peito de frango grelhado por cima.",
            "<strong>Com Cogumelos:</strong> Salteie alguns cogumelos na manteiga antes de adicionar a massa."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-alfredo"
    },
    "massas-e-molhos-cacio-pepe": {
        "title": "Aula 06: Cacio e Pepe",
        "description": "A trindade sagrada de Roma: queijo, pimenta e massa. Parece a receita mais simples do mundo, mas dominar o Cacio e Pepe é um verdadeiro teste de técnica. Aprenda a criar um molho perfeitamente cremoso e sem grumos.",
        "calculator": {
            "label": "Gramas de Massa (Tonnarelli, Spaghetti):",
            "unit": "cacio-pepe-input",
            "base_value": 320,
            "default_value": 320
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "10-12 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Avançado",
            "utensilios": [
                "Frigideira larga",
                "Moedor de pimenta",
                "Tigela"
            ]
        },
        "dicaDeMestre": "O segredo para evitar que o queijo forme grumos é criar uma pasta de queijo e água fria antes de a adicionar à massa quente, e fazer a mistura final fora do lume. O choque de temperatura muito alto é o que faz o queijo talhar.",
        "ingredients": [
            {
                "name": "Tonnarelli ou Spaghetti alla Chitarra",
                "base_qty": 320,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Queijo Pecorino Romano, ralado muito fino",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Pimenta Preta em grão",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Pimenta e o Queijo",
                "description": "Toste os grãos de pimenta numa frigideira seca em lume médio até libertarem o seu aroma. Moa-os grosseiramente. Numa tigela, misture o Pecorino ralado com um pouco de água FRIA, mexendo até formar uma pasta espessa e lisa.",
                "porque": "Tostar a pimenta liberta os seus óleos essenciais, tornando o seu sabor muito mais complexo. Criar a pasta de queijo previamente é a técnica chave para uma emulsão suave e sem grumos.",
                "pontoCritico": "Rale o queijo o mais fino possível, como pó. Isso ajuda a derreter de forma mais rápida e uniforme."
            },
            {
                "title": "Cozinhar a Massa",
                "description": "Cozinhe a massa em água a ferver com pouco sal (o Pecorino já é muito salgado). Retire a massa 2 minutos antes do tempo 'al dente'.",
                "porque": "A água do cozimento precisa de estar extra concentrada em amido. Usar menos água do que o normal ajuda. A massa terminará de cozinhar na frigideira.",
                "pontoCritico": "Guarde pelo menos duas chávenas da água do cozimento. Ela é o ingrediente mais importante do molho."
            },
            {
                "title": "A Emulsão na Frigideira",
                "description": "Na frigideira onde tostou a pimenta, adicione uma concha da água da massa para recolher o sabor. Transfira a massa para a frigideira. Retire a frigideira do lume. Adicione a pasta de queijo e um pouco mais de água da massa. Mexa vigorosamente.",
                "porque": "Fazer a emulsão fora do lume direto evita que o queijo sobreaqueça e se separe em grumos. A agitação constante é o que cria a magia.",
                "pontoCritico": "A consistência é tudo. Adicione água da massa aos poucos até atingir um molho cremoso que cobre cada fio de massa. Se ficar aguado, volte ao lume muito baixo por breves segundos, mexendo sempre."
            }
        ],
        "variacoes": [
            "<strong>Com Manteiga:</strong> Alguns chefs adicionam uma noz de manteiga à frigideira para ajudar na cremosidade, embora não seja tradicional.",
            "<strong>Com Lima:</strong> Raspas de lima no final podem adicionar um toque de frescura surpreendente."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-cacio-pepe"
    },
    "massas-e-molhos-nhoque": {
        "title": "Aula 07: Nhoque de Batata (Gnocchi) na Manteiga e Sálvia",
        "description": "Aprenda a fazer gnocchi (nhoque) de batata leves como nuvens, que derretem na boca. O segredo é usar a batata certa e trabalhar a massa o mínimo possível. Servido com um molho simples de manteiga e sálvia para deixar o nhoque brilhar.",
        "calculator": {
            "label": "Quilos de Batata:",
            "unit": "nhoque-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "40 min",
            "tempoCozimento": "5-10 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Espremedor de batata ou garfo",
                "Bancada de trabalho",
                "Faca ou tarraxa"
            ]
        },
        "dicaDeMestre": "O maior inimigo do nhoque leve é o excesso de farinha. Use batatas 'secas' (com mais amido e menos água), como a Asterix (casca rosa). Cozinhe-as com casca para que absorvam menos água. Passe-as pelo espremedor ainda quentes.",
        "ingredients": [
            {
                "name": "Batatas (Asterix é ideal)",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo",
                "base_qty": 200,
                "unit": "g (aproximadamente)",
                "scalable": true
            },
            {
                "name": "Ovo",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Sal e Noz-moscada",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Manteiga",
                "base_qty": 100,
                "unit": "g",
                "scalable": true,
                "heading": "Para o Molho"
            },
            {
                "name": "Folhas de Sálvia fresca",
                "base_qty": 10,
                "unit": "unid.",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar as Batatas",
                "description": "Cozinhe as batatas inteiras e com casca em água a ferver até estarem muito macias. Escorra e, enquanto ainda estão quentes, descasque-as (use um pano para não se queimar). Passe as batatas por um espremedor de batatas ou amasse muito bem com um garfo.",
                "porque": "Cozinhar com casca evita que as batatas fiquem encharcadas. Espremê-las quentes resulta num puré mais leve e fofo.",
                "pontoCritico": "Deixe o vapor sair do puré por alguns minutos antes de adicionar os outros ingredientes para que a massa não fique demasiado húmida."
            },
            {
                "title": "Fazer a Massa",
                "description": "Sobre o puré morno, adicione o ovo, o sal, a noz-moscada e a maior parte da farinha. Com as mãos, misture delicadamente os ingredientes apenas até formar uma massa homogénea. Não amasse em excesso.",
                "porque": "Trabalhar demais a massa desenvolve o glúten e deixa os nhoques pesados e borrachudos. O objetivo é usar o mínimo de farinha e de trabalho possível.",
                "pontoCritico": "A massa deve estar macia, mas não pegajosa. Se necessário, adicione um pouco mais de farinha, mas com muita moderação."
            },
            {
                "title": "Moldar os Nhoques",
                "description": "Numa bancada enfarinhada, divida a massa em porções. Role cada porção para formar um 'cordão' com cerca de 2cm de diâmetro. Corte os cordões em pedaços de 2cm. Se desejar, pode passar cada nhoque sobre os dentes de um garfo para criar ranhuras.",
                "porque": "As ranhuras não são apenas decorativas; elas ajudam o molho a aderir melhor ao nhoque.",
                "pontoCritico": "Trabalhe rapidamente e mantenha a bancada bem enfarinhada para que a massa não cole."
            },
            {
                "title": "Cozinhar e Finalizar",
                "description": "Cozinhe os nhoques em bastante água a ferver com sal. Eles estão prontos quando sobem à superfície (cerca de 2-3 minutos). Enquanto isso, derreta a manteiga numa frigideira larga com as folhas de sálvia até a manteiga ficar acastanhada e aromática (beurre noisette). Retire os nhoques com uma escumadeira e salteie-os na manteiga de sálvia.",
                "porque": "Cozinhar em lotes evita que os nhoques colem. Salteá-los na manteiga no final dá-lhes uma crosta dourada e deliciosa.",
                "pontoCritico": "Não sobrecarregue a panela ao cozinhar os nhoques."
            }
        ],
        "variacoes": [
            "<strong>Com Abóbora:</strong> Substitua a batata por puré de abóbora assada para uma versão diferente.",
            "<strong>Com Ricota:</strong> Adicione ricota fresca à massa para nhoques ainda mais leves (gnudi).",
            "<strong>Com Molho de Tomate:</strong> Sirva com um simples molho de tomate e manjericão."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-nhoque"
    },
    "massas-e-molhos-ravioli": {
        "title": "Aula 08: Ravioli Caseiro com Ricota e Espinafre",
        "description": "Entre no mundo das massas recheadas. Aprenda a fazer raviólis clássicos, desde a massa fresca até um recheio cremoso de ricota e espinafre, e a selá-los corretamente para que não abram durante o cozimento.",
        "calculator": {
            "label": "Porções:",
            "unit": "ravioli-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "1 hora",
            "tempoCozimento": "4-6 min",
            "tempoDescanso": "30 min (massa)",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Avançado",
            "utensilios": [
                "Máquina de massa ou rolo",
                "Saco de pasteleiro (opcional)",
                "Cortador de ravioli ou faca"
            ]
        },
        "dicaDeMestre": "O recheio deve ser relativamente seco. Esprema muito bem os espinafres cozidos e use uma ricota de boa qualidade e bem escorrida. Um recheio aguado irá humedecer a massa e pode fazer com que os raviólis se abram.",
        "ingredients": [
            {
                "name": "Massa Fresca Caseira (ver Aula 01)",
                "base_qty": 1,
                "unit": "receita",
                "scalable": false,
                "heading": "Para a Massa"
            },
            {
                "name": "Ricota fresca, bem escorrida",
                "base_qty": 250,
                "unit": "g",
                "scalable": true,
                "heading": "Para o Recheio"
            },
            {
                "name": "Espinafres frescos",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Queijo Parmesão, ralado",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Noz-moscada, Sal, Pimenta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar o Recheio",
                "description": "Cozinhe os espinafres numa frigideira com um pouco de água até murcharem. Escorra e, quando estiverem frios o suficiente para manusear, esprema-os com as mãos para remover o máximo de água possível. Pique os espinafres finamente. Numa tigela, misture a ricota, os espinafres picados, o parmesão, sal, pimenta e uma pitada de noz-moscada.",
                "porque": "Remover a água dos ingredientes do recheio é o passo mais crítico para o sucesso. Um recheio seco garante que a massa não fica encharcada.",
                "pontoCritico": "Prove o recheio e ajuste o tempero. Ele deve ser bem saboroso, pois o sabor dilui-se um pouco após o cozimento."
            },
            {
                "title": "Esticar a Massa e Rechear",
                "description": "Estique a massa fresca em folhas longas e finas. Numa folha de massa, coloque pequenas colheradas do recheio em filas, com cerca de 4-5 cm de espaço entre elas. Pincele a massa à volta do recheio com um pouco de água.",
                "porque": "A água atua como 'cola' para ajudar a selar as duas camadas de massa.",
                "pontoCritico": "Pode usar um saco de pasteleiro para distribuir o recheio de forma mais rápida e uniforme."
            },
            {
                "title": "Selar e Cortar os Raviolis",
                "description": "Coloque outra folha de massa por cima. Com os dedos, pressione cuidadosamente à volta de cada monte de recheio para remover todo o ar e selar bem as bordas. Use um cortador de ravioli ou uma faca para cortar os raviólis em quadrados.",
                "porque": "Remover o ar é crucial. O ar preso expande-se com o calor durante o cozimento e pode fazer os raviólis rebentarem.",
                "pontoCritico": "Certifique-se de que as bordas estão bem seladas. Pode pressionar com os dentes de um garfo para uma segurança extra."
            },
            {
                "title": "Cozinhar e Servir",
                "description": "Cozinhe os raviólis em água a ferver com sal por 4 a 6 minutos. Sirva com um molho simples, como manteiga derretida e sálvia ou um molho de tomate leve, e mais queijo parmesão.",
                "porque": "Um molho simples permite que o sabor do recheio do ravioli seja a estrela do prato.",
                "pontoCritico": "Retire os raviólis da água com uma escumadeira, não os escorra num escorredor, pois são delicados."
            }
        ],
        "variacoes": [
            "<strong>Com Abóbora:</strong> Use puré de abóbora assada em vez de espinafres para um recheio mais adocicado.",
            "<strong>Com Carne:</strong> Use um recheio de carne de vitela ou porco cozida lentamente.",
            "<strong>Agnolotti:</strong> Dobre a massa sobre o recheio para criar uma forma de meia-lua."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-ravioli"
    },
    "massas-e-molhos-lasanha": {
        "title": "Aula 09: Lasanha à Bolonhesa Clássica",
        "description": "A rainha das massas de forno. Esta aula é um projeto que une três componentes fundamentais: massa fresca, um rico molho à bolonhesa e um cremoso molho bechamel. Aprenda a montar as camadas para uma lasanha perfeita.",
        "calculator": {
            "label": "Porções:",
            "unit": "lasanha-input",
            "base_value": 6,
            "default_value": 6
        },
        "details": {
            "tempoPreparo": "30 min",
            "tempoCozimento": "2h (molho) + 30 min (forno)",
            "tempoDescanso": "15 min",
            "rendimento": "Serve 6-8 pessoas",
            "dificuldade": "Avançado",
            "utensilios": [
                "Travessa de forno retangular",
                "Panelas grandes"
            ]
        },
        "dicaDeMestre": "O segredo de uma boa lasanha é o equilíbrio. Não exagere em nenhuma das camadas. Uma fina camada de cada molho é suficiente. E deixe a lasanha descansar por pelo menos 15 minutos depois de sair do forno, para que as camadas assentem e não se desfaçam ao cortar.",
        "ingredients": [
            {
                "name": "Massa Fresca para Lasanha",
                "base_qty": 1,
                "unit": "receita",
                "scalable": false,
                "heading": "Componentes"
            },
            {
                "name": "Molho à Bolonhesa (ver aula de Carnes)",
                "base_qty": 1,
                "unit": "receita",
                "scalable": false
            },
            {
                "name": "Queijo Parmesão, ralado",
                "base_qty": 150,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Leite",
                "base_qty": 1,
                "unit": "L",
                "scalable": true,
                "heading": "Para o Molho Bechamel"
            },
            {
                "name": "Manteiga",
                "base_qty": 60,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo",
                "base_qty": 60,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Noz-moscada",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo 1: O Molho Bechamel",
                "subSteps": [
                    {
                        "title": "O Roux",
                        "description": "Numa panela, derreta a manteiga em lume médio. Adicione a farinha e cozinhe, mexendo sempre, por 2 minutos. Isto chama-se '<span class='tooltip' data-tooltip='Mistura de gordura e farinha cozida, usada para engrossar molhos. Cozinhá-la remove o sabor a farinha crua.'>roux</span>'.",
                        "porque": "Cozinhar o roux é essencial para remover o sabor a farinha crua do molho final.",
                        "pontoCritico": "Não deixe o roux ganhar cor para um bechamel branco."
                    },
                    {
                        "title": "Adicionar o Leite",
                        "description": "Aqueça o leite numa outra panela. Adicione o leite quente ao roux, aos poucos, mexendo vigorosamente com um batedor de arame para não formar grumos. Cozinhe em lume baixo, mexendo, até o molho engrossar. Tempere com sal e noz-moscada.",
                        "porque": "Adicionar o líquido quente ao roux quente (ou frio a frio) e mexer constantemente é a chave para um bechamel liso.",
                        "pontoCritico": "O molho deve cobrir as costas de uma colher."
                    }
                ]
            },
            {
                "title": "Montar a Lasanha",
                "description": "Pré-aqueça o forno a 180°C. Espalhe uma fina camada de bechamel no fundo da travessa. Coloque a primeira camada de massa. Cubra com uma camada de molho à bolonhesa, seguida de uma camada de bechamel e uma pitada de parmesão.",
                "porque": "A camada de bechamel no fundo evita que a massa cole. A ordem das camadas garante que a massa cozinha na humidade dos molhos.",
                "pontoCritico": "Use camadas finas de molho. Uma lasanha com demasiado molho ficará aguada."
            },
            {
                "title": "Repetir e Finalizar",
                "description": "Continue a alternar as camadas: massa, bolonhesa, bechamel, parmesão. Termine com uma camada de massa, coberta generosamente com bechamel e uma boa quantidade de parmesão por cima.",
                "porque": "A camada final de bechamel e parmesão cria a crosta dourada e gratinada característica da lasanha.",
                "pontoCritico": "Normalmente, 4 a 5 camadas de massa são suficientes."
            },
            {
                "title": "Assar e Descansar",
                "description": "Leve ao forno por cerca de 30 minutos, ou até estar a borbulhar e dourada por cima. Deixe a lasanha descansar fora do forno por pelo menos 15 minutos antes de a cortar e servir.",
                "porque": "O descanso é crucial. Permite que as camadas assentem e que a lasanha mantenha a sua forma ao ser cortada. Cortá-la a direito do forno resulta numa confusão no prato.",
                "pontoCritico": "Se a lasanha começar a dourar demasiado rápido, pode cobri-la com papel de alumínio nos últimos 10 minutos.",
                "timer": 1800
            }
        ],
        "variacoes": [
            "<strong>Com Espinafres e Ricota:</strong> Substitua o molho à bolonhesa por um recheio de espinafres e ricota para uma versão vegetariana.",
            "<strong>Com Pesto:</strong> Adicione uma camada de molho pesto entre as outras camadas para um sabor extra."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-lasanha"
    },
    "massas-e-molhos-ragu": {
        "title": "Aula 10: Molho Ragu de Linguiça e Vinho Tinto",
        "description": "Aprenda a fazer um ragu rústico, rico e profundamente saboroso. Esta receita ensina a construir camadas de sabor através do cozimento lento, usando linguiça de porco e vinho tinto como base.",
        "calculator": {
            "label": "Gramas de Linguiça Fresca:",
            "unit": "ragu-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "1.5 - 2 horas",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 6-8 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela de fundo grosso (tipo caçarola)",
                "Colher de pau"
            ]
        },
        "dicaDeMestre": "O segredo de um grande ragu é o tempo. Não apresse o cozimento. O lume baixo e o tempo longo quebram as fibras da carne e fundem todos os sabores, resultando num molho muito mais complexo e delicioso.",
        "ingredients": [
            {
                "name": "Linguiça de Porco fresca, sem pele",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Cebola, picada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Cenoura, picada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Aipo, picado",
                "base_qty": 1,
                "unit": "talo",
                "scalable": true
            },
            {
                "name": "Vinho Tinto Seco",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Tomate Pelado em lata, esmagado",
                "base_qty": 800,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Caldo de Carne ou Frango",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Folha de Louro",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "O Soffritto e a Linguiça",
                "description": "Numa panela grande de fundo grosso, aqueça um pouco de azeite. Adicione a cebola, a cenoura e o aipo (o '<span class='tooltip' data-tooltip='Base aromática da cozinha italiana, composta por cebola, cenoura e aipo picados e refogados lentamente.'>soffritto</span>') e cozinhe em lume médio-baixo até ficarem muito macios. Adicione a carne da linguiça e cozinhe, desfazendo-a com uma colher, até dourar.",
                "porque": "O soffritto é a base de sabor de muitos molhos italianos. Cozinhá-lo lentamente liberta a sua doçura. Dourar a carne cria a reação de Maillard, adicionando profundidade.",
                "pontoCritico": "Tenha paciência com o soffritto. Ele deve suar, não fritar."
            },
            {
                "title": "Deglacear com Vinho",
                "description": "Aumente o lume e adicione o vinho tinto, raspando o fundo da panela para soltar quaisquer pedaços caramelizados. Cozinhe até o vinho ter reduzido quase por completo.",
                "porque": "O vinho não só adiciona o seu próprio sabor, mas também dissolve os 'fondos' (os pedacinhos de carne e vegetais presos ao fundo da panela), que são puro sabor.",
                "pontoCritico": "Deixe o álcool evaporar completamente, senão o molho ficará com um gosto adstringente."
            },
            {
                "title": "O Cozimento Lento",
                "description": "Adicione o tomate esmagado, o caldo e a folha de louro. Tempere com sal e pimenta. Deixe levantar fervura, depois reduza o lume para o mínimo possível, tape e deixe cozinhar lentamente por pelo menos 1 hora e 30 minutos, mexendo ocasionalmente.",
                "porque": "O cozimento lento e longo é o que transforma os ingredientes num ragu coeso e rico. A carne fica incrivelmente tenra e os sabores fundem-se.",
                "pontoCritico": "O molho deve borbulhar muito suavemente, 'plop, plop'. Se ferver com força, a carne pode ficar dura.",
                "timer": 5400
            },
            {
                "title": "Finalização",
                "description": "Após o tempo de cozimento, o ragu deve estar espesso e o óleo pode ter-se separado ligeiramente na superfície (um bom sinal). Remova a folha de louro. Prove e ajuste o tempero. Sirva com uma massa larga, como pappardelle ou rigatoni, e queijo parmesão ralado.",
                "porque": "Massas largas são ideais para segurar molhos robustos como o ragu.",
                "pontoCritico": "Um bom ragu é ainda melhor no dia seguinte, quando os sabores tiveram ainda mais tempo para se desenvolverem."
            }
        ],
        "variacoes": [
            "<strong>Com Natas:</strong> Adicione um pouco de natas ou leite no final para um ragu mais cremoso ('ragu bianco' se não usar tomate).",
            "<strong>Com Cogumelos:</strong> Adicione cogumelos secos (previamente hidratados) para um sabor mais terroso.",
            "<strong>Com Ervas:</strong> Adicione um ramo de alecrim ou tomilho durante o cozimento lento."
        ],
        "module": "Massas e Molhos",
        "url": "massas.html#receita-ragu"
    },
    "pães-artesanais-pao-sem-sova": {
        "title": "Aula 01: Pão Sem Sova (No-Knead Bread)",
        "description": "A receita que revolucionou a panificação caseira. Aprenda a fazer um pão de casca crocante e miolo aerado com qualidade de padaria, com um esforço ativo de menos de 5 minutos. O tempo fará todo o trabalho por si.",
        "calculator": {
            "label": "Gramas de Farinha:",
            "unit": "pao-sem-sova-input",
            "base_value": 400,
            "default_value": 400
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "45 min",
            "tempoDescanso": "12-18 horas",
            "rendimento": "1 pão redondo",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela de ferro fundido com tampa (Dutch Oven)",
                "Tigela grande",
                "Espátula"
            ]
        },
        "dicaDeMestre": "O segredo do sucesso desta receita é a panela de ferro superaquecida. Ela funciona como um 'mini-forno', aprisionando o vapor libertado pelo pão. Este vapor mantém a crosta macia no início, permitindo que o pão cresça ao máximo, e depois escapa, criando uma crosta estaladiça.",
        "ingredients": [
            {
                "name": "Farinha de Trigo",
                "base_qty": 400,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água morna",
                "base_qty": 300,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 8,
                "unit": "g (1.5 c. de chá)",
                "scalable": true
            },
            {
                "name": "Fermento Biológico Seco",
                "base_qty": 1,
                "unit": "g (1/4 c. de chá)",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Mistura",
                "description": "Numa tigela grande, misture a farinha, o sal e o fermento. Adicione a água morna e misture com uma espátula ou colher apenas até não haver mais farinha seca visível. A massa será pegajosa e desgrenhada. Não precisa de sovar.",
                "porque": "A longa fermentação fará o trabalho de desenvolver o <span class='tooltip' data-tooltip='Rede de proteínas que dá elasticidade e estrutura à massa.'>glúten</span>, eliminando a necessidade da sova manual. A alta hidratação da massa também contribui para um miolo mais aberto.",
                "pontoCritico": "Apenas misture. Não trabalhe a massa. A beleza desta receita está na sua simplicidade."
            },
            {
                "title": "A Longa Fermentação",
                "description": "Cubra a tigela com película aderente ou um pano e deixe a massa descansar à temperatura ambiente por 12 a 18 horas. A massa estará pronta quando estiver cheia de bolhas e tiver mais do que duplicado de volume.",
                "porque": "É durante este longo período que a fermentação lenta acontece. O fermento consome os açúcares da farinha, libertando dióxido de carbono (as bolhas) e desenvolvendo sabores complexos que uma fermentação rápida não consegue criar.",
                "pontoCritico": "O tempo exato dependerá da temperatura da sua cozinha. Em dias mais quentes, 12 horas pode ser suficiente. Em dias frios, pode precisar de 18 ou mais."
            },
            {
                "title": "Pré-aquecer a Panela",
                "description": "Pelo menos 30 minutos antes de assar, coloque a sua panela de ferro com a tampa dentro do forno e pré-aqueça-o a 230°C. A panela precisa de estar incrivelmente quente.",
                "porque": "O choque térmico de colocar a massa fria na panela a ferver é o que cria a 'explosão de forno' (<span class='tooltip' data-tooltip='O rápido crescimento do pão nos primeiros minutos no forno.'>oven spring</span>), fazendo o pão crescer dramaticamente.",
                "pontoCritico": "Não salte este passo. Uma panela que não está suficientemente quente resultará num pão denso e pálido."
            },
            {
                "title": "Assar o Pão",
                "description": "Com cuidado, retire a panela quente do forno. Despeje a massa (que estará pegajosa) na panela. Tape e leve ao forno por 30 minutos. Após 30 minutos, retire a tampa e asse por mais 15 minutos, ou até a crosta estar bem dourada.",
                "porque": "Os primeiros 30 minutos com tampa criam um ambiente cheio de vapor, permitindo o crescimento máximo. Retirar a tampa permite que o vapor escape, secando a superfície e criando a crosta estaladiça.",
                "pontoCritico": "Tenha muito cuidado ao manusear a panela quente. Use luvas de forno de boa qualidade.",
                "timer": 1800
            }
        ],
        "variacoes": [
            "<strong>Com Sementes:</strong> Adicione um punhado de sementes de girassol ou abóbora à mistura inicial.",
            "<strong>Com Azeitonas:</strong> Incorpore azeitonas picadas e um pouco de alecrim na massa.",
            "<strong>Integral:</strong> Substitua 1/3 da farinha branca por farinha de trigo integral."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-pao-sem-sova"
    },
    "pães-artesanais-pao-rustico": {
        "title": "Aula 02: Pão Rústico Caseiro",
        "description": "Esta aula é a sua introdução à arte de sovar. Aprenda a desenvolver o glúten com as próprias mãos para criar um pão clássico de casca grossa e miolo macio, perfeito para o dia a dia.",
        "calculator": {
            "label": "Gramas de Farinha:",
            "unit": "pao-rustico-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "30-40 min",
            "tempoDescanso": "2 horas",
            "rendimento": "1 pão grande",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Bancada de trabalho",
                "Tigela grande",
                "Lâmina ou faca afiada para cortar"
            ]
        },
        "dicaDeMestre": "O 'teste do ponto de véu' é a forma profissional de saber se a massa está bem sovada. Pegue num pequeno pedaço de massa e estique-o delicadamente com os dedos. Se conseguir formar uma membrana fina e translúcida sem rasgar, o glúten está bem desenvolvido.",
        "ingredients": [
            {
                "name": "Farinha de Trigo (de força, se possível)",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água morna",
                "base_qty": 320,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Fermento Biológico Seco",
                "base_qty": 7,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 10,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Ativar o Fermento",
                "description": "Numa tigela pequena, misture a água morna com o fermento e uma pitada de açúcar (opcional). Deixe descansar por 5-10 minutos até espumar.",
                "porque": "Este passo prova que o seu fermento está ativo e pronto para trabalhar. Se não espumar, o fermento pode estar morto e o seu pão não irá crescer.",
                "pontoCritico": "A água deve estar morna, não quente. Água quente pode matar o fermento."
            },
            {
                "title": "Sovar a Massa",
                "description": "Numa tigela grande, misture a farinha e o sal. Faça um buraco no meio e adicione a mistura de fermento e o azeite. Misture até formar uma massa. Transfira para uma bancada e comece a <span class='tooltip' data-tooltip='Trabalhar a massa vigorosamente para desenvolver a rede de glúten, o que dá estrutura e elasticidade ao pão.'>sovar</span> por 10 a 15 minutos.",
                "porque": "A sova é o exercício que fortalece o glúten. Uma rede de glúten forte aprisiona os gases da fermentação, permitindo que o pão cresça e tenha um miolo fofo.",
                "pontoCritico": "A massa estará pronta quando estiver lisa, elástica e passar no 'teste do ponto de véu'."
            },
            {
                "title": "Primeira Fermentação",
                "description": "Forme uma bola com a massa, coloque-a numa tigela levemente untada com azeite, cubra e deixe levedar num local morno por cerca de 1 a 1.5 horas, ou até duplicar de volume.",
                "porque": "Durante este tempo, o fermento alimenta-se e liberta dióxido de carbono, fazendo a massa crescer e desenvolvendo o sabor do pão.",
                "pontoCritico": "Um bom truque para saber se a massa levedou o suficiente é pressionar um dedo nela. Se a marca ficar, está pronta."
            },
            {
                "title": "Modelar e Segunda Fermentação",
                "description": "Retire o ar da massa e modele-a no formato desejado (uma bola 'boule' ou um 'batard' alongado). Coloque num tabuleiro forrado com papel vegetal, cubra e deixe levedar por mais 30-45 minutos.",
                "porque": "A modelagem cria tensão na superfície da massa, o que a ajuda a manter a forma e a crescer para cima no forno. A segunda fermentação recupera parte do ar perdido.",
                "pontoCritico": "Não deixe levedar demais na segunda vez, ou o pão pode abater no forno."
            },
            {
                "title": "Cortar e Assar",
                "description": "Pré-aqueça o forno a 220°C. Com uma lâmina ou faca muito afiada, faça um ou mais cortes na superfície do pão. Borrife o forno com água para criar vapor e asse por 30-40 minutos, até a crosta estar bem dourada e o pão soar oco ao bater no fundo.",
                "porque": "O corte permite que o pão se expanda de forma controlada no forno. O vapor inicial ajuda a criar uma crosta mais crocante e estaladiça.",
                "pontoCritico": "Os cortes devem ser rápidos e confiantes, com cerca de 1cm de profundidade."
            }
        ],
        "variacoes": [
            "<strong>Pão de Chouriço:</strong> Incorpore pedaços de chouriço na massa durante a modelagem.",
            "<strong>Com Queijo e Alho:</strong> Adicione queijo ralado e alho em pó à farinha.",
            "<strong>Pãezinhos Individuais:</strong> Divida a massa em porções menores e modele pãezinhos."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-pao-rustico"
    },
    "pães-artesanais-pao-de-queijo": {
        "title": "Aula 03: Pão de Queijo Tradicional",
        "description": "Aprenda a fazer o pão de queijo mineiro autêntico, com a casquinha crocante e o interior elástico e 'puxa-puxa'. O segredo está em escaldar o polvilho e na qualidade do queijo.",
        "calculator": {
            "label": "Gramas de Polvilho Azedo:",
            "unit": "pao-de-queijo-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "25-35 min",
            "tempoDescanso": "N/A",
            "rendimento": "Aprox. 30 pães de queijo",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela",
                "Tigela grande",
                "Colher de pau"
            ]
        },
        "dicaDeMestre": "Para um pão de queijo com o interior mais oco, use apenas polvilho azedo. Para um interior mais denso e macio, use uma mistura de metade polvilho azedo e metade polvilho doce. Esta receita foca-se no tradicional polvilho azedo.",
        "ingredients": [
            {
                "name": "Polvilho Azedo",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Leite",
                "base_qty": 250,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Óleo Vegetal",
                "base_qty": 100,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Ovos",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Queijo Minas Curado ou Parmesão, ralado",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Escaldar o Polvilho",
                "description": "Numa panela, ferva o leite, o óleo e o sal. Assim que levantar fervura, despeje esta mistura quente de uma só vez sobre o polvilho azedo numa tigela grande. Misture com uma colher até formar uma massa granulada e pegajosa. Deixe arrefecer.",
                "porque": "Este processo de <span class='tooltip' data-tooltip='Adicionar um líquido a ferver sobre um amido (como o polvilho) para pré-cozinhar e gelatinizar parte dele.'>escaldar</span> o polvilho pré-gelatiniza o amido, o que é o segredo para a textura elástica e o crescimento do pão de queijo. É o passo mais importante.",
                "pontoCritico": "É crucial deixar a massa arrefecer o suficiente para que não cozinhe os ovos quando os adicionar. Deve estar morna ao toque."
            },
            {
                "title": "Adicionar Ovos e Queijo",
                "description": "Quando a massa estiver morna, adicione os ovos, um de cada vez, misturando bem. A massa parecerá desunida no início, mas continue a misturar. Por fim, adicione o queijo ralado e amasse com as mãos até obter uma massa lisa e homogénea.",
                "porque": "Os ovos e o queijo dão a liga final, a gordura e o sabor. Amassar com as mãos ajuda a incorporar tudo de forma uniforme.",
                "pontoCritico": "A massa estará pronta quando não colar nas mãos. Se estiver muito pegajosa, pode adicionar um pouco mais de polvilho, mas com cuidado para não secar a massa."
            },
            {
                "title": "Moldar e Assar",
                "description": "Pré-aqueça o forno a 180°C. Unte as mãos com um pouco de óleo e enrole pequenas porções da massa para formar bolinhas. Disponha-as num tabuleiro, deixando espaço entre elas. Leve ao forno por 25 a 35 minutos.",
                "porque": "O calor do forno faz com que a água na massa se transforme em vapor, inflando o pão de queijo e criando o seu interior aerado.",
                "pontoCritico": "Eles estão prontos quando estiverem crescidos e bem dourados. Não asse demais para que o interior não seque.",
                "timer": 1800
            }
        ],
        "variacoes": [
            "<strong>Recheado:</strong> Pode rechear as bolinhas com um cubo de queijo ou goiabada antes de assar.",
            "<strong>Congelamento:</strong> Pode congelar as bolinhas cruas num tabuleiro e depois transferi-las para um saco. Asse diretamente do congelador, adicionando 5-10 minutos ao tempo de forno.",
            "<strong>Com Ervas:</strong> Adicione orégãos ou alecrim picado à massa."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-pao-de-queijo"
    },
    "pães-artesanais-focaccia": {
        "title": "Aula 04: Focaccia com Alecrim e Sal Grosso",
        "description": "Aprenda a fazer focaccia, o pão achatado italiano que é uma tela em branco para a sua criatividade. Esta aula foca-se numa massa de alta hidratação e na técnica de 'furar' com os dedos para criar a textura clássica.",
        "calculator": {
            "label": "Gramas de Farinha:",
            "unit": "focaccia-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "2 horas",
            "rendimento": "1 focaccia grande",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Assadeira retangular",
                "Tigela grande"
            ]
        },
        "dicaDeMestre": "Não tenha medo da massa pegajosa! A <span class='tooltip' data-tooltip='A quantidade de água em relação à quantidade de farinha numa massa. Massas com alta hidratação são mais húmidas e resultam em pães com miolo mais aberto e aerado.'>alta hidratação</span> é o segredo para o miolo fofo e cheio de bolhas da focaccia. Use as mãos untadas com azeite para manusear a massa e evitar que cole.",
        "ingredients": [
            {
                "name": "Farinha de Trigo",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água morna",
                "base_qty": 400,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Fermento Biológico Seco",
                "base_qty": 7,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 10,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem",
                "base_qty": 50,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Alecrim fresco e Sal grosso",
                "base_qty": 0,
                "unit": "Para cobrir",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "A Massa Húmida",
                "description": "Numa tigela, misture a farinha, o fermento e o sal. Adicione a água morna e 2 colheres de sopa de azeite. Misture até formar uma massa muito húmida e pegajosa. Cubra e deixe levedar por 1 a 1.5 horas, ou até duplicar.",
                "porque": "Uma massa com alta percentagem de água desenvolve o glúten com o tempo, sem precisar de muita sova, e resulta num miolo muito mais leve e aerado.",
                "pontoCritico": "A massa estará correta se for demasiado pegajosa para sovar numa bancada. Confie no processo."
            },
            {
                "title": "Esticar e Segunda Fermentação",
                "description": "Unte generosamente uma assadeira retangular com azeite. Despeje a massa na assadeira. Com as pontas dos dedos untadas em azeite, estique e pressione a massa delicadamente para que ela preencha a forma. Cubra e deixe levedar por mais 30-45 minutos.",
                "porque": "O azeite na assadeira não só impede que a focaccia cole, mas também 'frita' a base, deixando-a crocante. A segunda fermentação cria mais bolhas de ar.",
                "pontoCritico": "Seja gentil ao esticar a massa para não rebentar as bolhas de ar que se formaram."
            },
            {
                "title": "Furar e Temperar",
                "description": "Pré-aqueça o forno a 220°C. Unte novamente as pontas dos dedos com azeite e pressione firmemente a massa, criando as 'covinhas' características da focaccia. Regue com mais azeite, polvilhe com os ramos de alecrim e sal grosso.",
                "porque": "As covinhas criam uma textura irregular e são perfeitas para reter o azeite e os temperos, infundindo sabor na massa durante o cozimento.",
                "pontoCritico": "Pressione os dedos até ao fundo da assadeira para criar covinhas bem definidas."
            },
            {
                "title": "Assar em Forno Quente",
                "description": "Leve ao forno quente por 20 a 25 minutos, ou até estar bem dourada e cozida. Retire da forma e deixe arrefecer sobre uma grelha.",
                "porque": "O calor alto ajuda a focaccia a crescer rapidamente e a criar uma crosta dourada, mantendo o interior fofo.",
                "pontoCritico": "Arrefecer sobre uma grelha evita que a base fique húmida e amolecida pelo vapor.",
                "timer": 1200
            }
        ],
        "variacoes": [
            "<strong>Com Tomate Cherry e Azeitonas:</strong> Pressione tomates cherry e azeitonas nas covinhas antes de assar.",
            "<strong>Com Pesto:</strong> Espalhe uma camada de pesto sobre a massa antes da segunda fermentação.",
            "<strong>Recheada:</strong> Divida a massa em duas, estique uma parte, cubra com queijo e presunto, e coloque a outra parte da massa por cima antes de fazer as covinhas."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-focaccia"
    },
    "pães-artesanais-pao-de-leite": {
        "title": "Aula 05: Pão de Leite Fofinho",
        "description": "Aprenda a fazer o pão de leite clássico, com uma textura ultra macia e um sabor ligeiramente adocicado. Esta aula é uma introdução às <span class='tooltip' data-tooltip='Massas que contêm uma maior percentagem de gordura, açúcar e laticínios, resultando numa textura mais macia e rica.'>massas ricas</span>, perfeitas para o lanche ou pequeno-almoço.",
        "calculator": {
            "label": "Pães:",
            "unit": "pao-de-leite-input",
            "base_value": 12,
            "default_value": 12
        },
        "details": {
            "tempoPreparo": "25 min",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "2 horas",
            "rendimento": "12 pãezinhos",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Batedeira com gancho (opcional)",
                "Tigela",
                "Tabuleiro"
            ]
        },
        "dicaDeMestre": "Pincelar os pães com uma mistura de gema de ovo e um pouco de leite antes de assar (egg wash) é o segredo para obter uma crosta brilhante e com uma cor dourada profunda e uniforme.",
        "ingredients": [
            {
                "name": "Farinha de Trigo",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Leite morno",
                "base_qty": 250,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Açúcar",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Manteiga sem sal, amolecida",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Ovo",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Fermento Biológico Seco",
                "base_qty": 7,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Massa Rica",
                "description": "Numa tigela, misture o leite morno e o fermento. Numa tigela maior (ou na da batedeira), junte a farinha, o açúcar e o sal. Adicione a mistura de leite, o ovo e a manteiga amolecida. Comece a misturar até formar uma massa.",
                "porque": "As massas ricas contêm gordura (manteiga) e açúcar, que amaciam o glúten e resultam num miolo mais macio e menos elástico do que o de um pão rústico.",
                "pontoCritico": "A manteiga deve estar amolecida, não derretida, para se incorporar melhor na massa."
            },
            {
                "title": "Sovar até Ficar Elástica",
                "description": "Sove a massa numa bancada por 10-15 minutos (ou 8-10 minutos na batedeira com o gancho) até ficar lisa, elástica e macia.",
                "porque": "Mesmo sendo uma massa rica, o desenvolvimento do glúten ainda é necessário para dar estrutura ao pão e permitir que ele cresça.",
                "pontoCritico": "A massa ficará um pouco pegajosa devido ao açúcar e à gordura. Evite adicionar demasiada farinha extra."
            },
            {
                "title": "Fermentação e Moldagem",
                "description": "Faça uma bola com a massa, coloque-a numa tigela untada, cubra e deixe levedar por 1 a 1.5 horas. Depois, divida a massa em 12 porções iguais e modele pequenas bolas. Coloque-as num tabuleiro, cubra e deixe levedar por mais 45 minutos.",
                "porque": "A fermentação dupla garante um pão mais leve e com um sabor mais desenvolvido.",
                "pontoCritico": "Deixe espaço entre as bolinhas no tabuleiro, pois elas irão crescer e podem juntar-se, o que é normal para este tipo de pão."
            },
            {
                "title": "Pincelar e Assar",
                "description": "Pré-aqueça o forno a 180°C. Pincele os pães com uma mistura de gema e leite. Leve ao forno por 20 a 25 minutos, ou até estarem bem dourados. Deixe arrefecer sobre uma grelha.",
                "porque": "O 'egg wash' dá a cor e o brilho característicos. O calor moderado do forno cozinha a massa rica de forma mais gentil.",
                "pontoCritico": "Como contêm açúcar, estes pães douram mais rápido. Fique atento para não queimarem.",
                "timer": 1200
            }
        ],
        "variacoes": [
            "<strong>Com Chocolate:</strong> Adicione pepitas de chocolate à massa.",
            "<strong>Pão Doce:</strong> Aumente a quantidade de açúcar e cubra com uma calda de açúcar em pó e leite depois de assados.",
            "<strong>Formato de Forma:</strong> Asse a massa inteira numa forma de pão para um pão de leite de fatiar."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-pao-de-leite"
    },
    "pães-artesanais-baguete": {
        "title": "Aula 06: Baguete Francesa Simplificada",
        "description": "Domine a arte de modelar uma baguete e conseguir a sua casca estaladiça e o miolo aberto e arejado. Esta é uma versão simplificada que se foca nas técnicas chave sem exigir um vapor profissional.",
        "calculator": {
            "label": "Número de Baguetes:",
            "unit": "baguete-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "25-30 min",
            "tempoDescanso": "3 horas",
            "rendimento": "2 baguetes",
            "dificuldade": "Avançado",
            "utensilios": [
                "Tabuleiro de baguetes ou papel vegetal",
                "Lâmina de padeiro",
                "Tigela grande"
            ]
        },
        "dicaDeMestre": "O vapor é o segredo da crosta da baguete. Em casa, pode simular um forno a vapor colocando um tabuleiro vazio na prateleira de baixo do forno enquanto ele aquece. Assim que colocar o pão, deite um copo de água a ferver nesse tabuleiro quente. Feche a porta rapidamente.",
        "ingredients": [
            {
                "name": "Farinha de Trigo T65 (ou de pão)",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água",
                "base_qty": 350,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 10,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Fermento Biológico Seco",
                "base_qty": 4,
                "unit": "g",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Autólise e Primeira Fermentação",
                "description": "Misture a farinha e a água até não haver farinha seca. Deixe descansar por 30 minutos (este processo chama-se <span class='tooltip' data-tooltip='Técnica onde se mistura apenas farinha e água, deixando descansar. Facilita a sova e melhora a textura do pão.'>autólise</span>). Adicione o sal e o fermento e sove por 10 minutos. Deixe levedar por 1.5 a 2 horas, fazendo dobras na massa a cada 30 minutos.",
                "porque": "A autólise hidrata a farinha e começa a desenvolver o glúten passivamente. As dobras (stretches and folds) fortalecem o glúten sem uma sova intensa, ideal para massas mais húmidas.",
                "pontoCritico": "A massa será pegajosa. Use as mãos molhadas para fazer as dobras e evitar que cole."
            },
            {
                "title": "Pré-modelagem e Modelagem",
                "description": "Divida a massa em duas. Pré-modele cada porção num retângulo. Deixe descansar por 15 minutos. Depois, modele a baguete: dobre a massa como se fosse uma carta, sele as pontas, e enrole para formar um cilindro longo e fino.",
                "porque": "A modelagem cria tensão na superfície da massa, o que é crucial para um bom 'oven spring' e para o formato final.",
                "pontoCritico": "A modelagem da baguete requer prática. Veja vídeos para entender o movimento de enrolar e selar."
            },
            {
                "title": "Segunda Fermentação e Cortar",
                "description": "Coloque as baguetes num pano de padeiro (couche) ou em papel vegetal, criando uma dobra para as separar. Deixe levedar por 30-45 minutos. Pré-aqueça o forno e a pedra/tabuleiro a 240°C. Transfira as baguetes para o tabuleiro quente e faça 3 a 5 cortes diagonais com uma lâmina.",
                "porque": "A segunda fermentação desenvolve o sabor final. Os cortes permitem que a baguete se expanda e criem as 'orelhas' características.",
                "pontoCritico": "Use uma lâmina muito afiada (gillette) num ângulo de 45 graus para os cortes."
            },
            {
                "title": "Assar com Vapor",
                "description": "Coloque o pão no forno e adicione água a ferver no tabuleiro de baixo para criar vapor. Asse por 10 minutos com vapor. Retire o tabuleiro com a água e continue a assar por mais 15-20 minutos, até ficarem bem douradas.",
                "porque": "O vapor inicial mantém a crosta húmida, permitindo o máximo crescimento. O ambiente seco a seguir cria a crosta estaladiça.",
                "pontoCritico": "Cuidado com o vapor ao abrir a porta do forno."
            }
        ],
        "variacoes": [
            "<strong>Com Gergelim:</strong> Borrife com água e polvilhe com sementes de gergelim antes de assar.",
            "<strong>Baguete Rústica:</strong> Use uma parte de farinha de centeio na mistura."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-baguete"
    },
    "pães-artesanais-pao-integral": {
        "title": "Aula 07: Pão Integral com Sementes",
        "description": "Aprenda a fazer um pão integral fofo e saboroso. O segredo é saber como lidar com a farinha integral, que se comporta de forma diferente da branca, e enriquecer a massa com sementes para mais textura e nutrientes.",
        "calculator": {
            "label": "Pães (Forma):",
            "unit": "pao-integral-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "25 min",
            "tempoCozimento": "40-45 min",
            "tempoDescanso": "2 horas",
            "rendimento": "1 pão de forma grande",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Forma de pão",
                "Tigela grande"
            ]
        },
        "dicaDeMestre": "A farinha integral absorve mais água que a branca. Para um miolo mais húmido, use a técnica do '<span class='tooltip' data-tooltip='Mistura de farinha e água (e por vezes outros ingredientes) que é deixada a demolhar antes da sova, para hidratar completamente o amido e o farelo.'>soaker</span>': misture a farinha integral e as sementes com a água da receita e deixe demolhar por 1 a 2 horas antes de adicionar o resto dos ingredientes.",
        "ingredients": [
            {
                "name": "Farinha de Trigo Integral",
                "base_qty": 300,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo Branca",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Mistura de sementes (girassol, linhaça, abóbora)",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água morna",
                "base_qty": 350,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Mel",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Fermento Biológico Seco",
                "base_qty": 7,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 10,
                "unit": "g",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar a Massa",
                "description": "Numa tigela grande, misture as farinhas, as sementes e o sal. Noutra tigela, misture a água morna, o mel, o azeite e o fermento. Junte os líquidos aos secos e misture até formar uma massa pegajosa.",
                "porque": "A combinação de farinha integral e branca dá o equilíbrio perfeito entre sabor, nutrição (integral) e estrutura de glúten (branca), resultando num pão mais fofo do que um 100% integral.",
                "pontoCritico": "A massa será mais densa e menos elástica do que uma massa apenas com farinha branca. Isto é normal."
            },
            {
                "title": "Sovar e Fermentar",
                "description": "Sove a massa por cerca de 10 minutos numa bancada levemente enfarinhada até ficar mais elástica. Forme uma bola, coloque numa tigela untada, cubra e deixe levedar por 1 a 1.5 horas, ou até duplicar.",
                "porque": "Mesmo com farinha integral, a sova é importante para desenvolver o glúten necessário para um bom crescimento.",
                "pontoCritico": "Não espere a mesma elasticidade do 'ponto de véu' de uma massa branca. A fibra da farinha integral 'corta' as redes de glúten."
            },
            {
                "title": "Modelar e Assar",
                "description": "Modele a massa num rolo e coloque-a numa forma de pão untada. Cubra e deixe levedar por mais 45 minutos. Pré-aqueça o forno a 200°C. Pincele o topo com um pouco de água e polvilhe com mais sementes. Asse por 40 a 45 minutos.",
                "porque": "Modelar para uma forma de pão dá suporte à massa mais densa, ajudando-a a crescer para cima.",
                "pontoCritico": "O pão integral está pronto quando soa oco ao bater no fundo e a temperatura interna atinge cerca de 90°C."
            }
        ],
        "variacoes": [
            "<strong>Com Frutos Secos:</strong> Adicione passas ou damascos picados à massa.",
            "<strong>Pão de Centeio:</strong> Substitua parte da farinha integral por farinha de centeio para um sabor mais robusto."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-pao-integral"
    },
    "pães-artesanais-massa-pizza": {
        "title": "Aula 08: Massa de Pizza Clássica (Longa Fermentação)",
        "description": "O segredo de uma pizza de restaurante está na massa. Aprenda a fazer uma massa de pizza com longa fermentação a frio, que desenvolve um sabor complexo e uma textura com bolhas e leveza incríveis.",
        "calculator": {
            "label": "Número de Pizzas (250g cada):",
            "unit": "massa-pizza-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "8-12 min",
            "tempoDescanso": "24-72 horas",
            "rendimento": "4 bases de pizza",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Bancada de trabalho",
                "Recipientes individuais com tampa",
                "Pedra ou tabuleiro de pizza"
            ]
        },
        "dicaDeMestre": "A <span class='tooltip' data-tooltip='Processo de fermentar a massa lentamente na geleira por um ou mais dias. Desenvolve sabores muito mais complexos e melhora a textura.'>longa fermentação a frio</span> na geleira é o que diferencia uma pizza boa de uma pizza extraordinária. O sabor que se desenvolve é impossível de alcançar com uma fermentação rápida.",
        "ingredients": [
            {
                "name": "Farinha de Trigo Tipo 00 (ou de pão)",
                "base_qty": 600,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água fria",
                "base_qty": 390,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Sal fino",
                "base_qty": 18,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Fermento Biológico Seco",
                "base_qty": 1,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Massa",
                "description": "Numa tigela, misture a farinha e o fermento. Noutra, dissolva o sal na água fria. Adicione a água à farinha e misture até formar uma massa. Adicione o azeite e sove por 10 minutos até ficar lisa.",
                "porque": "Usar água fria e pouco fermento é a chave para uma fermentação lenta e controlada, que é o objetivo desta receita.",
                "pontoCritico": "Dissolver o sal na água antes de o juntar à farinha garante que ele se distribui de forma uniforme sem entrar em contacto direto com o fermento, o que poderia retardar a sua atividade."
            },
            {
                "title": "Fermentação a Frio",
                "description": "Divida a massa em 4 bolas de cerca de 250g cada. Coloque cada bola num recipiente individual levemente untado com azeite, tape e leve à geleira por 24 a 72 horas.",
                "porque": "A geleira abranda drasticamente a atividade do fermento, permitindo que as enzimas na farinha atuem e desenvolvam açúcares complexos. Isto resulta num sabor profundo e numa crosta que doura lindamente.",
                "pontoCritico": "Quanto mais tempo na geleira (até 3 dias), mais sabor a massa terá."
            },
            {
                "title": "Temperar e Esticar",
                "description": "Retire as bolas de massa da geleira 2 a 3 horas antes de usar, para que atinjam a temperatura ambiente. Numa bancada enfarinhada, estique a massa com as pontas dos dedos, do centro para fora, deixando uma borda mais grossa (o 'cornicione').",
                "porque": "Deixar a massa aquecer torna-a mais maleável e fácil de esticar. Esticar com os dedos preserva as bolhas de ar da fermentação, resultando numa crosta mais aerada.",
                "pontoCritico": "Nunca use um rolo da massa para esticar massa de pizza! Isso esmaga todas as bolhas de ar."
            },
            {
                "title": "Assar em Forno Muito Quente",
                "description": "Pré-aqueça o seu forno na temperatura máxima (250°C ou mais) com uma pedra ou tabuleiro de pizza lá dentro. Adicione o seu recheio à base de pizza, transfira-a para a pedra quente e asse por 8 a 12 minutos.",
                "porque": "A pizza precisa de um choque de calor intenso e rápido para que a base fique crocante e a crosta infle antes que o recheio seque.",
                "pontoCritico": "O forno e a superfície de cozimento devem estar o mais quente possível. É o segredo para uma base de pizza perfeita em casa."
            }
        ],
        "variacoes": [
            "<strong>Margherita:</strong> Molho de tomate, mozzarella fresca, manjericão.",
            "<strong>Calabresa:</strong> Molho de tomate, queijo, fatias de linguiça calabresa e cebola.",
            "<strong>Branca:</strong> Use azeite e alho como base em vez de molho de tomate."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-massa-pizza"
    },
    "pães-artesanais-pao-biga": {
        "title": "Aula 09: Pão Italiano com Biga",
        "description": "Dê um passo em direção à panificação avançada com a Biga, um <span class='tooltip' data-tooltip='Uma porção de massa feita no dia anterior (farinha, água e fermento) que é adicionada à massa final para melhorar o sabor, a estrutura e a durabilidade do pão.'>pré-fermento</span> italiano. Esta técnica resulta num pão com um miolo muito mais complexo e aromático.",
        "calculator": {
            "label": "Pães:",
            "unit": "pao-biga-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "30 min",
            "tempoCozimento": "35-45 min",
            "tempoDescanso": "12h (biga) + 3h (massa)",
            "rendimento": "2 pães",
            "dificuldade": "Avançado",
            "utensilios": [
                "Batedeira com gancho",
                "Tigela"
            ]
        },
        "dicaDeMestre": "A Biga é uma massa relativamente seca. É importante garantir que toda a farinha está hidratada. Misture bem até não haver pontos secos. A sua consistência final será firme e pouco elástica.",
        "ingredients": [
            {
                "name": "Farinha de Trigo",
                "base_qty": 300,
                "unit": "g",
                "scalable": true,
                "heading": "Para a Biga (fazer na noite anterior)"
            },
            {
                "name": "Água",
                "base_qty": 150,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Fermento Biológico Seco",
                "base_qty": 0.5,
                "unit": "g (uma pitada)",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo",
                "base_qty": 200,
                "unit": "g",
                "scalable": true,
                "heading": "Para a Massa Final"
            },
            {
                "name": "Água",
                "base_qty": 180,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 10,
                "unit": "g",
                "scalable": true
            }
        ],
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo: Preparar a Biga (12-16 horas antes)",
                "subSteps": [
                    {
                        "title": "Misturar a Biga",
                        "description": "Numa tigela, misture a farinha da biga, a água e a pitada de fermento. Misture apenas até os ingredientes se combinarem. Não precisa de sovar. A massa será firme.",
                        "porque": "A biga é um pré-fermento que desenvolve ácidos e álcoois aromáticos durante uma longa fermentação, o que dará ao pão final um sabor muito mais profundo e complexo.",
                        "pontoCritico": "Use uma quantidade muito pequena de fermento, pois o objetivo é uma fermentação muito lenta."
                    },
                    {
                        "title": "Fermentação Lenta",
                        "description": "Cubra a tigela e deixe a biga fermentar à temperatura ambiente por 12 a 16 horas. Estará pronta quando tiver um cheiro forte a álcool e estiver cheia de bolhas.",
                        "porque": "Este longo período é onde toda a complexidade de sabor é criada. É um processo puramente químico e biológico.",
                        "pontoCritico": "O tempo pode variar com a temperatura da sua cozinha."
                    }
                ]
            },
            {
                "title": "Massa Final",
                "description": "Na tigela da batedeira, desfaça a biga na água da massa final. Adicione a farinha e o sal. Com o gancho, misture em velocidade baixa até combinar, e depois aumente para velocidade média e sove por 8-10 minutos.",
                "porque": "A biga já contém a maior parte do sabor. A sova agora serve para desenvolver o glúten da nova farinha e criar a estrutura final do pão.",
                "pontoCritico": "A massa será pegajosa. É normal. Evite adicionar muita farinha."
            },
            {
                "title": "Fermentação e Dobras",
                "description": "Coloque a massa numa tigela untada e deixe levedar por cerca de 2 horas, fazendo um conjunto de <span class='tooltip' data-tooltip='Técnica de esticar e dobrar a massa sobre si mesma durante a fermentação para fortalecer o glúten sem sovar intensamente.'>dobras</span> a cada 45 minutos para fortalecer a massa.",
                "porque": "As dobras ajudam a fortalecer a rede de glúten de uma massa mais húmida, dando-lhe a força necessária para crescer bem.",
                "pontoCritico": "Use as mãos molhadas para fazer as dobras e evitar que a massa cole."
            },
            {
                "title": "Modelar e Assar",
                "description": "Divida a massa em duas, pré-modele, deixe descansar por 15 minutos e depois modele no formato final. Deixe levedar por mais 1 hora. Asse num forno muito quente (230°C) com vapor, preferencialmente numa panela de ferro.",
                "porque": "As técnicas de modelagem e cozedura são semelhantes às de outros pães rústicos, mas o resultado em sabor e textura, graças à biga, será muito superior.",
                "pontoCritico": "Este pão beneficia enormemente do método de cozedura em panela de ferro (Dutch oven)."
            }
        ],
        "variacoes": [
            "<strong>Com Poolish:</strong> Experimente usar um 'poolish' (um pré-fermento líquido, com 100% de hidratação) em vez de uma biga para um sabor ligeiramente diferente.",
            "<strong>Ciabatta:</strong> Com uma hidratação ainda maior e uma manipulação gentil, esta massa pode ser usada para fazer pão Ciabatta."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-pao-biga"
    },
    "pães-artesanais-sourdough": {
        "title": "Aula 10: Introdução ao Pão de Fermentação Natural",
        "description": "A jornada final da panificação caseira. Esta aula é uma introdução ao mundo do <span class='tooltip' data-tooltip='Também conhecido como sourdough ou massa mãe, é uma cultura viva de leveduras e bactérias selvagens usada para fermentar o pão.'>levain</span>. Aprenda o que é, como alimentá-lo e os passos para fazer o seu primeiro pão de fermentação natural.",
        "calculator": {
            "label": "Pães:",
            "unit": "sourdough-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "Vários dias (para o levain) + 40 min (massa)",
            "tempoCozimento": "45 min",
            "tempoDescanso": "24 horas",
            "rendimento": "1 pão grande",
            "dificuldade": "Perito",
            "utensilios": [
                "Balança de precisão",
                "Banneton (cesto de fermentação)",
                "Panela de ferro"
            ]
        },
        "dicaDeMestre": "A panificação com fermento natural é um processo de observação e intuição, não apenas de seguir tempos. Aprenda a 'ler' a sua massa: observe o seu crescimento, as bolhas, a sua textura. Cada dia é diferente.",
        "ingredients": [
            {
                "name": "Levain (fermento natural) ativo",
                "base_qty": 100,
                "unit": "g",
                "scalable": true,
                "heading": "Para a Massa"
            },
            {
                "name": "Farinha de Trigo de força",
                "base_qty": 450,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo Integral",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água",
                "base_qty": 375,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 10,
                "unit": "g",
                "scalable": true
            }
        ],
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo 1: O que é o Levain e Como o Alimentar",
                "subSteps": [
                    {
                        "title": "O que é?",
                        "description": "O Levain (ou Sourdough Starter) é uma cultura simbiótica de leveduras e bactérias lácticas que vivem numa mistura de farinha e água. Estas leveduras são 'selvagens' e estão presentes no ar e na própria farinha. Elas são responsáveis por fazer o pão crescer e por lhe dar o seu sabor característico, ligeiramente ácido.",
                        "porque": "Ao contrário do fermento comercial, o levain cria uma fermentação mais lenta e complexa, que pré-digere parcialmente o glúten e desenvolve uma profundidade de sabor inigualável.",
                        "pontoCritico": "Criar um levain do zero leva cerca de 7 a 10 dias de alimentação diária. Pode também obter uma 'isca' de um padeiro amigo."
                    },
                    {
                        "title": "Alimentar o Levain",
                        "description": "Para que o levain esteja 'ativo' e pronto a usar, ele precisa de ser alimentado. Descarte uma parte do seu levain 'mãe' e alimente o restante com partes iguais de farinha e água (ex: 50g de levain, 50g de farinha, 50g de água). Ele estará no seu pico de atividade quando duplicar ou triplicar de volume e estiver cheio de bolhas (normalmente 4 a 8 horas depois de alimentado).",
                        "porque": "Alimentar o levain dá 'comida' (farinha fresca) às leveduras, que se multiplicam e se tornam ativas. Usar o levain no seu pico garante a máxima força de fermentação para o seu pão.",
                        "pontoCritico": "O 'teste da gota' é uma boa indicação: uma pequena colher de levain ativo deve flutuar num copo de água."
                    }
                ]
            },
            {
                "title": "Autólise e Mistura",
                "description": "Numa tigela, misture as farinhas e a água. Deixe descansar por 1 hora (<span class='tooltip' data-tooltip='Período de descanso inicial de farinha e água que hidrata o glúten.'>autólise</span>). Adicione o levain ativo e o sal. Misture bem e comece a fazer séries de <span class='tooltip' data-tooltip='Técnica de esticar e dobrar a massa sobre si mesma para fortalecer o glúten.'>dobras</span> a cada 30 minutos, durante 2 a 3 horas.",
                "porque": "A fermentação natural beneficia de uma manipulação gentil. As dobras fortalecem o glúten sem sovar intensamente, preservando a estrutura de ar da massa.",
                "pontoCritico": "A massa será pegajosa e viva. Trabalhe com as mãos molhadas."
            },
            {
                "title": "Fermentação em Bloco e Modelagem",
                "description": "Deixe a massa fermentar à temperatura ambiente até aumentar cerca de 30-50% em volume (fermentação em bloco). Depois, pré-modele, deixe descansar e faça a modelagem final. Coloque a massa modelada num cesto de fermentação (banneton) bem enfarinhado.",
                "porque": "A fermentação em bloco é onde a maior parte do sabor se desenvolve. A modelagem cria a tensão necessária para um bom crescimento no forno.",
                "pontoCritico": "É fácil sobre-fermentar a massa. Aprenda a reconhecer os sinais visuais de uma fermentação correta (bolhas, aumento de volume) em vez de seguir apenas o relógio."
            },
            {
                "title": "Fermentação a Frio e Cozimento",
                "description": "Cubra o banneton e leve à geleira para uma longa fermentação a frio, de 12 a 24 horas. No dia seguinte, asse o pão diretamente da geleira, numa panela de ferro muito quente, a 240°C, com tampa por 20 minutos e sem tampa por mais 25 minutos.",
                "porque": "A fermentação a frio desenvolve ainda mais o sabor complexo e ácido do pão, e torna a massa mais fácil de cortar. Assar a frio ajuda a massa a manter a sua forma e a ter um 'oven spring' melhor.",
                "pontoCritico": "Este é o auge da panificação. Requer prática, paciência e observação. Não desanime se o seu primeiro pão não for perfeito. Cada pão é uma aula."
            }
        ],
        "variacoes": [
            "<strong>Este é o fim de uma jornada e o começo de outra. As variações são infinitas:</strong> use diferentes tipos de farinha (centeio, espelta), adicione sementes, frutos, queijos... O mundo da fermentação natural é o seu recreio."
        ],
        "module": "Pães Artesanais",
        "url": "paes.html#receita-sourdough"
    },
    "petiscos-e-entradas-bruschetta": {
        "title": "Aula 01: Bruschetta Clássica de Tomate e Manjericão",
        "description": "Aprenda a fazer a entrada italiana que é a celebração da simplicidade. O segredo de uma grande bruschetta não está numa técnica complexa, mas sim na altíssima qualidade de cada um dos seus poucos ingredientes.",
        "calculator": {
            "label": "Fatias de Pão:",
            "unit": "bruschetta-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "5 min",
            "tempoDescanso": "N/A",
            "rendimento": "4 bruschettas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Grelha ou frigideira",
                "Faca afiada",
                "Tigela"
            ]
        },
        "dicaDeMestre": "Depois de tostar o pão, e enquanto ainda está quente, esfregue um dente de alho cortado ao meio na sua superfície. O calor do pão irá libertar os óleos essenciais do alho, perfumando a torrada com um sabor subtil e delicioso que faz toda a diferença.",
        "ingredients": [
            {
                "name": "Pão de boa qualidade (tipo italiano ou rústico)",
                "base_qty": 4,
                "unit": "fatias grossas",
                "scalable": true
            },
            {
                "name": "Tomates maduros, mas firmes",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Dentes de Alho",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Folhas de Manjericão fresco",
                "base_qty": 8,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem de qualidade",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta Preta moída na hora",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar a Cobertura de Tomate",
                "description": "Corte os tomates em cubos pequenos e uniformes. Pique grosseiramente as folhas de manjericão. Numa tigela, misture o tomate, o manjericão e 2 colheres de sopa de azeite. Tempere com sal e pimenta. Deixe marinar enquanto prepara o pão.",
                "porque": "Deixar o tomate marinar permite que os sabores se fundam. O sal ajuda a extrair o suco do tomate, que se mistura com o azeite para criar um 'molho' natural.",
                "pontoCritico": "Use tomates de excelente qualidade, pois eles são a estrela do prato. Tempere apenas na hora de montar para o tomate não largar demasiada água."
            },
            {
                "title": "Tostar o Pão",
                "description": "Regue as fatias de pão com o restante azeite. Toste-as numa grelha, frigideira quente ou no forno até ficarem douradas e crocantes de ambos os lados.",
                "porque": "A base da bruschetta precisa de ser crocante para suportar a humidade da cobertura de tomate sem ficar mole. A tostagem também adiciona uma camada de sabor.",
                "pontoCritico": "Não queime o pão. Queremos uma textura crocante, não um sabor a queimado."
            },
            {
                "title": "A Magia do Alho",
                "description": "Assim que retirar o pão do calor, enquanto ainda está quente, pegue num dente de alho cortado ao meio e esfregue a parte cortada suavemente sobre a superfície de cada fatia.",
                "porque": "Este é o truque profissional. O calor do pão 'derrete' ligeiramente o alho, libertando os seus óleos e um perfume incrível que infunde toda a torrada sem ser demasiado forte.",
                "pontoCritico": "Faça isto com o pão ainda bem quente para que a técnica funcione."
            },
            {
                "title": "Montar e Servir",
                "description": "Divida a mistura de tomate sobre as fatias de pão tostado. Regue com um fio extra de azeite, se desejar, e sirva imediatamente.",
                "porque": "A bruschetta deve ser montada apenas no momento de servir para garantir o máximo de crocância do pão e a frescura da cobertura.",
                "pontoCritico": "Se montar com muita antecedência, o pão irá amolecer com o suco do tomate."
            }
        ],
        "variacoes": [
            "<strong>Com Queijo:</strong> Adicione queijo de cabra cremoso ou mozzarella fresca sobre o pão antes de colocar o tomate.",
            "<strong>Com Presunto Cru:</strong> Adicione uma fatia de presunto de Parma ou Serrano por cima do tomate.",
            "<strong>Com Cogumelos:</strong> Salteie cogumelos com alho e salsa e use como cobertura."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-bruschetta"
    },
    "petiscos-e-entradas-pao-de-alho": {
        "title": "Aula 02: Pão de Alho Cremoso para Churrasco",
        "description": "O acompanhamento indispensável em qualquer churrasco brasileiro. Aprenda a fazer uma pasta de alho rica e cremosa que penetra no pão, deixando-o húmido por dentro e com uma crosta dourada por fora.",
        "calculator": {
            "label": "Pães tipo baguete:",
            "unit": "pao-de-alho-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "15-20 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 pão grande",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tigela",
                "Faca de serra",
                "Grelha ou forno"
            ]
        },
        "dicaDeMestre": "O segredo para um pão de alho que não fica seco é a generosidade. Não tenha medo de usar bastante pasta de alho, garantindo que ela entra bem dentro dos cortes do pão.",
        "ingredients": [
            {
                "name": "Pão tipo baguete ou pão de cacete",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Dentes de Alho, picados ou espremidos",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true,
                "heading": "Para a Pasta de Alho"
            },
            {
                "name": "Manteiga sem sal, amolecida",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Maionese",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Queijo Parmesão ou Mozzarella, ralado",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Salsa ou coentros frescos, picados",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar a Pasta de Alho",
                "description": "Numa tigela, misture muito bem a manteiga amolecida, a maionese, o alho, o queijo ralado e a salsa picada. Tempere com sal e pimenta a gosto.",
                "porque": "A manteiga fornece a riqueza e ajuda a dourar, enquanto a maionese adiciona cremosidade e uma ligeira acidez, evitando que a pasta fique puramente gordurosa. O queijo adiciona sabor e ajuda a gratinar.",
                "pontoCritico": "A manteiga deve estar em ponto de pomada (bem mole), não derretida, para que a pasta fique cremosa e não oleosa."
            },
            {
                "title": "Cortar e Rechear o Pão",
                "description": "Com uma faca de serra, corte o pão em fatias grossas (cerca de 2cm), mas sem chegar até ao fundo. As fatias devem permanecer presas na base, como uma sanfona. Com uma faca de manteiga, espalhe generosamente a pasta de alho entre cada fatia.",
                "porque": "Cortar em formato de sanfona permite que o calor circule e que a pasta de alho penetre em toda a extensão do pão, cozinhando-o por dentro e por fora.",
                "pontoCritico": "Tenha cuidado para não cortar o pão até ao fim. Se acontecer, não há problema, mas o formato de sanfona é o ideal."
            },
            {
                "title": "Grelhar ou Assar",
                "description": "Opção 1 (Churrasqueira): Embrulhe o pão em papel de alumínio e leve à grelha em calor indireto por 10 minutos. Depois, retire o alumínio e deixe dourar. Opção 2 (Forno): Leve o pão ao forno pré-aquecido a 180°C por 15-20 minutos, ou até o queijo derreter e o pão estar dourado.",
                "porque": "Embrulhar em alumínio inicialmente cozinha o pão a vapor, derretendo a pasta e amaciando o miolo. Retirar o alumínio no final permite que a crosta fique crocante e dourada.",
                "pontoCritico": "Fique de olho, pois o queijo e a manteiga podem queimar rapidamente, especialmente na churrasqueira.",
                "timer": 900
            }
        ],
        "variacoes": [
            "<strong>Com Requeijão:</strong> Substitua a maionese por requeijão cremoso para uma versão ainda mais cremosa.",
            "<strong>Picante:</strong> Adicione uma pitada de pimenta calabresa à pasta de alho.",
            "<strong>Com Cebola:</strong> Misture um pouco de creme de cebola em pó na pasta para um sabor extra."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-pao-de-alho"
    },
    "petiscos-e-entradas-guacamole": {
        "title": "Aula 03: Guacamole Fresco e Autêntico",
        "description": "O dip mexicano que conquistou o mundo. Um guacamole autêntico é sobre a qualidade dos abacates e o equilíbrio perfeito entre o cremoso, o ácido, o picante e o fresco.",
        "calculator": {
            "label": "Número de Abacates:",
            "unit": "guacamole-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tigela",
                "Garfo",
                "Faca"
            ]
        },
        "dicaDeMestre": "Para evitar que o guacamole oxide (escureça) rapidamente, o truque é o ácido. O sumo de lima é essencial. Outra dica é colocar o caroço do abacate dentro da tigela de guacamole até à hora de servir.",
        "ingredients": [
            {
                "name": "Abacates maduros",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Cebola roxa pequena, picada finamente",
                "base_qty": 0.5,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Tomate, sem sementes e picado",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Coentros frescos, picados",
                "base_qty": 0.25,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Malagueta (jalapeño ou serrano), picada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Sumo de Lima",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar os Ingredientes",
                "description": "Pique finamente a cebola roxa, o tomate (sem as sementes para não aguar), os coentros e a malagueta. Esprema o sumo da lima.",
                "porque": "Ter todos os ingredientes prontos ('mise en place') é crucial para montar o guacamole rapidamente assim que o abacate for aberto, minimizando a oxidação.",
                "pontoCritico": "A quantidade de malagueta é a gosto. Comece com metade e adicione mais se desejar mais picante."
            },
            {
                "title": "Amassar o Abacate",
                "description": "Corte os abacates ao meio, retire o caroço e, com uma colher, retire a polpa para uma tigela. Com um garfo, amasse o abacate grosseiramente. Deixe alguns pedaços maiores.",
                "porque": "Um bom guacamole deve ter textura. Amassar com um garfo em vez de um processador preserva pedaços de abacate, tornando a experiência mais interessante.",
                "pontoCritico": "Use abacates que estejam maduros, mas não passados. Eles devem ceder a uma leve pressão."
            },
            {
                "title": "Misturar e Temperar",
                "description": "Adicione imediatamente o sumo de lima ao abacate amassado e misture. Junte a cebola, o tomate, os coentros e a malagueta. Tempere generosamente com sal e misture tudo delicadamente.",
                "porque": "O sumo de lima adicionado logo no início é a principal defesa contra a oxidação. O sal realça todos os sabores dos ingredientes frescos.",
                "pontoCritico": "Prove e ajuste o sal e o sumo de lima. O equilíbrio é a chave."
            }
        ],
        "variacoes": [
            "<strong>Cremoso:</strong> Adicione uma colher de sopa de iogurte grego ou sour cream.",
            "<strong>Com Frutas:</strong> Adicione manga ou romã em cubos para um toque doce e exótico.",
            "<strong>Com Alho:</strong> Um dente de alho pequeno e muito bem picado pode ser adicionado para mais sabor."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-guacamole"
    },
    "petiscos-e-entradas-coxinha": {
        "title": "Aula 04: Coxinha de Frango Cremosa",
        "description": "Domine a arte de fazer o salgadinho mais icónico do Brasil. Esta aula ensina o segredo de uma massa que cozinha no próprio caldo do frango, um recheio cremoso e a técnica para empanar e fritar para uma crocância perfeita.",
        "calculator": {
            "label": "Coxinhas:",
            "unit": "coxinha-input",
            "base_value": 20,
            "default_value": 20
        },
        "details": {
            "tempoPreparo": "1 hora",
            "tempoCozimento": "40 min",
            "tempoDescanso": "30 min",
            "rendimento": "Aprox. 20 coxinhas",
            "dificuldade": "Avançado",
            "utensilios": [
                "Panela de pressão",
                "Panela funda para fritar",
                "Escumadeira"
            ]
        },
        "dicaDeMestre": "O segredo do recheio cremoso é adicionar uma ou duas colheres de sopa de requeijão cremoso (tipo Catupiry) ao frango desfiado. Isso dá a humidade e o sabor característicos das melhores coxinhas.",
        "ingredients": [
            {
                "name": "Peito de Frango",
                "base_qty": 500,
                "unit": "g",
                "scalable": true,
                "heading": "Para o Recheio"
            },
            {
                "name": "Caldo de Galinha",
                "base_qty": 1,
                "unit": "cubo",
                "scalable": true
            },
            {
                "name": "Cebola picada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Alho picado",
                "base_qty": 2,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Requeijão cremoso",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo",
                "base_qty": 2,
                "unit": "chávenas",
                "scalable": true,
                "heading": "Para a Massa"
            },
            {
                "name": "Manteiga",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Leite",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true,
                "heading": "Para Empanar"
            },
            {
                "name": "Farinha de rosca (pão ralado)",
                "base_qty": 2,
                "unit": "chávenas",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Cozinhar e Desfiar o Frango",
                "description": "Na panela de pressão, cozinhe o peito de frango com água suficiente para cobrir, o caldo de galinha, cebola e alho por cerca de 20 minutos após pegar pressão. Guarde o caldo! Desfie o frango e misture com o requeijão.",
                "porque": "Usar o caldo do cozimento do frango para fazer a massa é o segredo para uma massa cheia de sabor. O requeijão garante um recheio húmido.",
                "pontoCritico": "Depois de cozido, feche a panela de pressão e chacoalhe vigorosamente. O frango irá desfiar-se sozinho. É um ótimo truque!"
            },
            {
                "title": "Fazer a Massa",
                "description": "Numa panela, coe cerca de 2 chávenas do caldo do frango, adicione a manteiga e leve ao lume. Quando ferver, adicione a farinha de trigo de uma só vez. Mexa vigorosamente com uma colher de pau até a massa soltar do fundo da panela.",
                "porque": "Cozinhar a farinha no caldo quente cria uma massa elástica e saborosa, que é a base da coxinha.",
                "pontoCritico": "A massa estará pronta quando formar uma bola lisa e coesa. É preciso mexer com força."
            },
            {
                "title": "Modelar as Coxinhas",
                "description": "Deixe a massa arrefecer um pouco. Pegue numa porção da massa, abra um disco na palma da mão, coloque uma porção do recheio de frango no centro e feche, modelando no formato característico de uma gota ou 'coxa' de frango.",
                "porque": "A modelagem correta garante que não há ar dentro da coxinha, o que poderia fazê-la rebentar durante a fritura.",
                "pontoCritico": "Certifique-se de que a massa está bem fechada à volta do recheio."
            },
            {
                "title": "Empanar e Fritar",
                "description": "Passe cada coxinha primeiro no leite e depois na farinha de rosca, cobrindo bem. Frite em óleo quente (180°C), poucas de cada vez, até ficarem bem douradas e crocantes.",
                "porque": "A dupla camada (leite e farinha de rosca) cria uma crosta mais espessa e crocante. Fritar poucas de cada vez mantém a temperatura do óleo estável, garantindo uma fritura perfeita e não gordurosa.",
                "pontoCritico": "Se o óleo estiver muito quente, a coxinha doura por fora e fica crua por dentro. Se estiver muito frio, ela encharca de óleo."
            }
        ],
        "variacoes": [
            "<strong>Com Jaca:</strong> Para uma versão vegetariana, use jaca verde desfiada no lugar do frango.",
            "<strong>Com Massa de Batata:</strong> Adicione uma batata cozida e amassada à massa para uma textura diferente."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-coxinha"
    },
    "petiscos-e-entradas-dadinhos-tapioca": {
        "title": "Aula 05: Dadinhos de Tapioca com Queijo Coalho",
        "description": "Crocantes por fora, macios e elásticos por dentro. Aprenda a fazer o petisco de bar que virou febre, perfeito para servir com geleia de pimenta.",
        "calculator": {
            "label": "Gramas de Tapioca Granulada:",
            "unit": "dadinhos-tapioca-input",
            "base_value": 250,
            "default_value": 250
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "10 min",
            "tempoDescanso": "2 horas",
            "rendimento": "Aprox. 30 dadinhos",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela",
                "Travessa retangular",
                "Faca"
            ]
        },
        "dicaDeMestre": "O leite precisa estar a ferver quando for vertido sobre a tapioca e o queijo. É este choque térmico que hidrata os grânulos de tapioca corretamente e derrete o queijo, formando uma massa coesa.",
        "ingredients": [
            {
                "name": "Tapioca Granulada (não é a goma)",
                "base_qty": 250,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Queijo Coalho, ralado grosso",
                "base_qty": 250,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Leite integral, a ferver",
                "base_qty": 500,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta Branca",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Misturar os Secos",
                "description": "Numa tigela grande, misture bem a tapioca granulada, o queijo coalho ralado e os temperos (sal e pimenta branca).",
                "porque": "Garantir que a tapioca e o queijo estão bem distribuídos antes de adicionar o líquido é essencial para uma massa homogénea.",
                "pontoCritico": "Use tapioca granulada, não a goma de fazer tapioca na frigideira. São produtos diferentes."
            },
            {
                "title": "Hidratar a Massa",
                "description": "Ferva o leite. Assim que ferver, despeje-o de uma só vez sobre a mistura de tapioca e queijo, mexendo vigorosamente com uma colher por 1 a 2 minutos, até obter uma massa espessa e homogénea.",
                "porque": "O leite a ferver hidrata os grânulos de tapioca e derrete o queijo, criando a liga da massa. É um processo rápido.",
                "pontoCritico": "Mexa rapidamente e sem parar para evitar a formação de grumos."
            },
            {
                "title": "Arrefecer e Cortar",
                "description": "Despeje a massa numa travessa forrada com película aderente, espalhando numa camada uniforme com cerca de 2cm de altura. Leve à geleira por pelo menos 2 horas, ou até estar completamente firme.",
                "porque": "A refrigeração solidifica a massa, permitindo que seja cortada em cubos perfeitos sem se desmanchar.",
                "pontoCritico": "A massa precisa de estar bem fria e firme antes do corte."
            },
            {
                "title": "Fritar os Dadinhos",
                "description": "Corte a massa em cubos ('dadinhos') de 2cm. Frite em óleo quente (180°C) por imersão, poucos de cada vez, até ficarem dourados e crocantes por todos os lados. Sirva imediatamente com geleia de pimenta.",
                "porque": "A fritura em alta temperatura cria a casca crocante e deixa o interior macio e elástico.",
                "pontoCritico": "Não sobrecarregue a panela. Pode também fazê-los na airfryer, pincelados com azeite, a 200°C."
            }
        ],
        "variacoes": [
            "<strong>Com Ervas:</strong> Adicione orégãos ou salsa picada à massa.",
            "<strong>Picante:</strong> Misture uma pitada de pimenta calabresa na massa.",
            "<strong>Diferentes Queijos:</strong> Experimente com queijo parmesão ou provolone para sabores diferentes."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-dadinhos-tapioca"
    },
    "petiscos-e-entradas-espetada-caprese": {
        "title": "Aula 06: Espetada Caprese",
        "description": "Uma entrada ou petisco sem cozimento que é a essência do verão italiano: fresco, aromático e incrivelmente simples. A qualidade dos ingredientes é o segredo.",
        "calculator": {
            "label": "Número de Espetadas:",
            "unit": "espetada-caprese-input",
            "base_value": 8,
            "default_value": 8
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "8 espetadas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Palitos de espetada",
                "Tigela"
            ]
        },
        "dicaDeMestre": "Para um toque extra de sabor, faça um molho pesto rápido e regue as espetadas com ele antes de servir, ou sirva-o à parte para mergulhar.",
        "ingredients": [
            {
                "name": "Tomate Cherry",
                "base_qty": 16,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Mozzarella de búfala (cereja)",
                "base_qty": 16,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Folhas de Manjericão fresco",
                "base_qty": 16,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Creme Balsâmico (redução)",
                "base_qty": 0,
                "unit": "Opcional",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Montar as Espetadas",
                "description": "Comece a montar os palitos, alternando um tomate cherry, uma folha de manjericão dobrada e uma bola de mozzarella. Repita a sequência até preencher o palito.",
                "porque": "A alternância de cores e sabores cria um apelo visual imediato e garante que cada dentada tenha o equilíbrio perfeito dos três componentes.",
                "pontoCritico": "Use queijo mozzarella de búfala em tamanho 'cereja' (cilliegine) para uma melhor apresentação e sabor. Se não encontrar, pode cortar um pedaço maior em cubos."
            },
            {
                "title": "Temperar e Servir",
                "description": "Disponha as espetadas num prato de servir. Regue generosamente com azeite extra virgem e tempere com sal e pimenta preta moída na hora. Se usar, finalize com um fio de creme balsâmico. Sirva imediatamente.",
                "porque": "Temperar no final preserva a frescura dos ingredientes. O azeite realça os sabores e o balsâmico adiciona uma nota agridoce.",
                "pontoCritico": "Não tempere com muita antecedência, pois o sal pode fazer o tomate e o queijo libertarem água."
            }
        ],
        "variacoes": [
            "<strong>Com Presunto:</strong> Adicione um pedaço de presunto de Parma enrolado à espetada.",
            "<strong>Com Pêssego:</strong> Em vez de tomate, use pedaços de pêssego fresco para uma versão de verão.",
            "<strong>Marinada:</strong> Deixe as bolas de mozzarella a marinar em azeite com alho e ervas por 30 minutos antes de montar."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-espetada-caprese"
    },
    "petiscos-e-entradas-kibe": {
        "title": "Aula 07: Kibe Frito Tradicional",
        "description": "Aprenda os segredos para fazer o kibe árabe perfeito: crocante por fora, húmido e bem temperado por dentro. Esta aula foca-se na hidratação correta do trigo e na proporção ideal de carne e temperos.",
        "calculator": {
            "label": "Gramas de Carne Moída:",
            "unit": "kibe-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "30 min",
            "tempoCozimento": "15 min",
            "tempoDescanso": "1 hora (trigo)",
            "rendimento": "Aprox. 25 kibes",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Tigela grande",
                "Panela para fritar"
            ]
        },
        "dicaDeMestre": "Para um kibe mais saboroso, use uma mistura de carne moída e um pouco de carne de cordeiro. A gordura do cordeiro adiciona uma riqueza e um sabor autêntico inigualáveis.",
        "ingredients": [
            {
                "name": "Trigo para Kibe",
                "base_qty": 250,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Carne Moída (magra)",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Cebola picada muito finamente",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Hortelã fresca, picada",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Sal, Pimenta Síria (ou do reino)",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Hidratar o Trigo",
                "description": "Coloque o trigo para kibe numa tigela e cubra com água a ferver, deixando passar cerca de 2 dedos. Deixe hidratar por cerca de 1 hora. Depois, escorra-o num pano fino e esprema muito bem para remover todo o excesso de água.",
                "porque": "A hidratação amacia o trigo, tornando-o comestível. Remover o excesso de água é o passo mais crucial para que o kibe não se desfaça ao fritar e para que a massa fique com a liga correta.",
                "pontoCritico": "Esprema o trigo com força. Ele deve ficar húmido, mas não encharcado."
            },
            {
                "title": "A Massa do Kibe",
                "description": "Numa tigela grande, junte o trigo hidratado, a carne moída, a cebola, a hortelã e os temperos. Com as mãos, amasse muito bem a mistura por vários minutos, como se estivesse a sovar pão.",
                "porque": "Amassar bem a mistura desenvolve as proteínas da carne, o que cria a 'liga' necessária para que o kibe mantenha a sua forma e não se desmanche. É o que o torna coeso.",
                "pontoCritico": "A mistura está pronta quando estiver homogénea e pegajosa."
            },
            {
                "title": "Modelar e Fritar",
                "description": "Com as mãos ligeiramente húmidas, pegue em porções da massa e modele no formato característico de zepelim (ou de bola). Frite em óleo quente (180°C), poucos de cada vez, até ficarem bem escuros e crocantes por fora.",
                "porque": "O formato de zepelim é tradicional e ajuda a cozinhar o interior de forma uniforme. Fritar em lotes mantém a temperatura do óleo, garantindo uma crosta perfeita.",
                "pontoCritico": "Não cozinhe demais, ou o interior ficará seco. Cerca de 3-4 minutos por lote é suficiente."
            }
        ],
        "variacoes": [
            "<strong>Kibe de Bandeja (Assado):</strong> Espalhe metade da massa numa travessa, coloque um recheio (ex: carne refogada com nozes), cubra com o resto da massa, regue com azeite e asse.",
            "<strong>Kibe Cru:</strong> Use carne de alta qualidade e muito fresca, e sirva a massa crua com hortelã fresca, cebola e azeite.",
            "<strong>Vegetariano:</strong> Substitua a carne por abóbora cozida e amassada ou lentilhas."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-kibe"
    },
    "petiscos-e-entradas-batatas-bravas": {
        "title": "Aula 08: Batatas Bravas com Aioli",
        "description": "A tapa mais famosa de Espanha. O segredo está na dupla fritura das batatas para máxima crocância e em dois molhos clássicos: um picante de tomate (salsa brava) e um aioli cremoso de alho.",
        "calculator": {
            "label": "Quilos de Batata:",
            "unit": "batatas-bravas-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Panela para fritar",
                "Liquidificador ou varinha mágica"
            ]
        },
        "dicaDeMestre": "A dupla fritura é a chave para batatas perfeitamente crocantes. A primeira fritura a uma temperatura mais baixa cozinha o interior. A segunda, a uma temperatura mais alta, cria a crosta dourada e estaladiça.",
        "ingredients": [
            {
                "name": "Batatas",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Óleo para fritar",
                "base_qty": 1,
                "unit": "L",
                "scalable": false
            },
            {
                "name": "Tomate triturado",
                "base_qty": 200,
                "unit": "g",
                "scalable": true,
                "heading": "Para o Molho Bravo"
            },
            {
                "name": "Páprica Picante",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Vinagre",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Alho",
                "base_qty": 1,
                "unit": "dente",
                "scalable": true,
                "heading": "Para o Aioli"
            },
            {
                "name": "Gema de Ovo",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Óleo de Girassol",
                "base_qty": 150,
                "unit": "ml",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Dupla Fritura das Batatas",
                "description": "Descasque as batatas e corte-as em cubos irregulares de 2-3 cm. Frite-as uma primeira vez em óleo a 140°C por cerca de 8-10 minutos. Elas devem ficar cozidas mas pálidas. Retire e escorra. Aumente a temperatura do óleo para 180°C e frite uma segunda vez até ficarem bem douradas e crocantes.",
                "porque": "A primeira fritura cozinha o interior lentamente. A segunda fritura em alta temperatura desidrata rapidamente a superfície, criando uma crosta estaladiça sem queimar o interior.",
                "pontoCritico": "Seque bem as batatas antes da primeira fritura para evitar salpicos de óleo."
            },
            {
                "isSubRecipe": true,
                "title": "Módulo: Os Molhos Clássicos",
                "subSteps": [
                    {
                        "title": "Molho Bravo",
                        "description": "Numa panela pequena, refogue um pouco de alho em azeite, adicione a páprica picante e cozinhe por 30 segundos. Junte o tomate triturado e o vinagre. Cozinhe por 10 minutos até apurar.",
                        "porque": "Cozinhar a páprica brevemente no azeite liberta todo o seu sabor fumado e picante. O vinagre adiciona a acidez característica.",
                        "pontoCritico": "Cuidado para não queimar a páprica."
                    },
                    {
                        "title": "Aioli (Maionese de Alho)",
                        "description": "Numa tigela, amasse o alho até formar uma pasta. Junte a gema de ovo. Batendo vigorosamente com um batedor de arame, adicione o óleo em fio, muito lentamente, até formar uma maionese espessa.",
                        "porque": "Esta é a técnica clássica de emulsão. O alho e a gema atuam como agentes emulsionantes para unir o óleo.",
                        "pontoCritico": "O óleo deve ser adicionado gota a gota no início para que a emulsão não talhe."
                    }
                ]
            },
            {
                "title": "Servir",
                "description": "Disponha as batatas quentes e crocantes num prato. Regue generosamente primeiro com o molho bravo e depois com o aioli. Sirva imediatamente.",
                "porque": "A combinação do molho picante com o aioli cremoso sobre as batatas quentes é a essência deste prato.",
                "pontoCritico": "Os molhos podem ser feitos com antecedência, mas as batatas devem ser fritas na hora."
            }
        ],
        "variacoes": [
            "<strong>Mais Simples:</strong> Use uma maionese de boa qualidade e misture com alho espremido para um aioli rápido.",
            "<strong>Outros Formatos:</strong> Pode usar batatas pequenas inteiras ou em gomos."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-batatas-bravas"
    },
    "petiscos-e-entradas-bolinho-bacalhau": {
        "title": "Aula 09: Bolinho de Bacalhau Português",
        "description": "Aprenda a fazer o verdadeiro bolinho de bacalhau, como em Portugal. O segredo para um bolinho que não se desfaz, fica crocante por fora e cremoso por dentro, está na proporção certa de bacalhau e batata.",
        "calculator": {
            "label": "Gramas de Bacalhau (peso seco):",
            "unit": "bolinho-bacalhau-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "40 min",
            "tempoCozimento": "30 min",
            "tempoDescanso": "24h (demolhar) + 1h (massa)",
            "rendimento": "Aprox. 30 bolinhos",
            "dificuldade": "Avançado",
            "utensilios": [
                "Panela funda para fritar",
                "Espremedor de batata"
            ]
        },
        "dicaDeMestre": "O bacalhau e a batata devem estar o mais secos possível. Depois de cozer o bacalhau, desfie-o e aperte-o num pano para remover toda a água. Depois de escorrer as batatas, leve-as de volta à panela quente por um minuto para secar.",
        "ingredients": [
            {
                "name": "Bacalhau seco e salgado",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Batatas",
                "base_qty": 750,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Ovos",
                "base_qty": 3,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Cebola picada muito finamente",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Salsa fresca picada",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Demolhar o Bacalhau",
                "description": "Este é o passo mais longo. Lave o bacalhau em água corrente para remover o excesso de sal. Coloque-o numa tigela grande com água fria e leve à geleira por 24 a 48 horas, trocando a água 3 a 4 vezes por dia.",
                "porque": "A dessalga (<span class='tooltip' data-tooltip='Processo de remover o sal do bacalhau seco através de banhos sucessivos em água fria.'>demolhar</span>) é essencial para reidratar o peixe e torná-lo comestível. Sem este passo, ele será insuportavelmente salgado.",
                "pontoCritico": "O tempo de demolhar depende da espessura das postas. Prove um pequeno pedaço para verificar o ponto de sal."
            },
            {
                "title": "Preparar a Massa",
                "description": "Cozinhe o bacalhau demolhado em água por 10 minutos. Escorra, remova pele e espinhas, e desfie finamente. Cozinhe as batatas em água até ficarem muito macias e passe-as por um espremedor. Numa tigela, misture o puré de batata, o bacalhau desfiado, a cebola e a salsa. Adicione os ovos, um a um, misturando bem. Tempere.",
                "porque": "A batata dá a base e a liga para os bolinhos. A proporção de mais batata que bacalhau é tradicional para garantir uma boa textura.",
                "pontoCritico": "A massa deve estar coesa mas não demasiado mole. Se estiver muito húmida, os bolinhos podem abrir ao fritar."
            },
            {
                "title": "Moldar e Fritar",
                "description": "Com a ajuda de duas colheres de sopa, molde os bolinhos no formato oval característico (quenelle). Frite em óleo quente (170°C), poucos de cada vez, até dourarem por igual. Escorra em papel absorvente.",
                "porque": "A moldagem com duas colheres é a técnica tradicional portuguesa. Fritar em óleo não demasiado quente permite que o interior cozinhe antes de o exterior queimar.",
                "pontoCritico": "Se não se sentir confortável com a técnica das colheres, pode moldá-los à mão."
            }
        ],
        "variacoes": [
            "<strong>Com Pimenta:</strong> Adicione uma pitada de pimenta branca ou noz-moscada à massa.",
            "<strong>Com Alho:</strong> Refogue a cebola com um dente de alho picado antes de a adicionar à massa.",
            "<strong>Assados:</strong> Para uma versão mais leve, asse os bolinhos num forno pré-aquecido a 200°C até dourarem."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-bolinho-bacalhau"
    },
    "petiscos-e-entradas-camarao-alho": {
        "title": "Aula 10: Camarão ao Alho e Óleo",
        "description": "Um clássico mediterrânico que é rápido, simples e absolutamente delicioso. O segredo é usar camarões de boa qualidade e não os cozinhar em excesso para que fiquem suculentos e tenros.",
        "calculator": {
            "label": "Gramas de Camarão:",
            "unit": "camarao-alho-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "5-7 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 2-3 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira larga"
            ]
        },
        "dicaDeMestre": "Para um molho mais rico, depois de retirar os camarões, <span class='tooltip' data-tooltip='Adicionar um líquido (vinho, conhaque, caldo) a uma panela quente para soltar os pedaços de comida caramelizados (fond) do fundo.'>deglaceie</span> a frigideira com um pouco de vinho branco ou sumo de limão, raspando o fundo. Adicione uma noz de manteiga e salsa picada, e regue sobre os camarões.",
        "ingredients": [
            {
                "name": "Camarão grande, limpo",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Alho, fatiado finamente",
                "base_qty": 4,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Malagueta seca ou flocos de pimenta",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Salsa fresca picada",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar o Camarão",
                "description": "Seque bem os camarões com papel toalha. Tempere com sal e pimenta.",
                "porque": "Camarões secos irão dourar melhor na frigideira em vez de cozerem no seu próprio vapor.",
                "pontoCritico": "Se usar camarão congelado, descongele-o completamente e seque-o muito bem antes de usar."
            },
            {
                "title": "Saltear o Alho",
                "description": "Numa frigideira larga, aqueça o azeite em lume médio. Adicione o alho fatiado e a malagueta. Cozinhe por 1 a 2 minutos, mexendo, até o alho começar a dourar e a perfumar o azeite.",
                "porque": "Infundir o azeite com o sabor do alho e da pimenta cria a base de sabor do prato.",
                "pontoCritico": "Não deixe o alho queimar, ou ficará amargo. Retire-o da frigideira se necessário."
            },
            {
                "title": "Cozinhar os Camarões",
                "description": "Aumente o lume para médio-alto. Adicione os camarões à frigideira numa única camada. Cozinhe por 1 a 2 minutos de cada lado, apenas até ficarem rosados e opacos.",
                "porque": "Os camarões cozinham muito rapidamente. O calor alto garante que eles dorem por fora sem que o interior fique borrachudo.",
                "pontoCritico": "O camarão está pronto quando forma uma letra 'C'. Se formar um 'O', está demasiado cozido.",
                "timer": 120
            }
        ],
        "variacoes": [
            "<strong>Com Limão:</strong> Esprema sumo de limão fresco sobre os camarões no final.",
            "<strong>Com Tomate Cherry:</strong> Adicione alguns tomates cherry cortados ao meio junto com os camarões.",
            "<strong>Para Massa:</strong> Use esta base para fazer um esparguete 'al ajillo'."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-camarao-alho"
    },
    "petiscos-e-entradas-cogumelos-recheados": {
        "title": "Aula 11: Cogumelos Recheados com Queijo e Ervas",
        "description": "Uma entrada vegetariana elegante e cheia de sabor. Os cogumelos Portobello servem como base perfeita para um recheio cremoso de queijos, ervas e pão ralado.",
        "calculator": {
            "label": "Cogumelos Portobello:",
            "unit": "cogumelos-recheados-input",
            "base_value": 8,
            "default_value": 8
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "N/A",
            "rendimento": "8 cogumelos",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tabuleiro de forno",
                "Tigela"
            ]
        },
        "dicaDeMestre": "Não lave os cogumelos em água, pois eles agem como esponjas e absorvem humidade, o que os torna moles. Limpe-os com um pano húmido ou uma escova macia.",
        "ingredients": [
            {
                "name": "Cogumelos Portobello grandes",
                "base_qty": 8,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Queijo creme (cream cheese)",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Queijo Parmesão ralado",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Pão ralado (farinha de rosca)",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Alho picado",
                "base_qty": 2,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Salsa fresca picada",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar os Cogumelos",
                "description": "Limpe os cogumelos e remova cuidadosamente os talos. Pique os talos em pedaços muito pequenos. Pincele os 'chapéus' dos cogumelos com azeite e coloque-os num tabuleiro de forno.",
                "porque": "Usar os talos picados no recheio evita o desperdício e adiciona mais sabor e textura de cogumelo.",
                "pontoCritico": "Seja gentil ao remover os talos para não quebrar os chapéus dos cogumelos."
            },
            {
                "title": "Fazer o Recheio",
                "description": "Numa tigela, misture o queijo creme, o queijo parmesão, o pão ralado, o alho, a salsa e os talos de cogumelo picados. Tempere com sal e pimenta. A mistura deve ficar espessa e cremosa.",
                "porque": "A combinação de queijo creme e parmesão oferece cremosidade e um sabor salgado, enquanto o pão ralado dá estrutura ao recheio.",
                "pontoCritico": "Se o recheio parecer muito seco, adicione uma colher de sopa de azeite."
            },
            {
                "title": "Rechear e Assar",
                "description": "Divida o recheio uniformemente entre os chapéus dos cogumelos, formando um pequeno monte. Leve ao forno pré-aquecido a 200°C por 20-25 minutos, ou até os cogumelos estarem macios e o topo dourado e borbulhante.",
                "porque": "O calor do forno cozinha os cogumelos, tornando-os tenros, e derrete o recheio, criando uma cobertura gratinada e deliciosa.",
                "pontoCritico": "Não recheie em excesso para que não transborde durante o cozimento.",
                "timer": 1200
            }
        ],
        "variacoes": [
            "<strong>Com Bacon:</strong> Adicione bacon frito e picado ao recheio.",
            "<strong>Com Espinafres:</strong> Salteie espinafres com alho e misture no recheio.",
            "<strong>Vegano:</strong> Use queijo creme vegano, levedura nutricional no lugar do parmesão e um recheio de nozes picadas e ervas."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-cogumelos-recheados"
    },
    "petiscos-e-entradas-empanadas": {
        "title": "Aula 12: Empanadas Argentinas de Carne",
        "description": "Aprenda a fazer as famosas empanadas argentinas, com uma massa amanteigada e um recheio de carne suculento e cheio de sabor. Esta aula cobre tanto a massa caseira como o recheio tradicional.",
        "calculator": {
            "label": "Empanadas:",
            "unit": "empanadas-input",
            "base_value": 12,
            "default_value": 12
        },
        "details": {
            "tempoPreparo": "1 hora",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "1 hora (massa)",
            "rendimento": "12 empanadas",
            "dificuldade": "Avançado",
            "utensilios": [
                "Rolo da massa",
                "Tabuleiro de forno"
            ]
        },
        "dicaDeMestre": "O segredo de um recheio suculento é usar carne cortada à faca em vez de carne moída, e adicionar batata cozida em cubos pequenos e ovo cozido picado. Deixe o recheio arrefecer completamente na geleira antes de usar.",
        "ingredients": [
            {
                "name": "Farinha de Trigo",
                "base_qty": 500,
                "unit": "g",
                "scalable": true,
                "heading": "Para a Massa"
            },
            {
                "name": "Manteiga ou Banha, fria",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água morna",
                "base_qty": 200,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Carne (ex: acém), cortada em cubos pequenos",
                "base_qty": 400,
                "unit": "g",
                "scalable": true,
                "heading": "Para o Recheio"
            },
            {
                "name": "Cebola picada",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Páprica Doce, Cominhos, Orégãos",
                "base_qty": 1,
                "unit": "c. de chá de cada",
                "scalable": true
            },
            {
                "name": "Ovo cozido, picado",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar a Massa",
                "description": "Numa tigela, misture a farinha e o sal. Adicione a manteiga fria em cubos e, com as pontas dos dedos, incorpore-a até obter uma textura de areia grossa. Adicione a água morna aos poucos, amassando até formar uma bola. Embrulhe e leve à geleira por 1 hora.",
                "porque": "A manteiga fria cria pequenas bolsas na massa que, ao derreterem no forno, geram vapor e tornam a massa folhada e estaladiça.",
                "pontoCritico": "Não trabalhe a massa em excesso para não desenvolver o glúten, o que a tornaria dura."
            },
            {
                "title": "Fazer o Recheio",
                "description": "Refogue a cebola em azeite até ficar macia. Adicione a carne e cozinhe até dourar. Junte os temperos (páprica, cominhos, orégãos), sal e pimenta. Deixe arrefecer completamente e só depois misture o ovo cozido picado.",
                "porque": "Arrefecer o recheio antes de montar as empanadas é crucial. Um recheio quente derreteria a manteiga da massa, resultando numa empanada mole e difícil de fechar.",
                "pontoCritico": "A carne cortada à faca oferece uma textura muito superior à carne moída."
            },
            {
                "title": "Montar e Fechar as Empanadas",
                "description": "Estique a massa e corte discos de cerca de 12-14 cm. Coloque uma colher de recheio no centro de cada disco. Humedeça as bordas com água, dobre ao meio e feche, pressionando bem. Faça o 'repulgue' (a dobra decorativa tradicional) ou use um garfo para selar.",
                "porque": "O 'repulgue' não é apenas decorativo; ele cria uma selagem forte que impede o recheio de vazar durante o cozimento.",
                "pontoCritico": "Não coloque recheio em excesso para conseguir fechar a empanada corretamente."
            },
            {
                "title": "Assar",
                "description": "Pincele as empanadas com gema de ovo e coloque-as num tabuleiro. Leve ao forno pré-aquecido a 200°C por cerca de 20-25 minutos, ou até estarem bem douradas.",
                "porque": "A gema de ovo dá um acabamento brilhante e uma cor dourada apetitosa.",
                "pontoCritico": "Fique atento para não as queimar; o tempo pode variar de forno para forno."
            }
        ],
        "variacoes": [
            "<strong>De Frango:</strong> Use frango desfiado no recheio.",
            "<strong>Humita:</strong> Um recheio cremoso de milho, típico do norte da Argentina.",
            "<strong>Fritas:</strong> Em vez de assadas, as empanadas podem ser fritas em óleo quente."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-empanadas"
    },
    "petiscos-e-entradas-tabua-frios": {
        "title": "Aula 13: A Arte de Montar uma Tábua de Frios",
        "description": "Uma tábua de frios não é uma receita, é uma aula de composição, equilíbrio e abundância. Aprenda a escolher os elementos certos e a dispô-los de uma forma visualmente deslumbrante.",
        "calculator": {
            "label": "Pessoas a servir:",
            "unit": "tabua-frios-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "30 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tábua de madeira ou ardósia",
                "Facas de queijo",
                "Pequenas tigelas"
            ]
        },
        "dicaDeMestre": "Pense em texturas e sabores contrastantes. Se tem um queijo mole e cremoso, coloque ao lado umas tostas crocantes. Se tem um salame picante, adicione umas uvas doces para equilibrar.",
        "ingredients": [
            {
                "name": "Queijos (variedade)",
                "base_qty": 3,
                "unit": "tipos",
                "scalable": true,
                "heading": "Elementos Chave"
            },
            {
                "name": "Enchidos/Carnes Curadas",
                "base_qty": 2,
                "unit": "tipos",
                "scalable": true
            },
            {
                "name": "Pães e Tostas",
                "base_qty": 2,
                "unit": "tipos",
                "scalable": true
            },
            {
                "name": "Frutas Frescas e Secas",
                "base_qty": 2,
                "unit": "tipos",
                "scalable": true
            },
            {
                "name": "Frutos Secos e Azeitonas",
                "base_qty": 1,
                "unit": "tipo de cada",
                "scalable": true
            },
            {
                "name": "Patês, Compotas ou Mel",
                "base_qty": 1,
                "unit": "tipo",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Escolha dos Queijos",
                "description": "Escolha uma variedade de 3 a 5 queijos com diferentes texturas e intensidades. Pense em: 1 Queijo Mole (Brie, Camembert), 1 Queijo Duro ou Semi-duro (Manchego, Gruyère, Cheddar maturado) e 1 Queijo Azul ou de Cabra (Gorgonzola, Roquefort, Chèvre).",
                "porque": "A variedade garante que há algo para todos os gostos e torna a experiência de degustação mais interessante.",
                "pontoCritico": "Retire os queijos da geleira 30 minutos antes de servir para que os seus sabores e aromas se desenvolvam."
            },
            {
                "title": "A Escolha das Carnes e dos Hidratos",
                "description": "Escolha 2 a 3 tipos de carnes curadas. Salame, presunto de Parma, chouriço ou lombo embuchado são ótimas opções. Para acompanhar, inclua uma variedade de pães, como fatias de baguete, e tostas ou gressinos para textura crocante.",
                "porque": "As carnes adicionam um elemento salgado e rico. Os pães e tostas servem como veículo para os queijos e patês.",
                "pontoCritico": "Disponha as carnes de formas diferentes: dobradas, enroladas ou em leque para criar interesse visual."
            },
            {
                "title": "Adicionar Cor e Doçura",
                "description": "Use frutas para adicionar cor e um contraponto doce. Uvas, figos, fatias de pera ou maçã são excelentes. Frutos secos como damascos ou tâmaras também funcionam bem. Coloque uma pequena tigela com compota de fruta ou mel.",
                "porque": "A doçura das frutas e compotas corta a gordura dos queijos e carnes, limpando o paladar.",
                "pontoCritico": "Use frutas da época para o melhor sabor."
            },
            {
                "title": "Preencher os Espaços",
                "description": "Use os elementos mais pequenos para preencher todos os espaços vazios na tábua. Coloque pequenos montes de frutos secos (nozes, amêndoas), azeitonas e raminhos de ervas frescas como alecrim ou tomilho para decorar.",
                "porque": "Uma tábua de frios deve parecer abundante e generosa. Não deixe espaços vazios. O objetivo é criar um 'banquete' visual.",
                "pontoCritico": "Comece por colocar os itens maiores (queijos, tigelas) e depois vá preenchendo o espaço à volta deles."
            }
        ],
        "variacoes": [
            "<strong>Tábua Mediterrânica:</strong> Foque-se em queijo feta, azeitonas Kalamata, húmus, pepino e pão pita.",
            "<strong>Tábua Italiana:</strong> Use Provolone, Gorgonzola, presunto de Parma, salame, azeitonas e pão focaccia.",
            "<strong>Tábua de Sobremesa:</strong> Use queijos mais suaves, chocolate, frutas vermelhas, mel e biscoitos doces."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-tabua-frios"
    },
    "petiscos-e-entradas-rolinho-primavera": {
        "title": "Aula 14: Rolinho Primavera (Spring Roll) Caseiro",
        "description": "Aprenda a fazer o clássico rolinho primavera, com uma casquinha ultra crocante e um recheio fresco de vegetais. O segredo está na massa e na técnica de enrolar.",
        "calculator": {
            "label": "Rolinhos:",
            "unit": "rolinho-primavera-input",
            "base_value": 10,
            "default_value": 10
        },
        "details": {
            "tempoPreparo": "30 min",
            "tempoCozimento": "15 min",
            "tempoDescanso": "N/A",
            "rendimento": "10 rolinhos",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Wok ou frigideira grande",
                "Panela para fritar"
            ]
        },
        "dicaDeMestre": "Para garantir que os rolinhos fiquem crocantes e não moles, o recheio deve estar completamente frio e o mais seco possível antes de enrolar. Deixe-o escorrer num passador se necessário.",
        "ingredients": [
            {
                "name": "Massa para rolinho primavera (spring roll pastry)",
                "base_qty": 10,
                "unit": "folhas",
                "scalable": true
            },
            {
                "name": "Repolho fatiado finamente",
                "base_qty": 2,
                "unit": "chávenas",
                "scalable": true,
                "heading": "Para o Recheio"
            },
            {
                "name": "Cenoura ralada",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Rebentos de feijão (moyashi)",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Molho de Soja (Shoyu)",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Óleo de Sésamo",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar o Recheio",
                "description": "Aqueça um wok ou frigideira grande com um fio de óleo. Salteie o repolho e a cenoura por 2-3 minutos até começarem a amolecer, mas ainda crocantes. Adicione os rebentos de feijão e salteie por mais 1 minuto. Tempere com o molho de soja e o óleo de sésamo. Retire do lume e deixe arrefecer completamente.",
                "porque": "Os vegetais devem ser cozinhados rapidamente em lume alto para manterem a sua crocância. O recheio deve estar frio para não rasgar a massa delicada.",
                "pontoCritico": "Não cozinhe os vegetais em excesso. Eles devem ficar 'al dente'."
            },
            {
                "title": "Enrolar os Rolinhos",
                "description": "Coloque uma folha de massa na sua frente, com uma das pontas virada para si (formando um losango). Coloque 2-3 colheres de sopa do recheio na parte inferior. Dobre a ponta de baixo sobre o recheio. Dobre as pontas laterais para dentro, como um envelope. Enrole firmemente até ao fim. Use um pouco de água para selar a ponta final.",
                "porque": "Enrolar firmemente é crucial para que o rolinho não se desfaça na fritura e para que o óleo não entre.",
                "pontoCritico": "Mantenha as folhas de massa que não está a usar cobertas com um pano húmido para não secarem."
            },
            {
                "title": "Fritar",
                "description": "Aqueça óleo numa panela a 180°C. Frite os rolinhos, poucos de cada vez, por cerca de 3-4 minutos, virando-os, até ficarem dourados e estaladiços. Escorra em papel absorvente e sirva com molho agridoce.",
                "porque": "A fritura em óleo quente garante que a massa fique crocante e não gordurosa.",
                "pontoCritico": "Certifique-se de que os rolinhos estão bem selados antes de os colocar no óleo."
            }
        ],
        "variacoes": [
            "<strong>Com Carne:</strong> Adicione carne de porco moída ou camarão picado ao recheio.",
            "<strong>Com Cogumelos:</strong> Adicione cogumelos shiitake fatiados ao salteado de vegetais.",
            "<strong>Na Airfryer:</strong> Pincele os rolinhos com óleo e asse a 200°C por 15-20 minutos, virando a meio."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-rolinho-primavera"
    },
    "petiscos-e-entradas-vol-au-vent": {
        "title": "Aula 15: Mini Vol-au-Vent de Camarão",
        "description": "Uma entrada clássica da culinária francesa, que significa 'voo ao vento' pela sua leveza. Aprenda a trabalhar com massa folhada para criar estas caixinhas crocantes e a fazer um recheio cremoso de camarão.",
        "calculator": {
            "label": "Vol-au-vents:",
            "unit": "vol-au-vent-input",
            "base_value": 8,
            "default_value": 8
        },
        "details": {
            "tempoPreparo": "25 min",
            "tempoCozimento": "25-30 min",
            "tempoDescanso": "N/A",
            "rendimento": "8 mini vol-au-vents",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Massa folhada de compra",
                "Cortadores redondos (2 tamanhos)"
            ]
        },
        "dicaDeMestre": "Para que a massa folhada cresça bem e fique com as camadas visíveis, é crucial que esteja bem fria quando entrar no forno muito quente. Mantenha a massa na geleira até ao momento de usar.",
        "ingredients": [
            {
                "name": "Massa Folhada retangular",
                "base_qty": 1,
                "unit": "rolo",
                "scalable": true
            },
            {
                "name": "Gema de Ovo (para pincelar)",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Camarão pequeno, limpo",
                "base_qty": 200,
                "unit": "g",
                "scalable": true,
                "heading": "Para o Recheio Cremoso"
            },
            {
                "name": "Natas (creme de leite)",
                "base_qty": 100,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Cebola picada",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Vinho Branco",
                "base_qty": 50,
                "unit": "ml",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Criar as Caixinhas de Massa Folhada",
                "description": "Estique a massa folhada. Com um cortador redondo grande (aprox. 7cm), corte 16 discos. Em 8 desses discos, use um cortador redondo mais pequeno (aprox. 4cm) para cortar e remover o centro, criando 8 anéis. Pincele os 8 discos inteiros (as bases) com gema de ovo e coloque um anel por cima de cada um. Pincele os anéis. Pique o centro das bases com um garfo.",
                "porque": "Esta técnica cria uma base e uma 'parede'. O anel irá crescer no forno, formando a caixinha. Picar a base evita que ela infle tanto quanto as paredes.",
                "pontoCritico": "Trabalhe rapidamente para manter a massa o mais fria possível."
            },
            {
                "title": "Assar a Massa",
                "description": "Leve as caixinhas ao forno pré-aquecido a 200°C por 15-20 minutos, ou até estarem bem tufadas e douradas. Se o centro tiver tufado, pressione-o para baixo com uma colher.",
                "porque": "O choque térmico do forno quente na massa fria é o que faz as camadas de manteiga e massa separarem-se, criando o efeito folhado.",
                "pontoCritico": "Não abra a porta do forno nos primeiros 10 minutos para não interromper o crescimento."
            },
            {
                "title": "Fazer o Recheio Cremoso",
                "description": "Enquanto a massa assa, refogue a cebola em manteiga. Adicione os camarões e cozinhe até ficarem rosados. Adicione o vinho branco e deixe evaporar. Junte as natas e cozinhe até o molho engrossar ligeiramente. Tempere com sal, pimenta e salsa picada.",
                "porque": "O recheio deve ser cremoso e saboroso, mas não demasiado líquido para não amolecer a massa folhada.",
                "pontoCritico": "Não cozinhe demais os camarões para não ficarem borrachudos."
            },
            {
                "title": "Rechear e Servir",
                "description": "Assim que os vol-au-vents saírem do forno, recheie cada caixinha com o creme de camarão quente. Sirva imediatamente.",
                "porque": "Este prato deve ser servido quente para apreciar o contraste entre a massa crocante e o recheio cremoso.",
                "pontoCritico": "Recheie apenas na hora de servir para que a massa não perca a sua textura estaladiça."
            }
        ],
        "variacoes": [
            "<strong>Com Frango:</strong> Use frango desfiado e cogumelos para um recheio clássico.",
            "<strong>Com Espinafres e Ricota:</strong> Para uma opção vegetariana, use um recheio cremoso de espinafres e queijo ricota.",
            "<strong>Doce:</strong> Asse as caixinhas sem recheio, polvilhadas com açúcar, e depois recheie com chantilly e frutas frescas."
        ],
        "module": "Petiscos e Entradas",
        "url": "petiscos.html#receita-vol-au-vent"
    },
    "receitas-fitness-overnight-oats": {
        "title": "Aula 01: Overnight Oats (Aveia Adormecida)",
        "description": "Aprenda a fazer o pequeno-almoço mais prático e personalizável do mundo fitness. Prepare à noite, em 5 minutos, e acorde com uma refeição cremosa, nutritiva e deliciosa à sua espera.",
        "calculator": {
            "label": "Porções:",
            "unit": "overnight-oats-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "6-8 horas (na geleira)",
            "rendimento": "1 porção",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frasco de vidro com tampa",
                "Colher"
            ]
        },
        "dicaDeMestre": "Para uma cremosidade extra e mais proteína, use iogurte grego natural. A combinação de iogurte e chia cria uma textura semelhante a um pudim que é absolutamente irresistível.",
        "ingredients": [
            {
                "name": "Aveia em Flocos",
                "base_qty": 0.5,
                "unit": "chávena (40g)",
                "scalable": true
            },
            {
                "name": "Leite ou bebida vegetal",
                "base_qty": 0.5,
                "unit": "chávena (120ml)",
                "scalable": true
            },
            {
                "name": "Iogurte Grego Natural",
                "base_qty": 0.5,
                "unit": "chávena (120g)",
                "scalable": true
            },
            {
                "name": "Sementes de Chia",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer (opcional)",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Frutas para decorar (morangos, mirtilos)",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "A Mistura Base",
                "description": "Num frasco de vidro com tampa, adicione a aveia, as sementes de chia, o leite e o iogurte. Se for usar adoçante, adicione-o agora. Com uma colher, misture muito bem todos os ingredientes até não haver grumos.",
                "porque": "Misturar bem garante que a chia e a aveia fiquem totalmente submersas no líquido, o que é essencial para que hidratem corretamente e criem a textura cremosa. A chia forma um gel que ajuda a engrossar a mistura.",
                "pontoCritico": "Certifique-se de que raspa os lados e o fundo do frasco para que não fiquem partes secas."
            },
            {
                "title": "O Descanso Mágico na Geleira",
                "description": "Tape o frasco firmemente e coloque-o na geleira (frigorífico) durante a noite, ou por um período mínimo de 4 a 6 horas.",
                "porque": "Durante este tempo, a aveia amolece e absorve o líquido, e as sementes de chia fazem a sua magia, transformando a mistura líquida num 'pudim' espesso e cremoso. É um processo de cozimento a frio.",
                "pontoCritico": "O descanso é fundamental. Não tente apressar o processo. Se não descansar o suficiente, a mistura ficará líquida e a aveia crua."
            },
            {
                "title": "Finalização e Personalização",
                "description": "Na manhã seguinte, retire o frasco da geleira. A mistura deverá estar espessa. Mexa novamente e, se desejar, adicione um pouco mais de leite para ajustar a consistência. Cubra com as suas frutas frescas favoritas, nozes, ou um pouco de granola.",
                "porque": "A finalização é onde você adiciona textura e frescura ao prato. As frutas complementam a base cremosa com acidez e doçura natural.",
                "pontoCritico": "Adicione os 'toppings' apenas na hora de comer para que se mantenham crocantes e frescos."
            }
        ],
        "variacoes": [
            "<strong>Combinações de Sabor:</strong> Tente 'Tarte de Maçã' (com maçã ralada, canela e nozes), 'Chocolate e Manteiga de Amendoim' (com cacau em pó e uma colher de manteiga de amendoim) ou 'Tropical' (com manga, coco ralado e leite de coco).",
            "<strong>Fonte de Proteína Extra:</strong> Misture uma colher de proteína em pó (whey ou vegetal) na base para um boost proteico pós-treino."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-overnight-oats"
    },
    "receitas-fitness-frango-marmita": {
        "title": "Aula 02: Frango com Especiarias para Marmitas",
        "description": "Aprenda a preparar frango para a semana toda que é tudo menos aborrecido. Esta técnica de cozinhar em cubos com uma mistura de especiarias garante uma carne suculenta e cheia de sabor, perfeita para saladas, wraps ou como prato principal.",
        "calculator": {
            "label": "Gramas de Peito de Frango:",
            "unit": "frango-marmita-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "10-12 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-5 porções",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira grande antiaderente",
                "Tigela",
                "Espátula"
            ]
        },
        "dicaDeMestre": "O segredo para não secar o frango é uma frigideira bem quente e não a sobrecarregar. Cozinhe em lotes se necessário. Isso sela o exterior rapidamente, mantendo os sucos no interior de cada cubo.",
        "ingredients": [
            {
                "name": "Peito de Frango, em cubos de 2cm",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Páprica Defumada",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true,
                "heading": "Mistura de Especiarias"
            },
            {
                "name": "Cominhos em pó",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Alho em pó",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Orégãos secos",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta Preta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Temperar o Frango",
                "description": "Numa tigela, coloque os cubos de frango. Numa tigela mais pequena, misture todas as especiarias: páprica, cominhos, alho em pó, orégãos, sal e pimenta. Polvilhe a mistura sobre o frango e regue com o azeite. Misture bem para que todos os cubos fiquem uniformemente cobertos.",
                "porque": "Criar uma mistura seca de especiarias e aplicá-la com o azeite garante que o sabor adere a toda a superfície da carne, criando uma crosta saborosa quando cozinhado.",
                "pontoCritico": "Certifique-se que os cubos de frango estão relativamente secos antes de temperar para que as especiarias e o azeite adiram melhor."
            },
            {
                "title": "Cozinhar em Lume Alto",
                "description": "Aqueça uma frigideira grande em lume médio-alto. Quando estiver bem quente, adicione os cubos de frango numa única camada, sem sobrepor. Deixe cozinhar por 3-4 minutos sem mexer, até criar uma crosta dourada.",
                "porque": "O calor alto cria a <span class='tooltip' data-tooltip='Reação química que cria a crosta dourada e o sabor de assado.'>Reação de Maillard</span>, que é responsável pela maior parte do sabor. Não mexer permite que esta crosta se forme.",
                "pontoCritico": "Se a sua frigideira não for grande o suficiente, cozinhe o frango em dois lotes. Amontoar o frango na frigideira fará com que ele cozinhe a vapor e fique cinzento."
            },
            {
                "title": "Finalizar e Servir",
                "description": "Depois de dourar de um lado, salteie os cubos de frango por mais 3-5 minutos, até estarem cozidos por completo. O frango está pronto para ser guardado em recipientes para as marmitas da semana.",
                "porque": "Cozinhar o frango desta forma garante que ele se mantém húmido mesmo depois de reaquecido.",
                "pontoCritico": "Não cozinhe demais. Um cubo de frango pequeno cozinha rapidamente. Retire um da frigideira e corte-o ao meio para verificar se está cozido por dentro."
            }
        ],
        "variacoes": [
            "<strong>Combinações para Marmitas:</strong> Sirva com arroz integral e brócolos cozidos a vapor; junte a uma salada fria com folhas verdes e abacate; ou use como recheio para wraps integrais.",
            "<strong>Outras Especiarias:</strong> Varie a mistura de temperos com caril em pó, açafrão-da-terra (cúrcuma) ou pimenta caiena para um toque picante."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-frango-marmita"
    },
    "receitas-fitness-ovos-cremosos": {
        "title": "Aula 03: Ovos Mexidos Cremosos (Técnica Saudável)",
        "description": "Esqueça os ovos mexidos secos e borrachudos. Aprenda a técnica de cozinhar em lume baixo para obter uma textura incrivelmente cremosa, quase como um creme, sem precisar de adicionar natas ou excesso de gordura.",
        "calculator": {
            "label": "Número de Ovos:",
            "unit": "ovos-cremosos-input",
            "base_value": 3,
            "default_value": 3
        },
        "details": {
            "tempoPreparo": "2 min",
            "tempoCozimento": "5-7 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 porção",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira antiaderente",
                "Espátula de silicone",
                "Tigela"
            ]
        },
        "dicaDeMestre": "Retire a frigideira do lume um pouco *antes* de os ovos atingirem o ponto desejado. O calor residual continuará a cozinhá-los. Se esperar até estarem perfeitos na frigideira, estarão secos no prato.",
        "ingredients": [
            {
                "name": "Ovos",
                "base_qty": 3,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Leite ou água",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Manteiga ou Azeite",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta Preta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Cebolinho picado (opcional)",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "A Preparação",
                "description": "Numa tigela, parta os ovos. Adicione o leite (ou água) e tempere com uma pitada de sal e pimenta. Bata com um garfo apenas até as gemas e claras estarem combinadas, mas não em excesso. Não queremos incorporar muito ar.",
                "porque": "Adicionar um pouco de líquido ajuda a criar vapor e a obter uma textura mais macia. Bater pouco mantém a heterogeneidade entre gema e clara, resultando em 'laços' de cor e uma textura mais interessante.",
                "pontoCritico": "Tempere os ovos antes de os cozinhar. Ao contrário de um bife, o sal aqui ajuda a quebrar as proteínas, resultando em ovos mais tenros."
            },
            {
                "title": "Lume Baixo é o Segredo",
                "description": "Aqueça a manteiga ou azeite numa frigideira antiaderente em lume **muito baixo**. Despeje a mistura de ovos na frigideira.",
                "porque": "O lume baixo é a chave para a cremosidade. Permite que as proteínas do ovo coagulem lentamente, formando pequenos 'cremes' em vez de grandes pedaços borrachudos que se formam em lume alto.",
                "pontoCritico": "Se ouvir um 'tss' alto quando despejar os ovos, o lume está demasiado alto. Comece de novo se necessário."
            },
            {
                "title": "Mexer Lentamente",
                "description": "Deixe os ovos assentarem por 20-30 segundos. Depois, com uma espátula de silicone, comece a empurrar lentamente os ovos das bordas para o centro, formando dobras suaves. Continue este movimento lento e constante.",
                "porque": "O movimento lento e constante garante que os ovos cozinhem por igual e formem 'cremes' (curds) grandes e macios, em vez de se partirem em pedaços pequenos e secos.",
                "pontoCritico": "Não raspe o fundo da frigideira, empurre suavemente. A paciência é a virtude dos ovos cremosos.",
                "timer": 300
            },
            {
                "title": "O Ponto Perfeito",
                "description": "Continue a cozinhar lentamente até os ovos estarem maioritariamente cozidos, mas ainda com uma aparência húmida e brilhante. Retire do lume. Adicione o cebolinho picado, se usar, e sirva imediatamente.",
                "porque": "O calor residual da frigideira fará o resto do trabalho. Se os cozinhar até estarem completamente secos na frigideira, ficarão demasiado passados no prato.",
                "pontoCritico": "A diferença entre ovos cremosos e ovos secos é de cerca de 30 segundos. Fique atento e retire-os do lume mais cedo do que pensa."
            }
        ],
        "variacoes": [
            "<strong>Combinações Perfeitas:</strong> Sirva sobre uma fatia de pão integral tostado, com abacate fatiado ao lado, ou como parte de um pequeno-almoço reforçado com batata doce e espinafres.",
            "<strong>Com Queijo:</strong> Adicione um pouco de queijo feta ou de cabra esfarelado no final, fora do lume.",
            "<strong>Com Espinafres:</strong> Adicione um punhado de espinafres frescos à frigideira e deixe-os murchar antes de adicionar os ovos."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-ovos-cremosos"
    },
    "receitas-fitness-salada-pote": {
        "title": "Aula 04: Salada no Pote (Montagem Correta)",
        "description": "Domine a arte do 'meal prep' com a salada no pote. Aprenda a técnica de montar em camadas para garantir que a sua salada se mantém fresca, crocante e deliciosa por vários dias.",
        "calculator": {
            "label": "Número de Potes:",
            "unit": "salada-pote-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "1 porção por pote",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frasco de vidro grande com tampa (aprox. 1L)",
                "Tábua de corte",
                "Faca"
            ]
        },
        "dicaDeMestre": "A regra de ouro é: os ingredientes mais 'húmidos' e pesados ficam no fundo, e os mais 'secos' e delicados ficam no topo. Esta ordem é o que impede que as folhas verdes fiquem murchas e ensopadas.",
        "ingredients": [
            {
                "name": "Molho Vinagrete",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true,
                "heading": "Camada 1: O Molho"
            },
            {
                "name": "Grão-de-bico ou feijão cozido",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true,
                "heading": "Camada 2: Ingredientes Duros"
            },
            {
                "name": "Cenoura ralada ou em cubos",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Pepino em cubos",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Frango cozido desfiado ou em cubos",
                "base_qty": 100,
                "unit": "g",
                "scalable": true,
                "heading": "Camada 3: Proteína"
            },
            {
                "name": "Tomate cherry, cortado ao meio",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true,
                "heading": "Camada 4: Ingredientes Macios"
            },
            {
                "name": "Queijo Feta ou nozes",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Folhas Verdes (alface, rúcula, espinafres)",
                "base_qty": 2,
                "unit": "chávenas",
                "scalable": true,
                "heading": "Camada 5: As Folhas"
            }
        ],
        "steps": [
            {
                "title": "Camada 1: O Molho no Fundo",
                "description": "Comece por colocar o seu molho vinagrete no fundo do frasco de vidro. Esta é a primeira e mais importante camada.",
                "porque": "Manter o molho no fundo, isolado dos outros ingredientes (especialmente das folhas), é o que garante que nada fica ensopado. Na hora de comer, você agita o frasco e o molho espalha-se por tudo.",
                "pontoCritico": "Use um molho à base de azeite e vinagre. Molhos cremosos à base de iogurte podem não aguentar tantos dias."
            },
            {
                "title": "Camada 2: Ingredientes Duros e Resistentes",
                "description": "A seguir ao molho, adicione os ingredientes mais duros e que não se importam de ficar em contacto com o molho. Pense em grão-de-bico, feijão, cenoura, pimentão em cubos, beterraba cozida, etc.",
                "porque": "Esta camada cria uma barreira protetora entre o molho e os ingredientes mais sensíveis. Eles até podem absorver um pouco do sabor do molho, o que é ótimo.",
                "pontoCritico": "Certifique-se de que esta camada cobre completamente o molho."
            },
            {
                "title": "Camada 3 e 4: Proteínas e Ingredientes Macios",
                "description": "Sobre os ingredientes duros, adicione a sua fonte de proteína (frango, atum, ovo cozido) e depois os ingredientes mais macios, como tomate cherry, milho, abacate (com umas gotas de limão para não oxidar).",
                "porque": "Continuamos a construir a salada de baixo para cima, dos ingredientes mais resistentes para os mais delicados.",
                "pontoCritico": "Se usar abacate, adicione-o o mais tarde possível ou regue-o bem com sumo de limão."
            },
            {
                "title": "Camada 5: As Folhas e Toppings Secos no Topo",
                "description": "Encha o resto do frasco com as suas folhas verdes favoritas (alface, rúcula, espinafres). Pressione levemente para caber o máximo possível. Se for usar nozes, sementes ou croutons, coloque-os mesmo no topo, por cima das folhas.",
                "porque": "As folhas ficam o mais longe possível do molho, garantindo a sua frescura e crocância. Os toppings secos no topo também se protegem da humidade.",
                "pontoCritico": "As folhas devem estar bem secas antes de as colocar no frasco. Na hora de comer, vire o conteúdo do frasco para uma tigela grande, agite bem e desfrute!"
            }
        ],
        "variacoes": [
            "<strong>Salada Grega:</strong> Molho de azeite e limão, pepino, tomate, azeitonas, queijo feta e folhas verdes.",
            "<strong>Salada Sudoeste:</strong> Molho de coentros e lima, feijão preto, milho, pimentão, frango e alface romana.",
            "<strong>Salada Asiática:</strong> Molho de amendoim, noodles de arroz, cenoura, edamame, frango e couve roxa."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-salada-pote"
    },
    "receitas-fitness-sopa-abobora": {
        "title": "Aula 05: Sopa Cremosa de Abóbora e Gengibre",
        "description": "Aprenda a fazer uma sopa aveludada, reconfortante e cheia de sabor, que é naturalmente cremosa sem precisar de natas. O gengibre dá um toque picante e fresco que eleva a doçura da abóbora.",
        "calculator": {
            "label": "Quilos de Abóbora:",
            "unit": "sopa-abobora-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "25-30 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela grande",
                "Varinha mágica ou liquidificador"
            ]
        },
        "dicaDeMestre": "O segredo para uma sopa com sabor mais profundo é assar a abóbora no forno em vez de a cozinhar diretamente na panela. Asse os cubos de abóbora a 200°C com um fio de azeite até ficarem macios e caramelizados. Depois, junte-os ao refogado e ao caldo.",
        "ingredients": [
            {
                "name": "Abóbora (menina ou manteiga), descascada e em cubos",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true
            },
            {
                "name": "Cebola picada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Alho picado",
                "base_qty": 2,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Gengibre fresco, ralado",
                "base_qty": 2,
                "unit": "cm",
                "scalable": true
            },
            {
                "name": "Caldo de Legumes",
                "base_qty": 1,
                "unit": "L",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta Preta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "A Base Aromática",
                "description": "Numa panela grande em lume médio, aqueça o azeite. Adicione a cebola e refogue até ficar macia e translúcida. Junte o alho e o gengibre ralado e cozinhe por mais um minuto até libertarem os seus aromas.",
                "porque": "Construir uma base de sabor com estes aromáticos é fundamental. O gengibre adiciona uma camada de calor e complexidade que contrasta maravilhosamente com a doçura da abóbora.",
                "pontoCritico": "Cuidado para não queimar o alho e o gengibre, pois podem amargar a sopa."
            },
            {
                "title": "Cozinhar a Abóbora",
                "description": "Adicione os cubos de abóbora à panela e tempere com sal e pimenta. Mexa bem. Despeje o caldo de legumes até quase cobrir a abóbora. Deixe levantar fervura, reduza o lume e cozinhe, tapado, por 15-20 minutos, ou até a abóbora estar muito macia.",
                "porque": "Cozinhar a abóbora no caldo infunde-a com sabor. Ela deve estar extremamente macia para garantir que a sopa fique perfeitamente lisa depois de triturada.",
                "pontoCritico": "Um garfo deve entrar na abóbora sem qualquer resistência. Se estiver dura, a sopa não ficará cremosa.",
                "timer": 1200
            },
            {
                "title": "Triturar até Ficar Aveludada",
                "description": "Com uma varinha mágica, triture a sopa diretamente na panela até ficar completamente lisa e aveludada. Se não tiver uma, transfira a sopa em lotes para um liquidificador e bata até ficar cremosa, voltando a colocá-la na panela.",
                "porque": "A trituração é o que cria a textura cremosa da sopa, quebrando todas as fibras dos legumes.",
                "pontoCritico": "Se usar um liquidificador, tenha muito cuidado com o vapor quente. Nunca encha o copo mais do que a metade e cubra a tampa com um pano de prato."
            },
            {
                "title": "Ajustar e Servir",
                "description": "Prove a sopa e ajuste o sal e a pimenta. Se estiver muito espessa, pode adicionar um pouco mais de caldo ou água quente. Sirva quente, talvez com um fio de azeite, sementes de abóbora tostadas ou coentros frescos por cima.",
                "porque": "Provar e ajustar no final é o que permite aperfeiçoar o prato ao seu gosto pessoal.",
                "pontoCritico": "A consistência da sopa é uma preferência pessoal. Ajuste-a para ficar como mais gosta."
            }
        ],
        "variacoes": [
            "<strong>Com Leite de Coco:</strong> Para uma cremosidade extra e um toque asiático, adicione 200ml de leite de coco no final e aqueça sem deixar ferver.",
            "<strong>Picante:</strong> Adicione uma pitada de pimenta caiena ou malagueta em pó junto com o gengibre.",
            "<strong>Sopa Fria:</strong> Esta sopa também pode ser servida fria nos dias mais quentes, como um gaspacho."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-sopa-abobora"
    },
    "receitas-fitness-crepioca": {
        "title": "Aula 06: Crepioca Recheada com Frango",
        "description": "Aprenda a fazer crepioca, a receita campeã da versatilidade fitness. Uma mistura de tapioca e ovo que cria uma base neutra, proteica e sem glúten, pronta para receber qualquer recheio que a sua imaginação permitir.",
        "calculator": {
            "label": "Porções (Crepiocas):",
            "unit": "crepioca-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "5 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 crepioca por porção",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira pequena antiaderente",
                "Tigela",
                "Batedor de arame ou garfo"
            ]
        },
        "dicaDeMestre": "Para uma crepioca mais elástica e que não se parte, adicione uma colher de sopa de polvilho azedo à mistura. Se a quiser mais fofa, adicione uma pitada de fermento em pó.",
        "ingredients": [
            {
                "name": "Ovo",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Goma de Tapioca Hidratada",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Água ou Leite",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sal e Orégãos",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Frango desfiado (já cozido)",
                "base_qty": 100,
                "unit": "g",
                "scalable": true,
                "heading": "Sugestão de Recheio"
            },
            {
                "name": "Requeijão Light ou Queijo Cottage",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Massa da Crepioca",
                "description": "Numa tigela, bata o ovo com um garfo ou batedor de arame. Adicione a goma de tapioca, a água (ou leite) e os temperos. Misture muito bem até obter uma massa líquida e homogénea, sem grumos de tapioca.",
                "porque": "A mistura precisa de ser homogénea para que cozinhe de forma uniforme. A água ou leite ajuda a tornar a massa ligeiramente mais fina e maleável.",
                "pontoCritico": "Desfaça bem todos os grumos da goma de tapioca para evitar uma textura irregular na sua crepioca."
            },
            {
                "title": "Cozinhar a Crepioca",
                "description": "Aqueça uma frigideira pequena antiaderente em lume médio. Não precisa de untar se a frigideira for de boa qualidade. Despeje a massa no centro e incline a frigideira para que a massa se espalhe e forme um disco.",
                "porque": "O lume médio cozinha a crepioca sem a queimar, permitindo que a estrutura se forme corretamente. Espalhar a massa cria uma base fina e uniforme.",
                "pontoCritico": "Espere até que a superfície da massa esteja opaca e as bordas comecem a soltar-se da frigideira. Este é o sinal de que está pronta para virar."
            },
            {
                "title": "Virar e Rechear",
                "description": "Com a ajuda de uma espátula, vire a crepioca e cozinhe por mais 30 segundos do outro lado. Espalhe o recheio (neste caso, frango desfiado e requeijão) sobre uma metade do disco.",
                "porque": "Cozinhar brevemente do outro lado garante que a crepioca está totalmente cozida. Rechear na frigideira ajuda a aquecer o recheio e a derreter qualquer queijo.",
                "pontoCritico": "Seja rápido ao virar para não se partir. Uma boa frigideira antiaderente é sua melhor amiga aqui."
            },
            {
                "title": "Dobrar e Servir",
                "description": "Dobre a metade sem recheio sobre a metade com recheio, formando uma meia-lua. Pressione levemente e deixe na frigideira por mais um minuto para o recheio aquecer bem. Sirva imediatamente.",
                "porque": "Dobrar cria o formato clássico e concentra o recheio, tornando mais fácil de comer.",
                "pontoCritico": "Pode desligar o lume neste passo para evitar que a crepioca fique demasiado seca enquanto finaliza."
            }
        ],
        "variacoes": [
            "<strong>Recheio Doce:</strong> Banana em rodelas com canela e um fio de mel.",
            "<strong>Recheio Caprese:</strong> Tomate em cubos, queijo mozzarella light e folhas de manjericão.",
            "<strong>Recheio de Atum:</strong> Atum em lata (em água), maionese light e cenoura ralada."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-crepioca"
    },
    "receitas-fitness-salmao-limao": {
        "title": "Aula 07: Salmão ao Forno com Limão e Endro",
        "description": "Uma receita elegante, incrivelmente rápida e cheia de sabor. O método de assar no forno é uma forma infalível de cozinhar salmão, mantendo-o húmido, enquanto o limão e o endro criam um perfume clássico.",
        "calculator": {
            "label": "Postas de Salmão (180g cada):",
            "unit": "salmao-limao-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "12-15 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 porção",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tabuleiro",
                "Papel vegetal"
            ]
        },
        "dicaDeMestre": "Para um sabor extra e para garantir que o salmão não cola, crie uma 'cama' de rodelas de limão sobre o papel vegetal e coloque o filé de salmão por cima. O peixe será infundido com o aroma do limão por baixo.",
        "ingredients": [
            {
                "name": "Posta de Salmão, com ou sem pele",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Limão Siciliano",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Endro (Dill) fresco, picado",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta Preta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar o Salmão",
                "description": "Pré-aqueça o forno a 200°C. Forre um tabuleiro com papel vegetal. Seque bem as postas de salmão com papel toalha. Tempere ambos os lados com sal e pimenta.",
                "porque": "Secar o peixe ajuda a pele (se tiver) a ficar mais crocante e permite que os temperos adiram melhor.",
                "pontoCritico": "Use papel vegetal para uma limpeza fácil e para garantir que o peixe não cola no tabuleiro."
            },
            {
                "title": "Montar e Temperar",
                "description": "Coloque as postas de salmão no tabuleiro. Regue com o azeite. Cubra cada posta com rodelas finas de limão e polvilhe generosamente com o endro fresco picado.",
                "porque": "O azeite protege o peixe de secar. O limão e o endro são uma combinação clássica que complementa perfeitamente a riqueza do salmão, adicionando acidez e frescura.",
                "pontoCritico": "Use endro fresco, se possível. O seu sabor é muito superior ao seco nesta preparação."
            },
            {
                "title": "Assar na Perfeição",
                "description": "Leve ao forno por 12 a 15 minutos. O tempo exato dependerá da espessura das suas postas. O salmão está pronto quando se desfaz facilmente com um garfo e o centro está opaco, mas ainda ligeiramente rosado.",
                "porque": "Assar é um método de calor seco e envolvente que cozinha o peixe de forma uniforme. É uma das formas mais fáceis de não errar o ponto.",
                "pontoCritico": "Não cozinhe demais o salmão. É melhor retirá-lo um pouco antes do que pensa, pois ele continuará a cozinhar com o calor residual. Salmão seco é um crime culinário.",
                "timer": 720
            }
        ],
        "variacoes": [
            "<strong>Com Espargos:</strong> Adicione espargos ao tabuleiro ao lado do salmão e asse tudo junto.",
            "<strong>Outras Ervas:</strong> Se não tiver endro, salsa ou cebolinho também funcionam bem.",
            "<strong>Toque Asiático:</strong> Substitua o limão e o endro por fatias de gengibre e um pouco de molho de soja."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-salmao-limao"
    },
    "receitas-fitness-zoodles-pesto": {
        "title": "Aula 08: Esparguete de Curgete ao Pesto de Abacate",
        "description": "Descubra o mundo das 'massas' de vegetais com esta receita vibrante e cheia de gorduras saudáveis. Os 'zoodles' (esparguete de curgete) são uma alternativa leve e low-carb, e o pesto de abacate é cremoso, saboroso e nutritivo.",
        "calculator": {
            "label": "Porções:",
            "unit": "zoodles-pesto-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "2-3 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 2 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Espiralizador de vegetais ou descascador julienne",
                "Processador de alimentos ou liquidificador"
            ]
        },
        "dicaDeMestre": "O segredo dos zoodles é cozinhá-los o mínimo possível. Um salteado rápido de 1 a 2 minutos é suficiente para os aquecer sem que libertem demasiada água e fiquem moles. Eles devem manter uma textura 'al dente'.",
        "ingredients": [
            {
                "name": "Curgete (Abobrinha) grande",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Abacate maduro",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true,
                "heading": "Para o Pesto de Abacate"
            },
            {
                "name": "Manjericão fresco",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Nozes ou pinhões",
                "base_qty": 0.25,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Dente de Alho",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Sumo de Limão",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Fazer os 'Zoodles'",
                "description": "Lave bem as curgetes. Usando um espiralizador, transforme-as em 'esparguete'. Se não tiver um, pode usar um descascador de legumes para fazer fitas largas (tagliatelle) ou um descascador de julienne.",
                "porque": "Criar a forma de 'massa' é o que torna este prato divertido e uma alternativa visualmente semelhante à massa tradicional.",
                "pontoCritico": "Depois de espiralizar, coloque os zoodles sobre papel de cozinha para absorver o excesso de humidade."
            },
            {
                "title": "O Pesto de Abacate Cremoso",
                "description": "Num processador de alimentos ou liquidificador, junte o abacate, as folhas de manjericão, as nozes, o dente de alho, o sumo de limão e uma pitada de sal. Comece a triturar e, lentamente, adicione o azeite até obter um molho liso e cremoso. Se necessário, adicione 1-2 colheres de sopa de água para ajudar a bater.",
                "porque": "O abacate substitui o queijo e parte do azeite de um pesto tradicional, criando uma cremosidade incrível com gorduras saudáveis. O limão é essencial para dar sabor e para evitar que o abacate oxide e escureça.",
                "pontoCritico": "Prove o pesto e ajuste os temperos. Pode precisar de mais sal ou mais limão, dependendo do seu gosto."
            },
            {
                "title": "Cozinhar (ou Não) os Zoodles",
                "description": "Opção 1 (Cru): Simplesmente misture os zoodles com o pesto e sirva, para uma salada crocante. Opção 2 (Cozido): Aqueça um fio de azeite numa frigideira grande em lume médio-alto. Salteie os zoodles por apenas 1 a 2 minutos, até estarem ligeiramente macios mas ainda crocantes. Retire do lume e envolva com o pesto.",
                "porque": "Cozinhar os zoodles liberta muita água. O cozimento rápido aquece-os sem os deixar moles. Retirar do lume antes de adicionar o pesto evita que o molho aqueça demais e perca a sua cor vibrante e sabor fresco.",
                "pontoCritico": "Não adicione sal aos zoodles enquanto cozinham, pois isso fará com que libertem ainda mais água.",
                "timer": 90
            }
        ],
        "variacoes": [
            "<strong>Com Proteína:</strong> Adicione camarões salteados, frango desfiado ou grão-de-bico para uma refeição mais completa.",
            "<strong>Toppings:</strong> Sirva com tomate cherry cortado ao meio, queijo feta esfarelado ou sementes de abóbora tostadas.",
            "<strong>Outros Pestos:</strong> Experimente com pesto de beterraba ou pesto de pimentão vermelho assado."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-zoodles-pesto"
    },
    "receitas-fitness-quinoa-colorida": {
        "title": "Aula 09: Quinoa Colorida com Legumes",
        "description": "Aprenda a cozinhar quinoa na perfeição – soltinha e sem amargor – e a transformá-la numa salada ou acompanhamento vibrante, nutritivo e cheio de proteína vegetal completa.",
        "calculator": {
            "label": "Gramas de Quinoa Crua:",
            "unit": "quinoa-colorida-input",
            "base_value": 150,
            "default_value": 150
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "15 min",
            "tempoDescanso": "5 min",
            "rendimento": "Serve 2-3 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela pequena com tampa",
                "Coador de malha fina"
            ]
        },
        "dicaDeMestre": "O passo mais importante para uma quinoa saborosa é lavá-la muito bem em água corrente fria. A quinoa tem uma camada natural chamada saponina, que é amarga. Lavar bem remove essa camada e o resultado é um sabor suave e agradável.",
        "ingredients": [
            {
                "name": "Quinoa",
                "base_qty": 150,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água ou Caldo de Legumes",
                "base_qty": 300,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Pimentão vermelho, em cubos pequenos",
                "base_qty": 0.5,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Pepino, em cubos pequenos",
                "base_qty": 0.5,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Grão-de-bico cozido",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Salsa e Hortelã frescas, picadas",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Sumo de Limão e Azeite",
                "base_qty": 0,
                "unit": "Para temperar",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Lavar e Cozinhar a Quinoa",
                "description": "Coloque a quinoa num coador de malha fina e lave-a em água corrente por pelo menos 1 minuto, esfregando os grãos com os dedos. Numa panela, junte a quinoa lavada e a água (ou caldo) com uma pitada de sal. Leve a ferver, reduza para o lume mais baixo possível, tape e cozinhe por 15 minutos.",
                "porque": "Lavar remove a saponina amarga. A proporção de 1 parte de quinoa para 2 partes de líquido garante que ela cozinhe perfeitamente, absorvendo toda a água.",
                "pontoCritico": "Use um coador fino, senão os pequenos grãos de quinoa podem passar pelos buracos.",
                "timer": 900
            },
            {
                "title": "Descansar e Soltar",
                "description": "Após os 15 minutos, desligue o lume e deixe a quinoa descansar na panela tapada por mais 5 minutos. Depois, destape e use um garfo para soltar e 'fofar' os grãos.",
                "porque": "O descanso permite que a quinoa termine de cozinhar no vapor e absorva qualquer resto de humidade. Fofar com um garfo deixa-a leve e soltinha.",
                "pontoCritico": "Se não descansar, a quinoa pode parecer um pouco húmida e aglomerada."
            },
            {
                "title": "Montar a Salada",
                "description": "Numa tigela grande, junte a quinoa cozida e arrefecida, o pimentão, o pepino, o grão-de-bico e as ervas frescas picadas. Tempere com sumo de limão, azeite, sal e pimenta a gosto. Misture bem e sirva.",
                "porque": "A combinação de legumes crocantes, a proteína do grão-de-bico e a frescura das ervas transforma a quinoa num prato completo e excitante.",
                "pontoCritico": "Deixe a quinoa arrefecer um pouco antes de a misturar com os vegetais para que eles não murchem com o calor."
            }
        ],
        "variacoes": [
            "<strong>Como Acompanhamento Quente:</strong> Sirva a quinoa apenas cozida como alternativa ao arroz para acompanhar carnes ou peixes.",
            "<strong>Com Frutas Secas e Nozes:</strong> Adicione damascos picados e amêndoas tostadas para um toque agridoce.",
            "<strong>Com Queijo Feta:</strong> Esfarele queijo feta por cima para um contraste salgado."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-quinoa-colorida"
    },
    "receitas-fitness-hamburguer-lentilha": {
        "title": "Aula 10: Hambúrguer de Lentilha",
        "description": "Aprenda a fazer um hambúrguer vegetariano que não tenta imitar a carne, mas sim celebrar os seus próprios sabores. É rico em fibras, proteína e tem uma textura incrível.",
        "calculator": {
            "label": "Hambúrgueres:",
            "unit": "hamburguer-lentilha-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "25-30 min",
            "tempoDescanso": "30 min (na geleira)",
            "rendimento": "4-5 hambúrgueres",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Processador de alimentos",
                "Frigideira"
            ]
        },
        "dicaDeMestre": "O segredo para um hambúrguer vegetariano que não se desfaz é controlar a humidade. Depois de processar a mistura, se parecer muito mole, adicione uma ou duas colheres de sopa de farinha de aveia ou de rosca até atingir uma consistência que consiga moldar.",
        "ingredients": [
            {
                "name": "Lentilhas cozidas e escorridas",
                "base_qty": 1.5,
                "unit": "chávenas",
                "scalable": true
            },
            {
                "name": "Cebola pequena, picada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Alho picado",
                "base_qty": 2,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Cenoura ralada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Farinha de Aveia ou de Rosca",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Sementes de Linhaça moídas + 3 c. sopa de água (\"ovo de linhaça\")",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Cominhos e Páprica Defumada",
                "base_qty": 1,
                "unit": "c. de chá de cada",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Base de Sabor e o 'Ovo' Vegan",
                "description": "Numa tigela pequena, misture a linhaça moída com a água e reserve por 5-10 minutos para formar um gel. Numa frigideira, refogue a cebola, o alho e a cenoura em azeite até ficarem bem macios.",
                "porque": "O 'ovo de linhaça' atua como um agente ligante, ajudando a dar estrutura ao hambúrguer. Refogar os vegetais antes de os processar desenvolve a sua doçura e sabor.",
                "pontoCritico": "Deixe o refogado arrefecer um pouco antes de o adicionar aos outros ingredientes."
            },
            {
                "title": "Processar a Mistura",
                "description": "Num processador de alimentos, junte as lentilhas cozidas, o refogado de vegetais, o 'ovo de linhaça' e as especiarias. Pulse o processador algumas vezes, apenas até a mistura se começar a unir. Queremos manter alguma textura, não fazer um puré.",
                "porque": "Manter pedaços de lentilhas inteiras é crucial para a textura final do hambúrguer. Processar demais resulta numa pasta mole.",
                "pontoCritico": "Se não tiver um processador, pode amassar tudo muito bem com um garfo ou espremedor de batata."
            },
            {
                "title": "Moldar e Descansar",
                "description": "Transfira a mistura para uma tigela e incorpore a farinha de aveia/rosca. Molde os hambúrgueres com as mãos. Coloque-os num prato forrado com papel vegetal e leve à geleira por pelo menos 30 minutos.",
                "porque": "A farinha ajuda a absorver o excesso de humidade e a dar estrutura. O descanso na geleira é fundamental para que os hambúrgueres fiquem firmes e não se desfaçam na frigideira.",
                "pontoCritico": "Não salte o tempo de descanso. É o que garante a integridade estrutural do hambúrguer."
            },
            {
                "title": "Cozinhar o Hambúrguer",
                "description": "Aqueça uma frigideira com um fio de azeite em lume médio. Cozinhe os hambúrgueres por 4-5 minutos de cada lado, até formarem uma crosta dourada e escura e estarem aquecidos por dentro. Sirva num pão integral com salada e os seus molhos favoritos.",
                "porque": "Cozinhar em lume médio permite que o hambúrguer aqueça por dentro enquanto desenvolve uma crosta saborosa por fora.",
                "pontoCritico": "Vire os hambúrgueres com cuidado, usando uma espátula larga.",
                "timer": 300
            }
        ],
        "variacoes": [
            "<strong>Com Feijão Preto:</strong> Substitua as lentilhas por feijão preto para um sabor diferente.",
            "<strong>Com Cogumelos:</strong> Adicione cogumelos salteados à mistura para um sabor mais 'carnudo' e <span class='tooltip' data-tooltip='O 'quinto gosto', profundo e saboroso.'>umami</span>.",
            "<strong>No Forno:</strong> Asse os hambúrgueres a 200°C por 20-25 minutos para uma versão com menos gordura."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-hamburguer-lentilha"
    },
    "receitas-fitness-escondidinho-fit": {
        "title": "Aula 11: Escondidinho Fit de Batata Doce",
        "description": "Uma versão saudável e funcional de um clássico da comida de conforto brasileira. Trocamos a batata tradicional pela batata doce e usamos carne moída magra para um prato rico em nutrientes e sabor.",
        "calculator": {
            "label": "Gramas de Carne Moída:",
            "unit": "escondidinho-fit-input",
            "base_value": 500,
            "default_value": 500
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "40-50 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela para o puré",
                "Frigideira para a carne",
                "Travessa de ir ao forno"
            ]
        },
        "dicaDeMestre": "Para um puré de batata doce ainda mais saboroso e menos aguado, asse as batatas doces no forno em vez de as cozinhar em água. O sabor fica muito mais concentrado.",
        "ingredients": [
            {
                "name": "Batata Doce",
                "base_qty": 1,
                "unit": "kg",
                "scalable": true,
                "heading": "Para o Puré"
            },
            {
                "name": "Leite de Coco light ou leite magro",
                "base_qty": 100,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Sal, Pimenta, Noz-moscada",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            },
            {
                "name": "Carne Moída Magra (Patinho)",
                "base_qty": 500,
                "unit": "g",
                "scalable": true,
                "heading": "Para o Recheio"
            },
            {
                "name": "Cebola picada",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Alho picado",
                "base_qty": 2,
                "unit": "dentes",
                "scalable": true
            },
            {
                "name": "Tomate pelado picado",
                "base_qty": 400,
                "unit": "g",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar o Puré de Batata Doce",
                "description": "Cozinhe a batata doce (descascada e em cubos) em água a ferver até ficar muito macia. Escorra bem e amasse com um garfo ou espremedor. Incorpore o leite aos poucos, até obter um puré cremoso. Tempere com sal, pimenta e noz-moscada.",
                "porque": "A batata doce é uma excelente fonte de carboidratos complexos e fibras. O leite de coco complementa a sua doçura natural.",
                "pontoCritico": "Certifique-se de que a batata doce está bem cozida para que o puré fique liso e sem pedaços."
            },
            {
                "title": "O Recheio de Carne Saboroso",
                "description": "Numa frigideira, refogue a cebola e o alho em um fio de azeite. Adicione a carne moída e cozinhe até dourar. Junte o tomate picado, tempere com sal e pimenta e cozinhe em lume baixo por 10-15 minutos, até o molho apurar.",
                "porque": "Construir um recheio saboroso é essencial para equilibrar a doçura do puré. Deixar o molho apurar concentra os sabores.",
                "pontoCritico": "Use carne moída magra para manter o prato alinhado com os objetivos fitness."
            },
            {
                "title": "Montar e Gratinar",
                "description": "Pré-aqueça o forno a 180°C. Numa travessa, espalhe o recheio de carne no fundo. Cubra com o puré de batata doce, alisando a superfície com uma colher. Opcional: polvilhe com um pouco de queijo parmesão ralado.",
                "porque": "A montagem em camadas é a característica do 'escondidinho'. A camada de puré 'esconde' o recheio delicioso.",
                "pontoCritico": "Alisar bem o puré ajuda a criar uma superfície uniforme para gratinar."
            },
            {
                "title": "Levar ao Forno",
                "description": "Leve ao forno por 20 a 25 minutos, ou até o recheio borbulhar nas bordas e o topo do puré estar ligeiramente dourado. Sirva quente.",
                "porque": "O tempo no forno serve para aquecer tudo uniformemente e fundir os sabores. Opcionalmente, pode usar a função 'grill' do seu forno nos últimos minutos para uma crosta mais dourada.",
                "timer": 1200
            }
        ],
        "variacoes": [
            "<strong>Recheio de Frango:</strong> Substitua a carne moída por frango desfiado.",
            "<strong>Versão Vegetariana:</strong> Use um recheio de lentilhas ou cogumelos salteados.",
            "<strong>Com Mandioca:</strong> Use puré de mandioca (aipim/macaxeira) para uma versão mais tradicional, mas igualmente deliciosa."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-escondidinho-fit"
    },
    "receitas-fitness-tilapia-papillote": {
        "title": "Aula 12: Tilápia no Papillote com Vegetais",
        "description": "Uma repetição da técnica 'en papillote' com um dos peixes mais acessíveis e populares. É uma forma fantástica de garantir um peixe húmido e saboroso, cozido junto com os seus acompanhamentos.",
        "calculator": {
            "label": "Filés de Tilápia:",
            "unit": "tilapia-papillote-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "15-18 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 por pessoa",
            "dificuldade": "Fácil",
            "utensilios": [
                "Papel vegetal",
                "Tesoura",
                "Tabuleiro"
            ]
        },
        "dicaDeMestre": "Adicione um elemento de gordura (um fio de azeite, um pequeno pedaço de manteiga) e um elemento ácido (sumo de limão, vinho branco) dentro do envelope. Esta combinação cria um molho instantâneo e delicioso enquanto cozinha.",
        "ingredients": [
            {
                "name": "Filé de Tilápia",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Tomate Cherry, ao meio",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Rodelas finas de Curgete (Abobrinha)",
                "base_qty": 1,
                "unit": "unid. pequena",
                "scalable": true
            },
            {
                "name": "Azeitonas pretas",
                "base_qty": 10,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Ramo de Tomilho",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Azeite, Sal, Pimenta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar o Envelope e os Vegetais",
                "description": "Pré-aqueça o forno a 200°C. Corte um grande coração de papel vegetal. Num lado do coração, faça uma 'cama' com as rodelas de curgete e os tomates cherry. Tempere com sal, pimenta e um fio de azeite.",
                "porque": "A cama de vegetais eleva o peixe e cria uma base de sabor. O corte fino dos vegetais garante que cozinhem no mesmo tempo que o peixe.",
                "pontoCritico": "Não corte os vegetais demasiado grossos."
            },
            {
                "title": "Montar e Selar",
                "description": "Coloque o filé de tilápia sobre os vegetais. Tempere o peixe. Adicione as azeitonas e o ramo de tomilho. Dobre o papel vegetal e sele as bordas com pequenas dobras sucessivas e apertadas.",
                "porque": "A selagem perfeita do <span class='tooltip' data-tooltip='Envelope de papel vegetal usado para cozinhar alimentos no seu próprio vapor.'>papillote</span> é o que aprisiona o vapor, cozinhando tudo de forma uniforme e concentrando todos os aromas.",
                "pontoCritico": "Garanta que o envelope está bem fechado para o vapor não escapar."
            },
            {
                "title": "Assar e Servir",
                "description": "Coloque os envelopes num tabuleiro e asse por 15 a 18 minutos. O envelope irá inchar. Sirva o envelope fechado no prato e abra-o à mesa.",
                "porque": "Abrir o envelope à mesa liberta uma nuvem de vapor aromático, o que é uma parte fantástica da experiência.",
                "pontoCritico": "Cuidado com o vapor quente ao abrir.",
                "timer": 900
            }
        ],
        "variacoes": [
            "<strong>Sabor Asiático:</strong> Use molho de soja, gengibre e cogumelos shiitake.",
            "<strong>Sabor Cítrico:</strong> Use rodelas de laranja e funcho em vez de tomate e curgete.",
            "<strong>Com Batata:</strong> Use batatas em rodelas muito finas (cortadas numa mandoline) como base, pois elas cozinharão no tempo certo."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-tilapia-papillote"
    },
    "receitas-fitness-homus": {
        "title": "Aula 13: Homus Caseiro com Palitos de Cenoura",
        "description": "Aprenda a fazer homus, a pasta de grão-de-bico do Médio Oriente, que é muito mais cremosa e saborosa do que qualquer versão de compra. É um snack rico em proteína vegetal e fibras.",
        "calculator": {
            "label": "Chávenas de Grão-de-bico cozido:",
            "unit": "homus-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "N/A",
            "rendimento": "Aprox. 2 chávenas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Processador de alimentos ou liquidificador potente",
                "Espátula"
            ]
        },
        "dicaDeMestre": "O segredo para um homus ultra-liso é remover a pele do grão-de-bico e usar um pouco da água do cozimento (ou da lata) para ajudar a bater. Outro truque é bater o tahine com o sumo de limão primeiro, antes de adicionar o grão, para criar uma emulsão mais leve.",
        "ingredients": [
            {
                "name": "Grão-de-bico cozido e escorrido",
                "base_qty": 2,
                "unit": "chávenas",
                "scalable": true
            },
            {
                "name": "Tahine (pasta de gergelim)",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Sumo de Limão fresco",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Dente de Alho",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Azeite Extra Virgem",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Água gelada",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Cominhos em pó e Sal",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Processar a Base",
                "description": "Num processador de alimentos, junte o tahine e o sumo de limão. Processe por 1 minuto até obter um creme esbranquiçado e fofo. Adicione o alho, os cominhos e o sal, e pulse mais algumas vezes.",
                "porque": "Bater o tahine com o limão primeiro cria uma base aerada, resultando num homus mais leve e menos denso.",
                "pontoCritico": "Use tahine de boa qualidade. Faz toda a diferença no sabor final."
            },
            {
                "title": "Adicionar o Grão-de-bico",
                "description": "Adicione o grão-de-bico cozido ao processador. Bata por vários minutos, parando para raspar as laterais, até a mistura estar bem lisa.",
                "porque": "A paciência na trituração é o que garante a cremosidade. Quanto mais tempo bater, mais liso ficará.",
                "pontoCritico": "Se o grão-de-bico estiver com pele, o homus ficará com uma textura mais rústica. Para uma textura de restaurante, remova as peles."
            },
            {
                "title": "Atingir a Cremosidade Perfeita",
                "description": "Com o processador a funcionar, adicione a água gelada, uma colher de cada vez, até o homus atingir a consistência desejada: ultra-cremosa e aveludada.",
                "porque": "A água gelada ajuda a criar uma textura mais fofa e leve, reagindo com o tahine.",
                "pontoCritico": "Adicione a água aos poucos para não deixar o homus demasiado líquido."
            },
            {
                "title": "Finalizar e Servir",
                "description": "Transfira o homus para uma tigela. Crie um redemoinho na superfície com as costas de uma colher, regue com azeite extra virgem e polvilhe com um pouco de páprica. Sirva com palitos de cenoura, pepino ou pão pita integral.",
                "porque": "A finalização não é apenas estética. O azeite adiciona riqueza e sabor.",
                "pontoCritico": "O homus fica ainda melhor depois de algumas horas na geleira, pois os sabores se aprofundam."
            }
        ],
        "variacoes": [
            "<strong>Com Beterraba:</strong> Adicione uma beterraba cozida à mistura para um homus rosa vibrante e adocicado.",
            "<strong>Com Pimentão Assado:</strong> Junte um pimentão vermelho assado (sem pele) para um sabor fumado.",
            "<strong>Com Abacate:</strong> Adicione meio abacate para uma versão extra-cremosa."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-homus"
    },
    "receitas-fitness-chips-batata-doce": {
        "title": "Aula 14: Chips de Batata Doce no Forno",
        "description": "Aprenda a fazer um snack saudável e viciante que satisfaz a vontade de comer algo crocante. Estas chips de batata doce assadas são uma alternativa fantástica às batatas fritas de pacote.",
        "calculator": {
            "label": "Número de Batatas Doces:",
            "unit": "chips-batata-doce-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "N/A",
            "rendimento": "2-3 porções",
            "dificuldade": "Fácil",
            "utensilios": [
                "Mandoline ou faca afiada",
                "Tabuleiro grande",
                "Papel vegetal"
            ]
        },
        "dicaDeMestre": "O segredo para chips verdadeiramente crocantes é a espessura. As fatias devem ser finíssimas e uniformes. Uma <span class='tooltip' data-tooltip='Utensílio de cozinha com uma lâmina ajustável para cortar fatias extremamente finas e uniformes.'>mandoline</span> é a melhor ferramenta para este trabalho.",
        "ingredients": [
            {
                "name": "Batata Doce média",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Azeite",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Páprica Defumada",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Sal e Pimenta Preta",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Fatiar Finamente",
                "description": "Pré-aqueça o forno a 200°C. Lave bem a batata doce (pode manter a casca). Usando uma mandoline na regulação mais fina, ou uma faca muito afiada, corte a batata em rodelas o mais finas possível.",
                "porque": "Fatias finas desidratam e ficam crocantes mais rapidamente. Fatias grossas ficarão macias por dentro, como batatas assadas, e nicht como chips.",
                "pontoCritico": "Tenha extremo cuidado ao usar a mandoline. Use sempre o protetor de mão."
            },
            {
                "title": "Temperar",
                "description": "Numa tigela grande, coloque as fatias de batata doce. Regue com o azeite e polvilhe com a páprica, sal e pimenta. Use as mãos para misturar bem, garantindo que cada fatia está levemente coberta.",
                "porque": "O azeite ajuda a conduzir o calor e a criar a crocância, além de fazer os temperos aderirem.",
                "pontoCritico": "Não exagere no azeite. Um leve revestimento é suficiente. Excesso de óleo deixará as chips moles."
            },
            {
                "title": "Assar em Camada Única",
                "description": "Disponha as fatias de batata doce num tabuleiro grande forrado com papel vegetal, numa única camada, sem se sobreporem. Leve ao forno por 10-12 minutos. Vire as chips e asse por mais 8-10 minutos, ou até estarem douradas e crocantes.",
                "porque": "A camada única é fundamental. Se as fatias se sobrepuserem, elas irão cozinhar a vapor e não ficarão crocantes. Virar a meio garante um cozimento uniforme.",
                "pontoCritico": "Fique muito atento nos últimos minutos. As chips podem passar de douradas a queimadas muito rapidamente devido ao teor de açúcar da batata doce.",
                "timer": 600
            }
        ],
        "variacoes": [
            "<strong>Com Alecrim:</strong> Adicione alecrim seco picado à mistura de temperos.",
            "<strong>Picantes:</strong> Junte uma pitada de pimenta caiena.",
            "<strong>Diferentes Vegetais:</strong> Esta técnica funciona bem com outros vegetais de raiz, como beterraba, cenoura ou pastinaca."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-chips-batata-doce"
    },
    "receitas-fitness-panqueca-aveia": {
        "title": "Aula 15: Panquecas de Aveia e Banana",
        "description": "Uma receita mágica com apenas 2 ingredientes base que cria panquecas fofas, deliciosas e saudáveis. Perfeitas para um pequeno-almoço ou lanche sem açúcar refinado e sem glúten.",
        "calculator": {
            "label": "Porções (aprox. 3 panquecas):",
            "unit": "panqueca-aveia-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "5-10 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 porção",
            "dificuldade": "Fácil",
            "utensilios": [
                "Liquidificador ou garfo",
                "Frigideira antiaderente"
            ]
        },
        "dicaDeMestre": "Para panquecas extra fofas, adicione 1/4 de colher de chá de fermento em pó à mistura. Deixe a massa descansar por 5 minutos antes de a cozinhar para permitir que o fermento comece a agir.",
        "ingredients": [
            {
                "name": "Banana madura",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Ovos",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Aveia em flocos (opcional, para estrutura)",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Canela em pó (opcional)",
                "base_qty": 1,
                "unit": "pitada",
                "scalable": false
            },
            {
                "name": "Óleo de coco ou azeite para untar",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar a Massa",
                "description": "Numa tigela, esmague muito bem a banana madura com um garfo até formar um puré. Junte os ovos e bata vigorosamente até a mistura estar bem combinada e ligeiramente aerada. Se usar, adicione a aveia e a canela.",
                "porque": "A banana madura fornece a doçura e a estrutura, enquanto os ovos atuam como agente ligante e dão leveza. A aveia adiciona fibras e ajuda a dar mais corpo às panquecas.",
                "pontoCritico": "Quanto mais madura a banana (com pintas pretas), mais doce e fácil de esmagar ela será."
            },
            {
                "title": "Cozinhar as Panquecas",
                "description": "Aqueça uma frigideira antiaderente em lume médio-baixo e unte levemente com óleo de coco ou azeite. Para cada panqueca, despeje cerca de 2-3 colheres de sopa de massa na frigideira. Cozinhe por 2-3 minutos de um lado, ou até pequenas bolhas aparecerem na superfície.",
                "porque": "O lume médio-baixo é crucial para que as panquecas cozinhem por dentro sem queimar o exterior, especialmente devido ao açúcar natural da banana.",
                "pontoCritico": "Estas panquecas são mais delicadas que as tradicionais. Não as faça demasiado grandes para serem mais fáceis de virar.",
                "timer": 150
            },
            {
                "title": "Virar e Servir",
                "description": "Com uma espátula fina, vire cuidadosamente as panquecas e cozinhe por mais 1-2 minutos do outro lado, até estarem douradas. Sirva imediatamente.",
                "porque": "Cozinhar brevemente do outro lado finaliza o processo. Elas são melhores servidas quentes.",
                "pontoCritico": "Espere que as bordas estejam firmes antes de tentar virar, senão a panqueca pode desmanchar-se."
            }
        ],
        "variacoes": [
            "<strong>Com Frutas:</strong> Sirva com iogurte grego e frutas frescas por cima.",
            "<strong>Com Manteiga de Amendoim:</strong> Adicione uma colher de manteiga de amendoim à massa para mais proteína e sabor.",
            "<strong>Versão Chocolate:</strong> Misture uma colher de chá de cacau em pó na massa."
        ],
        "module": "Receitas Fitness",
        "url": "fitness.html#receita-panqueca-aveia"
    },
    "sobremesas-mousse-chocolate": {
        "title": "Aula 01: Mousse de Chocolate Clássica",
        "description": "Aprenda a fazer uma mousse de chocolate verdadeiramente aerada, intensa e com a textura perfeita. Uma sobremesa clássica que, com a técnica certa, é surpreendentemente simples de dominar.",
        "calculator": {
            "label": "Gramas de Chocolate:",
            "unit": "mousse-chocolate-input",
            "base_value": 200,
            "default_value": 200
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "5 min",
            "tempoDescanso": "4 horas",
            "rendimento": "Serve 4-6 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Batedeira",
                "Espátula de silicone (salazar)",
                "Tigelas de vidro ou inox"
            ]
        },
        "dicaDeMestre": "O segredo para uma mousse leve é a incorporação. Ao misturar as claras em castelo ao chocolate, faça-o em três partes. A primeira parte pode ser misturada mais vigorosamente para 'amaciar' o chocolate. As duas seguintes devem ser incorporadas de forma extremamente delicada, com movimentos de baixo para cima, para não perder o ar.",
        "ingredients": [
            {
                "name": "Chocolate amargo (50-70% cacau)",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Ovos frescos, separados (gemas e claras)",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Açúcar",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Manteiga sem sal",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 1,
                "unit": "pitada",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Derreter o Chocolate",
                "description": "Parta o chocolate em pedaços pequenos e derreta-o junto com a manteiga em <span class='tooltip' data-tooltip='Método de aquecimento suave que usa o vapor de água. Coloca-se o ingrediente numa tigela sobre uma panela com água a ferver, sem que a tigela toque na água.'>banho-maria</span> ou no micro-ondas em potência baixa, parando para mexer a cada 30 segundos. Reserve e deixe arrefecer um pouco.",
                "porque": "O aquecimento suave evita que o chocolate queime e fique granulado. Deixá-lo arrefecer um pouco é crucial para que não cozinhe as gemas quando forem adicionadas.",
                "pontoCritico": "Se usar banho-maria, não deixe que vapor ou água entre em contacto com o chocolate, pois isso fará com que ele 'talhe' e perca a sua textura lisa."
            },
            {
                "title": "A Base de Gemas",
                "description": "Numa tigela, bata as gemas com metade do açúcar (2 colheres de sopa) até obter um creme mais pálido e fofo. Incorpore esta mistura ao chocolate derretido e já morno.",
                "porque": "Bater as gemas com o açúcar cria uma <span class='tooltip' data-tooltip='Mistura estável de dois líquidos que normalmente não se misturam. Neste caso, gordura e água.'>emulsão</span> que dará riqueza e cremosidade à base da mousse. Esta mistura é o coração do sabor do chocolate.",
                "pontoCritico": "O chocolate não pode estar quente demais, senão os ovos irão coagular e criar uma textura de 'ovos mexidos'."
            },
            {
                "title": "O Merengue Francês (As Claras)",
                "description": "Numa tigela limpa e seca, bata as claras com uma pitada de sal. Quando começarem a espumar, adicione o resto do açúcar aos poucos, continuando a bater até formar picos firmes e brilhantes (merengue).",
                "porque": "As claras em castelo (merengue) são as responsáveis por incorporar ar na mousse, dando-lhe a sua textura leve e aerada característica. O sal estabiliza as claras e o açúcar dá estrutura ao merengue.",
                "pontoCritico": "A tigela e os batedores devem estar completamente livres de qualquer vestígio de gordura (gema, por exemplo), senão as claras não irão montar."
            },
            {
                "title": "A Incorporação Delicada",
                "description": "Adicione 1/3 das claras em castelo à mistura de chocolate e mexa vigorosamente para a amaciar. Depois, incorpore o resto das claras em duas adições, usando uma espátula para fazer movimentos suaves de baixo para cima, até a mistura estar homogénea.",
                "porque": "Este método em três fases permite que a base de chocolate, que é densa, se torne progressivamente mais leve, facilitando a incorporação final das claras sem perder o ar que foi batido nelas. É a técnica chave para uma mousse fofa.",
                "pontoCritico": "Não misture em excesso! Assim que não vir mais laivos de branco das claras, pare. É melhor ter uma mistura não 100% perfeita do que uma mousse densa."
            },
            {
                "title": "O Descanso na Geleira",
                "description": "Divida a mousse por taças individuais e leve à geleira (frigorífico) por pelo menos 4 horas para firmar.",
                "porque": "O frio solidifica a manteiga e a gordura do cacau no chocolate, dando estrutura e a textura final à mousse.",
                "pontoCritico": "A mousse parecerá líquida ao início, mas o tempo de refrigeração é essencial. Não salte este passo.",
                "timer": 14400
            }
        ],
        "variacoes": [
            "<strong>Com Café:</strong> Adicione uma colher de chá de café expresso em pó ao chocolate derretido para intensificar o sabor.",
            "<strong>Com Laranja:</strong> Junte as raspas de uma laranja à mistura de gemas e chocolate.",
            "<strong>Picante:</strong> Uma pitada de pimenta caiena ou canela pode criar um contraste interessante."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-mousse-chocolate"
    },
    "sobremesas-pudim": {
        "title": "Aula 02: Pudim de Leite Perfeito (Sem Furinhos)",
        "description": "Domine a sobremesa mais amada do Brasil. Aprenda a fazer a calda de caramelo no ponto certo e a técnica do <span class='tooltip' data-tooltip='Método de cozimento lento e suave em banho de água quente, ideal para cremes e pudins.'>banho-maria</span> para um pudim incrivelmente liso, cremoso e sem os furinhos indesejados.",
        "calculator": {
            "label": "Latas de Leite Condensado:",
            "unit": "pudim-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "1h 30 min",
            "tempoDescanso": "6 horas",
            "rendimento": "Serve 8-10 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Forma de pudim com furo central",
                "Liquidificador",
                "Assadeira funda"
            ]
        },
        "dicaDeMestre": "O segredo para um pudim liso é não incorporar ar na mistura. Bata os ingredientes no liquidificador apenas o suficiente para os misturar. Depois de bater, deixe a mistura descansar por 10 minutos para que as bolhas de ar subam e se dissipem.",
        "ingredients": [
            {
                "name": "Açúcar (para a calda)",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Água quente (para a calda)",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Leite Condensado",
                "base_qty": 1,
                "unit": "lata (395g)",
                "scalable": true,
                "heading": "Para o Pudim"
            },
            {
                "name": "Leite (use a lata como medida)",
                "base_qty": 1,
                "unit": "lata",
                "scalable": true
            },
            {
                "name": "Ovos",
                "base_qty": 3,
                "unit": "unid.",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Calda de Caramelo",
                "description": "Na própria forma de pudim, derreta o açúcar em lume baixo, mexendo ocasionalmente, até formar um caramelo dourado. Com muito cuidado, adicione a água quente (vai borbulhar intensamente). Continue a mexer em lume baixo até todos os torrões de açúcar se dissolverem. Gire a forma para caramelizar as laterais. Reserve.",
                "porque": "Fazer o caramelo diretamente na forma poupa trabalho. A adição de água cria uma calda mais fluida que não endurece completamente depois de fria, tornando mais fácil desenformar o pudim.",
                "pontoCritico": "Tenha extremo cuidado ao adicionar a água quente, pois o vapor que se liberta pode queimar. Não deixe o caramelo ficar demasiado escuro, senão ficará amargo."
            },
            {
                "title": "A Mistura do Pudim",
                "description": "No copo do liquidificador, coloque os ovos, o leite condensado e o leite. Bata em velocidade baixa por apenas 1 a 2 minutos, o suficiente para que a mistura fique homogénea. Deixe a mistura descansar por 10 minutos.",
                "porque": "Bater em excesso ou em alta velocidade incorpora ar na mistura, que é a principal causa dos furinhos no pudim. O descanso ajuda a eliminar as bolhas de ar que se formaram.",
                "pontoCritico": "A simplicidade é a chave. Não bata demais."
            },
            {
                "title": "O Cozimento em Banho-Maria",
                "description": "Pré-aqueça o forno a 180°C. Despeje a mistura do pudim na forma caramelizada. Coloque a forma de pudim dentro de uma assadeira maior e funda. Leve ao forno e, com cuidado, adicione água quente na assadeira maior até atingir metade da altura da forma do pudim. Asse por cerca de 1 hora e 30 minutos.",
                "porque": "O <span class='tooltip' data-tooltip='Método de cozimento lento e suave em banho de água quente, ideal para cremes e pudins.'>banho-maria</span> protege o pudim do calor direto do forno, permitindo que ele cozinhe de forma lenta e uniforme. É esta cozedura gentil que garante uma textura lisa e cremosa.",
                "pontoCritico": "O pudim está pronto quando, ao espetar um palito, ele sai limpo. A superfície deve estar firme ao toque.",
                "timer": 5400
            },
            {
                "title": "Arrefecer e Desenformar",
                "description": "Retire o pudim do forno e do banho-maria. Deixe arrefecer completamente à temperatura ambiente e depois leve à geleira por pelo menos 6 horas. Para desenformar, passe uma faca fina nas laterais e aqueça levemente o fundo da forma no bico do fogão para soltar a calda. Vire sobre um prato de servir.",
                "porque": "O pudim precisa de estar completamente frio e firme para não se desmanchar ao desenformar. Aquecer o fundo derrete ligeiramente a calda, ajudando o pudim a soltar-se.",
                "pontoCritico": "A paciência é fundamental. Tentar desenformar um pudim morno é uma receita para o desastre."
            }
        ],
        "variacoes": [
            "<strong>Pudim de Laranja:</strong> Adicione as raspas de uma laranja à mistura do liquidificador.",
            "<strong>Pudim de Coco:</strong> Substitua metade do leite por leite de coco e adicione coco ralado.",
            "<strong>Pudim de Café:</strong> Dissolva uma colher de sopa de café solúvel no leite antes de o bater."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-pudim"
    },
    "sobremesas-torta-maca": {
        "title": "Aula 03: Torta de Maçã Rústica (Galette)",
        "description": "Aprenda a fazer uma galette, a prima descontraída e charmosa da torta de maçã. É a introdução perfeita ao mundo das massas, pois a sua beleza está justamente na sua imperfeição rústica.",
        "calculator": {
            "label": "Número de Tortas:",
            "unit": "torta-maca-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "30 min",
            "tempoCozimento": "40-50 min",
            "tempoDescanso": "1 hora (massa)",
            "rendimento": "Serve 6-8 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Rolo da massa",
                "Tabuleiro",
                "Papel vegetal"
            ]
        },
        "dicaDeMestre": "O segredo para uma massa folhada e crocante (<span class='tooltip' data-tooltip='Massa clássica francesa, quebradiça e amanteigada, usada como base para tortas.'>pâte brisée</span>) é manter a manteiga o mais fria possível. Se em algum momento sentir a massa a amolecer, não hesite em colocá-la na geleira por 10 minutos antes de continuar.",
        "ingredients": [
            {
                "name": "Farinha de Trigo",
                "base_qty": 1.5,
                "unit": "chávenas (180g)",
                "scalable": true,
                "heading": "Para a Massa"
            },
            {
                "name": "Manteiga sem sal, MUITO FRIA, em cubos",
                "base_qty": 115,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Água gelada",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Açúcar",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 0.5,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Maçãs (Granny Smith, Fuji), fatiadas",
                "base_qty": 3,
                "unit": "unid.",
                "scalable": true,
                "heading": "Para o Recheio"
            },
            {
                "name": "Sumo de Limão",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Açúcar Mascavado",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Canela em pó",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Ovo (para pincelar)",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "A Massa Quebradiça",
                "description": "Numa tigela, misture a farinha, o açúcar e o sal. Adicione os cubos de manteiga fria e, com as pontas dos dedos, 'belisque' a manteiga na farinha até obter uma mistura que parece areia grossa, com pedaços de manteiga do tamanho de ervilhas. Adicione a água gelada, uma colher de cada vez, e misture até a massa se unir. Forme um disco, enrole em película e leve à geleira por 1 hora.",
                "porque": "Os pedaços de manteiga fria, ao derreterem no forno, criam bolsões de vapor que dão à massa a sua textura folhada e quebradiça. Trabalhar a massa o mínimo possível evita o desenvolvimento do glúten, mantendo-a tenra.",
                "pontoCritico": "Não amasse a massa. O objetivo é apenas juntar os ingredientes. A água deve ser gelada para manter a manteiga sólida."
            },
            {
                "title": "Montar a Galette",
                "description": "Pré-aqueça o forno a 200°C. Numa superfície enfarinhada, estenda o disco de massa até ter um círculo de aproximadamente 30cm. Transfira para um tabuleiro forrado com papel vegetal. Numa outra tigela, misture as fatias de maçã com o sumo de limão, o açúcar mascavado e a canela.",
                "porque": "O sumo de limão evita que as maçãs oxidem e escureçam, além de adicionar acidez que equilibra a doçura.",
                "pontoCritico": "Não se preocupe se o círculo de massa não for perfeito. A beleza da galette está na sua rusticidade."
            },
            {
                "title": "Dobrar e Assar",
                "description": "Disponha as fatias de maçã no centro da massa, deixando uma borda livre de cerca de 5cm. Dobre as bordas da massa sobre as maçãs, criando uma moldura rústica. Pincele a borda da massa com o ovo batido e polvilhe com um pouco de açúcar. Asse por 40-50 minutos, ou até a massa estar bem dourada e as maçãs macias.",
                "porque": "O ovo pincelado dá um acabamento brilhante e dourado à massa. O açúcar na borda carameliza, adicionando crocância.",
                "pontoCritico": "Se o sumo das maçãs começar a vazar, não se preocupe, isso é normal e criará um caramelo delicioso no tabuleiro.",
                "timer": 2700
            }
        ],
        "variacoes": [
            "<strong>Com outras Frutas:</strong> Esta técnica funciona maravilhosamente com pêssegos, peras, frutos vermelhos ou uma mistura.",
            "<strong>Toque de Sabor:</strong> Adicione uma colher de sopa de amido de milho ao recheio para o engrossar, ou espalhe um pouco de compota de alperce sobre a massa antes de adicionar as frutas.",
            "<strong>Servir com:</strong> Uma bola de gelado de baunilha ou um pouco de natas batidas."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-torta-maca"
    },
    "sobremesas-creme-brulee": {
        "title": "Aula 04: Crème Brûlée",
        "description": "Uma sobremesa de restaurante que esconde uma simplicidade surpreendente. Aprenda a fazer um creme de baunilha rico e sedoso e a criar a icónica crosta de caramelo estaladiça que se parte com um 'crack' satisfatório.",
        "calculator": {
            "label": "Porções (Ramequins):",
            "unit": "creme-brulee-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "30-40 min",
            "tempoDescanso": "4 horas",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Ramequins de cerâmica",
                "Maçarico de cozinha",
                "Assadeira funda"
            ]
        },
        "dicaDeMestre": "Para um sabor de baunilha mais intenso, use uma vagem de baunilha verdadeira. Abra a vagem ao meio, raspe as sementes e infusione tanto as sementes como a vagem nas natas quentes por 15 minutos antes de continuar.",
        "ingredients": [
            {
                "name": "Natas (35% gordura)",
                "base_qty": 500,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Gemas de Ovo",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Açúcar",
                "base_qty": 60,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Extrato de Baunilha",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Açúcar Demerara (para caramelizar)",
                "base_qty": 4,
                "unit": "c. de chá",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Infundir as Natas",
                "description": "Pré-aqueça o forno a 160°C. Numa panela pequena, aqueça as natas com o extrato de baunilha em lume médio, apenas até começar a formar pequenas bolhas nas bordas. Não deixe ferver. Retire do lume.",
                "porque": "Aquecer as natas ajuda a dissolver o açúcar mais facilmente e a infundir o sabor da baunilha de forma mais eficaz.",
                "pontoCritico": "Se as natas ferverem, podem criar uma película na superfície. O aquecimento deve ser gentil."
            },
            {
                "title": "O Creme (Custard)",
                "description": "Numa tigela, bata as gemas com o açúcar até a mistura ficar mais pálida e ligeiramente mais espessa. Com o batedor em movimento, despeje as natas quentes em fio sobre a mistura de gemas. Continue a bater até estar tudo bem incorporado.",
                "porque": "Este processo de adicionar o líquido quente ao frio lentamente chama-se 'temperar'. Eleva a temperatura das gemas gradualmente, evitando que elas cozinhem e se transformem em ovos mexidos.",
                "pontoCritico": "A adição das natas quentes deve ser lenta e em fio, especialmente no início."
            },
            {
                "title": "Cozimento em Banho-Maria",
                "description": "Passe a mistura por um coador fino para remover quaisquer grumos e despeje-a nos ramequins. Coloque os ramequins numa assadeira funda e leve ao forno. Com cuidado, adicione água quente na assadeira até atingir metade da altura dos ramequins. Asse por 30-40 minutos.",
                "porque": "O <span class='tooltip' data-tooltip='Método de cozimento lento e suave em banho de água quente.'>banho-maria</span> garante que o creme cozinhe de forma suave e uniforme, resultando numa textura sedosa. Sem ele, o creme ficaria borrachudo.",
                "pontoCritico": "O crème brûlée está pronto quando as bordas estiverem firmes, mas o centro ainda tremer ligeiramente como uma gelatina.",
                "timer": 2100
            },
            {
                "title": "Arrefecer e Caramelizar",
                "description": "Retire os ramequins do banho-maria e deixe-os arrefecer à temperatura ambiente. Depois, leve à geleira por pelo menos 4 horas. Na hora de servir, polvilhe uma camada fina e uniforme de açúcar Demerara sobre a superfície e caramelize com um maçarico de cozinha até ficar dourado e borbulhante.",
                "porque": "O arrefecimento total firma o creme. A caramelização no último momento cria o contraste de texturas (creme frio, caramelo quente) e a crosta estaladiça.",
                "pontoCritico": "Se não tiver maçarico, pode colocar os ramequins sob o grelhador do forno no máximo, mas fique muito atento, pois queima em segundos."
            }
        ],
        "variacoes": [
            "<strong>De Café:</strong> Adicione 1 colher de sopa de café expresso em pó às natas quentes.",
            "<strong>De Lavanda:</strong> Infusione algumas flores de lavanda secas nas natas.",
            "<strong>De Chocolate:</strong> Derreta 100g de chocolate de boa qualidade nas natas quentes antes de as misturar com as gemas."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-creme-brulee"
    },
    "sobremesas-brownie": {
        "title": "Aula 05: Brownie de Chocolate Intenso",
        "description": "Aprenda a fazer o brownie perfeito: denso, rico em chocolate, húmido por dentro e com a icónica casquinha brilhante e crocante por cima. Uma receita simples que se foca na qualidade dos ingredientes e na técnica.",
        "calculator": {
            "label": "Tamanho da Forma (ex: 20 para 20x20cm):",
            "unit": "brownie-input",
            "base_value": 20,
            "default_value": 20
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "25-30 min",
            "tempoDescanso": "1 hora",
            "rendimento": "9-12 porções",
            "dificuldade": "Fácil",
            "utensilios": [
                "Forma quadrada (20x20cm)",
                "Tigela",
                "Batedor de arame"
            ]
        },
        "dicaDeMestre": "O segredo da casquinha brilhante e estaladiça está em bater bem os ovos com o açúcar até a mistura ficar pálida e espessa, e em garantir que o chocolate derretido ainda está morno quando é incorporado. A combinação cria uma fina camada de merengue no topo do brownie ao assar.",
        "ingredients": [
            {
                "name": "Chocolate meio amargo (mín. 50%)",
                "base_qty": 180,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Manteiga sem sal",
                "base_qty": 150,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Açúcar",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Ovos grandes",
                "base_qty": 3,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo",
                "base_qty": 95,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Cacau em Pó (sem açúcar)",
                "base_qty": 30,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Extrato de Baunilha",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 0.25,
                "unit": "c. de chá",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar a Base de Chocolate",
                "description": "Pré-aqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel vegetal. Derreta o chocolate e a manteiga juntos em banho-maria ou no micro-ondas. Mexa até ficar liso e reserve.",
                "porque": "Forrar a forma permite desenformar o brownie inteiro facilmente para o cortar. Derreter a gordura (manteiga) com o chocolate garante uma mistura homogénea e um sabor intenso.",
                "pontoCritico": "Use um chocolate de boa qualidade. Ele é a estrela do prato, e a sua qualidade irá definir o resultado final."
            },
            {
                "title": "A Emulsão de Ovos e Açúcar",
                "description": "Numa tigela grande, bata os ovos e o açúcar com um batedor de arame por alguns minutos, até a mistura ficar visivelmente mais pálida, espessa e arejada. Junte a baunilha.",
                "porque": "Esta etapa é crucial para a textura e, principalmente, para a formação da casquinha crocante no topo do brownie. Estamos a dissolver o açúcar e a incorporar ar.",
                "pontoCritico": "Bata com vontade! A mistura deve cair do batedor em fitas."
            },
            {
                "title": "Combinar e Incorporar os Secos",
                "description": "Despeje a mistura de chocolate morno sobre a mistura de ovos e açúcar e incorpore delicadamente. Peneire a farinha, o cacau em pó e o sal sobre a mistura húmida e, com uma espátula, envolva apenas até não haver mais vestígios de farinha.",
                "porque": "Peneirar os ingredientes secos evita grumos. Misturar o mínimo possível depois de adicionar a farinha é o segredo para um brownie denso e 'fudgy', em oposição a um bolo ('cakey').",
                "pontoCritico": "Não misture em excesso! Assim que a farinha desaparecer, pare. Misturar em excesso desenvolve o glúten e deixa o brownie com textura de bolo."
            },
            {
                "title": "Assar e Arrefecer",
                "description": "Despeje a massa na forma preparada e alise a superfície. Leve ao forno por 25 a 30 minutos. O brownie está pronto quando um palito inserido no centro sai com algumas migalhas húmidas, mas não massa líquida. Deixe arrefecer completamente na forma antes de cortar.",
                "porque": "Um brownie ligeiramente mal cozido no centro garante a sua textura húmida e densa. Ele continuará a cozinhar com o calor residual. Arrefecer completamente é essencial para que ele firme e possa ser cortado em quadrados perfeitos.",
                "pontoCritico": "É melhor errar para menos do que para mais no tempo de forno. Um brownie demasiado assado fica seco e perde a sua característica principal.",
                "timer": 1650
            }
        ],
        "variacoes": [
            "<strong>Com Nozes:</strong> Adicione 1 chávena de nozes ou pecãs picadas à massa junto com os ingredientes secos.",
            "<strong>Extra Chocolate:</strong> Misture 100g de pepitas de chocolate na massa no final.",
            "<strong>Brownie Salgado:</strong> Polvilhe uma pitada de flor de sal sobre a massa antes de a levar ao forno para um contraste de sabor."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-brownie"
    },
    "sobremesas-tiramisu": {
        "title": "Aula 06: Tiramisù Original",
        "description": "Aprenda a fazer a sobremesa italiana que significa 'puxa-me para cima'. O Tiramisù é uma sobremesa elegante, sem cozimento, que combina a intensidade do café, a cremosidade do queijo mascarpone e a leveza dos palitos la reine.",
        "calculator": {
            "label": "Porções:",
            "unit": "tiramisu-input",
            "base_value": 6,
            "default_value": 6
        },
        "details": {
            "tempoPreparo": "30 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "6 horas",
            "rendimento": "Serve 6-8 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Batedeira",
                "Travessa retangular",
                "Espátula"
            ]
        },
        "dicaDeMestre": "Use café expresso forte e de boa qualidade, arrefecido. Mergulhe os palitos la reine no café por apenas 1 a 2 segundos de cada lado. Se ficarem demasiado ensopados, irão desmanchar-se e deixar o tiramisù aguado.",
        "ingredients": [
            {
                "name": "Gemas de Ovo",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Açúcar",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Queijo Mascarpone, à temp. ambiente",
                "base_qty": 500,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Palitos La Reine (Champagne)",
                "base_qty": 24,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Café expresso forte, frio",
                "base_qty": 300,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Cacau em Pó (sem açúcar), para polvilhar",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": false
            },
            {
                "name": "Vinho Marsala ou Rum (opcional)",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "O Creme de Mascarpone (<span class='tooltip' data-tooltip='Creme italiano feito com gemas, açúcar e vinho Marsala, batido em banho-maria. É a base de muitos doces.'>Zabaglione</span>)",
                "description": "Numa tigela resistente ao calor sobre uma panela com água a ferver (banho-maria), bata as gemas e o açúcar com um batedor de arame até a mistura ficar muito pálida, espessa e duplicar de volume (cerca de 5-8 minutos). Retire do calor e continue a bater até arrefecer.",
                "porque": "Este processo cozinha suavemente as gemas, tornando-as seguras para consumo, e cria um creme leve e espumoso que é a base do creme do Tiramisù.",
                "pontoCritico": "A água do banho-maria não deve ferver com força e não deve tocar no fundo da tigela, para não cozinhar as gemas."
            },
            {
                "title": "Incorporar o Mascarpone",
                "description": "Numa outra tigela, bata o queijo mascarpone com uma espátula para o amaciar. Adicione o creme de gemas (zabaglione) já frio ao mascarpone, envolvendo delicadamente até obter um creme liso e homogéneo.",
                "porque": "O mascarpone deve estar à temperatura ambiente para se misturar facilmente sem formar grumos. A incorporação deve ser delicada para manter o ar que batemos no creme de gemas.",
                "pontoCritico": "Não bata o mascarpone em excesso, pois pode talhar e ficar líquido."
            },
            {
                "title": "Montar as Camadas",
                "description": "Misture o vinho Marsala (se usar) ao café frio. Mergulhe rapidamente cada palito la reine no café e disponha-os numa única camada no fundo de uma travessa. Espalhe metade do creme de mascarpone por cima. Repita com outra camada de palitos embebidos em café e termine com o resto do creme.",
                "porque": "A montagem em camadas permite que os palitos amoleçam e absorvam o sabor do café, enquanto o creme se mantém distinto e aveludado.",
                "pontoCritico": "Mergulhe os palitos muito rapidamente. Um segundo de cada lado é suficiente."
            },
            {
                "title": "Refrigerar e Finalizar",
                "description": "Cubra a travessa com película aderente e leve à geleira por pelo menos 6 horas (idealmente, durante a noite). Antes de servir, polvilhe generosamente com cacau em pó peneirado.",
                "porque": "O tempo de refrigeração é essencial para que o Tiramisù firme e os sabores se fundam. Os palitos amolecem e o creme adquire a consistência perfeita.",
                "pontoCritico": "Polvilhe o cacau apenas no momento de servir para que ele não absorva humidade e se mantenha com uma aparência aveludada.",
                "timer": 21600
            }
        ],
        "variacoes": [
            "<strong>Com Chocolate:</strong> Rale um pouco de chocolate amargo entre as camadas de creme.",
            "<strong>Com Frutas:</strong> Faça uma versão com frutos vermelhos, substituindo o café por uma calda de frutos vermelhos.",
            "<strong>Sem Álcool:</strong> Simplesmente omita o vinho Marsala. O sabor continuará delicioso."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-tiramisu"
    },
    "sobremesas-suspiros": {
        "title": "Aula 07: Suspiros (Merengue Francês)",
        "description": "Aprenda a fazer suspiros perfeitos: brancos, leves, secos e crocantes por fora, e ligeiramente macios por dentro. Dominar o merengue francês é uma habilidade fundamental na confeitaria.",
        "calculator": {
            "label": "Número de Claras de Ovo:",
            "unit": "suspiros-input",
            "base_value": 3,
            "default_value": 3
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "1h 30 min",
            "tempoDescanso": "1 hora (no forno)",
            "rendimento": "Muitos suspiros!",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Batedeira",
                "Saco de pasteleiro com bico",
                "Tabuleiro"
            ]
        },
        "dicaDeMestre": "O segredo de um merengue estável é a ausência total de gordura. Certifique-se de que a sua tigela, os batedores e as suas mãos estão impecavelmente limpos e que não caiu nenhuma gota de gema nas claras.",
        "ingredients": [
            {
                "name": "Claras de Ovo, à temp. ambiente",
                "base_qty": 3,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Açúcar em pó (de confeiteiro)",
                "base_qty": 150,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Gotas de Sumo de Limão ou Vinagre branco",
                "base_qty": 0.5,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Extrato de Baunilha (opcional)",
                "base_qty": 0.5,
                "unit": "c. de chá",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar o Merengue",
                "description": "Pré-aqueça o forno à temperatura mais baixa possível (100-110°C). Forre um tabuleiro com papel vegetal. Numa tigela grande e impecavelmente limpa, comece a bater as claras em velocidade média. Quando começarem a espumar, adicione as gotas de limão.",
                "porque": "O ácido (limão ou vinagre) ajuda a estabilizar as proteínas das claras, permitindo que elas retenham mais ar e formem um merengue mais forte e que não 'chora' (liberta líquido).",
                "pontoCritico": "Qualquer vestígio de gordura ou água impedirá que as claras montem corretamente."
            },
            {
                "title": "Adicionar o Açúcar",
                "description": "Continue a bater e, quando as claras formarem picos moles, comece a adicionar o açúcar em pó, uma colher de sopa de cada vez, batendo bem entre cada adição. Continue a bater em velocidade alta por vários minutos.",
                "porque": "Adicionar o açúcar gradualmente permite que ele se dissolva completamente nas claras, criando uma estrutura lisa e forte. Se adicionar tudo de uma vez, o peso do açúcar pode fazer as claras baixarem.",
                "pontoCritico": "O merengue está pronto quando formar picos firmes, brilhantes e, ao esfregar um pouco entre os dedos, não sentir os grãos de açúcar."
            },
            {
                "title": "Formar e Secar os Suspiros",
                "description": "Incorpore a baunilha, se usar. Coloque o merengue num saco de pasteleiro com o bico da sua preferência (ex: estrela) e forme pequenos suspiros sobre o papel vegetal. Leve ao forno baixo por cerca de 1 hora e 30 minutos.",
                "porque": "Os suspiros não 'assam', eles 'secam'. O calor baixo e o tempo longo desidratam o merengue, criando uma casca crocante e um interior que derrete na boca.",
                "pontoCritico": "Não abra a porta do forno durante o cozimento, pois a mudança de temperatura pode fazer com que os suspiros rachem.",
                "timer": 5400
            },
            {
                "title": "Arrefecer no Forno",
                "description": "Após o tempo de cozimento, desligue o forno e deixe os suspiros arrefecerem completamente lá dentro, com a porta entreaberta (pode usar uma colher de pau para a segurar).",
                "porque": "O arrefecimento lento e gradual evita o choque térmico, que também pode causar rachas nos suspiros. Este passo garante que eles fiquem perfeitamente secos.",
                "pontoCritico": "Só retire os suspiros do papel vegetal quando estiverem completamente frios, pois só aí atingem a sua crocância máxima."
            }
        ],
        "variacoes": [
            "<strong>Mini Pavlovas:</strong> Faça ninhos maiores de merengue e sirva com natas batidas e frutas frescas.",
            "<strong>Com Corante:</strong> Adicione algumas gotas de corante alimentar em gel no final para suspiros coloridos.",
            "<strong>Com Chocolate:</strong> Incorpore delicadamente raspas de chocolate no merengue pronto ou mergulhe a base dos suspiros em chocolate derretido depois de frios."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-suspiros"
    },
    "sobremesas-bolo-cenoura": {
        "title": "Aula 08: Bolo de Cenoura com Cobertura de Brigadeiro",
        "description": "O bolo afetivo que define a infância no Brasil. Aprenda a fazer a massa fofinha e húmida, com a cor vibrante da cenoura, e uma cobertura de brigadeiro cremosa que escorre pelas laterais.",
        "calculator": {
            "label": "Número de Bolos:",
            "unit": "bolo-cenoura-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "40-50 min",
            "tempoDescanso": "30 min",
            "rendimento": "1 bolo (12-16 fatias)",
            "dificuldade": "Fácil",
            "utensilios": [
                "Liquidificador",
                "Forma com furo central",
                "Panela para a cobertura"
            ]
        },
        "dicaDeMestre": "O segredo para um bolo de cenoura fofinho é a quantidade de óleo e não bater a farinha em excesso. O óleo garante a humidade, e misturar a farinha delicadamente no final evita que o bolo fique pesado e 'embatumado'.",
        "ingredients": [
            {
                "name": "Cenouras médias, descascadas e picadas",
                "base_qty": 3,
                "unit": "unid.",
                "scalable": true,
                "heading": "Para a Massa"
            },
            {
                "name": "Ovos",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Óleo Vegetal",
                "base_qty": 1,
                "unit": "chávena (240ml)",
                "scalable": true
            },
            {
                "name": "Açúcar",
                "base_qty": 2,
                "unit": "chávenas (400g)",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo",
                "base_qty": 2.5,
                "unit": "chávenas (300g)",
                "scalable": true
            },
            {
                "name": "Fermento em Pó",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Leite Condensado",
                "base_qty": 1,
                "unit": "lata (395g)",
                "scalable": true,
                "heading": "Para a Cobertura de Brigadeiro"
            },
            {
                "name": "Chocolate em Pó (50% cacau)",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Manteiga",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Massa no Liquidificador",
                "description": "Pré-aqueça o forno a 180°C e unte e enfarinhe uma forma com furo no meio. No liquidificador, bata as cenouras picadas, os ovos e o óleo até obter um creme completamente liso e homogéneo.",
                "porque": "O liquidificador desfaz a cenoura por completo, o que liberta a sua cor e humidade na massa. Bater bem esta base líquida garante que não ficam pedaços de cenoura no bolo.",
                "pontoCritico": "Se o seu liquidificador não for muito potente, pode ralar a cenoura antes de a bater para facilitar o processo."
            },
            {
                "title": "Incorporar os Ingredientes Secos",
                "description": "Numa tigela grande, peneire a farinha, o açúcar e o fermento. Despeje a mistura líquida do liquidificador sobre os ingredientes secos e, com um batedor de arame (fouet), misture delicadamente apenas até a massa ficar homogénea.",
                "porque": "Peneirar os secos evita grumos. Misturar a farinha à mão, e não no liquidificador, é o segredo para um bolo fofo. Bater a farinha desenvolve o glúten, o que deixaria o bolo pesado.",
                "pontoCritico": "Não misture em excesso! Assim que não vir mais farinha seca, pare. Alguns pequenos grumos não são um problema."
            },
            {
                "title": "Assar o Bolo",
                "description": "Despeje a massa na forma preparada e leve ao forno por 40 a 50 minutos. O bolo está pronto quando um palito inserido no centro sai limpo. Deixe arrefecer um pouco antes de desenformar.",
                "porque": "O tempo de forno pode variar. O teste do palito é a forma mais segura de verificar o ponto.",
                "pontoCritico": "Não abra o forno nos primeiros 30 minutos, pois a mudança de temperatura pode fazer com que o bolo 'sole' (não cresça).",
                "timer": 2700
            },
            {
                "title": "A Cobertura de Brigadeiro",
                "description": "Numa panela, junte o leite condensado, o chocolate em pó e a manteiga. Leve ao lume médio-baixo, mexendo sempre com uma espátula, até a mistura começar a engrossar e a borbulhar, mas ainda líquida o suficiente para escorrer (ponto de calda). Despeje imediatamente sobre o bolo morno ou frio.",
                "porque": "A cobertura de brigadeiro é um clássico. O ponto de calda é mais líquido do que o de enrolar, ideal para cobrir bolos.",
                "pontoCritico": "Mexa constantemente para não queimar no fundo da panela."
            }
        ],
        "variacoes": [
            "<strong>Com Cobertura Crocante:</strong> Adicione chocolate granulado por cima da cobertura de brigadeiro ainda quente.",
            "<strong>Formato Cupcake:</strong> Asse a massa em formas de cupcake por cerca de 20-25 minutos.",
            "<strong>Bolo Mesclado:</strong> Separe uma pequena porção da massa, misture com chocolate em pó e despeje na forma para um efeito marmorizado."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-bolo-cenoura"
    },
    "sobremesas-eclairs": {
        "title": "Aula 09: Éclairs (Bombas) de Chocolate",
        "description": "Atreva-se a entrar na pastelaria francesa com esta aula completa. Aprenda a fazer a massa oca e leve (<span class='tooltip' data-tooltip='Massa escaldada duas vezes, que incha no forno criando um interior oco, perfeita para rechear.'>pâte à choux</span>), o creme de confeiteiro aveludado e a cobertura de chocolate brilhante.",
        "calculator": {
            "label": "Número de Éclairs:",
            "unit": "eclairs-input",
            "base_value": 12,
            "default_value": 12
        },
        "details": {
            "tempoPreparo": "45 min",
            "tempoCozimento": "35-40 min",
            "tempoDescanso": "1 hora",
            "rendimento": "Aprox. 12-15 éclairs",
            "dificuldade": "Avançado",
            "utensilios": [
                "Batedeira",
                "Saco de pasteleiro com bico liso/canelado",
                "Panela"
            ]
        },
        "dicaDeMestre": "O segredo da massa choux é secá-la bem na panela antes de adicionar os ovos. A massa deve formar uma bola e criar uma fina película no fundo da panela. Isto garante que a massa inchará corretamente no forno.",
        "ingredients": [
            {
                "name": "Água",
                "base_qty": 125,
                "unit": "ml",
                "scalable": true,
                "heading": "Para a Massa Choux"
            },
            {
                "name": "Leite",
                "base_qty": 125,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Manteiga",
                "base_qty": 115,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Açúcar",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Sal",
                "base_qty": 0.5,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo",
                "base_qty": 140,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Ovos",
                "base_qty": 4,
                "unit": "unid.",
                "scalable": true
            }
        ],
        "steps": [
            {
                "isSubRecipe": true,
                "title": "Módulo 1: Creme de Confeiteiro (<span class='tooltip' data-tooltip='Creme clássico da pastelaria francesa, à base de leite, gemas, açúcar e amido, usado para rechear bolos e éclairs.'>Crème Pâtissière</span>)",
                "subSteps": [
                    {
                        "title": "Preparar a Base",
                        "description": "Numa panela, aqueça 500ml de leite com 1 vagem de baunilha (ou 1 c. de chá de extrato) até começar a ferver. Numa tigela, bata 4 gemas com 100g de açúcar e 40g de amido de milho até obter um creme pálido.",
                        "porque": "O amido de milho irá engrossar o creme. A baunilha infunde o seu sabor no leite.",
                        "pontoCritico": "Misture bem o amido nas gemas para não criar grumos."
                    },
                    {
                        "title": "Temperar e Cozinhar",
                        "description": "Verta metade do leite quente sobre a mistura de gemas, batendo sempre (temperar). Volte a colocar esta mistura na panela com o resto do leite. Cozinhe em lume médio, mexendo constantemente com um batedor de arame, até o creme engrossar e borbulhar por 1-2 minutos.",
                        "porque": "Cozinhar por um minuto depois de engrossar elimina o sabor do amido. Mexer constantemente evita que o creme cole e queime.",
                        "pontoCritico": "Não pare de mexer! O creme pode queimar muito facilmente."
                    },
                    {
                        "title": "Arrefecer",
                        "description": "Transfira o creme para uma tigela limpa. Cubra com película aderente, pressionando a película diretamente sobre a superfície do creme para não criar uma pele. Leve à geleira para arrefecer completamente.",
                        "porque": "Cobrir em contacto evita a formação de uma película grossa na superfície do creme. Deve estar completamente frio antes de ser usado para rechear.",
                        "pontoCritico": "O creme quente pode amolecer ou derreter a massa choux."
                    }
                ]
            },
            {
                "isSubRecipe": true,
                "title": "Módulo 2: Massa Choux (<span class='tooltip' data-tooltip='Massa escaldada duas vezes, que incha no forno criando um interior oco.'>Pâte à Choux</span>)",
                "subSteps": [
                    {
                        "title": "Escaldar a Massa",
                        "description": "Numa panela, junte a água, o leite, a manteiga, o açúcar e o sal. Leve a ferver. Assim que ferver, retire do lume e adicione toda a farinha de uma só vez. Mexa vigorosamente com uma colher de pau até formar uma bola.",
                        "porque": "O líquido a ferver cozinha o amido da farinha, o que é o primeiro passo para a estrutura da massa.",
                        "pontoCritico": "A adição da farinha deve ser feita fora do lume para evitar a formação de grumos."
                    },
                    {
                        "title": "Secar a Massa",
                        "description": "Volte com a panela para o lume médio-baixo e cozinhe a massa, mexendo sempre, por 2 a 3 minutos para a secar. A massa está pronta quando formar uma fina película no fundo da panela.",
                        "porque": "Secar o excesso de humidade permite que a massa absorva mais ovos, resultando numa massa que incha mais e fica mais leve.",
                        "pontoCritico": "Este passo é crucial. Não o salte."
                    },
                    {
                        "title": "Adicionar os Ovos",
                        "description": "Transfira a massa para a tigela da batedeira e bata por um minuto para arrefecer um pouco. Adicione os ovos, um de cada vez, batendo bem entre cada adição. A massa estará pronta quando estiver lisa, brilhante e, ao levantar o batedor, formar um 'V' ou 'bico de pássaro'.",
                        "porque": "Os ovos fornecem a humidade e a estrutura de proteína que criarão o vapor para inchar a massa no forno. Adicioná-los um a um garante uma emulsão correta.",
                        "pontoCritico": "Pode ser que não precise do último ovo inteiro. Adicione-o aos poucos e verifique a consistência."
                    }
                ]
            },
            {
                "title": "Formar e Assar os Éclairs",
                "description": "Pré-aqueça o forno a 200°C. Coloque a massa num saco de pasteleiro com um bico canelado ou liso. Num tabuleiro forrado com papel vegetal, forme bastões de cerca de 10-12 cm. Leve ao forno e asse por 15 minutos, depois reduza a temperatura para 180°C e asse por mais 20-25 minutos, até estarem bem dourados e ocos.",
                "porque": "O calor inicial alto ajuda a massa a inchar rapidamente. A temperatura mais baixa a seguir seca o interior. A forma canelada ajuda os éclairs a crescerem de forma mais uniforme.",
                "pontoCritico": "Não abra a porta do forno nos primeiros 25 minutos, ou os éclairs irão abater e não voltar a subir.",
                "timer": 900
            },
            {
                "title": "Rechear e Cobrir",
                "description": "Deixe os éclairs arrefecerem completamente. Com a ponta de uma faca, faça 2 ou 3 pequenos furos na base de cada éclair. Use um saco de pasteleiro para rechear cada um com o creme de confeiteiro frio. Mergulhe o topo de cada éclair numa cobertura de chocolate derretido.",
                "porque": "O recheio é feito por baixo para um acabamento limpo. O éclair deve sentir-se pesado e cheio.",
                "pontoCritico": "Recheie apenas quando os éclairs e o creme estiverem completamente frios."
            }
        ],
        "variacoes": [
            "<strong>Paris-Brest:</strong> Forme a massa choux em forma de anel e sirva com um creme de praliné de avelã.",
            "<strong>Profiteroles:</strong> Forme pequenas bolas de massa e sirva com gelado e calda de chocolate quente.",
            "<strong>Éclairs de Café:</strong> Adicione extrato de café ao creme de confeiteiro e à cobertura."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-eclairs"
    },
    "sobremesas-petit-gateau": {
        "title": "Aula 10: Petit Gâteau (Coração Mole)",
        "description": "O 'pequeno bolo' francês que é uma explosão de chocolate. Aprenda a dominar o tempo e a temperatura para conseguir o exterior cozido e o interior líquido e vulcânico que fazem desta sobremesa um clássico de restaurante.",
        "calculator": {
            "label": "Porções (Bolinhos):",
            "unit": "petit-gateau-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "12-14 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Ramequins ou formas de alumínio pequenas",
                "Batedor de arame",
                "Tigela"
            ]
        },
        "dicaDeMestre": "O segredo do Petit Gâteau está em conhecer o seu forno. O tempo de cozimento é tudo. É melhor errar por menos e ter um bolo mais líquido do que errar por mais e ter um simples bolinho de chocolate. Faça um teste com uma unidade primeiro.",
        "ingredients": [
            {
                "name": "Chocolate meio amargo (70% cacau)",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Manteiga sem sal",
                "base_qty": 100,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Ovos inteiros",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Gemas de Ovo",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Açúcar",
                "base_qty": 50,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Farinha de Trigo",
                "base_qty": 30,
                "unit": "g",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar as Formas e o Forno",
                "description": "Pré-aqueça o forno a 200°C. Unte muito bem 4 ramequins (ou formas pequenas) com manteiga e polvilhe com cacau em pó, cobrindo todo o interior e descartando o excesso.",
                "porque": "A camada de manteiga e cacau garante que o bolo, que é muito delicado, se desenforme perfeitamente sem se partir. O cacau é melhor que a farinha pois não deixa uma camada branca no exterior do bolo.",
                "pontoCritico": "Não deixe um único ponto por untar, especialmente os cantos do fundo, ou o bolo irá colar."
            },
            {
                "title": "A Base de Chocolate e a Mistura de Ovos",
                "description": "Derreta o chocolate e a manteiga juntos em banho-maria. Numa tigela separada, bata os ovos inteiros, as gemas e o açúcar com um batedor de arame até a mistura ficar mais clara e espessa.",
                "porque": "O uso de gemas extra adiciona riqueza e ajuda a criar um centro mais cremoso e líquido.",
                "pontoCritico": "Não é preciso bater os ovos até ao ponto de fita, apenas até o açúcar se dissolver e a mistura ficar homogénea."
            },
            {
                "title": "A Incorporação Final",
                "description": "Verta a mistura de chocolate morno sobre os ovos batidos e incorpore. Por fim, peneire a farinha sobre a mistura e envolva delicadamente com uma espátula, apenas até não haver mais farinha visível.",
                "porque": "A quantidade de farinha é muito pequena, apenas o suficiente para dar estrutura às bordas do bolo, permitindo que o centro se mantenha líquido. Peneirar é fundamental para não criar grumos.",
                "pontoCritico": "Misturar o mínimo possível é a chave. Assim que a farinha estiver incorporada, pare."
            },
            {
                "title": "O Cozimento Preciso",
                "description": "Divida a massa pelas formas preparadas, enchendo até cerca de 3/4 da sua capacidade. Leve ao forno e asse por exatamente 12 a 14 minutos. As bordas devem parecer firmes e cozidas, mas o centro deve ainda parecer ligeiramente mole e tremer um pouco.",
                "porque": "Este é o momento decisivo. O calor alto cozinha as bordas rapidamente, enquanto o centro permanece líquido. O tempo é a única variável que controla este resultado.",
                "pontoCritico": "Cada forno é diferente. 12 minutos é um bom ponto de partida. Desenforme imediatamente sobre um prato e sirva com uma bola de gelado de baunilha para o contraste de temperaturas.",
                "timer": 780
            }
        ],
        "variacoes": [
            "<strong>Com Doce de Leite:</strong> Coloque uma colher de chá de doce de leite de boa qualidade no centro da massa em cada forma antes de levar ao forno.",
            "<strong>Com Café:</strong> Adicione uma pitada de café solúvel ao chocolate derretido.",
            "<strong>Sem Farinha (Gluten-Free):</strong> Pode substituir a pequena quantidade de farinha por amido de milho."
        ],
        "module": "Sobremesas",
        "url": "sobremesas.html#receita-petit-gateau"
    },
    "sobremesas-fitness-nice-cream": {
        "title": "Aula 01: Sorvete de Banana ('Nice Cream')",
        "description": "A sobremesa fitness mais fácil, surpreendente e versátil. Aprenda a transformar bananas congeladas num sorvete cremoso, sem açúcar, sem lactose e com apenas um ingrediente.",
        "calculator": {
            "label": "Número de Bananas:",
            "unit": "nice-cream-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "2 horas (congelação)",
            "rendimento": "1 porção por 2 bananas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Processador de alimentos ou liquidificador potente",
                "Faca"
            ]
        },
        "dicaDeMestre": "O segredo para um 'nice cream' perfeito é a banana. Use bananas bem maduras (com pintinhas pretas), pois são mais doces e cremosas. Congele-as já fatiadas para facilitar o trabalho do seu processador.",
        "ingredients": [
            {
                "name": "Banana madura, fatiada e congelada",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Água ou Leite (se necessário)",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Congelar as Bananas",
                "description": "Descasque bananas bem maduras e corte-as em rodelas de cerca de 1cm de espessura. Disponha as rodelas numa única camada sobre um prato ou tabuleiro forrado com papel vegetal e leve ao congelador por pelo menos 2 horas.",
                "porque": "Congelar as bananas em fatias separadas impede que elas formem um bloco de gelo sólido, o que danificaria o seu liquidificador. A banana congelada é a base estrutural e de cremosidade do 'sorvete'.",
                "pontoCritico": "Não congele as bananas inteiras ou com casca. O processo de as preparar depois de congeladas seria muito difícil."
            },
            {
                "title": "Processar até Ficar Cremoso",
                "description": "Coloque as rodelas de banana congeladas no copo de um processador de alimentos ou liquidificador potente. Comece a pulsar para quebrar os pedaços. Depois, processe continuamente. A mistura irá passar por várias fases: esfarelada, pastosa e, de repente, mágica e cremosa.",
                "porque": "A alta velocidade e a fricção quebram as células da banana congelada, libertando a sua pectina e criando uma emulsão cremosa, muito semelhante a um sorvete tradicional.",
                "pontoCritico": "Tenha paciência. Pode demorar 2 a 4 minutos. Pare para raspar as laterais do copo algumas vezes. Se o seu liquidificador estiver com dificuldades, adicione uma colher de sopa de água ou leite para o ajudar a girar."
            },
            {
                "title": "Servir Imediatamente",
                "description": "Assim que a mistura atingir uma consistência de 'soft serve' (gelado de máquina), está pronta. Sirva imediatamente para uma textura cremosa. Se preferir uma consistência mais firme, pode transferir para um recipiente e levar ao congelador por mais 30 minutos.",
                "porque": "A textura ideal é obtida logo após o processamento. Congelar por muito tempo pode torná-lo demasiado duro.",
                "pontoCritico": "Trabalhe rápido, pois o 'nice cream' derrete mais depressa que um sorvete tradicional."
            }
        ],
        "variacoes": [
            "<strong>Chocolate:</strong> Adicione 1 colher de sopa de cacau em pó.",
            "<strong>Frutos Vermelhos:</strong> Junte 1/2 chávena de morangos ou framboesas congeladas.",
            "<strong>Manteiga de Amendoim:</strong> Adicione 1 colher de sopa de manteiga de amendoim para um boost de proteína e sabor."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-nice-cream"
    },
    "sobremesas-fitness-maca-assada": {
        "title": "Aula 02: Maçã Assada com Canela",
        "description": "Uma sobremesa clássica, quente e reconfortante que perfuma a casa inteira. Assar a maçã concentra a sua doçura natural, tornando-a uma opção leve e saudável para satisfazer a vontade de um doce.",
        "calculator": {
            "label": "Número de Maçãs:",
            "unit": "maca-assada-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "30-40 min",
            "tempoDescanso": "N/A",
            "rendimento": "1 porção por maçã",
            "dificuldade": "Fácil",
            "utensilios": [
                "Travessa de ir ao forno",
                "Faca pequena",
                "Descaroçador de maçã (opcional)"
            ]
        },
        "dicaDeMestre": "Não descasque a maçã completamente. A casca ajuda a manter a estrutura da maçã enquanto assa, evitando que ela se desfaça e se transforme em puré. Faça alguns furos na casca com um garfo para permitir que o vapor saia.",
        "ingredients": [
            {
                "name": "Maçãs (tipo Reineta ou Granny Smith)",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Canela em pó",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer",
                "base_qty": 2,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Nozes ou pecãs picadas",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Água",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar as Maçãs",
                "description": "Pré-aqueça o forno a 190°C. Lave bem as maçãs. Com uma faca pequena ou um descaroçador, remova o caroço central da maçã pelo topo, criando uma cavidade mas sem atravessar a base.",
                "porque": "Criar esta cavidade permite-nos rechear a maçã com sabores que irão penetrar na polpa durante o cozimento, além de remover a parte não comestível.",
                "pontoCritico": "Tenha cuidado para não furar a base da maçã, para que o recheio e os sucos não vazem por baixo."
            },
            {
                "title": "Rechear e Preparar para Assar",
                "description": "Numa tigela pequena, misture a canela, o mel (ou xarope) e as nozes picadas. Recheie a cavidade de cada maçã com esta mistura. Coloque as maçãs numa pequena travessa de forno e adicione a água no fundo da travessa.",
                "porque": "O recheio transforma uma simples maçã assada numa sobremesa mais complexa em sabor e textura. A água no fundo da travessa cria um ambiente húmido no forno, ajudando a maçã a cozinhar no vapor e a não secar.",
                "pontoCritico": "Não encha demasiado a travessa, deixe algum espaço entre as maçãs."
            },
            {
                "title": "Assar até Ficar Macia",
                "description": "Leve ao forno e asse por 30 a 40 minutos. A maçã está pronta quando a polpa estiver muito macia (um garfo deve entrar facilmente) e a pele enrugada. A meio do tempo, pode regar as maçãs com o líquido que se forma na travessa.",
                "porque": "O calor do forno quebra as fibras da maçã, amaciando-a, e carameliza os açúcares naturais e do recheio, intensificando o sabor.",
                "pontoCritico": "O tempo pode variar muito dependendo do tamanho e da variedade da maçã. Comece a verificar a partir dos 25 minutos.",
                "timer": 1800
            }
        ],
        "variacoes": [
            "<strong>Com Passas:</strong> Adicione passas ou arandos secos ao recheio.",
            "<strong>Servir com:</strong> Uma colher de iogurte grego natural ou uma pequena bola de 'nice cream' de baunilha.",
            "<strong>No Micro-ondas:</strong> Para uma versão ultra-rápida, prepare a maçã da mesma forma e cozinhe no micro-ondas em alta potência por 4-6 minutos."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-maca-assada"
    },
    "sobremesas-fitness-pudim-chia": {
        "title": "Aula 03: Pudim de Chia com Frutas",
        "description": "Descubra o poder das sementes de chia para criar um pudim cremoso, sem cozimento e carregado de fibras, proteínas e ómega 3. É um pequeno-almoço, lanche ou sobremesa incrivelmente versátil e saciante.",
        "calculator": {
            "label": "Porções:",
            "unit": "pudim-chia-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "2 horas (mínimo)",
            "rendimento": "Serve 2 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frasco ou tigela com tampa",
                "Batedor de arame pequeno ou garfo"
            ]
        },
        "dicaDeMestre": "O segredo para um pudim de chia sem grumos é misturá-lo duas vezes. Mexa bem quando combinar os ingredientes pela primeira vez, e depois, passados 10-15 minutos, mexa vigorosamente uma segunda vez antes de o levar à geleira. Isto quebra quaisquer aglomerados de chia que se tenham formado.",
        "ingredients": [
            {
                "name": "Sementes de Chia",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Leite ou bebida vegetal (amêndoa, coco)",
                "base_qty": 1,
                "unit": "chávena (240ml)",
                "scalable": true
            },
            {
                "name": "Extrato de Baunilha",
                "base_qty": 0.5,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Adoçante (mel, xarope de ácer)",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Frutas frescas para servir (manga, frutos vermelhos)",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "A Mistura Inicial",
                "description": "Num frasco ou tigela, junte as sementes de chia, o leite, a baunilha e o adoçante. Com um batedor de arame pequeno ou um garfo, mexa muito bem por cerca de 1 minuto para garantir que todas as sementes estão em contacto com o líquido.",
                "porque": "As sementes de chia têm uma camada exterior hidrofílica, o que significa que absorvem muitas vezes o seu peso em líquido. Esta mistura inicial é o que ativa essa propriedade.",
                "pontoCritico": "Se não misturar bem, as sementes podem aglomerar-se no fundo e não formar o gel de forma uniforme."
            },
            {
                "title": "O Segundo 'Round' e o Descanso",
                "description": "Deixe a mistura descansar na bancada por 10 a 15 minutos. As sementes começarão a inchar. Mexa vigorosamente uma segunda vez. Tape e leve à geleira por pelo menos 2 horas, ou durante a noite.",
                "porque": "A segunda mistura quebra os primeiros aglomerados que se formam, garantindo uma textura final perfeitamente lisa e homogénea. O tempo na geleira é quando o gel se forma completamente, criando a consistência de pudim.",
                "pontoCritico": "O tempo mínimo de descanso é de 2 horas, mas o ideal é deixar de um dia para o outro para uma textura perfeita.",
                "timer": 7200
            }
        ],
        "variacoes": [
            "<strong>Pudim de Chocolate:</strong> Misture 1-2 colheres de sopa de cacau em pó na mistura inicial.",
            "<strong>Pudim de Matcha:</strong> Adicione 1 colher de chá de chá matcha em pó.",
            "<strong>Em Camadas:</strong> Crie um 'parfait' alternando camadas de pudim de chia com camadas de puré de fruta e granola."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-pudim-chia"
    },
    "sobremesas-fitness-mousse-abacate": {
        "title": "Aula 04: Mousse de Abacate e Cacau",
        "description": "Uma sobremesa 'secreta' que vai enganar qualquer um. A cremosidade do abacate substitui as natas e os ovos para criar uma mousse de chocolate densa, rica e cheia de gorduras saudáveis.",
        "calculator": {
            "label": "Porções:",
            "unit": "mousse-abacate-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "1 hora",
            "rendimento": "Serve 2-3 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Processador de alimentos ou liquidificador"
            ]
        },
        "dicaDeMestre": "Use um abacate que esteja perfeitamente maduro, mas não passado (sem manchas pretas na polpa). A maturação correta é a chave para uma textura ultra-cremosa e um sabor neutro que não interfere com o chocolate.",
        "ingredients": [
            {
                "name": "Abacate maduro",
                "base_qty": 1,
                "unit": "unid. grande",
                "scalable": true
            },
            {
                "name": "Cacau em Pó (sem açúcar)",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Leite ou bebida vegetal",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Extrato de Baunilha",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Processar os Ingredientes",
                "description": "Num processador de alimentos ou liquidificador, junte a polpa do abacate, o cacau em pó, o adoçante escolhido, o leite e a baunilha. Processe em alta velocidade.",
                "porque": "O processamento em alta velocidade quebra as fibras do abacate e emulsiona a sua gordura com os outros ingredientes, criando a textura rica e aveludada de uma mousse tradicional.",
                "pontoCritico": "Pode ser necessário parar e raspar as laterais do copo algumas vezes para garantir que todos os ingredientes são incorporados e que a mistura fica perfeitamente lisa."
            },
            {
                "title": "Ajustar e Refrigerar",
                "description": "Continue a processar até obter um creme completamente liso e sem grumos. Prove e ajuste a doçura se necessário. Divida a mousse por taças e leve à geleira por pelo menos 1 hora para firmar e para que os sabores se fundam.",
                "porque": "O tempo de refrigeração ajuda a mousse a firmar ligeiramente e, mais importante, permite que o sabor do cacau se desenvolva e se sobreponha a qualquer resquício de sabor do abacate.",
                "pontoCritico": "Sirva frio. A temperatura baixa realça a textura e o sabor a chocolate."
            }
        ],
        "variacoes": [
            "<strong>Com Café:</strong> Adicione uma colher de chá de café solúvel para intensificar o sabor do chocolate.",
            "<strong>Com Hortelã:</strong> Junte algumas folhas de hortelã fresca para uma versão 'after eight'.",
            "<strong>Com Laranja:</strong> Adicione raspas de laranja para um toque cítrico."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-mousse-abacate"
    },
    "sobremesas-fitness-cookies-aveia": {
        "title": "Aula 05: Cookies de Aveia e Banana",
        "description": "Aprenda a fazer os cookies mais fáceis e saudáveis do mundo. Com apenas 3 ingredientes base, você cria um snack macio, saboroso e perfeito para quando apetece um doce sem culpa.",
        "calculator": {
            "label": "Porções (aprox. 12 cookies):",
            "unit": "cookies-aveia-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "15-20 min",
            "tempoDescanso": "N/A",
            "rendimento": "Cerca de 12 cookies",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tigela",
                "Garfo",
                "Tabuleiro de forno"
            ]
        },
        "dicaDeMestre": "Estes cookies não se espalham no forno como os tradicionais. O formato que você lhes der antes de assar será o formato final. Use as costas de uma colher para os achatar ligeiramente e dar-lhes uma forma redonda.",
        "ingredients": [
            {
                "name": "Bananas bem maduras",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Aveia em Flocos",
                "base_qty": 1,
                "unit": "chávena (90g)",
                "scalable": true
            },
            {
                "name": "Pepitas de Chocolate Amargo (opcional)",
                "base_qty": 0.25,
                "unit": "chávena",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar a Massa",
                "description": "Pré-aqueça o forno a 180°C e forre um tabuleiro com papel vegetal. Numa tigela, esmague as bananas com um garfo até formar um puré. Junte a aveia e as pepitas de chocolate (se usar) e misture bem.",
                "porque": "A banana atua como o adoçante e o agente ligante desta receita, eliminando a necessidade de açúcar refinado, ovos ou gordura. A aveia dá estrutura e fibras.",
                "pontoCritico": "Use bananas com muitas pintas pretas. Elas são muito mais doces e fáceis de esmagar, o que é essencial para esta receita."
            },
            {
                "title": "Moldar e Assar",
                "description": "Com uma colher, coloque pequenas porções da massa no tabuleiro preparado, formando pequenos montes. Achate-os ligeiramente. Leve ao forno por 15 a 20 minutos, ou até as bordas estarem douradas e o centro firme.",
                "porque": "Como não têm fermento ou gordura em grande quantidade, estes cookies não mudam muito de forma, por isso a moldagem inicial é importante para o aspeto final.",
                "pontoCritico": "Deixe espaço entre os cookies no tabuleiro, embora eles não se espalhem muito.",
                "timer": 900
            }
        ],
        "variacoes": [
            "<strong>Com Frutos Secos:</strong> Substitua as pepitas de chocolate por passas, arandos ou nozes picadas.",
            "<strong>Com Especiarias:</strong> Adicione 1/2 colher de chá de canela ou noz-moscada à massa.",
            "<strong>Com Manteiga de Amendoim:</strong> Misture uma colher de sopa de manteiga de amendoim na massa para mais sabor e proteína."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-cookies-aveia"
    },
    "sobremesas-fitness-energy-balls": {
        "title": "Aula 06: Bolinhas Energéticas de Tâmara",
        "description": "O snack perfeito para levar para qualquer lado, para antes do treino ou para matar a vontade de um doce. Estas bolinhas não precisam de cozimento e são adoçadas naturalmente com tâmaras.",
        "calculator": {
            "label": "Porções (aprox. 12 bolinhas):",
            "unit": "energy-balls-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "30 min (geleira)",
            "rendimento": "Cerca de 12-15 bolinhas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Processador de alimentos"
            ]
        },
        "dicaDeMestre": "Se as suas tâmaras estiverem um pouco secas, demolhe-as em água quente por 10 minutos antes de as usar. Isso irá reidratá-las e torná-las muito mais fáceis de processar, resultando numa 'massa' mais coesa.",
        "ingredients": [
            {
                "name": "Tâmaras Medjool, sem caroço",
                "base_qty": 1,
                "unit": "chávena (aprox. 12)",
                "scalable": true
            },
            {
                "name": "Frutos secos (nozes, amêndoas, cajus)",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Aveia em flocos",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Manteiga de amendoim ou amêndoa",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sementes de Chia ou Linhaça (opcional)",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Coco ralado ou cacau em pó (para enrolar)",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Processar os Ingredientes",
                "description": "Num processador de alimentos, junte as tâmaras, os frutos secos, a aveia, a manteiga de amendoim e as sementes (se usar). Processe até a mistura se começar a agregar e formar uma bola.",
                "porque": "As tâmaras são pegajosas e atuam como o 'cimento' que une todos os ingredientes. Os frutos secos e a aveia dão a estrutura e a textura.",
                "pontoCritico": "Não processe em demasia ao ponto de virar uma manteiga. Queremos sentir os pequenos pedaços dos frutos secos."
            },
            {
                "title": "Moldar e Refrigerar",
                "description": "Com as mãos, retire pequenas porções da massa e enrole-as para formar bolinhas do tamanho de uma noz. Passe as bolinhas por coco ralado, cacau em pó ou mais sementes de chia para as cobrir. Leve à geleira por pelo menos 30 minutos para firmarem.",
                "porque": "Refrigerar ajuda as bolinhas a ficarem mais firmes e menos pegajosas, além de permitir que os sabores se fundam.",
                "pontoCritico": "Se a mistura estiver demasiado pegajosa para enrolar, molhe ligeiramente as mãos."
            }
        ],
        "variacoes": [
            "<strong>Sabor a Brownie:</strong> Adicione 2 colheres de sopa de cacau em pó à mistura.",
            "<strong>Sabor a Tarte de Cenoura:</strong> Adicione cenoura ralada, noz-moscada e canela.",
            "<strong>Com Proteína:</strong> Junte uma colher de proteína em pó para um snack pós-treino."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-energy-balls"
    },
    "sobremesas-fitness-muffins-fit": {
        "title": "Aula 07: Muffins de Maçã e Aveia",
        "description": "Aprenda a fazer muffins fofos, húmidos e saborosos, usando a doçura natural da maçã e a fibra da aveia. São perfeitos para um lanche ou pequeno-almoço saudável para levar.",
        "calculator": {
            "label": "Número de Muffins:",
            "unit": "muffins-fit-input",
            "base_value": 12,
            "default_value": 12
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "20-25 min",
            "tempoDescanso": "10 min",
            "rendimento": "12 muffins",
            "dificuldade": "Fácil",
            "utensilios": [
                "Forma de muffins",
                "Tigela",
                "Batedor de arame"
            ]
        },
        "dicaDeMestre": "Não misture a massa em excesso depois de adicionar a farinha. Misture apenas até os ingredientes secos e húmidos se combinarem. Isto evita o desenvolvimento do glúten e garante muffins mais fofos e leves.",
        "ingredients": [
            {
                "name": "Farinha de Aveia (ou flocos triturados)",
                "base_qty": 1.5,
                "unit": "chávenas",
                "scalable": true
            },
            {
                "name": "Maçã, descascada e ralada",
                "base_qty": 1,
                "unit": "unid. grande",
                "scalable": true
            },
            {
                "name": "Ovos",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer",
                "base_qty": 0.25,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Iogurte Grego Natural",
                "base_qty": 0.25,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Óleo de Coco, derretido",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Fermento em Pó",
                "base_qty": 1.5,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Canela em Pó",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar a Massa",
                "description": "Pré-aqueça o forno a 180°C e prepare uma forma de 12 muffins. Numa tigela grande, misture os ingredientes húmidos: a maçã ralada, os ovos, o mel, o iogurte e o óleo de coco.",
                "porque": "A maçã ralada e o iogurte fornecem a maior parte da humidade, mantendo os muffins macios sem necessidade de muita gordura.",
                "pontoCritico": "Esprema ligeiramente a maçã ralada para remover o excesso de água antes de a adicionar à mistura."
            },
            {
                "title": "Combinar Secos e Húmidos",
                "description": "Numa outra tigela, misture os ingredientes secos: a farinha de aveia, o fermento e a canela. Despeje os ingredientes secos sobre os húmidos e misture com uma espátula, apenas até incorporar.",
                "porque": "Separar os ingredientes secos e húmidos primeiro garante uma distribuição uniforme do fermento e evita que se misture a massa em demasia.",
                "pontoCritico": "Alguns grumos na massa são perfeitamente normais. É melhor ter grumos do que misturar em excesso."
            },
            {
                "title": "Assar os Muffins",
                "description": "Divida a massa uniformemente pelas formas de muffin, enchendo cada uma até cerca de 3/4. Leve ao forno por 20 a 25 minutos, ou até um palito inserido no centro sair limpo. Deixe arrefecer na forma por alguns minutos antes de transferir para uma grelha.",
                "porque": "O tempo de arrefecimento na forma permite que os muffins firmem um pouco, tornando mais fácil removê-los sem que se partam.",
                "pontoCritico": "Não encha demasiado as formas, pois os muffins irão crescer.",
                "timer": 1200
            }
        ],
        "variacoes": [
            "<strong>Com Nozes:</strong> Adicione um punhado de nozes picadas à massa para uma textura crocante.",
            "<strong>Com Frutos Vermelhos:</strong> Substitua a maçã por mirtilos ou framboesas.",
            "<strong>Cobertura de Streusel Fit:</strong> Misture aveia, um pouco de óleo de coco e canela e polvilhe por cima dos muffins antes de assar."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-muffins-fit"
    },
    "sobremesas-fitness-iogurte-grelhado": {
        "title": "Aula 08: Iogurte Grego com Pêssegos Grelhados",
        "description": "Uma sobremesa incrivelmente simples, rápida e elegante. Aprenda como o calor de uma frigideira pode transformar uma fruta, caramelizando os seus açúcares naturais e criando um contraste delicioso com a acidez do iogurte.",
        "calculator": {
            "label": "Número de Pêssegos:",
            "unit": "iogurte-grelhado-input",
            "base_value": 2,
            "default_value": 2
        },
        "details": {
            "tempoPreparo": "5 min",
            "tempoCozimento": "6-8 min",
            "tempoDescanso": "N/A",
            "rendimento": "Serve 2 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Frigideira-grelha ou frigideira normal"
            ]
        },
        "dicaDeMestre": "Escolha pêssegos que estejam maduros, mas ainda firmes ao toque. Se estiverem demasiado maduros, irão desmanchar-se com o calor. A firmeza é a chave para conseguir belas marcas de grelha.",
        "ingredients": [
            {
                "name": "Pêssegos maduros, mas firmes",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Iogurte Grego Natural",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Folhas de Hortelã Fresca",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "Preparar e Grelhar a Fruta",
                "description": "Corte os pêssegos ao meio e remova o caroço. Pincele a parte cortada com um pouco de mel. Aqueça uma frigideira-grelha em lume médio-alto. Grelhe os pêssegos com a parte cortada para baixo por 3 a 4 minutos, sem mexer.",
                "porque": "O calor alto e o contacto direto com a frigideira caramelizam o açúcar natural do pêssego e o mel, criando uma superfície dourada e um sabor tostado delicioso. Não mexer é o que cria as marcas de grelha.",
                "pontoCritico": "Não sobrecarregue a frigideira para manter a temperatura alta."
            },
            {
                "title": "Cozinhar o Outro Lado",
                "description": "Vire os pêssegos e cozinhe por mais 3 a 4 minutos do lado da pele, apenas para que amoleçam por completo.",
                "porque": "Este passo finaliza o cozimento, tornando a fruta tenra e suculenta.",
                "pontoCritico": "Reduza o lume se o mel começar a queimar."
            }
        ],
        "variacoes": [
            "<strong>Outras Frutas:</strong> Esta técnica funciona bem com nectarinas, ananás em fatias ou figos.",
            "<strong>Com Crocância:</strong> Sirva com um pouco de granola ou pistácios picados por cima.",
            "<strong>Toque Balsâmico:</strong> Regue com um fio de creme balsâmico no final para um contraste agridoce."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-iogurte-grelhado"
    },
    "sobremesas-fitness-brownie-feijao": {
        "title": "Aula 09: Brownie de Feijão Preto",
        "description": "Prepare-se para se surpreender. Esta receita usa feijão preto como base secreta para criar brownies incrivelmente densos, húmidos e ricos em proteína e fibra, sem que ninguém adivinhe o ingrediente principal.",
        "calculator": {
            "label": "Latas de Feijão Preto (400g):",
            "unit": "brownie-feijao-input",
            "base_value": 1,
            "default_value": 1
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "25-30 min",
            "tempoDescanso": "30 min",
            "rendimento": "9 brownies",
            "dificuldade": "Fácil",
            "utensilios": [
                "Processador de alimentos",
                "Forma quadrada (20x20cm)"
            ]
        },
        "dicaDeMestre": "O segredo para ninguém descobrir o ingrediente secreto é lavar e escorrer muito bem o feijão preto enlatado para remover todo o sabor salgado da conserva. Depois, processe-o até obter um puré o mais liso possível.",
        "ingredients": [
            {
                "name": "Feijão Preto cozido, bem lavado e escorrido",
                "base_qty": 1,
                "unit": "lata (400g)",
                "scalable": true
            },
            {
                "name": "Ovos",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Cacau em Pó (sem açúcar)",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Açúcar de Coco ou Mascavado",
                "base_qty": 0.75,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Óleo de Coco, derretido",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Fermento em Pó",
                "base_qty": 0.5,
                "unit": "c. de chá",
                "scalable": true
            },
            {
                "name": "Pepitas de Chocolate Amargo",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar a Massa",
                "description": "Pré-aqueça o forno a 180°C. Forre uma forma quadrada (20x20cm). Num processador de alimentos, junte todos os ingredientes exceto as pepitas de chocolate. Processe em alta velocidade por vários minutos até obter uma massa completamente lisa e homogénea.",
                "porque": "O feijão substitui a farinha e a maior parte da gordura. Processá-lo muito bem é essencial para que a sua textura se desfaça e se integre na massa, criando uma base densa e 'fudgy'.",
                "pontoCritico": "Raspe as laterais do processador várias vezes para garantir que não ficam pedaços de feijão por triturar."
            },
            {
                "title": "Adicionar o Chocolate e Assar",
                "description": "Incorpore as pepitas de chocolate na massa. Despeje na forma preparada e alise a superfície. Leve ao forno por 25 a 30 minutos. O brownie está pronto quando um palito inserido no centro sai com algumas migalhas húmidas.",
                "porque": "As pepitas de chocolate adicionam uma textura extra e mais sabor. O tempo de cozedura é crucial para um interior húmido.",
                "pontoCritico": "Não cozinhe demais. É preferível um brownie ligeiramente mal cozido do que um seco.",
                "timer": 1500
            }
        ],
        "variacoes": [
            "<strong>Com Nozes:</strong> Adicione um punhado de nozes picadas à massa.",
            "<strong>Extra Café:</strong> Junte uma colher de chá de café expresso em pó para intensificar o sabor do chocolate."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-brownie-feijao"
    },
    "sobremesas-fitness-torta-limao-fit": {
        "title": "Aula 10: Torta de Limão Fit",
        "description": "Uma versão leve, proteica e sem cozimento da clássica torta de limão. Aprenda a fazer uma base crocante de frutos secos e um recheio cremoso e azedinho com iogurte grego.",
        "calculator": {
            "label": "Diâmetro da Forma (cm):",
            "unit": "torta-limao-fit-input",
            "base_value": 20,
            "default_value": 20
        },
        "details": {
            "tempoPreparo": "20 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "4 horas",
            "rendimento": "Serve 8 pessoas",
            "dificuldade": "Intermediário",
            "utensilios": [
                "Forma de tarte com fundo amovível",
                "Processador de alimentos"
            ]
        },
        "dicaDeMestre": "Para um creme mais firme, use gelatina incolor. Hidrate uma folha de gelatina em água fria, esprema e dissolva-a numa colher de sopa de água quente. Incorpore esta mistura ao creme de iogurte antes de o verter sobre a base.",
        "ingredients": [
            {
                "name": "Amêndoas ou Cajus",
                "base_qty": 1.5,
                "unit": "chávenas",
                "scalable": true,
                "heading": "Para a Base"
            },
            {
                "name": "Tâmaras Medjool, sem caroço",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Óleo de Coco, derretido",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Iogurte Grego Natural (alto teor de proteína)",
                "base_qty": 500,
                "unit": "g",
                "scalable": true,
                "heading": "Para o Recheio"
            },
            {
                "name": "Sumo e Raspas de Limão",
                "base_qty": 3,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "A Base Crocante",
                "description": "No processador de alimentos, triture as amêndoas até obter uma farinha grossa. Adicione as tâmaras e o óleo de coco e processe até a mistura se agregar e formar uma 'massa' pegajosa. Pressione esta mistura firmemente no fundo e nas laterais de uma forma de tarte.",
                "porque": "Esta é uma base clássica de sobremesas 'raw' (cruas). As tâmaras atuam como adoçante e como 'cola' para unir os frutos secos.",
                "pontoCritico": "Pressione a base de forma uniforme para que não haja partes mais grossas que outras."
            },
            {
                "title": "O Recheio Cremoso e Proteico",
                "description": "Numa tigela, misture bem o iogurte grego, o sumo e as raspas de limão e o adoçante. Prove e ajuste a doçura e a acidez a gosto. Despeje o creme sobre a base na forma.",
                "porque": "O iogurte grego cria um recheio naturalmente espesso, cremoso e rico em proteína. As raspas de limão contêm os óleos essenciais da fruta, conferindo um aroma muito mais intenso que apenas o sumo.",
                "pontoCritico": "Use iogurte grego gordo e não adoçado para a melhor textura e controlo sobre a doçura."
            },
            {
                "title": "Refrigerar para Firmar",
                "description": "Leve a torta à geleira por pelo menos 4 horas, ou até o recheio estar completamente firme. Sirva fria, decorada com mais raspas de limão.",
                "porque": "O frio firma o óleo de coco na base e o iogurte no recheio, dando à torta a sua estrutura final.",
                "pontoCritico": "Este passo não pode ser apressado. A torta precisa de tempo para assentar.",
                "timer": 14400
            }
        ],
        "variacoes": [
            "<strong>Torta de Lima:</strong> Substitua o limão por lima para a versão 'key lime pie'.",
            "<strong>Com Coco:</strong> Adicione coco ralado à base e um pouco de leite de coco ao recheio.",
            "<strong>Base de Aveia:</strong> Substitua metade dos frutos secos por flocos de aveia."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-torta-limao-fit"
    },
    "sobremesas-fitness-bolo-laranja-fit": {
        "title": "Aula 11: Bolo de Laranja com Farinha de Amêndoa",
        "description": "Um bolo incrivelmente húmido, fofinho e sem glúten, que usa a farinha de amêndoa para a estrutura e o sumo de laranja para um sabor vibrante. Uma forma elegante de desfrutar de um bolo clássico.",
        "calculator": {
            "label": "Diâmetro da Forma (cm):",
            "unit": "bolo-laranja-fit-input",
            "base_value": 20,
            "default_value": 20
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "35-40 min",
            "tempoDescanso": "20 min",
            "rendimento": "1 bolo de 20cm",
            "dificuldade": "Fácil",
            "utensilios": [
                "Forma redonda",
                "Batedor de arame",
                "Tigela"
            ]
        },
        "dicaDeMestre": "Para um sabor a laranja ainda mais intenso, ferva uma laranja inteira em água por 1 hora, deixe arrefecer, corte-a e remova os caroços, e depois triture-a inteira (com casca) para usar na massa. O resultado é um sabor profundo e complexo.",
        "ingredients": [
            {
                "name": "Farinha de Amêndoa",
                "base_qty": 200,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Ovos",
                "base_qty": 3,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer",
                "base_qty": 100,
                "unit": "ml",
                "scalable": true
            },
            {
                "name": "Sumo e Raspas de Laranja",
                "base_qty": 2,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Fermento em Pó",
                "base_qty": 1,
                "unit": "c. de chá",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Preparar a Massa",
                "description": "Pré-aqueça o forno a 180°C. Unte e forre o fundo de uma forma redonda com papel vegetal. Numa tigela grande, bata os ovos com o mel até ficar uma mistura pálida. Adicione as raspas e o sumo de laranja.",
                "porque": "Bater os ovos com o adoçante incorpora ar, o que ajudará o bolo a crescer e a ficar mais fofo, mesmo sem farinha de trigo.",
                "pontoCritico": "Use as raspas da laranja antes de espremer o sumo. É muito mais fácil."
            },
            {
                "title": "Incorporar os Secos",
                "description": "Adicione a farinha de amêndoa e o fermento à mistura de ovos. Envolva delicadamente com uma espátula apenas até combinar.",
                "porque": "A farinha de amêndoa é naturalmente isenta de glúten, o que resulta num bolo muito húmido. Misturar pouco mantém a leveza da massa.",
                "pontoCritico": "Não misture em excesso para não perder o ar incorporado nos ovos."
            },
            {
                "title": "Assar o Bolo",
                "description": "Despeje a massa na forma preparada e leve ao forno por 35 a 40 minutos. O bolo estará pronto quando estiver dourado e um palito inserido no centro sair limpo. Deixe arrefecer na forma antes de desenformar.",
                "porque": "Bolos com farinha de amêndoa são mais húmidos e delicados, por isso é importante garantir que estão bem cozidos no centro.",
                "pontoCritico": "Deixe o bolo arrefecer completamente antes de o fatiar, pois ele é mais quebradiço enquanto está quente.",
                "timer": 2100
            }
        ],
        "variacoes": [
            "<strong>Com Calda:</strong> Ferva o sumo de mais uma laranja com uma colher de mel e regue sobre o bolo ainda morno.",
            "<strong>Com Iogurte:</strong> Sirva com uma colher de iogurte grego para um contraste de acidez.",
            "<strong>Com Sementes de Papoila:</strong> Adicione uma colher de sopa de sementes de papoila à massa para uma textura extra."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-bolo-laranja-fit"
    },
    "sobremesas-fitness-danoninho-inhame": {
        "title": "Aula 12: 'Danoninho' Caseiro de Morango e Inhame",
        "description": "Descubra o segredo do inhame para criar um creme de frutas incrivelmente parecido com o iogurte 'Danoninho', mas de forma 100% natural, sem lactose e sem conservantes.",
        "calculator": {
            "label": "Gramas de Inhame:",
            "unit": "danoninho-inhame-input",
            "base_value": 300,
            "default_value": 300
        },
        "details": {
            "tempoPreparo": "10 min",
            "tempoCozimento": "20 min",
            "tempoDescanso": "1 hora (geleira)",
            "rendimento": "Serve 4 pessoas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Liquidificador",
                "Panela"
            ]
        },
        "dicaDeMestre": "O inhame deve ser cozido até estar a desfazer-se. Quanto mais macio, mais cremoso e liso será o resultado final. Descasque o inhame depois de cozido (com cuidado para não se queimar), pois a casca sai muito mais facilmente.",
        "ingredients": [
            {
                "name": "Inhame, descascado e em cubos",
                "base_qty": 300,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Morangos frescos ou congelados",
                "base_qty": 250,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Sumo de Limão",
                "base_qty": 1,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Mel ou outro adoçante",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Cozinhar o Inhame",
                "description": "Cozinhe o inhame em água a ferver por cerca de 20 minutos, ou até estar extremamente macio e a desfazer-se.",
                "porque": "O cozimento do inhame quebra as suas fibras e amido, o que, quando batido, cria uma base espessa e neutra, perfeita para absorver o sabor das frutas.",
                "pontoCritico": "Não cozinhe de menos. A maciez do inhame é o fator mais importante para a textura do creme."
            },
            {
                "title": "Bater o Creme",
                "description": "No liquidificador, junte o inhame cozido e escorrido, os morangos, o sumo de limão e o adoçante. Bata em alta velocidade até obter um creme completamente liso, homogéneo e com uma cor vibrante.",
                "porque": "O liquidificador emulsiona todos os ingredientes, criando a textura de iogurte. O limão realça o sabor do morango e ajuda na conservação.",
                "pontoCritico": "Se o liquidificador tiver dificuldades, adicione 1 ou 2 colheres de sopa de água para o ajudar a funcionar."
            },
            {
                "title": "Refrigerar e Servir",
                "description": "Transfira o creme para um recipiente ou tacinhas individuais e leve à geleira por pelo menos 1 hora. Sirva frio.",
                "porque": "A refrigeração firma o creme e apura os sabores.",
                "pontoCritico": "Pode ser guardado na geleira por até 3 dias."
            }
        ],
        "variacoes": [
            "<strong>Com Manga:</strong> Substitua os morangos por manga para uma versão tropical.",
            "<strong>Com Maracujá:</strong> Use a polpa de um maracujá para um sabor mais ácido.",
            "<strong>Versão Chocolate:</strong> Use cacau em pó e banana em vez de morangos."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-danoninho-inhame"
    },
    "sobremesas-fitness-cheesecake-copo": {
        "title": "Aula 13: Cheesecake Fit no Copo",
        "description": "A forma mais fácil e rápida de matar a vontade de cheesecake. Esta versão descomplicada é montada em copos, em porções individuais, e usa iogurte para um recheio leve e proteico.",
        "calculator": {
            "label": "Porções (Copos):",
            "unit": "cheesecake-copo-input",
            "base_value": 4,
            "default_value": 4
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "2 horas",
            "rendimento": "4 copos",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tigela",
                "Copos ou frascos de vidro"
            ]
        },
        "dicaDeMestre": "Para uma base mais crocante, toste a aveia numa frigideira seca por alguns minutos até ficar dourada e aromática. Deixe arrefecer completamente antes de a misturar com os outros ingredientes da base.",
        "ingredients": [
            {
                "name": "Flocos de Aveia",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true,
                "heading": "Para a Base"
            },
            {
                "name": "Frutos secos (amêndoas, nozes)",
                "base_qty": 0.25,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Tâmaras ou Mel",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Iogurte Grego Natural, espesso",
                "base_qty": 500,
                "unit": "g",
                "scalable": true,
                "heading": "Para o Recheio"
            },
            {
                "name": "Queijo Creme Light (opcional)",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Sumo e Raspas de Limão",
                "base_qty": 1,
                "unit": "unid.",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer",
                "base_qty": 3,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Frutos Vermelhos, para cobrir",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true,
                "heading": "Para a Cobertura"
            }
        ],
        "steps": [
            {
                "title": "Preparar a Base",
                "description": "Se usar tâmaras, processe-as com os frutos secos e a aveia até formar uma areia grossa. Se usar mel, simplesmente misture todos os ingredientes da base numa tigela. Divida a mistura pelo fundo dos copos e pressione levemente para formar a base.",
                "porque": "Esta base sem cozimento é rica em fibras e gorduras saudáveis, contrastando com o recheio cremoso.",
                "pontoCritico": "Não pressione demasiado a base, para que não fique dura."
            },
            {
                "title": "O Recheio Cremoso",
                "description": "Numa tigela, misture o iogurte grego, o queijo creme (se usar), o sumo e as raspas de limão, e o adoçante. Bata bem até obter um creme liso e homogéneo. Divida o creme pelos copos, sobre a base.",
                "porque": "O iogurte grego é a estrela, fornecendo proteína e cremosidade. O queijo creme adiciona o sabor característico do cheesecake, e o limão corta a riqueza com acidez.",
                "pontoCritico": "Use um iogurte bem espesso para um recheio mais firme."
            },
            {
                "title": "A Cobertura e o Descanso",
                "description": "Faça uma calda rápida com os frutos vermelhos, levando-os ao lume com uma colher de água até se desfazerem, ou simplesmente use-os frescos. Cubra o cheesecake com os frutos. Leve os copos à geleira por pelo menos 2 horas.",
                "porque": "A cobertura de fruta adiciona cor e um sabor agridoce. O tempo de refrigeração é essencial para que o recheio firme e os sabores se fundam.",
                "pontoCritico": "Deixe a calda de fruta arrefecer antes de a colocar sobre o creme para não o derreter.",
                "timer": 7200
            }
        ],
        "variacoes": [
            "<strong>Com Maracujá:</strong> Use uma calda de maracujá como cobertura.",
            "<strong>Sabor a Chocolate:</strong> Adicione cacau em pó ao recheio e use tâmaras e cacau na base.",
            "<strong>Com Manga:</strong> Cubra com uma camada de puré de manga fresco."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-cheesecake-copo"
    },
    "sobremesas-fitness-barra-proteina": {
        "title": "Aula 14: Barra de Proteína Caseira",
        "description": "Poupe dinheiro e controle exatamente o que come. Aprenda a fazer as suas próprias barras de proteína, sem cozimento, perfeitas para um lanche rápido ou para depois do treino.",
        "calculator": {
            "label": "Porções (Barras):",
            "unit": "barra-proteina-input",
            "base_value": 8,
            "default_value": 8
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "N/A",
            "tempoDescanso": "1 hora",
            "rendimento": "8-10 barras",
            "dificuldade": "Fácil",
            "utensilios": [
                "Tigela",
                "Forma retangular pequena",
                "Papel vegetal"
            ]
        },
        "dicaDeMestre": "A consistência pode variar muito dependendo da sua proteína em pó. Se a mistura estiver demasiado seca e quebradiça, adicione mais um pouco de manteiga de amendoim ou leite. Se estiver demasiado mole, adicione mais um pouco de aveia ou proteína em pó.",
        "ingredients": [
            {
                "name": "Proteína em Pó (Whey ou Vegetal), sabor baunilha ou chocolate",
                "base_qty": 1,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Manteiga de Amendoim ou Amêndoa",
                "base_qty": 0.5,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer",
                "base_qty": 0.25,
                "unit": "chávena",
                "scalable": true
            },
            {
                "name": "Flocos de Aveia",
                "base_qty": 1.5,
                "unit": "chávenas",
                "scalable": true
            },
            {
                "name": "Leite ou bebida vegetal",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Pepitas de Chocolate Amargo (opcional)",
                "base_qty": 0.25,
                "unit": "chávena",
                "scalable": true
            }
        ],
        "steps": [
            {
                "title": "Misturar os Ingredientes",
                "description": "Numa tigela grande, junte a proteína em pó, a aveia, a manteiga de amendoim, o mel e o leite. Misture muito bem com uma colher ou com as mãos, até formar uma 'massa' densa e homogénea. Se usar, incorpore as pepitas de chocolate.",
                "porque": "A manteiga de amendoim e o mel atuam como agentes ligantes que unem todos os ingredientes secos. A proteína em pó e a aveia dão a estrutura.",
                "pontoCritico": "A mistura deve ser espessa mas maleável. Ajuste a quantidade de leite se necessário, uma colher de cada vez."
            },
            {
                "title": "Pressionar e Refrigerar",
                "description": "Forre uma forma retangular pequena (aprox. 20x20cm) com papel vegetal. Despeje a mistura na forma e, com as mãos ou as costas de uma colher, pressione firmemente até obter uma camada uniforme e compacta. Leve à geleira por pelo menos 1 hora.",
                "porque": "Pressionar bem a mistura garante que as barras fiquem densas e não se desfaçam. A refrigeração solidifica a manteiga de amendoim e o mel, firmando as barras.",
                "pontoCritico": "Use as mãos molhadas ou uma folha de papel vegetal por cima para pressionar a massa sem que ela cole."
            }
        ],
        "variacoes": [
            "<strong>Com Frutos Secos:</strong> Adicione passas ou arandos secos à mistura.",
            "<strong>Com Sementes:</strong> Incorpore sementes de girassol ou de abóbora para uma textura extra.",
            "<strong>Cobertura de Chocolate:</strong> Derreta chocolate amargo e espalhe uma fina camada por cima das barras antes de as refrigerar."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-barra-proteina"
    },
    "sobremesas-fitness-trufas-fit": {
        "title": "Aula 15: Trufas de Batata Doce e Cacau",
        "description": "Uma forma inteligente e deliciosa de matar a vontade de chocolate. Estas trufas usam a doçura e a cremosidade da batata doce como base, resultando num doce rico em fibras e de baixo índice glicémico.",
        "calculator": {
            "label": "Gramas de Batata Doce:",
            "unit": "trufas-fit-input",
            "base_value": 300,
            "default_value": 300
        },
        "details": {
            "tempoPreparo": "15 min",
            "tempoCozimento": "25 min",
            "tempoDescanso": "1 hora",
            "rendimento": "Aprox. 20 trufas",
            "dificuldade": "Fácil",
            "utensilios": [
                "Panela",
                "Garfo ou espremedor",
                "Tigela"
            ]
        },
        "dicaDeMestre": "Para uma textura ainda mais rica, asse a batata doce em vez de a cozinhar. O sabor ficará mais concentrado e a polpa mais seca, o que facilita a moldagem das trufas.",
        "ingredients": [
            {
                "name": "Batata Doce, cozida e amassada em puré",
                "base_qty": 300,
                "unit": "g",
                "scalable": true
            },
            {
                "name": "Cacau em Pó (sem açúcar)",
                "base_qty": 4,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Óleo de Coco, derretido",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Mel ou Xarope de Ácer",
                "base_qty": 2,
                "unit": "c. de sopa",
                "scalable": true
            },
            {
                "name": "Coco ralado ou cacau em pó (para enrolar)",
                "base_qty": 0,
                "unit": "A gosto",
                "scalable": false
            }
        ],
        "steps": [
            {
                "title": "O Puré Base",
                "description": "Cozinhe a batata doce até estar muito macia. Descasque e amasse muito bem com um garfo até obter um puré completamente liso, sem fibras ou pedaços.",
                "porque": "A base da trufa é o puré. A sua textura lisa é essencial para imitar a cremosidade de um ganache de chocolate tradicional.",
                "pontoCritico": "Deixe o puré arrefecer completamente antes de o misturar com os outros ingredientes."
            },
            {
                "title": "A 'Massa' de Trufa",
                "description": "Numa tigela, misture o puré de batata doce arrefecido, o cacau em pó, o óleo de coco e o adoçante. Misture muito bem até formar uma massa escura e homogénea. Leve à geleira por cerca de 1 hora para firmar.",
                "porque": "O óleo de coco solidifica com o frio, o que dará a estrutura necessária à massa para ser enrolada.",
                "pontoCritico": "Se a massa estiver demasiado mole, adicione um pouco mais de cacau em pó."
            },
            {
                "title": "Enrolar e Servir",
                "description": "Com a massa já firme, retire pequenas porções com uma colher e enrole com as mãos para formar bolinhas. Passe as trufas pelo coco ralado ou cacau em pó. Mantenha na geleira até à hora de servir.",
                "porque": "A cobertura não só decora, mas também evita que as trufas fiquem pegajosas ao toque.",
                "pontoCritico": "Mantenha as trufas refrigeradas, pois elas amolecem à temperatura ambiente."
            }
        ],
        "variacoes": [
            "<strong>Com Frutos Secos:</strong> Misture nozes ou amêndoas picadas na massa.",
            "<strong>Com Essências:</strong> Adicione uma gota de extrato de baunilha, amêndoa ou rum.",
            "<strong>Com Café:</strong> Uma pitada de café solúvel na massa realça o sabor do cacau."
        ],
        "module": "Sobremesas Fitness",
        "url": "sobremesas_fitness.html#receita-trufas-fit"
    }
};
