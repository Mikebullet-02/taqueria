<template>
  <div
    class="flex flex-col md:flex-row py-5 bg-black text-red-700 font-bold text-3xl text-center"
  >
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
        <h3 class="text-2xl font-bold mb-4">{{ currentImage.description }}</h3>
        <p>{{ currentImage.caption }}</p>
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
          image: "/src/assets/Axo/IMG_1526.jpeg",
          description: "Axo Matsuri",
          caption: "Ada La Mesera y la troca",
        },
        {
          image: "/src/assets/Axo/IMG_1473.jpeg",
          description: "La Taquería junto a",
          caption: "Corporación Umbrella México",
        },
        {
          image: "/src/assets/Axo/IMG_1376(2).jpeg",
          description: "Todo el grupo",
          caption: "unido",
        },
        {
          image: "/src/assets/Axo/IMG_1347.jpeg",
          description: "La poderosa",
          caption: "",
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
