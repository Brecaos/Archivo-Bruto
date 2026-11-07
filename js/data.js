/* =========================================================
   DATOS DEL SITIO
   Equivale a src/data/projects.ts + types.ts.
   Para añadir un proyecto, copia un bloque { ... } y cambia el id.
   ========================================================= */

const projects = [
  {
    id: "001",
    title: "RUIDO ÚTIL",
    artist: "NORA VELA",
    category: "CULTURA DIGITAL",
    year: "2025",
    city: "MADRID",
    image:
      "https://images.unsplash.com/photo-1610337673044-720471f83677?auto=format&fit=crop&w=1600&q=85",
    description:
      "Una investigación visual sobre el error digital como materia prima. Pantallas rotas, compresión y datos ilegibles se convierten en un nuevo alfabeto.",
  },
  {
    id: "002",
    title: "MURO 43",
    artist: "COLECTIVO RAS",
    category: "ARTE URBANO",
    year: "2024",
    city: "BERLÍN",
    image:
      "https://images.unsplash.com/photo-1620055672875-75bf8d19067f?auto=format&fit=crop&w=1600&q=85",
    description:
      "Intervención colectiva y efímera sobre una medianera abandonada. El muro cambia cada semana y no existe una versión definitiva.",
  },
  {
    id: "003",
    title: "TIPO EN FUGA",
    artist: "MARTA NÓMADE",
    category: "TIPOGRAFÍA",
    year: "2025",
    city: "CDMX",
    image:
      "https://images.unsplash.com/photo-1609605348579-3123e3d40eb8?auto=format&fit=crop&w=1600&q=85",
    description:
      "Letras encontradas, deformadas y vueltas a imprimir. Una familia tipográfica que se niega a permanecer quieta.",
  },
  {
    id: "004",
    title: "NO SIGNAL",
    artist: "ESTUDIO ERROR",
    category: "DISEÑO GRÁFICO",
    year: "2023",
    city: "VALENCIA",
    image:
      "https://images.unsplash.com/photo-1610454059909-f9a5a6eb4e58?auto=format&fit=crop&w=1600&q=85",
    description:
      "Serie de carteles sin encargo que cuestiona la obsesión por el acabado perfecto y el mensaje inequívoco.",
  },
  {
    id: "005",
    title: "BLOQUE VIVO",
    artist: "IRIA COSTA",
    category: "PROYECTOS",
    year: "2024",
    city: "A CORUÑA",
    image:
      "https://images.unsplash.com/photo-1484882918957-e9f6567be3c8?auto=format&fit=crop&w=1600&q=85",
    description:
      "Archivo fotográfico de arquitectura brutalista habitada. El hormigón como escenario de gestos cotidianos y apropiaciones mínimas.",
    objectPosition: "center 35%",
  },
  {
    id: "006",
    title: "PROTOCOLO X",
    artist: "LUCAS 404",
    category: "CULTURA DIGITAL",
    year: "2025",
    city: "ONLINE",
    image:
      "https://images.unsplash.com/photo-1634368998864-8984df61cdda?auto=format&fit=crop&w=1600&q=85",
    description:
      "Una interfaz sin instrucciones que aprende del caos producido por quien la usa. Navegar es intervenir.",
  },
  {
    id: "007",
    title: "ORDEN / CAOS",
    artist: "TALLER A2",
    category: "DISEÑO GRÁFICO",
    year: "2024",
    city: "BARCELONA",
    image:
      "https://images.unsplash.com/photo-1581080247486-57989c1f14ab?auto=format&fit=crop&w=1600&q=85",
    description:
      "Identidad mutable para un festival inexistente. Cada aplicación altera las reglas del sistema anterior.",
  },
  {
    id: "008",
    title: "FACHADA 08",
    artist: "SARA MONO",
    category: "PROYECTOS",
    year: "2023",
    city: "LISBOA",
    image:
      "https://images.unsplash.com/photo-1646580061173-f7b475f00934?auto=format&fit=crop&w=1600&q=85",
    description:
      "Ensayo sobre repetición, vivienda y anonimato a través de fachadas que funcionan como retículas involuntarias.",
  },
];

const categories = [
  "DISEÑO GRÁFICO",
  "ARTE URBANO",
  "TIPOGRAFÍA",
  "CULTURA DIGITAL",
  "PROYECTOS",
];

const categorySlugs = {
  "DISEÑO GRÁFICO": "diseno-grafico",
  "ARTE URBANO": "arte-urbano",
  TIPOGRAFÍA: "tipografia",
  "CULTURA DIGITAL": "cultura-digital",
  PROYECTOS: "proyectos",
};

const categoryDescriptions = {
  "DISEÑO GRÁFICO": "CARTELES, IDENTIDADES Y SISTEMAS VISUALES QUE NO PIDEN PERMISO.",
  "ARTE URBANO": "GRAFFITI, INTERVENCIONES Y ACCIONES QUE UTILIZAN LA CIUDAD COMO SOPORTE.",
  TIPOGRAFÍA: "LETRAS, ALFABETOS Y FORMAS DE ESCRITURA QUE ROMPEN SUS PROPIAS REGLAS.",
  "CULTURA DIGITAL": "INTERFACES, ERROR, GLITCH Y ARTE CREADO PARA VIVIR EN PANTALLAS.",
  PROYECTOS: "PRÁCTICAS INDEPENDIENTES, PROCESOS ABIERTOS Y TRABAJOS DIFÍCILES DE CLASIFICAR.",
};

function categoryToSlug(category) {
  return categorySlugs[category];
}

function categoryFromSlug(slug) {
  return categories.find((category) => categorySlugs[category] === slug);
}

function projectHref(project) {
  return `./trabajo.html?modulo=${Number(project.id)}`;
}
