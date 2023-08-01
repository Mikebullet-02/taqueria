<template>
  <div class="bg-black">
    <div class="container mx-auto pt-5 pb-10 px-4">
      <div class="flex flex-col lg:flex-row md:space-x-8">
        <!-- Imagen del equipo -->

        <!-- Información del equipo -->
        <div class="w-full md:w-1/2 mt-4 md:mt-0">
          <!-- Botón para desplegar/ocultar contenido en versión móvil -->

          <h2 class="text-5xl font-custom text-red-700 mb-4">
            Historia de La Taquería de Wesker
          </h2>
          <button
            class="block md:hidden py-2 px-4 bg-blue-500 text-white mt-4"
            @click="isContentVisible = !isContentVisible"
          >
            Mostrar/Ocultar
          </button>
          <p
            :class="isContentVisible ? 'block' : 'hidden md:block'"
            class="text-gray-200 font-custom text-2xl"
          >
            <!-- Contenido que se muestra siempre -->
            Podríamos marcar el inicio de la página en el año 2020, pero la
            realidad es que su nacimiento podría observarse desde bastante
            tiempo más atrás, cuando un grupo de amigos y amigas se divertían
            compartiendo un hobby en común: el amor por los videojuegos de
            Resident Evil.
          </p>
          <p
            :class="isContentVisible ? 'block' : 'hidden md:block'"
            class="text-gray-200 font-custom text-2xl mt-4"
          >
            <!-- Contenido que se muestra siempre -->
            Era una constante en las múltiples conversaciones que se tuvieron
            tanto en la vida real como en los muchos grupos de fans a los que
            pertenecían esos amigos, horas, días y semanas de diversión que
            pasaban tanto jugando y RE-jugando cada título, consumiendo
            películas y demás contenido, e incluso creando sus propias historias
            por medio de fanfictions que llenaban el tiempo libre de cada
            integrante de ese pequeño núcleo de amigos.
          </p>

          <p
            v-if="isContentVisible"
            class="text-gray-200 font-custom text-2xl mt-4"
          >
            <!-- Contenido que se muestra solo en versión móvil -->
            Pero si hay una verdad en esta vida… es que es impredecible. Y el
            año 2020 marco el inicio de una de las situaciones más impredecibles
            que hubieran podido pasar: Una Pandemia. De pronto todos esos
            escenarios ficticios que tanto disfrutábamos con la saga parecían un
            poquito más una realidad que una ficción… Y a diferencia de la
            ficción es que toda la situación, tanto propia como para el resto
            del mundo, no podía describirse sino como descorazonadora.
          </p>
          <p
            v-if="isContentVisible"
            class="text-gray-200 font-custom text-2xl mt-4"
          >
            <!-- Contenido que se muestra solo en versión móvil -->
            Las charlas del grupo de amigos comenzaron a ser enteramente en
            línea, y pese a que el encierro y la situación global llegaban a ser
            sumamente tristes, nos encontramos con un nuevo y curioso tiempo
            libre que vino con los cambios de esquemas de trabajo, el pasar días
            en casa y la comunicación enteramente en línea. Pronto consumimos
            más contenido de redes sociales y más temprano que tarde nos dimos
            cuenta de que los chistes, las bromas, lo “que hubiera pasado sí…”
            que siempre nos planteamos al hacer fan fics y hablar de la saga,
            podían llegar a ser mucho más que simples chistes locales.
          </p>
          <p
            v-if="isContentVisible"
            class="text-gray-200 font-custom text-2xl mt-4"
          >
            <!-- Contenido que se muestra solo en versión móvil -->
            Sí… la Taqueria de Wesker nació como un chiste local entre las
            muchas bromas e incansable humor que teníamos. Nació de las
            hipotéticas preguntas “¿Qué habrá hecho Wesker luego de que termino
            su contrato con Capcom con su muerte en el volcán?”, tratando a los
            personajes como si fueran actores de la vida real. Surgió de los
            miles de chistes sobre si Claire tenía un segundo trabajo porque el
            activismo no dejaba, o sé si Ada se dedicaba a dar clases de
            espionaje… surgió de las cabezas de ese grupo de amigos que no
            dejaban de hablar de los “que pasaría sí…”
          </p>
          <p
            v-if="isContentVisible"
            class="text-gray-200 font-custom text-2xl mt-4"
          >
            Pero más allá de eso, la Taquería de Wesker surgió del pequeño
            esfuerzo que ese grupo de amigos dio para dar un poco de diversión,
            entretenimiento y un buen rato a la gente que consumía las mismas
            redes sociales que ellos mismos consumen. De aportar un granito de
            arena a una situación que por demás parecía oscura. Compartir un
            poco de humor y sacar una sonrisa para esa persona que tal vez no la
            estaba pasando tan bien en el encierro, que tal vez perdió su
            trabajo o tenía a una persona en el hospital.
          </p>
          <p
            v-if="isContentVisible"
            class="text-gray-200 font-custom text-2xl mt-4"
          >
            La Taquería de Wesker nació de un chiste… pero siempre llevo el
            corazón de un grupo de amigos que hace diez años se encontraron y
            decidieron seguir juntos gracias a un tema en común. Y hoy ese
            corazón lo continúan compartiendo con el resto de las personas que
            tienen ese mismo tema en común con nosotros.
          </p>
          <p
            v-if="isContentVisible"
            class="text-gray-200 font-custom text-2xl mt-4"
          >
            Todo esto es, fue y ha sido siempre por esas personas. Para ustedes
            que comparten ese tema en común con nosotros y deciden día con día
            seguir aquí.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isContentVisible: true,
    };
  },
};
</script>

<style>
/* Estilos opcionales específicos del componente AboutUs */
</style>
