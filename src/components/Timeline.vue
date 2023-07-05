<template>
  <div class="container mx-auto mt-0 pl-5 bg-black">
    <h1 class="text-3xl font-bold pt-5 mb-4 text-gray-200">Línea de tiempo</h1>

    <div class="flex justify-center mb-10">
      <select
        v-model="selectedSection"
        class="mr-2 bg-red-800 hover:bg-red-800 text-white font-bold py-0 px-4 rounded"
      >
        <option value="section1">ANTECEDENTES</option>
        <option value="section2">LA INFECCIÓN</option>
        <option value="section3">EL FINAL DE UMBRELLA</option>
        <option value="section4">NUEVAS AMENAZAS</option>
      </select>
    </div>

    <ul class="timeline">
      <li
        v-if="selectedSection === 'section1'"
        class="relative mb-8"
        v-for="(event, index) in section1Events"
        :key="index"
      >
        <div class="timeline-marker"></div>
        <div class="ml-16">
          <h3 class="text-xl font-semibold text-gray-200">{{ event.date }}</h3>
          <p class="text-gray-400 mb-4">{{ event.title }}</p>
          <div v-html="event.description" class="text-gray-200"></div>
        </div>
      </li>
      <li
        v-if="selectedSection === 'section2'"
        class="relative mb-8"
        v-for="(event, index) in section2Events"
        :key="index"
      >
        <div class="timeline-marker"></div>
        <div class="ml-16">
          <h3 class="text-xl font-semibold text-gray-200">{{ event.date }}</h3>
          <p class="text-gray-400 mb-4">{{ event.title }}</p>
          <div v-html="event.description" class="text-gray-200"></div>
        </div>
      </li>
      <li
        v-if="selectedSection === 'section3'"
        class="relative mb-8"
        v-for="(event, index) in section3Events"
        :key="index"
      >
        <div class="timeline-marker"></div>
        <div class="ml-16">
          <h3 class="text-xl font-semibold text-gray-200">{{ event.date }}</h3>
          <p class="text-gray-400 mb-4">{{ event.title }}</p>
          <div v-html="event.description" class="text-gray-200"></div>
        </div>
      </li>
      <li
        v-if="selectedSection === 'section4'"
        class="relative mb-8"
        v-for="(event, index) in section4Events"
        :key="index"
      >
        <div class="timeline-marker"></div>
        <div class="ml-16">
          <h3 class="text-xl font-semibold text-gray-200">{{ event.date }}</h3>
          <p class="text-gray-400 mb-4">{{ event.title }}</p>
          <div v-html="event.description" class="text-gray-200"></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
.timeline {
  list-style-type: none;
  position: relative;
}

.timeline:before {
  content: "";
  position: absolute;
  top: 10px;
  bottom: 0;
  width: 2px;
  background-color: white;
  left: 30px;
  margin-left: -2px;
}

.timeline-marker {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 0;
  left: 20px;
  transform: translate(-50%, 15%);
}
</style>

