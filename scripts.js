// ======================================
// === DATOS SIMULADOS (PARA AMBAS PÁGINAS) ===
// ======================================
const books = [
    {
        id: "creditos-consumo",
        title: "Créditos al Consumo",
        category: "mercados",
        description: "Análisis detallado de los créditos al consumo en el mercado financiero.",
        indices: [
            {
                title: "Análisis por Tipo de Crédito",
                opciones: [
                    {
                        title: "Opción 1: Crédito Hipotecario",
                        secciones: [
                            {
                                title: "Comportamiento Reciente",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Gráfica del comportamiento de los créditos hipotecarios en el último trimestre.</p>'
                            },
                            {
                                title: "Proyecciones Futuras",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Proyecciones basadas en datos históricos y tendencias actuales del mercado.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Crédito Personal",
                        secciones: [
                            {
                                title: "Análisis de Desempeño",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Desempeño y volumen de los créditos personales en la región.</p>'
                            },
                            {
                                title: "Volumen por Tipo de Entidad",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Comparación del volumen de crédito personal por diferentes tipos de entidades financieras.</p>'
                            },
                            {
                                title: "Tasas de Interés",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de las tasas de interés promedio de los créditos personales.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Comportamiento Mensual del Mercado",
                opciones: [
                    {
                        title: "Opción 1: Tendencias Generales",
                        secciones: [
                            {
                                title: "Tendencia General",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Descripción de la tendencia mensual, destacando los picos de actividad.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "mercado-derivados",
        title: "Mercado de Derivados",
        category: "mercados",
        description: "Visión general de las operaciones y el comportamiento del mercado de derivados.",
        indices: [
            {
                title: "Indicadores de Operaciones",
                opciones: [
                    {
                        title: "Opción 1: Volumen de Futuros",
                        secciones: [
                            {
                                title: "Análisis de Futuros",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de futuros y opciones.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Volumen Negociado",
                opciones: [
                    {
                        title: "Opción 1: Desempeño Semanal",
                        secciones: [
                            {
                                title: "Volumen Semanal",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Volumen total negociado por semana.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Distribución por Producto",
                        secciones: [
                            {
                                title: "Distribución del Volumen",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Distribución del volumen por tipo de producto financiero.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "Libro3",
        title: "Libro 3",
        category: "mercados",
        description: "Análisis detallado de los créditos al consumo en el mercado financiero.",
        indices: [
            {
                title: "Análisis por Tipo de Crédito",
                opciones: [
                    {
                        title: "Opción 1: Crédito Hipotecario",
                        secciones: [
                            {
                                title: "Comportamiento Reciente",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Gráfica del comportamiento de los créditos hipotecarios en el último trimestre.</p>'
                            },
                            {
                                title: "Proyecciones Futuras",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Proyecciones basadas en datos históricos y tendencias actuales del mercado.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Crédito Personal",
                        secciones: [
                            {
                                title: "Análisis de Desempeño",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Desempeño y volumen de los créditos personales en la región.</p>'
                            },
                            {
                                title: "Volumen por Tipo de Entidad",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Comparación del volumen de crédito personal por diferentes tipos de entidades financieras.</p>'
                            },
                            {
                                title: "Tasas de Interés",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de las tasas de interés promedio de los créditos personales.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Comportamiento Mensual del Mercado",
                opciones: [
                    {
                        title: "Opción 1: Tendencias Generales",
                        secciones: [
                            {
                                title: "Tendencia General",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Descripción de la tendencia mensual, destacando los picos de actividad.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "Libro4",
        title: "Libro 4",
        category: "mercados",
        description: "Visión general de las operaciones y el comportamiento del mercado de derivados.",
        indices: [
            {
                title: "Indicadores de Operaciones",
                opciones: [
                    {
                        title: "Opción 1: Volumen de Futuros",
                        secciones: [
                            {
                                title: "Análisis de Futuros",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de futuros y opciones.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Volumen Negociado",
                opciones: [
                    {
                        title: "Opción 1: Desempeño Semanal",
                        secciones: [
                            {
                                title: "Volumen Semanal",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Volumen total negociado por semana.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Distribución por Producto",
                        secciones: [
                            {
                                title: "Distribución del Volumen",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Distribución del volumen por tipo de producto financiero.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "Libro5",
        title: "Libro 5",
        category: "mercados",
        description: "Análisis detallado de los créditos al consumo en el mercado financiero.",
        indices: [
            {
                title: "Análisis por Tipo de Crédito",
                opciones: [
                    {
                        title: "Opción 1: Crédito Hipotecario",
                        secciones: [
                            {
                                title: "Comportamiento Reciente",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Gráfica del comportamiento de los créditos hipotecarios en el último trimestre.</p>'
                            },
                            {
                                title: "Proyecciones Futuras",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Proyecciones basadas en datos históricos y tendencias actuales del mercado.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Crédito Personal",
                        secciones: [
                            {
                                title: "Análisis de Desempeño",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Desempeño y volumen de los créditos personales en la región.</p>'
                            },
                            {
                                title: "Volumen por Tipo de Entidad",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Comparación del volumen de crédito personal por diferentes tipos de entidades financieras.</p>'
                            },
                            {
                                title: "Tasas de Interés",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de las tasas de interés promedio de los créditos personales.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Comportamiento Mensual del Mercado",
                opciones: [
                    {
                        title: "Opción 1: Tendencias Generales",
                        secciones: [
                            {
                                title: "Tendencia General",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Descripción de la tendencia mensual, destacando los picos de actividad.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "Libro6",
        title: "Libro 6",
        category: "mercados",
        description: "Visión general de las operaciones y el comportamiento del mercado de derivados.",
        indices: [
            {
                title: "Indicadores de Operaciones",
                opciones: [
                    {
                        title: "Opción 1: Volumen de Futuros",
                        secciones: [
                            {
                                title: "Análisis de Futuros",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de futuros y opciones.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Volumen Negociado",
                opciones: [
                    {
                        title: "Opción 1: Desempeño Semanal",
                        secciones: [
                            {
                                title: "Volumen Semanal",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Volumen total negociado por semana.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Distribución por Producto",
                        secciones: [
                            {
                                title: "Distribución del Volumen",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Distribución del volumen por tipo de producto financiero.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "Libro7",
        title: "Libro 7",
        category: "mercados",
        description: "Análisis detallado de los créditos al consumo en el mercado financiero.",
        indices: [
            {
                title: "Análisis por Tipo de Crédito",
                opciones: [
                    {
                        title: "Opción 1: Crédito Hipotecario",
                        secciones: [
                            {
                                title: "Comportamiento Reciente",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Gráfica del comportamiento de los créditos hipotecarios en el último trimestre.</p>'
                            },
                            {
                                title: "Proyecciones Futuras",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Proyecciones basadas en datos históricos y tendencias actuales del mercado.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Crédito Personal",
                        secciones: [
                            {
                                title: "Análisis de Desempeño",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Desempeño y volumen de los créditos personales en la región.</p>'
                            },
                            {
                                title: "Volumen por Tipo de Entidad",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Comparación del volumen de crédito personal por diferentes tipos de entidades financieras.</p>'
                            },
                            {
                                title: "Tasas de Interés",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de las tasas de interés promedio de los créditos personales.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Comportamiento Mensual del Mercado",
                opciones: [
                    {
                        title: "Opción 1: Tendencias Generales",
                        secciones: [
                            {
                                title: "Tendencia General",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Descripción de la tendencia mensual, destacando los picos de actividad.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "Libro8",
        title: "Libro 8",
        category: "mercados",
        description: "Visión general de las operaciones y el comportamiento del mercado de derivados.",
        indices: [
            {
                title: "Indicadores de Operaciones",
                opciones: [
                    {
                        title: "Opción 1: Volumen de Futuros",
                        secciones: [
                            {
                                title: "Análisis de Futuros",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de futuros y opciones.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Volumen Negociado",
                opciones: [
                    {
                        title: "Opción 1: Desempeño Semanal",
                        secciones: [
                            {
                                title: "Volumen Semanal",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Volumen total negociado por semana.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Distribución por Producto",
                        secciones: [
                            {
                                title: "Distribución del Volumen",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Distribución del volumen por tipo de producto financiero.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "Libro9",
        title: "Libro 9",
        category: "mercados",
        description: "Análisis detallado de los créditos al consumo en el mercado financiero.",
        indices: [
            {
                title: "Análisis por Tipo de Crédito",
                opciones: [
                    {
                        title: "Opción 1: Crédito Hipotecario",
                        secciones: [
                            {
                                title: "Comportamiento Reciente",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Gráfica del comportamiento de los créditos hipotecarios en el último trimestre.</p>'
                            },
                            {
                                title: "Proyecciones Futuras",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Proyecciones basadas en datos históricos y tendencias actuales del mercado.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Crédito Personal",
                        secciones: [
                            {
                                title: "Análisis de Desempeño",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Desempeño y volumen de los créditos personales en la región.</p>'
                            },
                            {
                                title: "Volumen por Tipo de Entidad",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Comparación del volumen de crédito personal por diferentes tipos de entidades financieras.</p>'
                            },
                            {
                                title: "Tasas de Interés",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de las tasas de interés promedio de los créditos personales.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Comportamiento Mensual del Mercado",
                opciones: [
                    {
                        title: "Opción 1: Tendencias Generales",
                        secciones: [
                            {
                                title: "Tendencia General",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Descripción de la tendencia mensual, destacando los picos de actividad.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "Libro10",
        title: "Libro 10",
        category: "mercados",
        description: "Visión general de las operaciones y el comportamiento del mercado de derivados.",
        indices: [
            {
                title: "Indicadores de Operaciones",
                opciones: [
                    {
                        title: "Opción 1: Volumen de Futuros",
                        secciones: [
                            {
                                title: "Análisis de Futuros",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Análisis de futuros y opciones.</p>'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Volumen Negociado",
                opciones: [
                    {
                        title: "Opción 1: Desempeño Semanal",
                        secciones: [
                            {
                                title: "Volumen Semanal",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Volumen total negociado por semana.</p>'
                            }
                        ]
                    },
                    {
                        title: "Opción 2: Distribución por Producto",
                        secciones: [
                            {
                                title: "Distribución del Volumen",
                                content: '<div class="chart-container"><img src="grafica.jpg"></div><p>Distribución del volumen por tipo de producto financiero.</p>'
                            }
                        ]
                    }
                ]
            }
        ]
    },

];

// ===================================
// === LÓGICA DE LA PÁGINA PRINCIPAL ===
// ===================================
function initIndexPage() {
    const cardGrid = document.getElementById('cardGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    function renderCards(filteredBooks) {
        cardGrid.innerHTML = '';
        if (filteredBooks.length === 0) {
            cardGrid.innerHTML = '<p style="text-align:center;">No se encontraron resultados.</p>';
            return;
        }

        filteredBooks.forEach(book => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-icon">📚</div>
                <h3>${book.title}</h3>
                <p>${book.description}</p>
                <button onclick="window.location.href='detalle.html?id=${book.id}'">Ver más</button>
            `;
            cardGrid.appendChild(card);
        });
    }

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

    if (searchInput && categoryFilter) {
        searchInput.addEventListener('input', filterAndSearch);
        categoryFilter.addEventListener('change', filterAndSearch);
        renderCards(books);
    }
}

// ==================================
// === LÓGICA DE LA PÁGINA DETALLE ===
// ==================================
function initDetallePage() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const pageTitle = document.getElementById('pageTitle');
    const sidebarNav = document.getElementById('sidebarNav');
    const contentArea = document.getElementById('contentArea');
    const detalleTitle = document.getElementById('detalleTitle');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    const currentBook = books.find(book => book.id === bookId);

    if (currentBook) {
        pageTitle.textContent = currentBook.title;
        detalleTitle.textContent = `Detalle del Libro - ${currentBook.title}`;

        // Genera el menú de la barra lateral con submenús
        let sidebarHtml = '';
        currentBook.indices.forEach((indice, index) => {
            sidebarHtml += `
                <div class="menu-item" data-index-id="${index}">
                    ${indice.title} <i class="fas fa-chevron-right toggle-icon"></i>
                </div>
                <div class="submenu" data-index-id="${index}">
            `;
            indice.opciones.forEach((opcion, opcionIndex) => {
                 sidebarHtml += `<div class="submenu-item" data-index-id="${index}" data-opcion-id="${opcionIndex}">${opcion.title}</div>`;
            });
            sidebarHtml += `</div>`;
        });
        sidebarNav.innerHTML = sidebarHtml;

        // Función para renderizar un conjunto de secciones
        const renderSeccionesContent = (secciones) => {
            let contentHtml = '';
            secciones.forEach((seccion, seccionIndex) => {
                contentHtml += `
                    <div class="collapsible-card active" id="seccion-${seccionIndex}">
                        <div class="card-header">
                            <h2>${seccion.title}</h2>
                            <i class="fas fa-chevron-right toggle-icon"></i>
                        </div>
                        <div class="collapsible-content">
                            ${seccion.content}
                        </div>
                    </div>
                `;
            });
            contentArea.innerHTML = contentHtml;
            
            // Vuelve a añadir los event listeners para las nuevas tarjetas
            document.querySelectorAll('.card-header').forEach(header => {
                header.addEventListener('click', () => {
                    const card = header.closest('.collapsible-card');
                    card.classList.toggle('active');
                });
            });
        };

        // Lógica de interacción del menú principal
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const indexId = item.getAttribute('data-index-id');
                
                // Oculta todos los submenús
                document.querySelectorAll('.submenu').forEach(el => el.classList.remove('active'));
                
                // Muestra solo el submenú del item seleccionado
                const submenu = document.querySelector(`.submenu[data-index-id="${indexId}"]`);
                if (submenu) {
                    submenu.classList.add('active');
                }

                // Carga la primera opción de ese índice por defecto
                const selectedIndice = currentBook.indices[indexId];
                if (selectedIndice.opciones.length > 0) {
                     const firstOpcion = selectedIndice.opciones[0];
                     renderSeccionesContent(firstOpcion.secciones);
                }
                
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            });
        });
        
        // Lógica para los items del submenú (Opciones)
        document.querySelectorAll('.submenu-item').forEach(item => {
            item.addEventListener('click', () => {
                const indexId = item.getAttribute('data-index-id');
                const opcionId = item.getAttribute('data-opcion-id');
                const selectedOpcion = currentBook.indices[indexId].opciones[opcionId];
                
                // Remueve la clase 'active' de todos los items del submenú y la añade al clickeado
                document.querySelectorAll('.submenu-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');

                renderSeccionesContent(selectedOpcion.secciones);
                
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            });
        });

        // Carga el contenido del primer índice y su primera opción por defecto
        if (currentBook.indices.length > 0) {
             const firstMenuItem = document.querySelector('.menu-item');
             firstMenuItem.click();
             const firstSubMenuItem = firstMenuItem.nextElementSibling.querySelector('.submenu-item');
             if (firstSubMenuItem) {
                 firstSubMenuItem.click();
             }
        }

    } else {
        pageTitle.textContent = 'Libro no encontrado';
        contentArea.innerHTML = '<p style="text-align:center;">El libro que buscas no existe.</p>';
    }
}

// ==================================
// === EJECUCIÓN DE LA LÓGICA CORRECTA ===
// ==================================
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cardGrid')) {
        initIndexPage();
    } else if (document.getElementById('sidebarNav')) {
        initDetallePage();
    }
});
