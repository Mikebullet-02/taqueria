<template>
  <div
    class="flex flex-col md:flex-row py-5 bg-black text-red-700 font-bold text-3xl text-center font-custom"
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
  <div class="flex flex-col">
    <!-- Botón para abrir el modal -->
    <button @click="showModal = true" class="py-2 px-4 bg-gray-500 text-white">
      Ver Galería Completa
    </button>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div
        class="bg-gray-400 p-4 rounded-lg shadow-lg max-h-screen overflow-y-auto"
      >
        <!-- Botón para cerrar el modal -->
        <button
          @click="showModal = false"
          class="absolute top-2 right-2 text-gray-700"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Galería de imágenes -->
        <div class="flex flex-wrap justify-center">
          <div v-for="(image, index) in images" :key="index" class="m-2">
            <img
              :src="image"
              class="w-40 h-40 object-cover rounded-lg"
              @click="openImage(index)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para ver una imagen en grande -->
    <div
      v-if="showImageModal"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div class="bg-gray-400 p-4 rounded-lg shadow-lg">
        <!-- Botón para cerrar el modal -->
        <button
          @click="showImageModal = false"
          class="absolute top-2 right-2 text-gray-700"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Imagen en grande -->
        <img
          :src="currentImage"
          class="w-full h-96 object-contain rounded-lg"
        />
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
        "/src/assets/Zombie_Fest/IMG_3613.JPG",
        "/src/assets/Zombie_Fest/IMG_3629.JPG",
        "/src/assets/Zombie_Fest/IMG_3667.JPG",
      ],
      showModal: false,
      showImageModal: false,
      currentImage: "",
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
    openImage(index) {
      this.currentImage = this.images[index];
      this.showImageModal = true;
    },
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
