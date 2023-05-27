<template>
  <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
    <img
      :src="profile.image"
      :alt="profile.name"
      class="w-48 h-32 object-cover"
    />
    <div class="p-6">
      <h3 class="text-xl font-semibold">{{ profile.name }}</h3>
      <p class="text-gray-500 mb-4">{{ profile.profession }}</p>
      <div>
        <p class="text-gray-700 mb-2">{{ profile.bio }}</p>
      </div>
      <div class="flex items-center space-x-4">
        <a href="#" class="text-blue-500 hover:text-blue-600">Facebook</a>
        <a href="#" class="text-blue-500 hover:text-blue-600">LinkTree</a>
        <a href="#" class="text-blue-500 hover:text-blue-600">Twitter</a>
      </div>
    </div>
  </div>
  <br />
  <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
    <img
      :src="profile1.image"
      :alt="profile1.name"
      class="w-48 h-32 object-cover"
    />
    <div class="p-6">
      <h3 class="text-xl font-semibold">{{ profile1.name }}</h3>
      <p class="text-gray-500 mb-4">{{ profile1.profession }}</p>
      <div>
        <p class="text-gray-700 mb-2">{{ profile1.bio }}</p>
      </div>
      <div class="flex items-center space-x-4">
        <a href="#" class="text-blue-500 hover:text-blue-600">Facebook</a>
        <a href="#" class="text-blue-500 hover:text-blue-600">LinkTree</a>
        <a href="#" class="text-blue-500 hover:text-blue-600">Twitter</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: "Irene Reséndiz",
        profession: "Ada la Mesera",
        bio: "Actriz y comunicóloga.",
        image: "/src/assets/taco_sin_bordes.png",
      },
      profile1: {
        name: "Miguel Delgado",
        profession: "Leon Salsas Borrachas",
        bio: "Desarrollador.",
        image: "/src/assets/taco_sin_bordes.png",
      },
    };
  },
};
</script>
