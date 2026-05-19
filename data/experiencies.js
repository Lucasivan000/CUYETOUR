const EXPERIENCES = [
    {
        id: "arraial",
        categoria: "barcos",
        titulo: "Tour Arraial do Cabo",
        precio: "Desde R$250 por persona",
        descripcion: "Llamado el “Caribe Brasileño”, Arraial do Cabo es uno de los destinos más buscados de la costa de Río de Janeiro por sus aguas cristalinas y playas de arena blanca. Durante este tour en barco vas a recorrer algunos de los puntos más impresionantes de la región, con paradas para disfrutar del paisaje, nadar y conocer lugares icónicos como la Playa do Forno, la Isla del Faro, la Gruta Azul y la playa pontal de atalaia, además del característico perfil de mono en las formaciones rocosas. Es una experiencia completa en contacto directo con el mar, ideal para quienes quieren conocer playas únicas con aguas tranquilas y escenarios naturales inolvidables.",
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
            incluye: "Transporte. Ticket de barco. Buffet libre",
            noIncluye: "Bebidas. Tasas maritimas"
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
            incluye: "Transporte. Ticket de barco. Buffet libre",
            noIncluye: "Bebidas. Tasas maritimas"
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
            incluye: "Transporte. Ticket de barco. Buffet libre",
            noIncluye: "Bebidas. Tasas maritimas"
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
            incluye: "Transporte. Ticket de barco. Buffet libre",
            noIncluye: "Bebidas. Tasas maritimas"
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
            incluye: "Transporte. Ticket de barco. Buffet libre",
            noIncluye: "Bebidas. Tasas maritimas"
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
            incluye: "Transporte. Ticket de barco. Buffet libre",
            noIncluye: "Bebidas. Tasas maritimas"
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
            "./assets/img/tours/acuario/acua1.png",
            "./assets/img/tours/acuario/acua2.png",
            "./assets/img/tours/acuario/acua3.png",
            "./assets/img/tours/acuario/acua5.png",
            "./assets/img/tours/acuario/tour4.png"
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
            "./assets/img/tours/diario/dia1.png",
            "./assets/img/tours/diario/dia2.png",
            "./assets/img/tours/diario/dia3.png",
            "./assets/img/tours/diario/dia4.png",
            "./assets/img/tours/diario/dia5.png",
            "./assets/img/tours/diario/dia6.png"
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
            "./assets/img/tours/corcovado/corco1.png",
            "./assets/img/tours/corcovado/corco2.png",
            "./assets/img/tours/corcovado/corco3.png",
            "./assets/img/tours/corcovado/corco4.png"
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
            "./assets/img/tours/rioaventura/aven1.png",
            "./assets/img/tours/rioaventura/aven2.png",
            "./assets/img/tours/rioaventura/aven3.png",
            "./assets/img/tours/rioaventura/aven4.png"
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
            "./assets/img/tours/maracana/mara2.png",
            "./assets/img/tours/maracana/mara1.png"
        ],
        detalles: {
            duracion: "Corta duración",
            ubicacion: "Río de Janeiro",
            incluye: "Transporte ida y vuelta, guía bilingüe, visita externa al estadio",
            noIncluye: "Ingreso al interior del estadio, comidas y bebidas"
        }
    },
    {
        id: "pedra-do-telegrafo",
        categoria: "naturaleza-excursiones",
        titulo: "Pedra do Telégrafo – Aventura y Vista Panorámica",
        precio: "Desde R$ 190",
        descripcion: "Una de las excursiones más famosas de Río de Janeiro. La Pedra do Telégrafo ofrece una caminata en plena naturaleza y una vista panorámica impresionante del litoral carioca. Ideal para quienes buscan aventura, contacto con la naturaleza y fotos icónicas, todo en una experiencia guiada y segura.",
        imagenes: [
            "./assets/img/naturaleza/telegrafo/tele1.png",
            "./assets/img/naturaleza/telegrafo/tele2.png",
            "./assets/img/naturaleza/telegrafo/tele3.png",
            "./assets/img/naturaleza/telegrafo/tele4.png",
            "./assets/img/naturaleza/telegrafo/tele5.png"
        ],
        detalles: {
            duracion: "6 a 7 horas aprox.",
            ubicacion: "Zona Oeste – Río de Janeiro",
            incluye: "Transporte ida y vuelta, guía turístico especializado",
            noIncluye: "Comidas, bebidas y gastos personales"
        }
    },
    {
        id: "morro-dois-irmaos",
        categoria: "naturaleza-excursiones",
        titulo: "Trilha Morro Dois Irmãos – Vista Privilegiada de Río",
        precio: "Desde R$ 250",
        descripcion: "Una de las caminatas más completas y espectaculares de Río de Janeiro. La trilha del Morro Dois Irmãos atraviesa áreas verdes y culmina con una de las vistas más impactantes de la ciudad, abarcando Leblon, Ipanema, Lagoa y São Conrado. Ideal para amantes del trekking y la naturaleza.",
        imagenes: [
            "./assets/img/naturaleza/doisirmaos/dos1.png",
            "./assets/img/naturaleza/doisirmaos/dos2.png",
            "./assets/img/naturaleza/doisirmaos/dos3.png",
            "./assets/img/naturaleza/doisirmaos/dos4.png"
        ],
        detalles: {
            duracion: "Medio día",
            ubicacion: "Zona Sur – Río de Janeiro",
            incluye: "Guía especializado, acompañamiento durante la caminata",
            noIncluye: "Transporte, comidas y bebidas"
        }
    },
    {
        id: "floresta-tijuca-jeep",
        categoria: "naturaleza-excursiones",
        titulo: "Floresta da Tijuca en Jeep – Naturaleza y Cascadas",
        precio: "Desde R$ 250",
        descripcion: "Explorá la mayor selva urbana del mundo en un recorrido cómodo y lleno de paisajes increíbles. El tour en jeep por la Floresta da Tijuca combina naturaleza, cascadas, miradores y aire puro, ideal para quienes desean conocer el lado más verde de Río sin realizar caminatas exigentes.",
        imagenes: [
            "./assets/img/naturaleza/tiujca/yuca1.png",
            "./assets/img/naturaleza/tiujca/yuca2.png",
            "./assets/img/naturaleza/tiujca/yuca3.png",
            "./assets/img/naturaleza/tiujca/yuca4.png",
            "./assets/img/naturaleza/tiujca/yuca5.png",
            "./assets/img/naturaleza/tiujca/yuca6.png",
            "./assets/img/naturaleza/tiujca/yuca7.png"
        ],
        detalles: {
            duracion: "Medio día",
            ubicacion: "Parque Nacional da Tijuca – Río de Janeiro",
            incluye: "Transporte en jeep, guía especializado",
            noIncluye: "Comidas, bebidas y gastos personales"
        }
    },
    {
        id: "petropolis",
        categoria: "naturaleza-excursiones",
        titulo: "Tour Petrópolis – Ciudad Imperial",
        precio: "Desde R$ 275",
        descripcion: "Una excursión imperdible a la encantadora ciudad de Petrópolis, ubicada en la región serrana. Conocida como la Ciudad Imperial, combina historia, arquitectura europea y naturaleza. Un paseo ideal para salir de Río y descubrir un entorno más fresco, cultural y relajado.",
        imagenes: [
            "./assets/img/naturaleza/petropolis/pet1.png",
            "./assets/img/naturaleza/petropolis/pet2.png",
            "./assets/img/naturaleza/petropolis/pet3.png",
            "./assets/img/naturaleza/petropolis/pet4.png",
            "./assets/img/naturaleza/petropolis/pet5.png"
        ],
        detalles: {
            duracion: "Día completo",
            ubicacion: "Petrópolis – Región Serrana de Río de Janeiro",
            incluye: "Transporte ida y vuelta, guía bilingüe, entradas a museos y atracciones, almuerzo buffet",
            noIncluye: "Bebidas, postres y gastos personales"
        }
    },
    {
        id: "favela-vidigal",
        categoria: "experiencias-locales",
        titulo: "Tour Favela Vidigal – Alto do Vidigal",
        precio: "Desde R$ 199",
        descripcion: "Viví una de las experiencias más auténticas de Río de Janeiro recorriendo la comunidad de Vidigal. Este tour combina cultura local, historia, mirantes espectaculares y la energía única del famoso Alto do Vidigal, ofreciendo una mirada real y respetuosa de la vida en la favela.",
        imagenes: [
            "./assets/img/experiencias/vidigal/vidi1.png",
            "./assets/img/experiencias/vidigal/vidi2.png"
        ],
        detalles: {
            duracion: "4 horas aprox.",
            ubicacion: "Vidigal – Zona Sur, Río de Janeiro",
            incluye: "Transporte ida y vuelta, guía bilingüe, caminata guiada por la comunidad, paradas en mirantes",
            noIncluye: "Comidas, bebidas y gastos personales"
        }
    },
    {
        id: "favela-rocinha",
        categoria: "experiencias-locales",
        titulo: "Tour Favela Rocinha – Experiencia Cultural",
        precio: "Desde R$ 199",
        descripcion: "Conocé de cerca la mayor favela de Latinoamérica en un recorrido cultural y seguro. El tour por Rocinha incluye mirantes, murales de arte, espacios culturales y museos comunitarios, brindando una experiencia enriquecedora que muestra la historia, la identidad y la fuerza de la comunidad local.",
        imagenes: [
            "./assets/img/experiencias/rocina/roci1.png",
            "./assets/img/experiencias/rocina/roci2.png",
            "./assets/img/experiencias/rocina/roci3.png",
            "./assets/img/experiencias/rocina/roci4.png",
            "./assets/img/experiencias/rocina/roci5.png",
            "./assets/img/experiencias/rocina/roci6.png"
        ],
        detalles: {
            duracion: "Medio día",
            ubicacion: "Rocinha – Río de Janeiro",
            incluye: "Guía autorizado y especializado, recorrido guiado por la comunidad, paradas en mirantes",
            noIncluye: "Comidas, bebidas, transporte y servicios adicionales"
        }
    },
    {
        id: "favela-santa-marta",
        categoria: "experiencias-locales",
        titulo: "Tour Favela Santa Marta – Cultura y Mirantes",
        precio: "Desde R$ 195",
        descripcion: "Descubrí la favela Santa Marta en un tour cultural lleno de historia, música y vistas increíbles. El recorrido incluye el famoso bondinho, mirantes panorámicos, proyectos sociales, arte urbano y la icónica Laje de Michael Jackson, ofreciendo una experiencia cercana y auténtica.",
        imagenes: [
            "./assets/img/experiencias/donamarta/dona2.png",
            "./assets/img/experiencias/donamarta/dona1.png",
            "./assets/img/experiencias/donamarta/dona3.png"
        ],
        detalles: {
            duracion: "2 horas aprox.",
            ubicacion: "Santa Marta – Botafogo, Río de Janeiro",
            incluye: "Guía local, recorrido guiado por la comunidad, acceso a mirantes y puntos culturales",
            noIncluye: "Transporte hasta el punto de encuentro, comidas y bebidas"
        }
    },
    {
        id: "stand-up-amanecer",
        categoria: "experiencias-locales",
        titulo: "Stand Up Paddle al Amanecer – Copacabana",
        precio: "Desde R$ 190",
        descripcion: "Una experiencia única para comenzar el día en Río de Janeiro. Remá en stand up paddle mientras el sol sale sobre el mar de Copacabana, en una actividad guiada, segura y perfecta para todos los niveles, con fotos y videos incluidos para llevarte un recuerdo inolvidable.",
        imagenes: [
            "./assets/img/experiencias/standup/standup1.jpeg",
            "./assets/img/experiencias/standup/standup2.jpeg",
            "./assets/img/experiencias/standup/standup3.jpeg",
            "./assets/img/experiencias/standup/standup4.jpeg",
            "./assets/img/experiencias/standup/standup5.jpeg",
            "./assets/img/experiencias/standup/standup6.jpeg",
            "./assets/img/experiencias/standup/standup7.jpeg",
            "./assets/img/experiencias/standup/standup8.jpeg",
            "./assets/img/experiencias/standup/standup9.jpeg"

        ],
        detalles: {
            duracion: "2 horas aprox.",
            ubicacion: "Copacabana – Posto 6, Río de Janeiro",
            incluye: "Tabla de stand up paddle, instrucción, guarda-volúmenes, chaleco salvavidas, fotos y videos",
            noIncluye: "Transporte, comidas y bebidas"
        }
    },
    {
        id: "helicoptero-rio",
        categoria: "experiencias-premium",
        titulo: "Paseo en Helicóptero – Río de Janeiro",
        precio: "Desde R$ 2.000",
        descripcion: "Un vuelo panorámico exclusivo sobre los paisajes más icónicos de Río de Janeiro. Durante 15 a 25 minutos disfrutarás de vistas privilegiadas de playas, montañas y monumentos emblemáticos, en una experiencia ideal para quienes buscan lujo, emoción y recuerdos inolvidables.",
        imagenes: [
            "./assets/img/experienciaspremium/tourhelicoptero/heli1.png",
            "./assets/img/experienciaspremium/tourhelicoptero/heli2.png",
            "./assets/img/experienciaspremium/tourhelicoptero/heli3.png",
            "./assets/img/experienciaspremium/tourhelicoptero/heli4.png",
            "./assets/img/experienciaspremium/tourhelicoptero/heli5.png"

        ],
        detalles: {
            duracion: "15 a 25 minutos",
            ubicacion: "Río de Janeiro",
            incluye: "Vuelo panorámico en helicóptero, piloto profesional certificado, briefing de seguridad",
            noIncluye: "Traslado al helipuerto, fotos o videos profesionales, gastos personales"
        }
    },
    {
        id: "helicoptero-sin-puertas",
        categoria: "experiencias-premium",
        titulo: "Tour en Helicóptero sin Puertas – Río de Janeiro",
        precio: "Desde R$ 2.950",
        descripcion: "Una experiencia aérea extrema y sofisticada. Volá sin puertas durante 30 minutos sobre más de 20 puntos icónicos de Río de Janeiro, con vistas totalmente abiertas y una sensación de libertad absoluta.",
        imagenes: [
            "./assets/img/experienciaspremium/helisin/helisin2.png",
            "./assets/img/experienciaspremium/helisin/helisin1.png",
            "./assets/img/experienciaspremium/helisin/helisin3.png",
            "./assets/img/experienciaspremium/helisin/helisin4.png"
        ],
        detalles: {
            duracion: "30 minutos",
            ubicacion: "Río de Janeiro",
            incluye: "Vuelo sin puertas, piloto profesional certificado, equipamiento de seguridad",
            noIncluye: "Traslados, fotos y videos profesionales, gastos personales"
        }
    },
    {
        id: "ala-delta-pedra-bonita",
        categoria: "experiencias-premium",
        titulo: "Vuelo en Ala Delta – Pedra Bonita",
        precio: "Desde R$ 1.300",
        descripcion: "Viví la emoción de volar en ala delta desde Pedra Bonita acompañado por un instructor certificado. Disfrutá de vistas increíbles de montañas, selva y mar en una experiencia segura, intensa e inolvidable.",
        imagenes: [
            "./assets/img/experienciaspremium/aladelta/ala1.png",
            "./assets/img/experienciaspremium/aladelta/ala4.png",
            "./assets/img/experienciaspremium/aladelta/ala5.png",
            "./assets/img/experienciaspremium/aladelta/ala6.png"
        ],
        detalles: {
            duracion: "15 a 20 minutos",
            ubicacion: "Pedra Bonita – São Conrado",
            incluye: "Vuelo con instructor certificado, equipo completo, instrucción previa, transporte hasta la rampa",
            noIncluye: "Fotos y videos profesionales, gastos personales"
        }
    },
    {
        id: "parapente-niteroi",
        categoria: "experiencias-premium",
        titulo: "Parapente – Niterói",
        precio: "Desde R$ 900",
        descripcion: "Disfrutá la sensación de volar en parapente sobre los paisajes naturales de Niterói. Una experiencia que combina adrenalina, tranquilidad y vistas increíbles del océano, ideal para quienes buscan algo diferente.",
        imagenes: [
            "./assets/img/experienciaspremium/parapente/para1.png",
            "./assets/img/experienciaspremium/parapente/para2.png"
        ],
        detalles: {
            duracion: "7 a 12 minutos (aprox.)",
            ubicacion: "Parque da Cidade – Niterói",
            incluye: "Vuelo con instructor certificado, fotos y videos incluidos, equipo completo",
            noIncluye: "Traslados, gastos personales"
        }
    },
    {
        id: "buggy-buzios",
        categoria: "experiencias-premium",
        titulo: "Tour en Buggy – Búzios",
        precio: "Desde R$ 130",
        descripcion: "Recorré Búzios en un divertido tour en buggy visitando playas paradisíacas, mirantes naturales y puntos ideales para fotos. Una forma relajada y emocionante de conocer uno de los destinos más encantadores de Brasil.",
        imagenes: [
            "./assets/img/experienciaspremium/buggy/buggy1.png"
        ],
        detalles: {
            duracion: "1 hora y 20 minutos",
            ubicacion: "Búzios – Río de Janeiro",
            incluye: "Paseo en buggy, conductor/guía, paradas para fotos",
            noIncluye: "Comidas, bebidas, gastos personales"
        }
    },
];