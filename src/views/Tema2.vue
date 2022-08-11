<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Análisis del sistema productivo

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6(data-aos="fade") 
        p.mb-3 El primer paso para la implementación de los procesos de certificación de unidades productivas es realizar un análisis exhaustivo de cada uno de sus componentes, identificando sus fortalezas y debilidades, y estableciendo los aspectos que requieren especial atención, lo cual es posible a través de un diagnóstico.        
        .jumbotron-7.p-4         
          p.mb-0 En esa evaluación previa se determina el grado de avance de la empresa agropecuaria en relación con los estándares que se desean implementar, lo que dará como resultado un plan de acción. 

      .col-lg-6.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_1.png'  alt='')

    Separador

    #t_2_1.titulo-segundo
      .h2 2.1 Recolección de información

    .row.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.color-custom-3.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_2.svg')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Una de las etapas más complejas del proceso de diagnóstico del sistema productivo es la recolección de la información, por lo que es supremamente importante contar con registros que den cuenta de cada una de las actividades que tienen lugar en la empresa agropecuaria para, posteriormente, utilizarlos en la generación de información estadística que sea de utilidad para la toma de decisiones, la identificación de aspectos por mejorar y la aplicación de instrumentos de evaluación. 

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Una de las etapas más complejas del proceso de diagnóstico del sistema productivo es la recolección de la información, por lo que es supremamente importante contar con registros que den cuenta de cada una de las actividades que tienen lugar en la empresa agropecuaria para, posteriormente, utilizarlos en la generación de información estadística que sea de utilidad para la toma de decisiones, la identificación de aspectos por mejorar y la aplicación de instrumentos de evaluación. 
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema2/img_2.svg' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3
    
    p.mb-5 Al interior de la unidad productiva, las principales fuentes de información que se pueden encontrar son las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-4.col-auto.mb-3.mb-lg-0
        .tarjeta.tarjeta-up
          img(src="@/assets/curso/images/tema2/img_3.png", alt= "")
          .tarjeta-up__content.bg-1
            h4.text-center Trazabilidad
            p.text-center  Procedimientos que se llevan a cabo dentro y fuera de la unidad productiva para hacer seguimiento todas y cada una de las etapas por las que pasa el producto hasta llegar al consumidor final.
      .col-lg-4.col-auto.mb-3.mb-lg-0
        .tarjeta.tarjeta-up
          img(src="@/assets/curso/images/tema2/img_4.png", alt= "")
          .tarjeta-up__content.bg-1
            h4.text-center Registros
            p.text-center  Constancias físicas o virtuales en las que se deja evidencia de la realización de una actividad o un procedimiento dentro de la empresa agropecuaria lo que da la posibilidad de que la información relacionada con su funcionamiento pueda ser consultada en cualquier momento.
      .col-lg-4.col-auto.mb-3.mb-lg-0
        .tarjeta.tarjeta-up
          img(src="@/assets/curso/images/tema2/img_5.png", alt= "")
          .tarjeta-up__content.bg-1
            h4.text-center Listas de chequeo
            p.text-center  Herramientas de captura de información y para hacer seguimiento a determinado tipo de labores. Permiten identificar si se realizó o no determinada labor o si se cumplió o no con un requisito específico. 

    .row.mb-5.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-2.px-4.py-4
        .h4.mb-0 Trazabilidad

    p.mb-3 Esta es una herramienta muy eficaz que permite asegurar la calidad del producto y disminuir los daños y los riesgos al consumidor, especialmente, cuando se trata de alimentos. Las características principales de un sistema de trazabilidad son:

    .row.justify-content-center.align-items-center.my-3
      .col-lg-4.mb-0(data-aos="fade-right")
        img(src="@/assets/curso/images/tema2/img_6.png", alt= "")

      .col-lg-8
        SlyderF.slyder-color.mb-5(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in-down")
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema2/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1
              .p-4 
                h4 Amplitud
                p Define cuántos atributos se medirán.    
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema2/ico_2.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1
              .p-4
                h4 Profundidad 
                p Estima la calidad de la información de cada atributo.

          .tarjeta-avatar
            img(src='@/assets/curso/images/tema2/ico_3.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1
              .p-4
                h3 Precisión
                p Grado de seguridad para identificar una característica.

          .tarjeta-avatar
            img(src='@/assets/curso/images/tema2/ico_4.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1   
              .p-4
                h3 Acceso
                p Velocidad con que la información puede ser comunicada.


          .tarjeta-avatar
            img(src='@/assets/curso/images/tema2/ico_5.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1                  
              .p-4
                h3 Fiabilidad
                p Determina qué tan confiable es la información recopilada.

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6(data-aos="fade") 
        p.mb-3 El primer paso para la implementación de los procesos de certificación de unidades productivas es realizar un análisis exhaustivo de cada uno de sus componentes, identificando sus fortalezas y debilidades, y estableciendo los aspectos que requieren especial atención, lo cual es posible a través de un diagnóstico.        
        .cajon.color-custom-1.p-4         
          p.mb-0 Es por esto que la trazabilidad es una de las principales fuentes de información para la toma de decisiones relacionadas con el funcionamiento de la unidad productiva y/o la identificación de oportunidades de mejora. 

      .col-lg-6.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_7.png'  alt='')

    p.mb-3 A partir de la información depositada en un sistema de trazabilidad de un producto, se identifica la procedencia de la materia prima empleada en su

    p.mb-0 Elaboración, el detalle de la planta donde se fabricó o se procesó, la fecha en la que tuvo lugar su fabricación, el personal que intervino en su elaboración, las novedades que se presentaron durante el proceso de manufactura, quién intervino en su almacenamiento y distribución, y en qué fecha, finalmente, llegó al consumidor.

    .row.justify-content-center.align-items-center.p-2
      .col-lg-4(data-aos="fade-right")
        img.mt-5(src='@/assets/curso/images/tema2/img_8.png')
      .col-12.col-lg-8.mb-4.p-0.p-md-5(data-aos="fade-left")
        .row.mb-5.ps-2(data-aos="zoom-in-down")
          .col-lg-4.bg-color-3.px-4.py-3
            .h4.mb-0 Registros

        p.mb-3 Igualmente, la importancia del diligenciamiento de registros radica en la posibilidad de hacer un seguimiento constante a los parámetros que dan cuenta del funcionamiento de la empresa, como son los rendimientos por unidad de área, las unidades comercializadas, los costos de producción, las ventas totales, pérdidas o los cronogramas de ejecución de actividades, entre otros. 
        p.mb-3 Para ello, se debe asegurar siempre:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            p Ingresar siempre la fecha del registro.
          li 
            i.fas.fa-angle-right
            p Registrar siempre el nombre de la finca y del lote.
          li 
            i.fas.fa-angle-right
            p Utilizar unidades unificadas. Ejemplo: hectáreas, metros, kilogramos.
          li 
            i.fas.fa-angle-right
            p Registrar siempre el nombre de quien diligencia.
          li 
            i.fas.fa-angle-right
            p Recoger, principalmente, información numérica (porcentajes, cantidades).
          li 
            i.fas.fa-angle-right
            p Elaborar un instructivo para facilitar el diligenciamiento.
          li 
            i.fas.fa-angle-right
            p Utilizar formatos cortos, fáciles de diligenciar. 

    .row.justify-content-center.align-items-star.m-top.mb-5
      .col-lg-12(data-aos="fade") 
        .cajon.color-custom.p-4         
          p.mb-0 En el desarrollo de las actividades de certificación, el manejo de registros es fundamental para identificar aspectos por mejorar y establecer las acciones necesarias para superar estas situaciones. Debido a que la certificación es cíclica y requiere de procesos de mejora continua, los registros se convierten en una excelente herramienta para cumplir con este objetivo.

    .row.mb-5.ps-3(data-aos="zoom-in-down")
      .col-lg-4.bg-color-4.px-4.py-3
        .h4.mb-0 Listas de chequeo
    
    p.mb-3 La lista de chequeo siempre debe llevar un encabezado en el cual se registra el tipo de formato, el sistema productivo, la fecha de la auditoría, la identificación del predio y su ubicación, los datos del propietario y el responsable del diligenciamiento. 

    p.mb-3 En el siguiente ejemplo se presenta la lista de chequeo que se aplica a predios productores de carne de bovinos y bufalinos del Instituto Colombiano Agropecuario - ICA.

    .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Ejemplo de encabezado de la lista de chequeo para auditoría de predios rurales
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_9.svg").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Ejemplo de cuerpo de lista de chequeo
            p.mb-3 En el cuerpo de la lista de chequeo, siguiendo con el ejemplo anterior, se observan los diferentes criterios a evaluar y en los cuales se deberá indicar si la unidad productiva cumple o no cumple. En el caso de este formato en particular se agrega una columna en la que se indica si el aspecto evaluado es mayor (My), fundamental (F) o menor (Mn), porque al final del diligenciamiento esto permitirá ponderar los resultados, debido a que existen aspectos que tienen un mayor peso específico que otros.
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_10.svg").mb-3

        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Ejemplo de lista de chequeo - observaciones
            p.mb-3 En la parte final de la lista de chequeo se realiza un cálculo inicial de los resultados obtenidos, con lo cual es posible indicar si se cumplió o no con los requisitos establecidos. Igualmente, en esta parte del documento se deja un espacio para observaciones, el que da la posibilidad de registrar eventos o situaciones que se hayan presentado en el ejercicio de captura de información y que, eventualmente, pueden enriquecer el análisis de la información.  
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_11.svg").mb-3

    .row.justify-content-center.align-items-star
      .col-lg-4.mb-3
        .cajon.color-custom.p-4
          p.mt-5 En la parte final de la lista de chequeo es importante incluir siempre los datos de la persona que diligencia el documento y del encargado de la unidad productiva, lo cual permite tener la trazabilidad de las fechas en las que se realizó el proceso, los responsables y las observaciones efectuadas. 

      .col-lg-4.mb-3
        img.mt-5(src='@/assets/curso/images/tema2/img_12.png')

      .col-lg-4.mb-3
        .cajon.color-custom-1.p-4
          .row.justify-content-center.align-items-center
            img.my-3(src='@/assets/curso/images/tema2/ico_8.svg', alt='imagen relacionada' style='width:80px')
            p.mb-5 El formato de lista de chequeo y la agilidad de su lectura e interpretación facilitan la sistematización de la información y la elaboración de los respectivos informes.

    Separador

    #t_2_2.titulo-segundo
      .h2 2.2 <i>Software</i> agropecuario

    p.mb-3 El desarrollo de las tecnologías de la información y las comunicaciones ha tenido impactos significativos en todas las industrias, incluida la agropecuaria. Los recientes avances en lo relacionado con el almacenamiento y transmisión de grandes volúmenes de datos ha sido clave para la implementación de programas y aplicaciones que facilitan las gestiones administrativas y la toma de decisiones en la agroempresa; esto favorece en gran medida los procesos de certificación.

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-2.mb-0.cs
    .row.justify-content-center.align-items-center.mt-3
      .col-lg-3.mb-0(data-aos="fade-right")
        p.mb-3 Por medio de la adopción de los programas para la administración de las unidades agropecuarias es posible, entre otras cosas:
      .col-lg-9
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_9.svg' alt='imagen relacionada' style='width:80px').mx-auto        
              .col-md-10.py-3
                p.text-center Controlar la maquinaria y los equipos. 
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_10.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                p.text-center Gestionar la información climática.
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_11.svg' alt='imagen relacionada' style='width:80px').mx-auto          
              .col-md-10.py-3
                p.text-center Gestionar el recurso humano.
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_12.svg' alt='imagen relacionada' style='width:80px').mx-auto        
              .col-md-10.py-3
                p.text-center Controlar los inventarios y adquisiciones.
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_13.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                p.text-center Controlar la producción y los costos.
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_14.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                p.text-center Controlar las labores culturales.  
    .row.justify-content-evenly.align-items-star
      .col-lg-6(data-aos="fade-right")
        img.mt-5(src='@/assets/curso/images/tema2/img_13.png')
      .col-12.col-lg-6.mb-4.p-0.p-md-5(data-aos="fade-left")

        p.mb-3 La disponibilidad de información precisa y detallada sobre el funcionamiento de la empresa agropecuaria, sus indicadores, productividad, costos de producción y gestión de procesos, entre otros temas, es fundamental para:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            p  El correcto diagnóstico de la unidad productiva.
          li 
            i.fas.fa-angle-right
            p  La identificación de los factores que afectan su sostenibilidad.
          li 
            i.fas.fa-angle-right
            p El desarrollo eficiente de las labores administrativas.
          li 
            i.fas.fa-angle-right
            p  El alcance de objetivos y metas.
    .row.justify-content-evenly.align-items-star
      .col-12.col-lg-6.mb-4.p-0.p-md-5(data-aos="fade-left")
        p.mb-3 No obstante, siendo importante el uso de los programas de cómputo y para ofrecer facilidades para la administración de la empresa y los procesos de certificación:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            p  En Colombia, estos no son ampliamente utilizados, lo cual se debe en parte al costo de inversión.
          li 
            i.fas.fa-angle-right
            p  Para algunos productores puede resultar difícil tanto su adquisición como manejo y uso.
          li 
            i.fas.fa-angle-right
            p Como generalidad, no se tiene el suficiente nivel de conocimientos previos en manejo de sistemas.
          li 
            i.fas.fa-angle-right
            p   En buena parte del territorio nacional, hay grandes dificultades de conectividad y acceso al fluido eléctrico, lo que genera dificultades de acceso y comunicación deficiente. 
      .col-lg-6(data-aos="fade-right")
        img.mt-5(src='@/assets/curso/images/tema2/img_14.png')
      
    p.mb-3 Ahora, se presentan algunos de los programas y aplicativos tecnológicos diseñados para el agro que en Colombia, pese a las dificultades e inconvenientes de infraestructura, son usados en explotaciones con un alto componente empresarial: 

    SlyderB.mb-5.color-slyder-b.px-5.py-5(:datos="datosSlyder")   

    Separador

    #t_2_3.titulo-segundo
      .h2 2.3 Herramientas de análisis

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_21.png'  alt='')
      .col-lg-6(data-aos="fade") 
        p.mb-3 Las tecnologías disponibles hoy día, en lo relacionado con la captura y transmisión de grandes volúmenes de información, han facilitado algunos procesos que anteriormente demandaban bastante tiempo y recursos para las empresas. Desde siempre, la gestión de la información ha sido una necesidad prioritaria en las labores administrativas organizacionales, independientemente de su naturaleza o su objeto social.     
        p.mb-3 La importancia de la gestión de información radica en que la toma de decisiones, la identificación de oportunidades de mejora y la búsqueda de alternativas de solución a las problemáticas en la operación, requieren de información confiable y verificable.        
        .jumbotron-8.p-4    
          .row.mb-5.ps-2(data-aos="zoom-in-down")
            .col-lg-6.bg-color-5.px-4.py-4
              .h4.mb-0 Análisis e interpretación
          p.mb-0 Pese a contar con herramientas que facilitan la captura y el acopio de información, en muchas ocasiones los empresarios del campo se quedan cortos frente al análisis e interpretación de los resultados obtenidos, lo cual sigue siendo una limitante en muchos sistemas productivos, donde la falta de conocimiento sobre el procesamiento de los datos o la falta de herramientas para su manejo se ha constituido en una problemática que dificulta la gestión empresarial. 

    p.mb-3 Se invita a conocer algunos aspectos clave del análisis de datos para las organizaciones, aplicables a la finca agropecuaria; además, se recomienda registrar en su libreta personal de apuntes, lo más destacado:

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-8(data-aos="fade-right") 
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--rosa")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center(titulo="Observación en detalle")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema2/ico_16.svg' alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-0  El análisis de datos consiste, básicamente, en la observación detallada de la información recaudada en el sistema productivo a través de diferentes medios (sensores, listas de chequeo, encuestas, mediciones) con lo que se monitorean los parámetros productivos para, con base en esta información, tomar las mejores decisiones.
          .row.justify-content-center.align-items-center(titulo="Medios informáticos y medios análogos")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema2/ico_17.svg'  alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Las herramientas para el análisis de los datos son todos aquellos medios informáticos o análogos que facilitan el procesamiento de la información, su sistematización y organización de acuerdo con las necesidades del productor.
          .row.justify-content-center.align-items-center(titulo="Procesamiento de grandes volúmenes de información")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema2/ico_18.svg'  alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Para el análisis de la información existen diversas herramientas especializadas las cuales permiten procesar grandes volúmenes de información en muy poco tiempo, a la vez que generan reportes muy confiables que dan cuenta del funcionamiento de la unidad productiva, bien será a través de gráficos, informes, cifras consolidadas o cualquier otro esquema. 
          .row.justify-content-center.align-items-center(titulo="Información según el tipo de análisis")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema2/ico_19.svg'  alt='', style="width:80px; display:block; margin:auto 0;")
            .col-md-10.mb-4.mb-md-0
              p.mb-3  La misma información puede presentarse en diferentes niveles de análisis o de organización según la intención, el tipo de análisis que sobre esta se haga, con base en el tipo de necesidades que se espera solventar habiendo recopilado la información.
          
      .col-lg-4.mb-3(data-aos="fade")
        img(src='@/assets/curso/images/tema2/img_22.png'  alt='')

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 

    p.mb-3 Así, a través del análisis de los datos es posible identificar tendencias, correlaciones, proporciones, dependencias, magnitudes y otra serie de condiciones que facilitan la observación de las variables que intervienen en el proceso productivo y su incidencia en los rendimientos de la empresa productiva; se sugiere observar el siguiente ejemplo:

    .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Ejemplo: recolección simple
            p.mb-0 En el recuadro (A), se presenta una serie de datos tal como se recolectó en campo. A primera vista no se identifican relaciones directas ni tendencias entre las variables “longitud promedio del tallo” y “gramos de fertilizante por planta”. 
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_23.svg").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Ejemplo: información ordenada
            p.mb-3 En el recuadro (B), con solo ordenar la información de “longitud promedio del tallo” de mayor a menor, se observa que la variable “gramos de fertilizante por planta” adquiere una configuración similar, de mayor a menor, lo cual se convierte en un primer indicio de la relación que existe entre las dos variables.
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_24.svg").mb-3

        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Ejemplo: representaciones gráficas
            p.mb-3 En el recuadro (C) se va un poco más allá y se inserta un gráfico elaborado con base en la información obtenida en campo, esto da una visión mucho más clara de la relación que existe entre las dos variables y con base en lo cual es posible concluir que cuanto más fertilizante se aplique a la planta, mayor longitud del tallo se va a tener. 
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_25.svg").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Visualización completa del ejemplo
            p.mb-3 Aquí, observe en detalle los tres pasos mencionados y logre una comprensión amplia del proceso de observación de variables que intervienen en la producción: Recolección Simple (A), Información ordenada (B) y representaciones gráficas (C). 
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_26.svg").mb-3
    
    p.mb-3 Entre las herramientas más empleadas para el análisis de información, se pueden enunciar las siguientes:

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-3.m-top.mb-0.cs

    .row.align-items-center.justify-content-center.p-4
      SlyderF.slyder-color.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-down")
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema2/ico_32.svg' alt='', style="width:150px; display:block; margin:auto 0 ;")
          .tarjeta.color-tarjeta-slyder-2
            .p-4.text-ce
              h4.text-center <i>Microsoft Power BI</i>
              p.text-center Es la herramienta analítica de <i>Microsoft</i> y una de las más populares, debido a que ofrece visualizaciones interactivas de datos y  una integración sencilla con otras herramientas de la corporación.   


        .tarjeta-avatar
          img(src='@/assets/curso/images/tema2/ico_33.svg' alt='', style="width:150px; display:block; margin:auto 0 ;")
          .tarjeta.color-tarjeta-slyder-2
            .p-4
              h4.text-center SAS 
              p.text-center Herramienta líder en análisis de datos. Es un lenguaje de programación que permite manipular los datos fácilmente. Es muy manejable, accesible y tiene la capacidad de analizar un dato independientemente de la fuente de datos.


        .tarjeta-avatar
          img(src='@/assets/curso/images/tema2/ico_34.svg' alt='', style="width:150px; display:block; margin:auto 0 ;")

          .tarjeta.color-tarjeta-slyder-2
            .p-4
              h4.text-center Phyton
              p.text-center Se trata de una herramienta de código abierto y un lenguaje orientado a los objetos y muy fácil de mantener, leer y escribir.

        .tarjeta-avatar
          img(src='@/assets/curso/images/tema2/ico_35.svg' alt='', style="width:150px; display:block; margin:auto 0 ;")
          .tarjeta.color-tarjeta-slyder-2
            .p-4
              h4.text-center Excel
              p.text-center Es una herramienta analítica muy popular y casi fundamental. Es una herramienta bastante básica, aunque muy versátil y se utiliza en prácticamente todas las industrias.


        .tarjeta-avatar
          img(src='@/assets/curso/images/tema2/ico_36.svg'  alt='', style="width:150px; display:block; margin:auto 0 ;")
          .tarjeta.color-tarjeta-slyder-2
            .p-4
              h4.text-center Qlik View
              p.text-center Tiene una serie de características únicas, algunas de las cuales son el procesamiento de datos en memoria y su capacidad para mantener automáticamente la asociación de datos. Puede comprimirlos a solo el 10% del tamaño inicial.

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 

    separador

    #t_2_4.titulo-segundo
      .h2 2.4 Interpretación de resultados


    p.mb-3 El proceso de certificación de la unidad productiva requiere información confiable que dé cuenta de la ejecución de los procesos y las actividades, pues la trazabilidad y el manejo de registros son ejes fundamentales para cualquier proceso, independientemente del estándar seleccionado.     

    p.mb-3 En relación con la interpretación de los resultados, las organizaciones deben tener en consideración los siguientes aspectos:

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Obtención de un panorama amplio")
            p.mb-0 Por medio de las herramientas de análisis de datos se obtiene un panorama general del estado de la empresa agropecuaria y se identifican, entre otras cosas, los aspectos por mejorar, las acciones que se deben realizar y las medidas que se deben adoptar para superar determinadas situaciones que pueden poner en riesgo su productividad y sostenibilidad.
            
          .tarjeta.back-tab.px-5.py-4(titulo="Interpretación de variables y parámetros")
            p.mb-0 Para que la toma de decisiones se realice de manera consciente y con principio de realidad es necesario que los datos, primero, se sometan a un proceso de interpretación en el que se identifiquen plenamente las variables a medir, los parámetros a estimar, las relaciones entre variables y los factores que inciden en los indicadores que dan cuenta de la eficiencia de los procesos adelantados en la empresa.
           
          
          .tarjeta.back-tab.px-5.py-4(titulo="Selección clara de variables e indicadores")
            p.mb-0 En la interpretación de los resultados es necesario tener claridad sobre las variables técnicas que se analizarán y los indicadores que serán objeto de revisión, ya que la información que se obtenga sobre cada uno de estos elementos será el punto de partida para la implementación de las acciones que, finalmente, conducirán al cumplimiento de los objetivos de la empresa. 
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 
        h3 Variables técnicas

    p.mb-3 Las variables técnicas son los parámetros que se pueden medir o verificar para evaluar el desempeño de la unidad productiva y cada uno de sus componentes en un período de tiempo determinado. Estas son bastante diversas debido a la cantidad de sistemas productivos que existen en el sector agropecuario.      

    p.mb-3 De acuerdo con el tipo de explotación, las variables técnicas más comunes que se pueden encontrar son:

    .row.align-items-center.justify-content-center.p-4
      .col-lg-8 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Tabla 1
          span <i>Principales variables técnicas empleadas en sistemas productivos</i>
        table.tableizer-table
          thead.th-1
            tr.tableizer-firstrow
              th.text-white.text-center Tipo de explotaci&oacute;n
              th.text-white.text-center   Variable t&eacute;cnica
              th.text-white.text-center   Unidades
          tbody
            tr
              <td rowspan="5 "> Cultivos perennes.</td> 
              td Toneladas por hect&aacute;rea.
              td Toneladas.
            tr
              td &Aacute;rea sembrada.
              td Hect&aacute;reas.
            tr
              td N&uacute;mero de &aacute;rboles.
              td Unidades.
            tr
              td D&iacute;as a cosecha.
              td D&iacute;as.
            tr
              td Densidad.
              td &Aacute;rboles por hect&aacute;rea.
            tr.th-2 
              <td rowspan="3 "> Cultivos de ciclo corto.</td>
              td.th-2  Toneladas por hect&aacute;rea.
              td.th-2  Toneladas.
            tr
              td.th-2   Densidad de siembra.
              td.th-2  Plantas por hect&aacute;rea.
            tr
              td.th-2  Costos por ciclo productivo.
              td.th-2  Pesos.   
            tr
              <td rowspan="5"> Explotaciones av&iacute;colas.</td> 
              td Longitud del tarso.
              td Cent&iacute;metros.
            tr
              td N&uacute;mero diario de huevos.
              td Unidades.     
            tr
              td Densidad.
              td Aves por metro cuadrado.         
            tr
              td Consumo de alimento.
              td Kilogramos d&iacute;a.
            tr
              td Peso al sacrificio.
              td Kilogramos.  
            tr.th-2 
              <td rowspan="5"> Explotaciones bovinas.</td> 
              td.th-2   N&uacute;mero de hembras.
              td.th-2  Unidades.
            tr
              td.th-2  Nacidos vivos.
              td.th-2  Unidades.     
            tr
              td.th-2  Vacas pre&ntilde;adas.
              td.th-2  Unidades.    
            tr
              td.th-2  Peso al sacrificio.
              td.th-2  Kilogramos.          
            tr
              td.th-2  Litros diarios de leche.
              td.th-2   Litros.        
            tr
              <td rowspan="6"> Explotaciones porcinas.</td> 
              td Nacidos vivos.
              td Unidades.
            tr
              td Edad al destete.
              td D&iacute;as.   
            tr
              td Peso al nacer.
              td Kilogramos.    
            tr
              td Edad al primer servicio.
              td D&iacute;as.    
            tr
              td Consumo diario de alimentos.
              td Kilogramos.
            tr
              td Peso al sacrificio.
              td Kilogramos. 
            tr.th-2 
              <td rowspan="3">Explotaciones caprinas.</td>
              td.th-2  N&uacute;mero de cr&iacute;as.
              td.th-2   Unidades.
            tr
              td.th-2   Litros diarios de leche.
              td.th-2   Litros.     
            tr
              td.th-2  Peso al sacrificio.
              td.th-2  Kilogramos.
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-10(data-aos="fade")   
        .cajon.color-custom.p-4         
          p.mb-0 La elección de las variables técnicas que se emplearán para el análisis del comportamiento de la unidad productiva depende de los parámetros que se estimen convenientes medir. 

        p.my-3 En la tabla anterior se emplean variables relacionadas con los aspectos productivos, pero también existen algunas de ellas que dan cuenta de los procesos administrativos o financieros, tal como se presenta a continuación:

    .row.align-items-center.justify-content-center.p-4
      .col-lg-8 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Tabla 2
          span <i>Variables técnicas para la evaluación de procesos administrativos o financieros</i>
        table.tableizer-table
          thead.th-1
            tr.tableizer-firstrow-1
              th.text-center Tipo de explotaci&oacute;n
              th.text-center   Variable t&eacute;cnica
              th.text-center   Unidades
          tbody
            tr
              <td rowspan="5 "> Procesos administrativos.</td> 
              td Número total de empleados.
              td Unidades.
            tr
              td Número de puestos de trabajo.
              td Unidades.
            tr
              td Número de accidentes de trabajo en el año.
              td Unidades.
            tr
              td Porcentaje de trabajadores capacitados en BPM.
              td Porcentaje.
            tr
              td Total, incapacidades anuales.
              td Unidades.
            tr.th-2 
              <td rowspan="3 "> Procesos financieros.</td>
              td.th-2  Ventas totales mensuales.
              td.th-2  Millones de pesos.
            tr
              td.th-2  Egresos mensuales.
              td.th-2  Millones de pesos.
            tr
              td.th-2  Utilidades anuales.
              td.th-2  Millones de pesos.

    .row.justify-content-evenly.align-items-star
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-left")
        p.mb-3 En la medición de las variables técnicas es importante:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Establecer el tipo de información que se quiere recopilar.
          li 
            i.fas.fa-angle-right
            | Definir cómo se registrará tal información.
          li 
            i.fas.fa-angle-right
            | Determinar cómo se analizará.
          li 
            i.fas.fa-angle-right
            | Fijar quién será el responsable de la sistematización.
          li 
            i.fas.fa-angle-right
            | Establecer qué métodos de análisis se emplearán.
          li 
            i.fas.fa-angle-right
            | Definir cómo se presentarán los resultados.
      .col-lg-7.mt-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_28.png')    

    .row.justify-content-center.align-items-star
      .col-lg-4.mb-3
        .cajon.color-custom.p-4
          p.mt-5 Debido a que los procesos de certificación son rigurosos, en cuanto a la calidad de la información que se recolecte a través de los instrumentos correspondientes, es importante establecer metodologías claras y concretas para hacer mediciones periódicas.

      .col-lg-4.mb-3
        img.mt-5(src='@/assets/curso/images/tema2/img_29.png')

      .col-lg-4.mb-3
        .cajon.color-custom-1.p-4
          .row.justify-content-center.align-items-center
            p.mb-5 En el caso de las explotaciones en las que se trabaja con muchos individuos de especie (peces, aves, ganado bovino) es recomendable seleccionar una muestra representativa para obtener una idea de lo que realmente ocurre al interior de la población.

    .row.justify-content-center.align-items-star
      .col-lg-11.mb-3
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 
            h3 Indicadores
    .row.justify-content-evenly.align-items-star
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-left")
        p.mb-3 Otro de los aspectos que se debe tener en cuenta para el análisis e interpretación de la información relacionada con el funcionamiento de la unidad productiva es el de los indicadores. Un indicador es una característica observable, medible, cuantificable que, generalmente, es empleada para revisar la dinámica de una situación particular, es decir, los cambios que esta experimente en un espacio determinado de tiempo.     
        p.mb-0 En las unidades productivas agropecuarias los indicadores dan cuenta del grado de avance hacia el logro de los objetivos de la empresa o el cumplimiento de las metas establecidas. La siguiente tabla presenta un ejemplo.
      .col-lg-7.mt-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_30.png')

    .row.align-items-center.justify-content-center.p-4
      .col-lg-8 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Tabla 3
          span <i>Ejemplo de objetivo, indicador y medio de verificación</i>
        table.tableizer-table-1
          thead.th-1
            tr.tableizer-firstrow
              th.text-white.text-center Objetivo
              th.text-white.text-center Indicador
              th.text-white.text-center  Medio de verificación
            tr
              td.text-center.th-3  Implementación de protocolos y procedimientos para la obtención del certificado BPA para el cultivo de aguacate Hass.
              td.text-center.th-3  Requisitos anunciados por el ICA en la Resolución 082394 de 2020 cumplidos.#[BR] ÷ #[BR]Requisitos anunciados por el ICA en la Resolución 082394 de 2020. 
              td.text-center.th-3 Lista de chequeo de cumplimiento de requisitos. 
            
    .row.align-items-center.justify-content-center.p-4
      .col-lg-12
        .jumbotron-2.p-4
          p.mb-0 El indicador siempre se debe acompañar de un medio de verificación, el cual consiste en un documento o un registro que sirve como evidencia de su cumplimiento. Al momento de formular un indicador se debe procurar que sea realmente efectivo y recopile la información que se requiere para evaluar el comportamiento del sistema productivo.


  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.m-top.mb-0.cs
    .row.justify-content-center.align-items-center.mt-3
      .col-lg-3.mb-0(data-aos="fade-right")
        p.mb-3 En vista de lo anterior es necesario que cumpla con los siguientes requisitos:
      .col-lg-9
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_24.svg' alt='imagen relacionada' style='width:80px').mx-auto        
              .col-md-10.py-3
                h3.text-center Objetividad
                p.text-center No puede tener sesgos personales. Debe ser totalmente independiente.
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_25.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                h3.text-center  Medible objetivamente
                p.text-center Se debe poder medir independientemente de la forma de pensar de quien lo hace.
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_26.svg' alt='imagen relacionada' style='width:80px').mx-auto          
              .col-md-10.py-3
                h3.text-center Relevancia
                p.text-center Debe reflejar una dimensión importante del logro del objetivo.
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_27.svg' alt='imagen relacionada' style='width:80px').mx-auto        
              .col-md-10.py-3
                h3.text-center Aporte marginal
                p.text-center Siempre debe aportar información relevante independientemente de si existen indicadores similares.
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_28.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                h3.text-center Pertinencia
                p.text-center El indicador mide única y exclusivamente lo que se desea evaluar.  
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_29.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                h3.text-center Economía
                p.text-center La información está disponible para el proceso de seguimiento a un costo razonable. 
          .tarjeta_white-2.p-4
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/images/tema2/ico_30.svg' alt='imagen relacionada' style='width:80px').mx-auto         
              .col-md-10.py-3
                h3.text-center Monitoreable
                p.text-center El proceso de implementación debe ofrecer la posibilidad de que se le realice seguimiento de manera independiente. 
    .row.justify-content-evenly.align-items-star
      .col-12.col-lg-6.mb-4.p-0.p-md-5(data-aos="fade-left")
        .row.mb-5.ps-2(data-aos="zoom-in-down")
          .col-lg-6.bg-color-6.px-4.py-4
            .h4.mb-0 Tipos de indicadores

        p.mb-3 Los indicadores se pueden agrupar de diversas maneras, pero la forma más aceptada es la que los organiza de acuerdo con lo que se desea evaluar. Con esta clasificación se obtienen indicadores que miden los impactos de las intervenciones o las actividades, otros que evalúan las gestiones realizadas, otros que se centran en el producto obtenido, los procesos o los resultados.  

        p.mb-0 La siguiente tabla presenta los diferentes tipos de indicadores.      
        
      .col-lg-6.mt-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_31.png')
      
    .row.align-items-center.justify-content-center.p-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Tabla 4
          span <i>Tipos de indicadores</i>
        .tabla-a.color-secundario.mb-5 
          table
            thead
              tr
                th Tipo de indicador
                th Descripción
                th Ejemplo
                th Fórmula
            tbody
              tr
                td.th-3 De impacto.
                td.th-3 Contribuyen a la solución de las necesidades existentes en el área de intervención.
                td.th-3 Porcentaje de empleados que usan equipos de protección personal.
                td.th-3 (Número de empleados que usan EPP ÷ Número total de empleados) × 100.
              tr
                td De gestión.
                td Miden el avance o retroceso en el logro de determinado objetivo. 
                td Porcentaje de protocolos de limpieza y desinfección implementados en la unidad productiva. 
                td (Número de protocolos de limpieza y desinfección implementados ÷ Número total de protocolos de limpieza y desinfección establecidos) × 100.
              tr
                td.th-3  De producto.
                td.th-3  Miden de manera cuantitativa los bienes o servicios provistos.
                td.th-3  Número de toneladas de queso producidas en la unidad productiva anualmente. 
                td.th-3  Número de toneladas de queso anualmente producidas. 
              tr
                td De procesos.
                td Mide el desarrollo de las etapas programadas dentro de las actividades del proyecto.  
                td Porcentaje de cumplimiento de requisitos para certificación en BPA.
                td (Número de requisitos que se cumplen ÷ Número total de requisitos de la norma) × 100.
              tr
                td.th-3 De resultados.
                td.th-3  Establecen si hubo cambios respecto a la situación inicial encontrada en el diagnóstico. 
                td.th-3  Número de certificaciones obtenidas en el último año. 
                td.th-3  Número de certificaciones actuales – Número de certificaciones de la línea base. 
            
    separador

    #t_2_5.titulo-segundo
      .h2 2.5 Diagnóstico

    .row.justify-content-evenly.align-items-star
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-left")

        p.mb-3 El diagnóstico es el documento que recopila el análisis del sistema productivo, sus características, las condiciones del predio y los demás factores que inciden en la productividad y en la calidad con la que se realizan los procesos internos. Para la certificación es fundamental contar con un buen diagnóstico ya que a partir de lo que se consigne allí se definirán los objetivos, metas, actividades e indicadores que orientarán el trabajo en la empresa agropecuaria en función del cumplimiento de los estándares seleccionados.     

        p.mb-0 Para profundizar en los elementos y generalidades más importantes del diagnóstico empresarial, observe con atención el video que se muestra a continuación y lleve registro de lo más destacado:  
        
      .col-lg-7.mt-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_32.png')
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    p.mb-3 Sobre el diagnóstico de la organización, se debe tener en cuenta:
    
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-8(data-aos="fade-right") 
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center(titulo="Aspectos del diagnóstico")
            .col-md-12.mb-4.mb-md-0
              p.mb-0  Por lo general, para la evaluación de los aspectos que hacen parte del diagnóstico se emplean listas de chequeo las cuales son prácticas, de fácil diligenciamiento y sistematización.
          .row.justify-content-center.align-items-center(titulo="Presentación del diagnóstico")
            .col-md-12.mb-4.mb-md-0
              p.mb-3  Para la presentación del diagnóstico es común el empleo de matrices en las cuales se resume la información recopilada y se dejan anotaciones que permiten al evaluador dejar constancia de las condiciones evidenciadas en el predio.
          .row.justify-content-center.align-items-center(titulo="Objetivo real del diagnóstico")
            .col-md-12.mb-4.mb-md-0
              p.mb-3  Es así como el objetivo del diagnóstico no es la recopilación de grandes volúmenes de información, sino, por el contrario, es el acopio de información de calidad que permita conocer el funcionamiento de las principales áreas de la unidad productiva agropecuaria. 
          .row.justify-content-center.align-items-center(titulo="Dónde encontrar el formato de lista de chequeo")
            .col-md-12.mb-4.mb-md-0
              p.mb-3  En la Resolución 082394 de 2020 del Instituto Colombiano Agropecuario - ICA se presenta la lista de chequeo que deben cumplir los predios interesados en la certificación en Buenas Prácticas Agrícolas  - BPA. 
      .col-lg-4.mb-3(data-aos="fade")
        img(src='@/assets/curso/images/tema2/img_33.png'  alt='')








    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Suite ganadera',
        texto:
          'Permite llevar el inventario ganadero, preñeces, natalidad, mortalidad, pesos, días de celo, fechas de matadero, inseminaciones, vacunaciones, índices de producción..',
        imagen: require('@/assets/curso/images/tema2/img_15.svg'),
      },
      {
        titulo: 'Sacfa Lite - Fedearroz',
        texto:
          'Es un sistema de administración computarizado para fincas arroceras. Permite llevar registro de las actividades propias del cultivo, calcula indicadores y facilita el manejo inventarios y la obtención de la relación costo-beneficio. ',
        imagen: require('@/assets/curso/images/tema2/img_16.svg'),
      },
      {
        titulo: 'Sifa - Fedearroz',
        texto:
          'Es un sistema administrativo útil en el control del proceso de siembra, gestión de insumos, maquinaria, costos e ingresos. Estudia el proceso de fertilización, ajustándolo por zonas y variedad, lo que facilita los cálculos de diagnóstico de absorción nutricional de la planta.',
        imagen: require('@/assets/curso/images/tema2/img_17.svg'),
      },
      {
        titulo: 'Agro Win',
        texto:
          'Es un <i>software</i> que se especializa en el manejo de cultivos perennes y transitorios. Facilita el registro de costos directos e indirectos, permitiendo la obtención de informes de costos totales de producción, entre otras funciones. Actualmente este es el más usado en el sector cafetero, aunque es de aplicación variada. ',
        imagen: require('@/assets/curso/images/tema2/img_18.svg'),
      },
      {
        titulo: 'El Gran Palmero',
        texto:
          '<i>Software</i> especializado en el control de las labores propias del cultivo de palma de aceite para hacer más eficientes los procesos que se dan al interior de la plantación.',
        imagen: require('@/assets/curso/images/tema2/img_19.svg'),
      },
      {
        titulo: 'Agri',
        texto:
          'Es un <i>software</i> para la planificación de actividades, sistematización de procesos y gestión de la información. Mejora la coordinación de las unidades operativas mediante el control eficiente de los recursos.',
        imagen: require('@/assets/curso/images/tema2/img_20.svg'),
      },
    ],
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

<style lang="sass">

.tarjeta-up
  overflow: hidden
  position: relative
  .tarjeta-up__content
    position: absolute
    bottom: -200%
    width: 100%
    height: 100%
    padding: 2rem
    transition: bottom 0.7s ease-in-out
    &.bg-1
        background-color: #F3E0E5
        h1, h2, h3, h4, h5, p
          color: $black
  &:hover
    .tarjeta-up__content
      bottom: 0%
</style>
