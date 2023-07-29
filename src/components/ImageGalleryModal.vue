<template>
  <div class="flex flex-col">
    <!-- Botón para abrir el modal -->
    <button
      @click="showModal = true"
      class="py-2 px-4 bg-blue-500 text-white rounded-lg"
    >
      Abrir Galería
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
      showModal: false,
      showImageModal: false,
      currentImage: "",
      images: [
        "/src/assets/Axo/IMG_1159.JPG",
        "/src/assets/Axo/IMG_1239.JPG",
        "/src/assets/Axo/IMG_1299.JPG",
        "/src/assets/Axo/IMG_1434.JPG",
        "/src/assets/Toy_Fest/Taqueria/IMG_2005.jpeg",
        "/src/assets/Toy_Fest/Taqueria/IMG_2006.jpeg",
        "/src/assets/Toy_Fest/Taqueria/IMG_2009.jpeg",
        "/src/assets/Toy_Fest/Taqueria/IMG_2269.jpeg",
        "/src/assets/Zombie_Fest/IMG_3613.JPG",
        "/src/assets/Zombie_Fest/IMG_3629.JPG",
        "/src/assets/Zombie_Fest/IMG_3667.JPG",
      ],
    };
  },
  methods: {
    openImage(index) {
      this.currentImage = this.images[index];
      this.showImageModal = true;
    },
  },
};
</script>
