<template>
  <section class="why-us py-6">
    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-6 mb-4"
        >
          <div class="why-us-item text-center p-4 py-5 border rounded bg-white">
            <div class="why-us-content">
              <div class="why-us-icon">
                <i :class="item.icon + ' theme'"></i>
              </div>
              <h4><a :href="item.link">{{ item.title }}</a></h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyUs",
  data() {
    return {
      items: [
        {
          icon: "icon-flag",
          title: "Tell Us What You want To Do",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          link: "about.html",
        },
        {
          icon: "icon-location-pin",
          title: "Share Your Travel Locations",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          link: "about.html",
        },
        {
          icon: "icon-directions",
          title: "Share Your Travel Preference",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          link: "about.html",
        },
        {
          icon: "icon-compass",
          title: "We are 100% Trusted Tour Agency",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          link: "about.html",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Optionnel: ajouter un style local ou utiliser le CSS global du template */
</style>
