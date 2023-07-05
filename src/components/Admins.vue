<template>
  <div class="relative bg-black">
    <div
      class="carousel-item"
      v-for="(profile, index) in profiles"
      :key="index"
      :class="{ active: index === currentSlide }"
    >
      <div class="flex justify-center items-center">
        <img :src="profile.image" :alt="profile.name" class="carousel-image" />
      </div>
      <div class="carousel-content">
        <h3 class="carousel-name text-gray-300 text-2xl font-bold text-center">
          {{ profile.name }}
        </h3>
        <p class="carousel-profession text-gray-300 text-center">
          {{ profile.profession }}
        </p>
        <p class="carousel-bio text-gray-300 text-center">{{ profile.bio }}</p>
        <!--<div class="carousel-links text-center">
          <a href="#" class="carousel-link">LinkTree</a>
        </div>-->
      </div>
    </div>
    <button class="carousel-prev" @click="prevSlide">&#8249;</button>
    <button class="carousel-next" @click="nextSlide">&#8250;</button>
  </div>
</template>

<style scoped>
.carousel-item {
  display: none;
}

.carousel-item.active {
  display: block;
}

.carousel-image {
  width: auto;
  height: auto;
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
  background-color: rgba(255, 255, 255, 0.2);
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

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      profiles: [
        {
          name: "Irene Boyzo",
          profession: "Ada la mesera",
          bio: "Lic. en Comunicación y Artes Escénicas",
          image: "/src/assets/Axo/IMG_1299.jpg",
        },
        {
          name: "Miguel Delgado",
          profession: "Leon Salsas Borrachas",
          bio: "Lic. en Ciencias de la Informática",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "Einar Torres",
          profession: "Carlos El De La Caja",
          bio: "Lic. en Administración de Empresas de Entretenimiento y Comunicación",
          image: "/src/assets/Axo/IMG_1239.jpg",
        },
        {
          name: "JC Guevara",
          profession: "JCUnited02",
          bio: "Lic. en Administración de Empresas Turísticas",
          image: "/src/assets/Axo/IMG_1541.jpg",
        },
        {
          name: "Maritza Salas",
          profession: "Helenita Insistente",
          bio: "Consultora MUA",
          image: "/src/assets/Axo/IMG_1434.jpg",
        },
        {
          name: "Beatriz Zeferino",
          profession: "Lic. Químico Farmacéutico Biólogo",
          bio: "Rebecca Desde La Cocina",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "Virgilio Mendoza",
          profession: "Lic. en Ciencias de la Comunicación y Análisis Político",
          bio: "El Tío Vergil Wesker",
          image: "/src/assets/Axo/IMG_1159.jpg",
        },
        {
          name: "Betzabeth Tula",
          profession: "Sherry La Edecán",
          bio: "Lic. en Educación Primaria",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "Alonso Fitta",
          profession: "Frittangas",
          bio: "Lic. en Diseño Gráfico",
          image: "/src/assets/Toy_Fest/Taqueria/IMG_1952.jpg",
        },
        {
          name: "Nancy Lugo",
          profession: "Nemesio Botarga",
          bio: "Cirujano Dentista",
          image: "/src/assets/taco_bordes.png",
        },
        {
          name: "José Francisco",
          profession: "???",
          bio: "Lic. en Contaduría Pública",
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
