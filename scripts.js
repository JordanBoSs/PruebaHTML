document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.getElementById('cardGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    // Datos simulados de los "libros"
    const books = [
        { title: "Créditos al Consumo", category: "mercados", description: "Descripción del libro sobre créditos al consumo." },
        { title: "Mercado de Derivados", category: "mercados", description: "Descripción del libro sobre el mercado de derivados." },
        { title: "Procesos Operativos GISIF", category: "procesos", description: "Descripción del libro sobre procesos operativos de GISIF." },
        { title: "Gráficas SASF", category: "graficas", description: "Descripción del libro sobre gráficas de SASF." },
        { title: "Mercado Renta Fija", category: "mercados", description: "Descripción del libro sobre el mercado de renta fija." },
        { title: "Captación de Recursos", category: "procesos", description: "Descripción del libro sobre captación de recursos." },
        { title: "Portal CLUI", category: "procesos", description: "Descripción del libro sobre el portal CLUI." },
        { title: "Registro de Comisiones", category: "procesos", description: "Descripción del libro sobre el registro de comisiones." },
        { title: "Mercado de Renta Variable", category: "mercados", description: "Descripción del libro sobre el mercado de renta variable." },
        { title: "Sistema de Portales", category: "procesos", description: "Descripción del libro sobre el sistema de portales." },
        { title: "Créditos al Consumo", category: "mercados", description: "Descripción del libro sobre créditos al consumo." },
        { title: "Mercado de Derivados", category: "mercados", description: "Descripción del libro sobre el mercado de derivados." },
        { title: "Procesos Operativos GISIF", category: "procesos", description: "Descripción del libro sobre procesos operativos de GISIF." },
        { title: "Gráficas SASF", category: "graficas", description: "Descripción del libro sobre gráficas de SASF." },
        { title: "Mercado Renta Fija", category: "mercados", description: "Descripción del libro sobre el mercado de renta fija." },
        { title: "Captación de Recursos", category: "procesos", description: "Descripción del libro sobre captación de recursos." },
        { title: "Portal CLUI", category: "procesos", description: "Descripción del libro sobre el portal CLUI." },
        { title: "Registro de Comisiones", category: "procesos", description: "Descripción del libro sobre el registro de comisiones." },
        { title: "Mercado de Renta Variable", category: "mercados", description: "Descripción del libro sobre el mercado de renta variable." },
        { title: "Sistema de Portales", category: "procesos", description: "Descripción del libro sobre el sistema de portales." },
        { title: "Créditos al Consumo", category: "mercados", description: "Descripción del libro sobre créditos al consumo." },
        { title: "Mercado de Derivados", category: "mercados", description: "Descripción del libro sobre el mercado de derivados." },
        { title: "Procesos Operativos GISIF", category: "procesos", description: "Descripción del libro sobre procesos operativos de GISIF." },
        { title: "Gráficas SASF", category: "graficas", description: "Descripción del libro sobre gráficas de SASF." },
        { title: "Mercado Renta Fija", category: "mercados", description: "Descripción del libro sobre el mercado de renta fija." },
        { title: "Captación de Recursos", category: "procesos", description: "Descripción del libro sobre captación de recursos." },
        { title: "Portal CLUI", category: "procesos", description: "Descripción del libro sobre el portal CLUI." },
        { title: "Registro de Comisiones", category: "procesos", description: "Descripción del libro sobre el registro de comisiones." },
        { title: "Mercado de Renta Variable", category: "mercados", description: "Descripción del libro sobre el mercado de renta variable." },
        { title: "Sistema de Portales", category: "procesos", description: "Descripción del libro sobre el sistema de portales." },
        { title: "Créditos al Consumo", category: "mercados", description: "Descripción del libro sobre créditos al consumo." },
        { title: "Mercado de Derivados", category: "mercados", description: "Descripción del libro sobre el mercado de derivados." },
        { title: "Procesos Operativos GISIF", category: "procesos", description: "Descripción del libro sobre procesos operativos de GISIF." },
        { title: "Gráficas SASF", category: "graficas", description: "Descripción del libro sobre gráficas de SASF." },
        { title: "Mercado Renta Fija", category: "mercados", description: "Descripción del libro sobre el mercado de renta fija." },
        { title: "Captación de Recursos", category: "procesos", description: "Descripción del libro sobre captación de recursos." },
        { title: "Portal CLUI", category: "procesos", description: "Descripción del libro sobre el portal CLUI." },
        { title: "Registro de Comisiones", category: "procesos", description: "Descripción del libro sobre el registro de comisiones." },
        { title: "Mercado de Renta Variable", category: "mercados", description: "Descripción del libro sobre el mercado de renta variable." },
        { title: "Sistema de Portales", category: "procesos", description: "Descripción del libro sobre el sistema de portales." },
        { title: "Créditos al Consumo", category: "mercados", description: "Descripción del libro sobre créditos al consumo." },
        { title: "Mercado de Derivados", category: "mercados", description: "Descripción del libro sobre el mercado de derivados." },
        { title: "Procesos Operativos GISIF", category: "procesos", description: "Descripción del libro sobre procesos operativos de GISIF." },
        { title: "Gráficas SASF", category: "graficas", description: "Descripción del libro sobre gráficas de SASF." },
        { title: "Mercado Renta Fija", category: "mercados", description: "Descripción del libro sobre el mercado de renta fija." },
        { title: "Captación de Recursos", category: "procesos", description: "Descripción del libro sobre captación de recursos." },
        { title: "Portal CLUI", category: "procesos", description: "Descripción del libro sobre el portal CLUI." },
        { title: "Registro de Comisiones", category: "procesos", description: "Descripción del libro sobre el registro de comisiones." },
        { title: "Mercado de Renta Variable", category: "mercados", description: "Descripción del libro sobre el mercado de renta variable." },
        { title: "Sistema de Portales", category: "procesos", description: "Descripción del libro sobre el sistema de portales." },
        // Añade aquí hasta 50 o más objetos para simular los libros.
        // Ej: { title: "Otro Título", category: "otra-categoria", description: "Descripción corta." },
    ];

    // Función para renderizar las tarjetas
    function renderCards(filteredBooks) {
        cardGrid.innerHTML = ''; // Limpia el grid
        if (filteredBooks.length === 0) {
            cardGrid.innerHTML = '<p style="text-align:center;">No se encontraron resultados.</p>';
            return;
        }

        filteredBooks.forEach(book => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-icon">📚</div> <h3>${book.title}</h3>
                <p>${book.description}</p>
                <button onclick="alert('Abriendo ${book.title}')">Ver más</button>
            `;
            cardGrid.appendChild(card);
        });
    }

    // Lógica de filtrado y búsqueda
    function filterAndSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;

        const filteredBooks = books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm) || book.description.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || book.category === category;
            return matchesSearch && matchesCategory;
        });

        renderCards(filteredBooks);
    }

    searchInput.addEventListener('input', filterAndSearch);
    categoryFilter.addEventListener('change', filterAndSearch);

    // Renderiza todas las tarjetas al cargar la página
    renderCards(books);
});