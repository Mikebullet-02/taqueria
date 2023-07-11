<template>
  <div class="container px-4 bg-black border border-gray-800 w-full">
    <h2 class="text-3xl font-bold text-center mb-6 text-red-800">
      Un poco de nosotros
    </h2>
    <div class="relative pb-10">
      <div class="carousel-container aspect-w-16 aspect-h-9 pb-10 w-full">
        <div class="carousel-track">
          <div
            v-for="(video, index) in videos"
            :key="index"
            class="carousel-slide aspect-w-16 aspect-h-9 transition-opacity"
            :class="{ 'carousel-active': index === currentIndex }"
          >
            <iframe
              :src="'https://www.youtube.com/embed/' + video.videoId"
              frameborder="0"
              allowfullscreen
              class="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="carousel-nav mt-0 flex justify-between">
        <button
          class="carousel-prev px-6 py-4 bg-red-800 text-white font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed"
          @click="prevSlide"
        >
          Anterior
        </button>
        <button
          class="carousel-next px-6 py-4 bg-red-800 text-white font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed"
          @click="nextSlide"
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.carousel-slide {
  display: none;
  opacity: 0;
}

.carousel-active {
  display: block;
  opacity: 1;
  transition-duration: 0.3s;
}

.carousel-prev,
.carousel-next {
  transition: opacity 0.3s;
}

.carousel-prev:hover,
.carousel-next:hover {
  opacity: 0.8;
}
</style>

<script>
export default {
  name: "YouTubeCarousel",
  data() {
    return {
      videos: [
        { videoId: "Qi-atfC1CWk" },
        { videoId: "xPixWV8T4lY" },
        { videoId: "sdT_rFNHHmA" },
        // Add more videos as needed
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentVideo() {
      return this.videos[this.currentIndex];
    },
  },
  methods: {
    nextSlide() {
      if (this.currentIndex === this.videos.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.videos.length - 1;
      } else {
        this.currentIndex--;
      }
    },
  },
};
</script>
