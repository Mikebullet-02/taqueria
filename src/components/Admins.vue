<template>
  <div class="carousel bg-black">
    <div
      class="carousel-item"
      v-for="(profile, index) in profiles"
      :key="index"
      :class="{ active: index === currentSlide }"
    >
      <img :src="profile.image" :alt="profile.name" class="carousel-image" />
      <div class="carousel-content">
        <h3 class="carousel-name text-gray-300">{{ profile.name }}</h3>
        <p class="carousel-profession text-gray-300">
          {{ profile.profession }}
        </p>
        <p class="carousel-bio text-gray-300">{{ profile.bio }}</p>
        <div class="carousel-links">
          <a href="#" class="carousel-link">LinkTree</a>
        </div>
      </div>
    </div>
    <button class="carousel-prev" @click="prevSlide">&#8249;</button>
    <button class="carousel-next" @click="nextSlide">&#8250;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      profiles: [
        {
          name: "Irene Boyzo",
          profession: "Ada la mesera",
          bio: "Actriz y comunicóloga",
          image: "/src/assets/taco_sin_bordes.png",
        },
        {
          name: "Miguel Delgado",
          profession: "Leon Salsas Borrachas",
          bio: "Desarrollador",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "Einar Torres",
          profession: "Carlos El De La Caja",
          bio: "Lic. en Administración de Empresas de Entretenimiento y Comunicación",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "JC Guevara",
          profession: "JCUnited02",
          bio: "Lic. en Administración de Empresas Turísticas",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "Maritza Salas",
          profession: "Helenita Insistente",
          bio: "Consultora MUA",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "Beatriz Zeferino",
          profession: "Químico Físico Biólogo Bacteriólogo Farmacéutico",
          bio: "Rebecca Desde La Cocina",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "Virgilio Daniel",
          profession: "Comunicólogo político",
          bio: "El Tío Vergil Wesker",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "Betzabeth Tula",
          profession: "Sherry La Edecán",
          bio: "Lic. en Educación Primaria",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "Nancy Rose",
          profession: "Nemesio Botarga",
          bio: "Cirujano Dentista",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "José Francisco",
          profession: "???",
          bio: "Contador Público",
          image: "/src/assets/taco_bordes.png",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.profiles.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.profiles.length) % this.profiles.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
}

.carousel-item {
  display: none;
}

.carousel-item.active {
  display: block;
}

.carousel-image {
  width: 100%;
  height: auto;
}

.carousel-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.carousel-links {
  margin-top: 1rem;
}

.carousel-link {
  margin-right: 1rem;
  color: white;
  background-color: blue;
  padding: 0.5rem;
  text-decoration: none;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem;
  color: white;
  background-color: blue;
  border: none;
  outline: none;
  cursor: pointer;
}

.carousel-prev {
  left: 1rem;
}

.carousel-next {
  right: 1rem;
}

@media (max-width: 640px) {
  .carousel-content {
    padding: 0.5rem;
  }

  .carousel-name {
    font-size: 1.2rem;
  }

  .carousel-profession {
    font-size: 1rem;
  }

  .carousel-bio {
    font-size: 0.9rem;
  }

  .carousel-link {
    font-size: 0.9rem;
    padding: 0.3rem;
  }
}
</style>
