<template>
  <div
    class="flex flex-col md:flex-row py-5 bg-black text-red-700 font-bold text-3xl text-center"
  >
    <h1 class="py-6 font-custom text-5xl">Los eventos</h1>
    <div class="w-full md:w-1/2">
      <div class="carousel">
        <img
          v-for="(item, index) in images"
          :key="index"
          :src="item.image"
          :alt="item.description"
          :class="{ active: index === currentIndex }"
          class="carousel-image"
        />
      </div>
    </div>
    <div class="w-full md:w-1/2">
      <div class="carousel-description">
        <h3 class="text-3xl font-custom mb-4">
          {{ currentImage.description }}
        </h3>
        <p class="font-custom text-4xl">{{ currentImage.caption }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        {
          image: "/src/assets/Toy_Fest/Taqueria/IMG_2006.jpeg",
          description: "Toy Fest",
          caption: "14 de mayo de 2023",
        },
        {
          image: "/src/assets/Toy_Fest/Taqueria/IMG_2269.jpeg",
          description: "Collabs",
          caption: "interesantes",
        },
        {
          image: "/src/assets/Toy_Fest/Taqueria/IMG_2005.jpeg",
          description: "La mercancía de",
          caption: "ElFrittangas13",
        },
        {
          image: "/src/assets/Toy_Fest/Taqueria/IMG_2009.jpeg",
          description: "La comida de",
          caption: "La Fábrica de Dulce",
        },
      ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    setInterval(this.nextImage, 5000);
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  height: 0;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.carousel-image.active {
  opacity: 1;
}

.carousel-description {
  padding: 1rem;
  text-align: center;
}
</style>
