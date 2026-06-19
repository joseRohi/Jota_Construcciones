// MODELO: Contiene todos los datos de la aplicación
const AppData = {
    benefits: [
        {
            title: "Equipo Profesional",
            description: "Personal altamente capacitado y con años de experiencia.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>`
        },
        {
            title: "Alta Resistencia",
            description: "Estructuras diseñadas para durar generaciones.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6.5 6.5l11 11M21 21l-1-1M3 3l1 1M18 22l4-4M2 6l4-4M8 2l.73.73M16 22l-.73-.73"/>
                <path d="M6.5 17.5L17.5 6.5"/>
            </svg>`
        },
        {
            title: "Reducción de Costos",
            description: "Optimizamos recursos sin sacrificar calidad.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
            </svg>`
        },
        {
            title: "Menor Huella de Carbono",
            description: "Construcción amigable con el medio ambiente.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>`
        },
        {
            title: "Construcción Rápida",
            description: "Tiempos de entrega optimizados.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>`
        },
        {
            title: "Diseños Personalizados",
            description: "Adaptamos cada proyecto a sus necesidades.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>`
        },
        {
            title: "Aislamiento Térmico",
            description: "Confort en todas las estaciones del año.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>
            </svg>`
        },
        {
            title: "Aislamiento Acústico",
            description: "Tranquilidad y privacidad garantizadas.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
            </svg>`
        },
        {
            title: "Garantía Total",
            description: "Respaldamos cada uno de nuestros proyectos.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>`
        }
    ],

    models: [
        {
            name: "Modelo Cabaña",
            description: "Perfecta para terrenos pequeños, con un diseño acogedor y funcional.",
            image: null
        },
        {
            name: "Modelo Familiar",
            description: "Espaciosa y cómoda, ideal para familias que buscan calidad de vida.",
            image: null
        },
        {
            name: "Modelo Premium",
            description: "Diseño exclusivo con acabados de lujo y amplios espacios.",
            image: null
        }
    ]
};