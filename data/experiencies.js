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
        categoria: "barcos",
        titulo: "Tour Búzios – Experiencia Completa en Playas Paradisíacas",
        precio: "Desde R$ 275",
        descripcion: "Descubrí Búzios en un recorrido completo por sus playas más emblemáticas, con paradas para baño en aguas tranquilas y cristalinas. Una experiencia ideal para recorrer en barco una de las regiones más famosas de Brasil, combinando paisajes, relax y tiempo libre en el mar. Perfecto para quienes buscan un día clásico de playa con vistas inolvidables.",
        imagenes: [
            "./assets/img/barcos/buzios/buzios1.png",
            "./assets/img/barcos/buzios/buzios2.png",
            "./assets/img/barcos/buzios/buzios3.png"
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
        categoria: "barcos",
        titulo: "Búzios Catamarán – Navegación con Ambiente a Bordo",
        precio: "Desde R$ 299",
        descripcion: "Viví Búzios desde un catamarán con una experiencia más social y dinámica, navegando entre sus playas más icónicas con música, mar abierto y paradas para baño. Ideal para quienes buscan disfrutar del viaje tanto como del destino, con un ambiente relajado y vistas panorámicas durante toda la navegación.",
        imagenes: [
            "./assets/img/barcos/buzioscatamaran/buzioscat1.png",
            "./assets/img/barcos/buzioscatamaran/buzioscat2.png",
            "./assets/img/barcos/buzioscatamaran/buzioscat3.png",
            "./assets/img/barcos/buzioscatamaran/buzioscat4.png",
            "./assets/img/barcos/buzioscatamaran/buzioscat5.png",
            "./assets/img/barcos/buzioscatamaran/buzioscat6.png",
            "./assets/img/barcos/buzioscatamaran/buzioscat7.png",
            "./assets/img/barcos/buzioscatamaran/buzioscat8.png"
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
        categoria: "barcos",
        titulo: "Búzios Premium – Experiencia Exclusiva en el Mar",
        precio: "Desde R$ 275",
        descripcion: "Disfrutá Búzios en una experiencia más exclusiva y relajada, recorriendo sus playas más famosas con mayor confort y menos sensación de multitud. Un paseo pensado para quienes buscan disfrutar el paisaje, el mar y la tranquilidad del entorno con una navegación más cómoda y selecta.",
        imagenes: [
            "./assets/img/barcos/buziospremium/premium1.png",
            "./assets/img/barcos/buziospremium/premium2.png",
            "./assets/img/barcos/buziospremium/premium3.png",
            "./assets/img/barcos/buziospremium/premium4.png",
            "./assets/img/barcos/buziospremium/premium5.png"

        ],
        detalles: {
            duracion: "6 a 7 horas aprox.",
            ubicacion: "Búzios, Río de Janeiro",
            incluye: "Transporte ida y vuelta, paseo en barco, guía bilingüe, almuerzo en ciudad",
            noIncluye: "Bebidas y postre"
        }
    },
    {
        id: "lancha-malika-40",
        categoria: "barcos",
        titulo: "Lancha Malika – 40 pies | Lujo Privado en el Mar",
        precio: "Desde R$ 15.000",
        descripcion: "Viví una experiencia náutica de alto nivel a bordo de la Lancha Malika de 40 pies. Ideal para paseos privados, celebraciones, eventos especiales o grupos que buscan confort, privacidad y exclusividad. Una embarcación elegante, amplia y totalmente equipada para disfrutar la costa con estilo y tranquilidad.",
        imagenes: [
            "./assets/img/barcos/malika/malika1.png",
            "./assets/img/barcos/malika/malika2.png",
            "./assets/img/barcos/malika/malika3.png",
            "./assets/img/barcos/malika/malika4.png",
            "./assets/img/barcos/malika/malika5.png",
            "./assets/img/barcos/malika/malika6.png",
            "./assets/img/barcos/malika/malika7.png",
            "./assets/img/barcos/malika/malika8.png",
            "./assets/img/barcos/malika/malika9.png"
        ],
        detalles: {
            duracion: "Paseo privado (duración a coordinar)",
            ubicacion: "Río de Janeiro",
            incluye: "Alquiler de lancha, tripulación profesional, cabina climatizada, cocina equipada, áreas de solárium y flybridge",
            noIncluye: "Comidas, bebidas, combustible extra, servicios personalizados"
        }
    },
    {
        id: "lancha-conquista",
        categoria: "barcos",
        titulo: "Lancha Conquista | Diversión y Confort para Grupos",
        precio: "Desde R$ 4.000",
        descripcion: "La Lancha Conquista es perfecta para paseos en grupo, celebraciones o salidas familiares. Moderna, espaciosa y cómoda, ofrece una navegación estable y un ambiente ideal para relajarse, socializar y disfrutar del mar con total seguridad.",
        imagenes: [
            "./assets/img/barcos/conquista/conquista1.png",
            "./assets/img/barcos/conquista/conquista2.png",
            "./assets/img/barcos/conquista/conquista3.png",
            "./assets/img/barcos/conquista/conquista4.png",
            "./assets/img/barcos/conquista/conquista5.png",
            "./assets/img/barcos/conquista/conquista6.png",
            "./assets/img/barcos/conquista/conquista7.png"
        ],
        detalles: {
            duracion: "Paseo privado (horas a coordinar)",
            ubicacion: "Río de Janeiro",
            incluye: "Alquiler de lancha, baño privado, asientos acolchonados, plataforma de acceso al mar, elementos de seguridad",
            noIncluye: "Comidas, bebidas, combustible, servicios adicionales"
        }
    },
    {
        id: "lancha-emir-al-bahr",
        categoria: "barcos",
        titulo: "Lancha Emir Al Bahr | Paseo Privado con Churrasco",
        precio: "Desde R$ 5.500",
        descripcion: "Disfrutá un paseo exclusivo a bordo de la Lancha Emir Al Bahr, ideal para grupos que buscan comodidad y una experiencia completa en el mar. Perfecta para compartir momentos únicos, con espacios interiores confortables y servicio a bordo.",
        imagenes: [
            "./assets/img/barcos/emir/emir1.png",
            "./assets/img/barcos/emir/emir2.png",
            "./assets/img/barcos/emir/emir3.png",
            "./assets/img/barcos/emir/emir4.png",
            "./assets/img/barcos/emir/emir5.png",
            "./assets/img/barcos/emir/emir6.png"
        ],
        detalles: {
            duracion: "5 horas",
            ubicacion: "Río de Janeiro",
            incluye: "Alquiler de lancha, hielo y carbón, churrasqueiro profesional, baño, cabinas privadas",
            noIncluye: "Comidas, bebidas, combustible adicional"
        }
    },
    {
        id: "lancha-compartida-cabo-frio",
        categoria: "barcos",
        titulo: "Lancha Compartida en Cabo Frio | Open Bar & Day Use",
        precio: "Desde R$ 350",
        descripcion: "Una experiencia completa y accesible para conocer los mejores paisajes de Cabo Frio. Paseo compartido ideal para disfrutar del mar, islas y playas, con open bar, open food y acceso a estructura hotelera incluida.",
        imagenes: [
            "./assets/img/barcos/cabofrio/cabo1.png",
            "./assets/img/barcos/cabofrio/cabo2.png",
            "./assets/img/barcos/cabofrio/cabo3.png",
            "./assets/img/barcos/cabofrio/cabo4.png",
            "./assets/img/barcos/cabofrio/cabo5.png",
            "./assets/img/barcos/cabofrio/cabo6.png",
            "./assets/img/barcos/cabofrio/cabo7.png"
        ],
        detalles: {
            duracion: "4 horas",
            ubicacion: "Cabo Frio – Río de Janeiro",
            incluye: "Paseo en lancha compartida, open bar, open food, almuerzo, day use en hotel, acceso a playas e islas",
            noIncluye: "Servicios no especificados, gastos personales"
        }
    },
    {
        id: "lancha-magnata",
        categoria: "barcos",
        titulo: "Lancha Magnata – 44 pies | Experiencia de Alto Nivel",
        precio: "Desde R$ 11.000",
        descripcion: "La Lancha Magnata de 44 pies ofrece una experiencia premium para quienes buscan exclusividad, sofisticación y confort. Ideal para grupos reducidos que desean disfrutar del mar con total privacidad y una embarcación de alto estándar.",
        imagenes: [
            "./assets/img/barcos/magnata/magnata1.png",
            "./assets/img/barcos/magnata/magnata2.png",
            "./assets/img/barcos/magnata/magnata3.png",
            "./assets/img/barcos/magnata/magnata4.png",
            "./assets/img/barcos/magnata/magnata5.png",
            "./assets/img/barcos/magnata/magnata6.png",
            "./assets/img/barcos/magnata/magnata7.png",
            "./assets/img/barcos/magnata/magnata8.png"
        ],
        detalles: {
            duracion: "Paseo privado (horas a coordinar)",
            ubicacion: "Río de Janeiro",
            incluye: "Alquiler de lancha, áreas de descanso, cabinas, tripulación",
            noIncluye: "Servicio de churrasco, comidas, bebidas, combustible extra"
        }
    },
    {
        id: "lancha-picadilly",
        categoria: "barcos",
        titulo: "Lancha Picadilly | Confort y Entretenimiento a Bordo",
        precio: "Desde R$ 4.500",
        descripcion: "Un paseo ideal para grupos que buscan comodidad y diversión. La Lancha Picadilly combina espacios interiores confortables con entretenimiento a bordo, perfecta para disfrutar del mar durante varias horas.",
        imagenes: [
            "./assets/img/barcos/picadilly/pica1.png",
            "./assets/img/barcos/picadilly/pica2.png",
            "./assets/img/barcos/picadilly/pica3.png",
            "./assets/img/barcos/picadilly/pica4.png",
            "./assets/img/barcos/picadilly/pica5.png",
            "./assets/img/barcos/picadilly/pica6.png"
        ],
        detalles: {
            duracion: "5 horas",
            ubicacion: "Río de Janeiro",
            incluye: "Alquiler de lancha, hielo y carbón, churrasqueiro profesional, TV, cabina privada",
            noIncluye: "Comidas, bebidas, combustible adicional"
        }
    },
    {
        id: "jet-ski",
        categoria: "navegacion",
        titulo: "Paseo en Jet Ski | Aventura y Adrenalina",
        precio: "Desde R$ 500",
        descripcion: "Viví una experiencia llena de adrenalina recorriendo el mar en jet ski. Ideal para quienes buscan acción, diversión y una forma diferente de conocer la costa, siempre acompañado por guías profesionales.",
        imagenes: [
            "./assets/img/barcos/jetsky/jet1.png"
        ],
        detalles: {
            duracion: "Paseo guiado (tiempo a coordinar)",
            ubicacion: "Río de Janeiro",
            incluye: "Transporte ida y vuelta, jet ski, guía bilingüe",
            noIncluye: "Gastos personales, extras no especificados"
        }
    },
    {
        id: "acuario-boulevard",
        categoria: "city-tours",
        titulo: "Acuario de Río + Boulevard Olímpico",
        precio: "Desde R$ 250",
        descripcion: "Un paseo ideal para todas las edades que combina naturaleza marina, arte urbano y los espacios más modernos de Río de Janeiro. Visitá el acuario marino más grande de América del Sur, con túneles subacuáticos y cientos de especies, y recorré el renovado Boulevard Olímpico, una de las zonas más vibrantes de la ciudad, llena de historia, cultura y murales icónicos.",
        imagenes: [
            "./assets/img/citytours/acuario/acuario1.png"
        ],
        detalles: {
            duracion: "Medio día",
            ubicacion: "Río de Janeiro",
            incluye: "Transporte ida y vuelta desde el hotel, guía bilingüe, entrada al acuario",
            noIncluye: "Comidas, bebidas y atracciones no especificadas"
        }
    },
    {
        id: "1-dia-en-rio",
        categoria: "city-tours",
        titulo: "Tour Completo – 1 Día en Río de Janeiro",
        precio: "Desde R$ 490",
        descripcion: "La opción más completa para conocer Río de Janeiro en un solo día. Este tour recorre los principales íconos de la ciudad, combinando paisajes espectaculares, cultura e historia. Incluye visitas al Cristo Redentor y al Pan de Azúcar, además de un recorrido panorámico por barrios tradicionales, playas y puntos culturales, todo con transporte cómodo y guía especializado.",
        imagenes: [
            "./assets/img/citytours/1dia/1dia1.png"
        ],
        detalles: {
            duracion: "9 a 10 horas aprox.",
            ubicacion: "Río de Janeiro",
            incluye: "Transporte ejecutivo climatizado, guía bilingüe, entrada al Cristo Redentor, entrada y teleférico al Pan de Azúcar, almuerzo buffet",
            noIncluye: "Bebidas, postres y gastos personales"
        }
    },
    {
        id: "corcovado-city",
        categoria: "city-tours",
        titulo: "Tour Corcovado y City Tour",
        precio: "Desde R$ 260",
        descripcion: "Un tour ideal para conocer lo esencial de Río de Janeiro. Incluye la visita al Cristo Redentor, uno de los monumentos más famosos del mundo, y un recorrido panorámico por los principales puntos turísticos y culturales de la ciudad. Perfecto para quienes tienen poco tiempo y quieren una experiencia completa y bien organizada.",
        imagenes: [
            "./assets/img/citytours/corcovado/corcovado1.png"
        ],
        detalles: {
            duracion: "Medio día",
            ubicacion: "Río de Janeiro",
            incluye: "Transporte ejecutivo climatizado, guía bilingüe, entrada al Cristo Redentor, city tour panorámico",
            noIncluye: "Comidas, bebidas y gastos personales"
        }
    },
    {
        id: "rio-aventura",
        categoria: "city-tours",
        titulo: "Tour Río de Aventura – Pan de Azúcar, AquaRio y BioParque",
        precio: "Desde R$ 655",
        descripcion: "Un día completo combinando paisajes, diversión y naturaleza. Este tour reúne tres grandes atracciones de Río: el Pan de Azúcar con su teleférico panorámico, el AquaRio y el BioParque, un zoológico moderno enfocado en la conservación. Ideal para familias y viajeros que buscan una experiencia variada y dinámica.",
        imagenes: [
            "./assets/img/citytours/aventura/aventura1.png"
        ],
        detalles: {
            duracion: "7 horas aprox.",
            ubicacion: "Río de Janeiro",
            incluye: "Transporte ida y vuelta, guía especializado, entradas a Pan de Azúcar, AquaRio y BioParque, almuerzo",
            noIncluye: "Bebidas, postres y servicios adicionales"
        }
    },
    {
        id: "maracana",
        categoria: "city-tours",
        titulo: "Tour Estadio Maracanã",
        precio: "Desde R$ 250",
        descripcion: "Una experiencia imperdible para los amantes del fútbol y la cultura brasileña. Conocé el mítico Estadio Maracanã, escenario de finales históricas y grandes momentos del deporte mundial. El tour recorre el exterior del estadio y su entorno, con explicaciones sobre su historia y relevancia cultural.",
        imagenes: [
            "./assets/img/citytours/maracana/maracana1.png"
        ],
        detalles: {
            duracion: "Corta duración",
            ubicacion: "Río de Janeiro",
            incluye: "Transporte ida y vuelta, guía bilingüe, visita externa al estadio",
            noIncluye: "Ingreso al interior del estadio, comidas y bebidas"
        }
    },
];