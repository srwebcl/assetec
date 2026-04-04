import fs from 'fs';
import path from 'path';

export const getImages = (folder) => {
  try {
    const dir = path.join(process.cwd(), 'public', 'images', 'proyectos', folder);
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir);
    return files
      .filter((f) => !f.startsWith('.') && f.match(/\.(webp|png|jpe?g)$/i))
      .map((f) => `/images/proyectos/${folder}/${f}`);
  } catch (e) {
    return [];
  }
};

export const proyectos = [
  {
    slug: 'montaje-camaras-electricas-miraolas',
    categoria: 'Montaje Eléctrico',
    titulo: 'Fabricación y Montaje Cámaras Eléctricas',
    cliente: 'Condominio Miraolas',
    ubicacion: 'Coquimbo (Av. Costanera)',
    fecha: 'Enero 2025',
    descripcion: 'Realizamos la fabricación y montaje de cámaras eléctricas para el Condominio Miraolas, asegurando la instalación de infraestructura eléctrica subterránea esencial para la distribución y protección de la red eléctrica del condominio.',
    folder: 'xv-fabricaci-on-y-montaje-c-amaras-el-ectricas-proyecto-condominio-miraolas-av-costanera-coquimbo-enero-2025',
    tags: ['Montaje', 'Subterránea'],
  },
  {
    slug: 'acometida-electrica-miraolas',
    categoria: 'Montaje Eléctrico',
    titulo: 'Fabricación y Montaje Acometida Eléctrica',
    cliente: 'Condominio Miraolas',
    ubicacion: 'Coquimbo (Av. Costanera)',
    fecha: 'Enero 2025',
    descripcion: 'Se ejecutó la fabricación y montaje de la acometida eléctrica, garantizando el suministro eléctrico inicial y esencial para el correcto funcionamiento del condominio.',
    folder: 'xiv-fabricaci-on-y-montaje-acometida-el-ectrica-proyecto-condominio-miraolas-av-costanera-coquimbo-enero-2025',
    tags: ['Acometida', 'Suministro'],
  },
  {
    slug: 'montaje-bpc-cmqh',
    categoria: 'Montaje Eléctrico',
    titulo: 'Fabricación y Montaje B.P.C.',
    cliente: 'CMQH',
    ubicacion: 'Minera Quebrada Honda',
    fecha: 'Enero 2025',
    descripcion: 'Fabricación y montaje de Bases Para Canalización (B.P.C.), proporcionando la infraestructura necesaria para el soporte y canalización de sistemas eléctricos.',
    folder: 'xiii-fabricaci-on-y-montaje-b-p-c-proyecto-cmqh-enero-2025',
    tags: ['Canalización', 'Minería'],
  },
  {
    slug: 'modelacion-3d-banco-ducto',
    categoria: 'Ingeniería y Diseño',
    titulo: 'Modelación 3D Banco Ducto Subterráneo',
    cliente: 'Belfi',
    ubicacion: 'Puerto Coquimbo',
    fecha: '2024',
    descripcion: 'Desarrollamos la modelación 3D de un banco de ductos subterráneo, permitiendo una visualización precisa para la planificación, diseño y coordinación del proyecto.',
    folder: 'xvi-modelaci-on-3d-de-banco-ducto-subterraneo-proyecto-belfi-puerto-coquimbo',
    tags: ['Modelación 3D', 'Diseño'],
  },
  {
    slug: 'servicios-emergencia-coquimbo',
    categoria: 'Servicios Integrales',
    titulo: 'Servicios de Emergencia',
    cliente: 'Varios',
    ubicacion: 'Región de Coquimbo',
    fecha: 'Febrero 2025',
    descripcion: 'Respuesta inmediata ante emergencia para restablecer el suministro eléctrico en sectores afectados, asegurando la continuidad de servicios esenciales.',
    folder: 'xii-servicios-de-emergencia-reposici-on-de-suministro-el-ectrico-en-la-regi-on-de-coquimbo',
    tags: ['Emergencia', 'Reposición'],
  },
  {
    slug: 'planta-procesadora-minerales-cmqh',
    categoria: 'Industrial',
    titulo: 'Planta Procesadora de Minerales',
    cliente: 'Compañía Minera Quebrada Honda',
    ubicacion: 'La Higuera',
    fecha: 'Septiembre 2024',
    descripcion: 'Desarrollo e implementación de infraestructura eléctrica para planta procesadora de minerales, permitiendo operaciones eficientes de procesamiento.',
    folder: 'i-proyecto-planta-procesadora-de-minerales-compa-n-ia-minera-quebrada-honda',
    tags: ['Minería', 'Industrial'],
  },
  {
    slug: 'ampliacion-muelle-atraque-tpc',
    categoria: 'Industrial',
    titulo: 'Ampliación Muelle de Atraque Sitio 3',
    cliente: 'Terminal Puerto Coquimbo (TPC)',
    ubicacion: 'Coquimbo',
    fecha: 'Septiembre 2023',
    descripcion: 'Ejecución de obras de ampliación del muelle, incluyendo infraestructura eléctrica para expansión de operaciones portuarias.',
    folder: 'iv-proyecto-ampliaci-on-muelle-atraque-sitio-3-tpc-puerto-coquimbo-coquimbo-septiembre-2023',
    tags: ['Puerto', 'Expansión'],
  },
  {
    slug: 'instalacion-industrial-llantas',
    categoria: 'Comercial',
    titulo: 'Instalación Eléctrica Industrial',
    cliente: 'Llantas del Pacífico',
    ubicacion: 'Valparaíso',
    fecha: 'Abril 2024',
    descripcion: 'Instalación eléctrica completa para local comercial de tipo industrial, asegurando un suministro robusto y confiable.',
    folder: 'ii-proyecto-industrial-de-instalaci-on-el-ectrica-local-comercial-llantas-del-pac-ifico-valpara-iso-valparaiso-abril-2024',
    tags: ['Comercial', 'Instalación'],
  },
  {
    slug: 'instalacion-habitacion-morrillos',
    categoria: 'Residencial',
    titulo: 'Instalación Casa Habitación',
    cliente: 'Casa Morrillos',
    ubicacion: 'Sector Lagunilla, Coquimbo',
    fecha: 'Septiembre 2024',
    descripcion: 'Implementación de solución eléctrica completa para vivienda, garantizando seguridad y eficiencia energética.',
    folder: 'ix-proyecto-el-ectrico-casa-habitaci-on-morrillos-sector-lagunilla-coquimbo-lagunillas-coquimbo-septiembre-2024',
    tags: ['Residencial', 'Eficiencia'],
  },
  {
    slug: 'urbanizacion-electrica-altovalsol',
    categoria: 'Obras Civiles',
    titulo: 'Urbanización Eléctrica',
    cliente: 'Lomas de Altovalsol',
    ubicacion: 'Sector Coquimbito, La Serena',
    fecha: 'Octubre 2024',
    descripcion: 'Desarrollo de infraestructura eléctrica para nuevo sector residencial, asegurando suministro confiable para sus habitantes.',
    folder: 'v-proyecto-urbanizaci-on-el-ectrica-lomas-de-altovalsol-sector-coquimbito-la-serena',
    tags: ['Urbanización', 'Eléctrica'],
  },
  {
    slug: 'remodelacion-cuartel-bomberos-serena',
    categoria: 'Obras Civiles',
    titulo: 'Remodelación Cuartel de Bomberos',
    cliente: '1ra Compañía de Bomberos',
    ubicacion: 'La Serena',
    fecha: 'Febrero 2024',
    descripcion: 'Reposición y remodelación patrimonial del cuartel, combinando conservación histórica con modernización de instalaciones.',
    folder: 'x-proyecto-reposici-on-y-remodelaci-on-patrimonial-cuartel-de-bomberos-1ra-c-ia-la-serena',
    tags: ['Patrimonial', 'Remodelación'],
  },
  {
    slug: 'vertical-electrico-miraolas',
    categoria: 'Residencial',
    titulo: 'Proyecto Vertical Eléctrico',
    cliente: 'Edificio Condominio Miraolas',
    ubicacion: 'Av. Costanera, Coquimbo',
    fecha: 'Diciembre 2024',
    descripcion: 'Suministro e instalación eléctrica vertical completa para edificio, asegurando eficiencia y seguridad en toda la red.',
    folder: 'vii-proyecto-vertical-el-ectrico-suministro-electrico-a-edificio-condominio-miraolas-av-costanera-coquimbo-diciembre-2024',
    tags: ['Vertical', 'Edificios'],
  },
  {
    slug: 'vertical-electrico-firenze',
    categoria: 'Residencial',
    titulo: 'Proyecto Vertical Eléctrico',
    cliente: 'Condominio Firenze',
    ubicacion: 'La Serena',
    fecha: 'Enero 2023',
    descripcion: 'Implementación de sistema eléctrico integral, incluyendo alimentador subterráneo y electrificación de áreas comunes.',
    folder: 'xi-proyecto-vertical-el-ectrico-alimentador-general-subterraneo-y-areas-comunes-condominio-firenze-qd7-novatec',
    tags: ['Subterráneo', 'Áreas'],
  }
];
