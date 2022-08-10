<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Certificación de unidades agropecuarias
    
    p.mb-3 Los procesos de certificación de unidades productivas agropecuarias se desarrollan para mejorar su competitividad y asegurar la calidad de los alimentos y materias primas que, a diario, se consumen en el mundo entero. 

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-5(data-aos="fade")     
        .cajon.color-custom.p-4         
          p.mb-0 Igualmente, se basa en la búsqueda de una garantía que le indique al consumidor que está frente a un producto, que no va a afectar su salud, que es elaborado de manera sostenible, que su producción no deteriora las condiciones del medio ambiente y que los procesos de producción cumplen con los más altos estándares nacionales e internacionales.

      .col-lg-7.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema1/img_1.png'  alt='')

    p.mb-5 Las siguientes, son generalidades que, sobre certificación de unidades agropecuarias, se deben tener en cuenta:

    .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Distinción del producto
            p.mb-3 A través de los procesos de certificación se obtiene un sello que distingue a un producto de otros, lo cual se convierte en un elemento diferenciador que mejorará la confianza de los consumidores en los productos, permite mayores precios de venta y facilita el acceso a nuevos mercados, incluso, en ámbitos internacionales.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_2.png").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Mejora profunda de los procesos
            p.mb-3 Cuando se implementan procesos de certificación se obtiene una mejora sustancial en los procesos de manufactura debido al estricto seguimiento del que son objeto, lo cual reduce los costos de producción al procurar un uso eficiente de los recursos disponibles y una administración responsable del negocio agropecuario.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_3.png").mb-3

        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Entes competentes
            p.mb-3 En el ámbito nacional, Instituto Colombiano Agropecuario - ICA es el ente encargado de regular la actividad del sector y parte de sus funciones consiste en el establecimiento de los requisitos para la certificación de los predios en aspectos relacionados con las Buenas Prácticas Agrícolas (BPA), Buenas Prácticas Ganaderas (BPG), buenas prácticas acuícolas y granjas bioseguras. 
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_4.svg").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Certificaciones adicionales o complementarias
            p.mb-3 Además de los requisitos establecidos por el ICA, las actividades productivas agropecuarias pueden obtener certificaciones adicionales a las que se accede de manera voluntaria, las cuales le confieren al producto un sello de calidad que lo acredita como depositario de ciertas características especiales.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_5.png").mb-3

    p.mb-5 Para las empresas en general, las certificaciones a las que pueden aspirar son: 

    .row.aling.my-5 
      .col-lg-8(data-aos="fade-left") 
          img(src='@/assets/curso/images/tema1/fig_1.svg')

    Separador

    #t_1_1.titulo-segundo
      .h2 1.1  Normativa

    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade")
        .row.align-items-center.justify-content-center.mb-3
          .col-lg-6(data-aos="fade-left")
            p.mb-3 En Colombia la actividad agropecuaria es regulada principalmente por el Ministerio de Agricultura y Desarrollo Rural, que se encarga de coordinar y evaluar las políticas públicas agropecuarias incluyentes que promuevan el desarrollo integral del sector, y por el Instituto Colombiano Agropecuario - ICA, el cual se enfoca en la prevención, vigilancia y control de los riesgos sanitarios, biológicos y químicos para las especies animales y vegetales que se cultivan y producen en el territorio nacional.
            
            .jumbotron.p-4
              p.mb-3 En lo relacionado con la normativa que enmarca los procesos de certificación de unidades productivas agropecuarias, se tiene que el principal referente es el Instituto Colombiano Agropecuario (ICA), porque la certificación de las explotaciones rurales tiene un importante componente sanitario.

          .col-lg-6.mb-3(data-aos="fade-right") 
            img(src='@/assets/curso/images/tema1/img_6.png'  alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-10 
        .cajon.color-custom-1.p-5
          .row.justify-content-center.align-items-center
            .col-lg-2
              img(src='@/assets/curso/images/tema1/ico_1.svg'  alt='')
            .col-lg-10
              p.mb-5 Igualmente, los ministerios de Agricultura y Desarrollo Rural y De Ambiente y Desarrollo Sostenible han generado certificaciones que dan garantía de calidad frente a algunos productos agropecuarios, lo cual les permite destacar y obtener un valor agregado que finalmente resulta definitivo en procesos comerciales.

    p.mb-5 A continuación, se presentan algunas resoluciones emitidas por el ICA sobre buenas prácticas ganaderas.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Normativa ICA buenas prácticas ganaderas" :icono="require('@/assets/curso/images/tema1/ico_2.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Normativa ICA  buenas prácticas ganaderas
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución 2640 de 2007:</b> reglamenta las condiciones sanitarias y de inocuidad en la producción de ganado porcino. 
                     
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución 3585 de 2008:</b> se establece el sistema de inspección, evaluación y certificación de la producción primaria de leche (Decreto 616 de 2016). 
                .col-lg-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución 2341 de 2007:</b> reglamenta las condiciones para la producción primaria de ganado bovino y bufalino.                        
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución 2304 de 2015:</b> requisitos sanitarios y de inocuidad para certificación en BPG en ovinos y caprinos destinados al consumo humano.    
        
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_7.png'  alt='')
 
      .py-4.py-md-5(titulo="Normativa ICA buenas prácticas agrícolas" :icono="require('@/assets/curso/images/tema1/ico_3.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Normativa ICA  buenas prácticas agrícolas
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-12
                  ul.lista-ul--color
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución 448 de 2016:</b> registro de predios de producción de fruta fresca para exportación y el registro de los exportadores y plantas empacadoras. 
                     
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución 30021 de 2017:</b> se establecen los requisitos para la Certificación en Buenas Prácticas Agrícolas en producción primaria de vegetales y otras especies para consumo humano. Resolución 082394 de 2020: modifica los artículos 2°, 3°, 4°, 12 y 14 de la Resolución 30021 de 2017. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_8.png'  alt='')
        
      .py-4.py-md-5(titulo="Normatividad ICA producción pecuaria" :icono="require('@/assets/curso/images/tema1/ico_4.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Normatividad ICA producción pecuaria
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-12
                  ul.lista-ul--color
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución 20186 de 2016:</b> se establecen las condiciones sanitarias y de bioseguridad en la producción primaria de animales acuáticos, para obtener el certificado como Establecimiento de Acuicultura Bioseguro.
                     
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución ICA 3651 de 2014:</b> establece los requisitos para la certificación de granjas avícolas bioseguras de postura y levante.
        
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_8.png'  alt='')

      .py-4.py-md-5(titulo="Sello Ambiental" :icono="require('@/assets/curso/images/tema1/ico_5.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Sello Ambiental
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-12
                  ul.lista-ul--color
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución 1555 de 205:</b> busca consolidar la producción de bienes ambientalmente sostenibles e incrementar la oferta de servicios ecológicos competitivos en los mercados nacionales e internacionales. 
     
        
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_10.svg'  alt='')
        
      
      .py-4.py-md-5(titulo="Sello Alimento Ecológico" :icono="require('@/assets/curso/images/tema1/ico_6.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Sello Alimento Ecológico
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-12
                  ul.lista-ul--color
                    li 
                      i.fas.fa-angle-right
                      p <b>Resolución 199 de 2016:</b> se establece el reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación y comercialización de productos agropecuarios ecológicos.  
     
        
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_11.svg'  alt='')
      
    .row.justify-content-center.align-items-star
      .col-lg-6.mb-3(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema1/img_12.png'  alt='')
      .col-lg-6(data-aos="fade")
        p.mb-3 Además de las normas que regulan los aspectos de certificación de las unidades productivas agropecuarias, también tienen, como requisito, el cumplimiento de todos y cada uno de los requerimientos legales según el tipo de explotación.
        
        .cajon.color-custom.p-4   
          p.mb-3 En este sentido, cada predio, planta de producción o instalación, así como los procesos relacionados con la contratación del personal, la disposición de residuos o los vertimientos líquidos, entre otros aspectos, debe cumplir con unos mínimos legales para su funcionamiento.

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.mb-0.cs
    .row.justify-content-center.align-items-center.mt-3
      .col-lg-3.mb-0(data-aos="fade-right")
        p.mb-3 Algunos de los temas normativos que se deben tener en cuenta para la implementación de procesos productivos certificados son los siguientes: 

      .col-lg-9
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta_white-1.p-4
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema1/ico_7.svg' alt='imagen relacionada' style='width:80px').mx-auto        
              .col-md-10.py-3
                h3.text-center.mb-3  Protección ambiental y de los recursos naturales
                p.text-center Decreto 2372 de 2010 – Ley 1729 de 2002 – Ley 99 de 1993 – Ley 599 de 2000.
          .tarjeta_white-1.p-4
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema1/ico_7.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                h3.text-center.mb-3  Usos del suelo y ordenamiento territorial 
                p.text-center Ley 388 de 1997 – ley 902 de 2004 – Decreto 2811 de 1974 - Ley 1454 de 2011 – Ley 2 de 1959.
          .tarjeta_white-1.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema1/ico_7.svg' alt='imagen relacionada' style='width:80px').mx-auto          
              .col-md-10.py-3
                h3.text-center.mb-3  Cuidado y protección del agua
                p.text-center.px-2.px-md-0 Decreto 2811 de 1974 – Ley 99 de 1993 – Ley 142 de 1994 – Ley 373 de 1997 – Decreto 475 de 1998 – Decreto 1541 de 1978.
          .tarjeta_white-1.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema1/ico_7.svg' alt='imagen relacionada' style='width:80px').mx-auto        
              .col-md-10.py-3
                h3.text-center.mb-3  Disposición de residuos sólidos
                p.text-center Resolución 2309 de 1986 – Resolución 541 de 1994 – Conpes 2750 1994 – Decreto 605 1996 – Ley 430 de 1998 – Decreto 1713 de 2002. 
          .tarjeta_white-1.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema1/ico_7.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                h3.mb-3.text-center Seguridad y salud en el trabajo
                p.text-center Resolución 0312 de 2019 – Ley 1010 de 2016 – Resolución 1401 de 2007 – Resolución 2346 de 2007 – Resolución 1409 de 2012. 
          .tarjeta_white-1.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema1/ico_7.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                h3.mb-3.text-center Legislación laboral
                p.text-center Ley 1610 de 2013 – Ley 1562 de 2012 – Decreto 2663 de 1950 – Decreto 1072 de 2015.

    Separador

    #t_1_2.titulo-segundo
      .h2 1.2  Estándares de certificación

    .row.justify-content-center.align-items-star
      .col-lg-4.mb-3
        p.mb-0 Los estándares de certificación corresponden a los requisitos, normas o criterios que se exigen a la empresa para la obtención de determinado sello o garantía, el cual es otorgado por un tercero que recibe el nombre de entidad certificadora. Para la obtención de la certificación es necesario un proceso de auditoría externa que evalúa si efectivamente la organización cumple con las disposiciones del estándar seleccionado, el cual tiene, además, una estrecha relación con la normatividad local vigente. 

      .col-lg-4.mb-3
        img(src='@/assets/curso/images/tema1/img_13.svg')

      .col-lg-4.mb-3
        .jumbotron-1.p-5
          p.mb-5 Para la definición de los estándares que se deben tener en cuenta, al momento de obtener una certificación, la empresa y sus agentes responsables, deberán tener presente los siguientes aspectos y elementos:

    .row.justify-content-evenly.align-items-center.p-2
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/images/tema1/img_14.png' alt='', style="width:500px; display:block; margin:auto 0;")
      .col-12.col-lg-8.mb-4.p-0.p-md-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Tipo de organización' numero='1')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Se requiere identificar el tipo de organización y los procesos que se llevan a cabo en ella. En vista de que existen múltiples tipos de empresa y diversas formas de organización, los estándares que rigen el funcionamiento de estas son incontables, por lo que ha sido necesario unificar, internacionalmente, algunos criterios propios de las empresas para aumentar su eficiencia, mejorar los procesos y los productos, y reducir los costos de producción. 

          .row(titulo='Unidad de criterio' numero='2')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Las actividades de unificación de criterios han sido lideradas en el mundo entero por la organización ISO (International Organization for Standardization) la cual desde los años 40 ha sido referente en estos aspectos. A mediados del siglo XX con el auge de la globalización, se hizo necesario establecer reglas de juego equitativas para todos los países que desarrollan intercambios comerciales por lo que, con la ayuda de esta entidad, se consiguió avanzar en este sentido y establecer estándares comunes, como es el caso de las normas ISO. 


          .row(titulo='Normas ISO' numero='3')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right
                    p ISO 9001. Sistema de gestión de calidad.
                  li 
                    i.fas.fa-angle-right
                    p ISO 45001. Seguridad y salud laboral.
                  li 
                    i.fas.fa-angle-right
                    p ISO 50001. Eficiencia energética.
                  li 
                    i.fas.fa-angle-right
                    p ISO 14001. Sistemas de gestión medioambiental.
                  li 
                    i.fas.fa-angle-right
                    p ISO 22000. Norma de seguridad alimentaria.
                  li 
                    i.fas.fa-angle-right
                    p ISO 27001. Gestión para la seguridad de la información.
                  li 
                    i.fas.fa-angle-right
                    p FSSC 22000. Requisito para ISO 2000 y otras regulaciones.
            
          .row(titulo='Exigencias particulares' numero='4')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Si bien existen estándares internacionales que de cierta forma organizan y unifican los requisitos que se deben cumplir para acceder a un proceso de certificación, cada una de las certificaciones posee sus propias exigencias, por lo que es deber del productor revisar qué certificación es la más indicada para su negocio agropecuario y qué exigencias puede cumplir, de acuerdo con sus recursos y posibilidades. 
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 

    Separador

    #t_1_3.titulo-segundo
      .h2 1.3  Requisitos

    p.mb-3 Cada uno de los procesos de certificación posee diferentes requisitos que, cuando se cumplen rigurosamente, permiten obtener el sello o la garantía correspondiente. Es así como las exigencias para una certificación en BPA (buenas prácticas agrícolas) son diferentes a los que se solicitan para Comercio Justo o <i>Rainforest Alliance.</i>

    p.mb-3 Sin embargo, existen algunos puntos comunes entre las diversas acreditaciones los cuales consisten básicamente en:
    
    .row.justify-content-evenly.align-items-star.p-2
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center(titulo="Inscripción y evaluación del predio")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema1/ico_13.svg' alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-0  Es necesario que el predio de inscriba ante el organismo competente, que en el caso de Colombia es el Instituto Colombiano Agropecuario - ICA. Este primer requisito implica obtener información del predio y documentar los procesos productivos que han adelantado allí en los últimos años. 
          .row.justify-content-center.align-items-center(titulo="Instalaciones")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema1/ico_14.svg'  alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Las instalaciones dedicadas a la explotación agropecuaria se deben adecuar a la normativa relacionada con el uso del suelo y el ordenamiento territorial. Asimismo, se deben tener instalaciones con las áreas y equipamientos necesarios para satisfacer las demandas de los animales, en el caso de sistemas pecuarios. 
          .row.justify-content-center.align-items-center(titulo="Plan de saneamiento")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema1/ico_15.svg'  alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Dentro de este plan se deben tener en cuenta aspectos como evitar la contaminación de fuentes de agua, mantener limpias todas las áreas de la unidad productiva, realizar el control de plagas y vectores. 
          .row.justify-content-center.align-items-center(titulo="Bioseguridad")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema1/ico_16.svg'  alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Es necesario tener control y registro sobre el ingreso y salida de personas y animales de la unidad productiva, establecer filtros sanitarios, establecer áreas de cargue y descargue de materiales, e indicar los protocolos para la prevención de enfermedades o la aparición de plagas. 
          .row.justify-content-center.align-items-center(titulo="Trazabilidad")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema1/ico_17.svg'  alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Es imprescindible llevar registros de todas las actividades desarrolladas en la unidad productiva a fin de mantener un control constante sobre los procesos que se llevan a cabo. ipamientos necesarios para satisfacer las demandas de los animales, en el caso de sistemas pecuarios.
          .row.justify-content-center.align-items-center(titulo="Buenas prácticas")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema1/ico_18.svg'  alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Se debe contar con protocolos en los cuales se señalan las buenas prácticas para desarrollar determinados procesos o procedimientos dentro de la unidad productiva, lo cual dependerá del tipo de explotación y de la clase de certificación que se defina para la empresa agropecuaria. 
          .row.justify-content-center.align-items-center(titulo="Personal")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema1/ico_19.svg'  alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-3  En los procesos de certificación es una exigencia que en la empresa se cuente con un adecuado programa de gestión del talento humano, que propendan por mantener la calidad de vida del personal, gestionar los riesgos, desarrollar sus capacidades y habilidades, y respetar la legislación laboral vigente. 
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/images/tema1/img_15.png' alt='', style="width:500px; display:block; margin:auto 0;")

    .row.align-items-center.aling.my-3
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom-2.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_20.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;")
                .col.mb-3.mb-sm-0
                  h3.text-white Certificaciones Nacionales Internacionales
                  p.mb-1.text-white El siguiente PDF presenta las certificaciones nacionales e internacionales (obligatorias y voluntarias) de acuerdo con Analdex.
                .col-md-auto
                  a.boton.color-custom-6(:href="obtenerLink('downloads/Anexo_1_CertificacionesNacionalesInternacionales.pdf')" target="_blank")
                    span Descargar
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/Ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")






























  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
