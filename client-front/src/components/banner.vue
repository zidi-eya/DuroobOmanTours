<template>
 <section class="banner overflow-hidden">
      <div class="banner-main">
        <div class="banner-image">
          <div class="video-banner">
            <video autoplay muted loop id="vid" class="w-100">
              <source src="/assets/images/tour.MP4" type="video/mp4" />
            </video>
          </div>
          <div class="dot-overlay"></div>
        </div>
        <div class="banner-content">
          <div class="entry-meta mb-0">
            <span class="entry-category"><h3  class="white"> Duroob Oman Tours</h3></span>
          </div>
          <h1 class="mb-0"><a  class="white">Create Your Journey Joyfull Through Us</a></h1>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "BannerSection",
  data() {
    return {
      destination: "",
      date: "",
      travelType: "",
      duration: "",
      categories: [
        { name: "Camping", icon: "/assets/images/icons/004-camping-tent.png" },
        { name: "Hiking", icon: "/assets/images/icons/003-hiking.png" },
        { name: "Beach Tours", icon: "/assets/images/icons/005-sunbed.png" },
        { name: "Surfing", icon: "/assets/images/icons/006-surf.png" },
        { name: "Safari", icon: "/assets/images/icons/002-safari.png" },
        { name: "Cycling", icon: "/assets/images/icons/008-cycling.png" },
        { name: "Trekings", icon: "/assets/images/icons/007-hiking-1.png" },

      ],
    };
  },
  methods: {
    searchTours() {
      console.log("Searching tours with:", {
        destination: this.destination,
        date: this.date,
        travelType: this.travelType,
        duration: this.duration,
      });
      // 👉 tu peux ensuite appeler ton API ici
    },
  },
};
</script>

<style scoped>

</style>
