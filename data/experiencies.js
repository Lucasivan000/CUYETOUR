const EXPERIENCES = [
    {
        id: "arraial",
        categoria: "barcos",
        titulo: "Tour Arraial do Cabo",
        precio: "Desde R$250 por persona",
        descripcion: "Llamado el “Caribe Brasileño”, Arraial do Cabo es uno de los destinos más buscados de la costa de Río de Janeiro por sus aguas cristalinas y playas de arena blanca. Durante este tour en barco vas a recorrer algunos de los puntos más impresionantes de la región, con paradas para disfrutar del paisaje, nadar y conocer lugares icónicos como la Playa do Forno, la Isla del Faro, la Gruta Azul y el famoso Puente de Atalaia, además del característico perfil de mono en las formaciones rocosas. Es una experiencia completa en contacto directo con el mar, ideal para quienes quieren conocer playas únicas con aguas tranquilas y escenarios naturales inolvidables.",
        imagenes: [
            "./assets/img/barcos/arraial/arraial1.jpeg",
            "./assets/img/barcos/arraial/arraial2.jpeg",
            "./assets/img/barcos/arraial/arraial3.jpeg",
            "./assets/img/barcos/arraial/arraial4.jpeg",
            "./assets/img/barcos/arraial/arraial5.jpeg",
            "./assets/img/barcos/arraial/arraial6.jpeg"
        ],
        detalles: {
            duracion: "12 horas",
            ubicacion: "Arraial do Cabo, Río de Janeiro",
            incluye: "Transporte ida y vuelta, guía registrado, almuerzo buffet, equipo básico para snorkel",
            noIncluye: "Comidas y bebidas adicionales"
        }

    },

    {
        id: "angradosreis",
        categoria: "barcos",
        titulo: "Tour Angra dos Reis e Ilha Grande",
        precio: "Desde R$250 por persona",
        descripcion: "Angra dos Reis es un destino único en el estado de Río de Janeiro, reconocido por sus 365 islas y aguas cristalinas. En este tour navegamos por algunas de sus playas e islas más visitadas, con paradas para disfrutar del mar, nadar y descubrir paisajes naturales de gran belleza. Es una experiencia completa en contacto con la naturaleza, ideal para quienes buscan un día de playa diferente rodeado de islas paradisíacas.",
        imagenes: [
            "./assets/img/barcos/angra/angra1.png",
            "./assets/img/barcos/angra/angra2.png",
            "./assets/img/barcos/angra/angra3.png",
            "./assets/img/barcos/angra/angra4.png",
            "./assets/img/barcos/angra/angra5.png"
        ],
        detalles: {
            duracion: "14 horas",
            ubicacion: "Angra dos Reis e Ilha Grande",
            incluye: "Transporte ejecutivo ida y vuelta, guía bilingüe especializado, paseo en barco con 4 paradas para baño y snorkel, almuerzo buffet en isla",
            noIncluye: "Equipo de snorkel, bebidas y postre"
        }
    },

    {
        id: "angraexperiencias",
        categoria: "barcos",
        titulo: "Tour Angra dos Reis – Experiencia en Islas Paradisíacas",
        precio: "Desde R$250 por persona",
        descripcion: "Descubrí Angra dos Reis, un destino único del estado de Río de Janeiro con más de 365 islas rodeadas de aguas cristalinas. En esta experiencia navegamos por algunas de sus islas más visitadas, combinando relax, naturaleza y paradas para disfrutar del mar en un entorno totalmente paradisíaco, ideal para desconectar y vivir un día completo en contacto con la naturaleza.",
        imagenes: [
            "./assets/img/barcos/angraexp/angraexp3.png",
            "./assets/img/barcos/angraexp/angraexp2.png",
            "./assets/img/barcos/angraexp/angraexp4.png"
        ],
        detalles: {
            duracion: "14 horas aproximadamente",
            ubicacion: "Angra dos Reis, Río de Janeiro",
            incluye: "Transporte ejecutivo ida y vuelta, guía bilingüe especializado, paseo en barco con 4 paradas para baño y snorkel, almuerzo buffet en isla",
            noIncluye: "Equipo de snorkel, bebidas y postre"
        }
    },

    {
        id: "buzios-clasico",
        categoria: "navegacion",
        titulo: "Tour Búzios – Experiencia Completa en Playas Paradisíacas",
        precio: "Desde $68.000",
        descripcion: "Descubrí Búzios en un recorrido completo por sus playas más emblemáticas, con paradas para baño en aguas tranquilas y cristalinas. Una experiencia ideal para recorrer en barco una de las regiones más famosas de Brasil, combinando paisajes, relax y tiempo libre en el mar. Perfecto para quienes buscan un día clásico de playa con vistas inolvidables.",
        imagenes: [
            "./assets/img/imagen1.jpg",
            "./assets/img/imagen2.jpg",
            "/assets/img/imagen3.jpg"
        ],
        detalles: {
            duracion: "6 a 7 horas aprox.",
            ubicacion: "Búzios, Río de Janeiro",
            incluye: "Transporte ida y vuelta, paseo en barco, guía bilingüe, almuerzo en ciudad",
            noIncluye: "Bebidas y postre"
        }
    },
    {
        id: "buzios-catamaran",
        categoria: "navegacion",
        titulo: "Búzios Catamarán – Navegación con Ambiente a Bordo",
        precio: "Desde $68.000",
        descripcion: "Viví Búzios desde un catamarán con una experiencia más social y dinámica, navegando entre sus playas más icónicas con música, mar abierto y paradas para baño. Ideal para quienes buscan disfrutar del viaje tanto como del destino, con un ambiente relajado y vistas panorámicas durante toda la navegación.",
        imagenes: [
            "./assets/img/imagen1.jpg",
            "./assets/img/imagen2.jpg",
            "/assets/img/imagen3.jpg"
        ],
        detalles: {
            duracion: "6 a 7 horas aprox.",
            ubicacion: "Búzios, Río de Janeiro",
            incluye: "Transporte ida y vuelta, paseo en catamarán, guía bilingüe, almuerzo en ciudad",
            noIncluye: "Bebidas y postre"
        }
    },
    {

        id: "buzios-premium",
        categoria: "navegacion",
        titulo: "Búzios Premium – Experiencia Exclusiva en el Mar",
        precio: "Desde $68.000",
        descripcion: "Disfrutá Búzios en una experiencia más exclusiva y relajada, recorriendo sus playas más famosas con mayor confort y menos sensación de multitud. Un paseo pensado para quienes buscan disfrutar el paisaje, el mar y la tranquilidad del entorno con una navegación más cómoda y selecta.",
        imagenes: [
            "./assets/img/imagen1.jpg",
            "./assets/img/imagen2.jpg",
            "/assets/img/imagen3.jpg"
        ],
        detalles: {
            duracion: "6 a 7 horas aprox.",
            ubicacion: "Búzios, Río de Janeiro",
            incluye: "Transporte ida y vuelta, paseo en barco, guía bilingüe, almuerzo en ciudad",
            noIncluye: "Bebidas y postre"
        }
    },
];