<script>
export default {
  data() {
    return {
      selectedSection: "section1",
      section1Events: [
        {
          title: "El comienzo de todo",
          date: "Antes de 1914",
          description: "<p>Nace Alcina Dimitrescu</p>",
        },
        {
          title: "Muere Eva",
          date: "1918",
          description:
            "<p>Hija de la Madre Miranda, que por la pandemia de gripe española, cae en depresión, llega a una cueva y descubre la megamiceta al infectarse.</p>",
        },
        {
          title: "Dr. Oswell Earl Spencer",
          date: "1923",
          description: "<p>Nace el Dr. Oswell Earl Spencer.</p>",
        },
        {
          title: "Virus Progenitor",
          date: "1930",
          description:
            "<p>Un miembro de la familia Ashford descubre el virus Progenitor.</p>",
        },
        {
          title: "Robert Kendo",
          date: "1958",
          description: "<p>Nace Robert Kendo.</p>",
        },
        {
          title: "Castillo Dimitrescu",
          date: "23 de junio de 1958",
          description:
            "<p>Cuando la sirvienta Adela manchó por accidente uno de sus vestidos, Daniela como castigo le cortó el rostro con un cuchillo.</p>",
        },
        {
          title: "Umbrella",
          date: "1960",
          description:
            "<p>Umbrella se vuelve una multinacional independiente del gobierno de los Estados Unidos.</p>",
        },
        {
          title: "Barry Burton",
          date: "1960",
          description: "<p>Nace Barry Burton.</p>",
        },
        {
          title: "Albert Wesker",
          date: "1960",
          description: "<p>Nace Albert Wesker.</p>",
        },
        {
          title: "Alex Wesker",
          date: "1960",
          description: "<p>Nace Alex Wesker.</p>",
        },
        {
          title: "Fundación de los S.T.A.R.S.",
          date: "1960",
          description:
            "<p>Se funda en Nueva York el grupo de élite S.T.A.R.S un grupo de antiguos oficiales del ejército y miembros retirados de la CIA y el FBI, liderados por Marco Palmieri, ex jefe de la Agencia Nacional de Seguridad y Defensa.</p>",
        },
        {
          title: "S.T.A.R.S. en Raccoon City",
          date: "1967",
          description:
            "<p>Se funda el grupo S.T.A.R.S en Raccoon City, Brian Irons es un miembro fundador.</p>",
        },
        {
          title: "Chris Redfield",
          date: "1973",
          description: "<p>Nace Chris Redfield.</p>",
        },
        {
          title: "Ada Wong y Jill Valentine",
          date: "1974",
          description: "<p>Nacen Ada Wong y Jill Valentine.</p>",
        },
        {
          title: "Leon Scott Kennedy",
          date: "1977",
          description: "<p>Nace Leon Scott Kennedy.</p>",
        },
        {
          title: "Claire Redfield",
          date: "1979",
          description: "<p>Nace Claire Redfield.</p>",
        },
        {
          title: "Rebecca Chambers",
          date: "1980",
          description: "<p>Nace Rebecca Chambers.</p>",
        },
      ],
      section2Events: [
        {
          title: "Primeras apariciones extrañas.",
          date: "Mayo de 1998",
          description:
            "<p>Empiezan extrañas apariciones de monstruos en forma de perros o humanos, también aparecen cadáveres con mordeduras. La policía piensa que se trata de un grupo de caníbales.</p>",
        },
        {
          title: "La cuarta víctima",
          date: "2 de junio de 1998",
          description:
            "<p>Se encuentra a la cuarta víctima de los 'asesinos caníbales' de Raccoon City, Anna Mitaki y se eleva el número de muertes misteriosas a siete.</p>",
        },
        {
          title: "El ascenso de Wesker.",
          date: "Diciembre de 1997",
          description:
            "<p>Albert Wesker es ascendido a capitán de los S.T.A.R.S.</p>",
        },
        {
          title: "Desapariciones en las montañas Arklay.",
          date: "21 de julio de 1998",
          description:
            "<p>Desaparecen tres excursionistas en las montañas Arklay. El jefe de la policía Brian Irons pone a trabajar en el caso a los S.T.A.R.S.</p>",
        },
        {
          title: "Deanne Rusch y Christopher Smith",
          date: "22 de julio de 1998",
          description:
            "<p>Deanne Rusch y Christopher Smith, octava y novena víctimas son encontrados en el Victory Park.</p>",
        },
        {
          title: "Tren privado de Umbrella Corp. Ecliptic Express",
          date: "23 de julio de 1998",
          description:
            "<p>El tren privado de la corporación Umbrella, Ecliptic Express, es atacado por sanguijuelas controladas por James Marcus, siendo convertidos en zombies.</p><br> <p>Dos horas después el equipo Bravo de STARS es enviado en helicóptero a las Montañas Arklay y tienen un aterrizaje forzoso donde se separan para buscar sobrevivientes.</p><br><p>Rebecca Chamber y Billy Coen hacen equipo contra los monstruos del tren hasta llegar al laboratorio de Umbrella. </p>",
        },
        {
          title: "Tren privado de Umbrella Corp. Ecliptic Express",
          date: "23 de julio de 1998",
          description:
            "<p>El tren privado de la corporación Umbrella, Ecliptic Express, es atacado por sanguijuelas controladas por James Marcus, siendo convertidos en zombies.</p><br> <p>Dos horas después el equipo Bravo de STARS es enviado en helicóptero a las Montañas Arklay y tienen un aterrizaje forzoso donde se separan para buscar sobrevivientes.</p><br><p>Rebecca Chamber y Billy Coen hacen equipo contra los monstruos del tren hasta llegar al laboratorio de Umbrella. </p>",
        },
        {
          title: "Resident Evil 0",
          date: "24 de julio de 1998",
          description:
            "<p>Durante las primeras horas Billy y Rebecca pelean contra el Proto Tyrant de la base de Umbrella así como también como la Reina Sanguijuela que controlaba a Marcus. La base es destruida en una explosión.</p> <br> <p>Billy y Rebecca se separan, la última regresa al bosque y termina en la mansión Spencer.</p> <br> <p>Ocurre el incidente en el bosque de las montañas Arklay. El equipo Alpha es enviado a investigar el paradero del equipo Bravo. Se encuentran con el helicóptero dañado y son atacados por Cerberus hasta llegar a la Mansión Spencer. </p>",
        },
        {
          title: "Resident Evil 1",
          date: "25 de julio de 1998",
          description:
            "<p>Se descubre la traición de Wesker, mientras que Jill, Chris, y Barry pelean contra los BOWs, entre éstos la víctima de los experimentos Wesker y Birkin conocida como Lisa Trevor. Wesker libera el Tyrant T-002 pero termina siendo asesinado por este, para luego revivir gracias a una muestra del Virus Progenitor. </p> <br> <p>Jill, Chris, Rebecca y Barry escapan con la ayuda de Brad Vickers y la mansión es destruida.</p> ",
        },
        {
          title: "Hunk y el equipo Wolfpack",
          date: "23 de septiembre de 1998",
          description:
            "<p> El agente Hunk junto con el equipo Wolfpack entran en el laboratorio Nest, justo debajo de Raccoon City, para recuperar las muestras del Virus T y G. William Birkins se ve acorralado y termina siendo herido y al borde de la muerte. </p> <br> <p>Para escapar de la muerte se inyecta con una muestra del Virus G.  Al mutar rápidamente logra deshacerse del equipo de Hunk y destruye las muestras del Virus T. </p> <br> <p>Las ratas esparcen la infección por el sistema de agua potable infectando a Raccoon City. Hunk queda inconsciente. </p>",
        },
        {
          title: "Ataque en el estadio",
          date: "24 de septiembre de 1998",
          description:
            "<p>Durante el juego de los Raccoon Sharks el estadio Warren es atacado por zombies. En el bar Jacks un grupo de civiles es atacado y se dirigen al Zoológico de Raccoon City. </p>",
        },
        {
          title: "El ejército llega a Raccoon City",
          date: "25 de septiembre de 1998",
          description:
            "<p>El Ejército Estadounidense sitia  Raccoon City bloqueando las entradas y salidas. El hospital Spencer's Memorial se empieza a llenar con infectados.</p>",
        },
        {
          title: "Kevin Ryman",
          date: "26 de septiembre de 1998",
          description:
            "<p>El grupo de Kevin Ryman escapa haciendo uso del sistema de drenaje para llegar al laboratorio de Umbrella y salir de Raccoon City.</p>",
        },
        {
          title: "Caída del hospital",
          date: "27 de septiembre de 1998",
          description:
            "<p>Se registra la caída del hospital Spencer 's Memorial, los infectados atacan al equipo de médicos.</p>",
        },
        {
          title: "Jill Valentine intenta escapar",
          date: "28 de septiembre de 1998",
          description:
            "<p>Jill Valentine es atacada en su departamento, al salir con vida se dirige a la RPD donde encuentra a su compañero Brad Vickers y al BOW conocido como Nemesis, Vickers termina muerto e infectado.</p> <br> <p>Jill logra escapar y también encontrarse con miembros del equipo UBCS, entre ellos Carlos Oliveira y Nicolai Zinoviev. Durante una pelea Jill es infectada con el virus T y queda resguardada en la torre de reloj.</p>",
        },
        {
          title: "Resident Evil 2",
          date: "29 de septiembre de 1998",
          description:
            "<p>El oficial Leon Kennedy y la joven Claire Redfield, hermana de Chris, llegan a Raccoon City en medio del brote del Virus T, juntos se dirigen a la estación de policía RPD. En el lugar encuentran a Sherry Birkin, hija de William y Annette, también a Ada Wong, espía encubierta de la Organización. En la RPD se enfrentan a zombis, lickers y también a un nuevo tipo de T-003 conocido como Mr.X.</p> <br> <p> Con la ayuda del reportero Ben Bertolucci tanto Ada como León logran llegar a la base Nest de Umbrella. Mientras tanto Claire y Sherry conocen al Jefe de Policía Brian Irons. Sherry termina siendo infectada por William y Claire la lleva a Nest para conseguir la cura.</p> ",
        },
        {
          title: "Claire consigue la muestra.",
          date: "30 de septiembre de 1998",
          description:
            "<p>Con la ayuda del reportero Ben Bertolucci tanto Ada como León logran llegar a la base Nest de Umbrella. Mientras tanto Claire y Sherry conocen al Jefe de Policía Brian Irons. Sherry termina siendo infectada por William y Claire la lleva a Nest para conseguir la cura</p> <br> <p>Claire se enfrenta a William mientras que Leon se enfrenta a  un mutado Mr.X para abordar el tren de escape y dar el antídoto a Sherry.</p> <br> <p>El Agente Hunk se despierta del coma y procede a ser evacuado de Raccoon City tras atravesar la RPD y consigue llevar una muestra del virus T consigo.</p>",
        },
        {
          title: "Destrucción de Raccoon City",
          date: "1 de octubre de 1998",
          description:
            "<p>El desastre en Raccoon City es inminente, el gobierno de los Estados Unidos decide usar un misil balístico para destruir la ciudad.</p> <br> <p> Jill Valentine despierta después de recibir la cura por parte de Carlos Oliviera. Una vez más se enfrenta a Nemesis hasta terminar él. Nicolai abandona Raccoon city en el último helicóptero disponible.</p> <br> <p>Carlos decide en un último intento usar la radio y logra hacer contacto con el viejo amigo de Jill, Barry Burton, son recogidos junto antes de que el misil balístico destruyera Raccoon City.</p> <br> <p>A las afueras de la ciudad el público mira lo que era antes una ciudad, entre los espectadores se encuentra Curtis Miller devastado al saber que su familia ha perecido en la detonación. </p>",
        },
        {
          title: "El virus T en Sheena Island",
          date: "23 de noviembre de 1998",
          description:
            "<p>Vincent Goldman libera el virus T en Sheena Island, la mayoría de la población perece por el virus y otros a manos de su ejército.</p>",
        },
        {
          title: "Muerte de Vincent",
          date: "25 de noviembre de 1998",
          description:
            "<p>Vincent intenta asesinar a Ark Thompson quien se hacía pasar por él. Ambos caen de un helicóptero. Vincent muere y Ark termina inconsciente y con pérdida de memoria.</p>",
        },
        {
          title: "Ark se dirige a Umbrella",
          date: "26 de noviembre de 1998",
          description:
            "<p>Ark despierta y encuentra el camino a la fábrica de Umbrella donde se enfrenta a algunos T-003. Gracias  a la ayuda de Lott Klein y su hermana Lily Ark recupera la memoria. Antes de huir se enfrenta a un tyrant mejorado de nombre Hypnos. Sheena Island es destruida por el sistema de autodestrucción de Umbrella.</p>",
        },
        {
          title: "Resident Evil Code: Veronica",
          date: "17 de diciembre de 1998",
          description:
            "<p>Claire sigue en busca de Chris y se infiltra en las instalaciones de Umbrella París. Se enfrenta a un escuadrón de soldados y termina capturada por Rodrigo Juan Raval. Es transportada a Rockfort Island, base de operaciones de Umbrella y comandada por Alfred Ashford.</p>",
        },
        {
          title: "Albert Wesker ordena el ataque a Rockfort Island",
          date: "27 de diciembre de 1998",
          description:
            "<p>El equipo HFC ataca Rockfort Island por órdenes de Albert Wesker, mientras tanto Claire es liberada por Rodrigo al ver que la isla es una causa perdida. Al intentar escapar Claire se encuentra con Steve Burnside, otro prisionero, ambos hacen equipo. Durante la noche terminan peleando contra varios zombies, BOWs,y un Tyrant modelo T-078. Claire y Steve se enfrentan a Alfred Ashford y terminan en la estación Antártica de Umbrella.</p> <br> <p>Durante el tiempo del vuelo Chris llega a Rockfort Island y encuentra a Rodrigo para terminar siguiendo los pasos  de Claire y llegar a la base de Umbrella. </p>",
        },
        {
          title: "Albert Wesker ordena el ataque a Rockfort Island",
          date: "27 de diciembre de 1998",
          description:
            "<p>El equipo HFC ataca Rockfort Island por órdenes de Albert Wesker, mientras tanto Claire es liberada por Rodrigo al ver que la isla es una causa perdida. Al intentar escapar Claire se encuentra con Steve Burnside, otro prisionero, ambos hacen equipo. Durante la noche terminan peleando contra varios zombies, BOWs,y un Tyrant modelo T-078. Claire y Steve se enfrentan a Alfred Ashford y terminan en la estación Antártica de Umbrella.</p> <br> <p>Durante el tiempo del vuelo Chris llega a Rockfort Island y encuentra a Rodrigo para terminar siguiendo los pasos  de Claire y llegar a la base de Umbrella. </p>",
        },
        {
          title: "El escape de los Redfield y muerte de Alexia",
          date: "28 de diciembre de 1998",
          description:
            "<p>Al llegar a la base de Antártica tanto Claire como Steve despiertan para terminar peleando contra Alfred y Alexia, Steve es capturado y se le infecta con el T-Veronica. Claire acaba con Nosferatu, antes padre de los Ashford pero convertido en un monstruo por sus hijos.</p> <br> <p> Wesker y Chris tienen un corto encuentro con Alexia y esta termina mutando y mostrando el poder del T-Veronica. Mientras tanto Claire lucha contra un Steve mutado, este último en un momento de voluntad pura decide proteger a Claire, regresa a la normalidad y muere después de ser atacado por Alexia.</p> <br> <p>Claire y Chris acaba con Alexia gracias a la ayuda de un arma especial dejada por Alexander Ashford. En una última pelea Wesker y Chris se enfrentan cara a cara, Wesker resulta herido y decide retirarse con el cuerpo de Steve al poseer una muestra del T-Veronica. Los hermanos Redfield escapan y el laboratorio es destruido. </p>",
        },
      ],
      section3Events: [
        {
          title: "Comienzan los juicios",
          date: "1999-2000",
          description:
            "<p>Comienzan los juicios a Umbrella Corporation, Spencer contrata a los mejores abogados, contrata testigos falsos en respuesta a la orden de cierre del gobierno de los Estados Unidos. </p>",
        },
        {
          title: "Javier Hidalgo y Albert Wesker",
          date: "2002",
          description:
            "<p>Wesker vende el virus T-Veronica al capo de la droga Javier Hidalgo.</p>",
        },
        {
          title: "Asalto a la fortaleza secreta de Umbrella en Rusia",
          date: "Febrero de 2003",
          description:
            "<p>En un asalto a la fortaleza secreta de Umbrella en Rusia, Wesker termina indirectamente de ayudar a Chris y Jill, derrota a Sergei, guarda los datos de la computadora principal, la Reina Roja y la desconecta.</p> <br> <p>Más adelante, en el mismo año, testificaría personalmente en los juicios en contra de Umbrella, haciendo a Oswell Spencer uno de los hombres más buscados del mundo.</p> <br> <p>Se funda la B.S.A.A.</p>",
        },
        {
          title: "Wesker y Jack Krauser",
          date: "2004",
          description:
            "<p>Wesker planea hacer resurgir Umbrella bajo sus términos, mandando a Krauser como encubierto al culto de Osmund Saddler.</p> <br> <p>Envía a Ada Wong, con la misión de recuperar una muestra de Las Plagas. </p> <br> <p>Ada traiciona a Wesker, bajó las órdenes de un grupo conocido como S, roba e intercambia la muestra.</p>",
        },
        {
          title: "Wesker encuentra a Spencer",
          date: "2006",
          description:
            "<p>Tras una búsqueda extenuante, Wesker encuentra a Spencer; en dónde descubre que siempre ha sido un experimento, en una ataque de furia asesina al científico.</p> <br> <p>Jill y Chris aparecen justo después del asesinato, enfrentándose en un combate feroz en dónde casi es asesinado Chris Redfield, Jill en un intento desesperado se lanza con Wesker chocando contra una ventana y cayendo al mar. </p> <br> <p>La B.S.A.A realiza una búsqueda intensiva, pero a los meses concluyen la investigación dándola por muerta.</p>",
        },
      ],
      section4Events: [
        {
          title: "Muerte de Albert Wesker",
          date: "2009",
          description:
            "<p> Albert Wesker muere en un volcán a manos de Sheva Alomar, Chris Redfield, Jill Valentine y Josh Stone.</p>",
        },
        {
          title: "Creación de Eveline",
          date: "2014",
          description:
            "<p>Crean a Eveline (nombre clave E-001), arma de Las Conexiones.</p>",
        },
        {
          title: "Muerte de Eveline",
          date: "2017",
          description: "<p>Eveline es asesinada por Ethan Winters.</p>",
        },
        {
          title: "Resident Evil Village",
          date: "9 de febrero de 2021",
          description:
            "<p>Mueren Donna Benevento, Salvatore Moreau, Karl Heisenberg, Daniela, Bella, Cassandra y Alcina Dimitrescu.</p>",
        },
        {
          title: "Muere Ethan Winters",
          date: "10 de febrero de 2021",
          description: "<p>Mueren Ethan Winters y madre Miranda.</p>",
        },
      ],
    };
  },
};
</script>
