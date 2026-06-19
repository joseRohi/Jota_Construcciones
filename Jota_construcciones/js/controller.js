// CONTROLADOR: Maneja la lógica e interactividad
class AppController {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.renderBenefits();
            this.renderModels();
            this.setupMobileMenu();
            this.setupSmoothScroll();
        });
    }

    // Renderiza los beneficios en el DOM
    renderBenefits() {
        const grid = document.getElementById('benefits-grid');
        if (!grid) return;

        const benefitsHTML = AppData.benefits.map(benefit => `
            <div class="benefit-card">
                <div class="icon-wrapper">
                    ${benefit.icon}
                </div>
                <h3>${benefit.title}</h3>
                <p>${benefit.description}</p>
            </div>
        `).join('');

        grid.innerHTML = benefitsHTML;
    }

    // Renderiza los modelos en el DOM
    renderModels() {
        const grid = document.getElementById('models-grid');
        if (!grid) return;

        const houseIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>`;

        const modelsHTML = AppData.models.map((model, index) => `
            <div class="model-card">
                <div class="image-placeholder">
                    ${houseIcon}
                    <span>Insertar imagen - ${model.name}</span>
                </div>
                <div class="model-info">
                    <h3>${model.name}</h3>
                    <p>${model.description}</p>
                </div>
            </div>
        `).join('');

        grid.innerHTML = modelsHTML;
    }

    // Menú móvil hamburguesa
    setupMobileMenu() {
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('nav-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });

            // Cerrar menú al hacer clic en un enlace
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active');
                });
            });
        }
    }

    // Scroll suave para los enlaces del menú
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Inicializa la aplicación
new AppController();