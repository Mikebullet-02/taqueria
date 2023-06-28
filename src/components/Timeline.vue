<template>
  <div id="app" class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">ANTECEDENTES</h1>

    <ul class="timeline">
      <li
        class="timeline-item"
        v-for="(event, index) in timelineEvents"
        :key="index"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="text-xl font-semibold">{{ event.date }}</h3>
          <p class="text-gray-500 mb-4">{{ event.title }}</p>
          <div v-html="event.description"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineEvents: [
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
      ],
    };
  },
};
</script>

<style>
.timeline {
  list-style-type: none;
  position: relative;
}

.timeline:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #333;
  left: 32px;
  margin-left: -1px;
}

.timeline-item {
  margin-bottom: 50px;
  position: relative;
}

.timeline-marker {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  position: absolute;
  top: 0;
  left: 20px;
  transform: translate(-50%, -50%);
}

.timeline-content {
  margin-left: 60px;
}
</style>
