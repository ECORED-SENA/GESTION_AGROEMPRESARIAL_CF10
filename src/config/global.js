export default {
  global: {
    componenteFormativo:
      'Planeación de procesos de certificación de explotaciones agropecuarias',
    descripcionCurso:
      'Mediante este componente, el aprendiz potenciará su saber y habilidades en procesos de certificación, requisito casi obligatorio para productores agropecuarios interesados en nuevos mercados o en mejorar la calidad de productos. Afianzará conceptos y destrezas para acceder a este servicio, mediante la planeación, identificación de puntos fuertes y aspectos por mejorar del sistema productivo, con base en el estándar de certificación seleccionado.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Certificación de unidades agropecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normativa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estándares de certificación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Requisitos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis del sistema productivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Recolección de información',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<i>Software</i> agropecuario',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas de análisis',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Interpretación de resultados',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Diagnóstico',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Programa de certificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Justificación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Definición de objetivos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Requerimientos técnicos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Gestión de recursos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Protocolos',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Implementación del programa de certificación',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Presidencial de Cooperación Internacional. (2020). Herramientas para la formulación de proyectos de cooperación internacional. APC Colombia.',
      link:
        'https://apccolombia.gov.co/Herramientas-para-la-formulacion-de-proyectos-de-cooperacion-internacional',
    },
    {
      referencia:
        'Asociación Nacional de Comercio Exterior – Analdex. (2018). Las certificaciones y documentos que se requieren para exportar productos del agro. Analdex',
      link:
        'https://www.analdex.org/2019/10/10/las-certificaciones-y-documentos-que-se-requieren-para-exportar-productos-del-agro/',
    },
    {
      referencia:
        'Bancolombia. (2019). Certificaciones que abren puertas a los negocios. Bancolombia. ',
      link:
        'https://www.bancolombia.com/negocios/actualizate/legal-y-tributario/certificaciones-pymes',
    },
    {
      referencia:
        'Cortez, E. (2011). Diagnóstico y elaboración del plan de acción para certificación de la empresa. Equipo Alianza Limitada.',
      link:
        'https://red.uao.edu.co/bitstream/handle/10614/1576/TAD00705.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2017). Buenas Prácticas Agrícolas y Ganaderas (BPA). ICA.',
      link: 'https://www.ica.gov.co/areas/agricola-pecuaria/bpa-bpg.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2020). Resolución 082394 de 2020. Por medio de la cual se Modifica los artículos 2, 3, 4, 12, y 14 de la Resolución 30021 de 2017.',
    },
    {
      referencia:
        'Rincón, D. (2016). Conceptualización de la trazabilidad en la cadena de abastecimiento. (Tesis de grado). Universidad Distrital Francisco José de Caldas, Bogotá.',
      link:
        'https://repository.udistrital.edu.co/bitstream/handle/11349/2811/RinconBallesterosDoraLucia2016.PDF?sequence=1&isAllowed=y.',
    },
  ],
  glosario: [
    {
      termino: 'Código abierto',
      significado:
        'cuando un programa de cómputo tiene su código fuente a disposición de todos los usuarios de forma gratuita.',
    },
    {
      termino: 'Perenne',
      significado: 'referente a los cultivos de ciclo largo.',
    },
    {
      termino: 'Peso específico',
      significado:
        'relativo a la importancia relativa que tiene un elemento frente a otro. ',
    },
    {
      termino: 'Ponderación',
      significado:
        'es cuando se le atribuye un determinado valor a una variable en especial, dependiendo de la incidencia o el peso que esta tenga sobre las demás.',
    },
    {
      termino: 'Punto crítico',
      significado:
        'punto, operación o etapa del proceso en la que requiere mayor control y vigilancia debido al alto riesgo que representa para el sistema productivo.',
    },
  ],
  complementario: [
    {
      tema: 'Programa de certificación',
      referencia:
        'TvAgro. (2014). Certificación sobre Buenas Prácticas Agrícolas (BPA).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HcJaXo1zxqs.',
    },
    {
      tema: 'Programa de certificación',
      referencia:
        'Ceres. (2020). Normas ambientales y sociales. Ceres Colombia. ',
      tipo: 'Página web',
      link: 'https://cerescolombia-cert.com/normas-ambientales-y-sociales/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sofia Suárez Suárez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
