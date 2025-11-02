<template>
  <section class="faq-section">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left Image Section -->
          <div class="col-lg-6">
            <div class="d-flex justify-content-end position-relative mb-5 mb-lg-0">
              <img src="/assets/images/destination/destination6.jpg" alt="Hiking Tour" class="img-fluid rounded w-75 me-lg-4" />
              <div class="tag-card">
                <strong>Beach Ready Tour</strong><br />
                <small class="text-muted"><i class="icon-location-pin theme1"></i> Florida, USA</small>
              </div>
              <img src="/assets/images/new-deal/deal11.jpg" alt="Lake View" class="img-fluid stacked-img" style="width: 200px" />
            </div>
          </div>
  <div class="col-lg-6">
    <!-- Section Title -->
    <div class="section-title mb-6">
      <h5 class="mb-1 theme1">
        <i class="icon-plane theme1 fs-7"></i> FAQ
      </h5>
      <h2 class="mb-1">
        Your Travel Questions <span class="theme"> Answered</span>
      </h2>
    </div>

    <!-- Accordion -->
    <div class="accordion faq-accordion" id="travelFaq">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="accordion-item"
      >
        <h2 class="accordion-header" :id="'heading' + index">
          <button
            class="accordion-button"
            :class="{ collapsed: index !== 0 }"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + index"
            :aria-expanded="index === 0 ? 'true' : 'false'"
            :aria-controls="'collapse' + index"
          >
            {{ faq.question }}
          </button>
        </h2>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          :class="{ show: index === 0 }"
          :aria-labelledby="'heading' + index"
        >
          <div class="accordion-body">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
      </div>

    </section >

</template>

<script>
export default {
  name: "FaqAccordion",
  data() {
    return {
      faqs: [
        {
          question: "What should I pack for my trip?",
          answer:
            "Fusce sed nulla ultricies, viverra lacus euismod, elementum mi. Fusce non dictum lorem. Sed semper dictum sapien sit amet volutpat.",
        },
        {
          question: "Are there any travel restrictions I should know about?",
          answer:
            "Please check local travel guidelines and health requirements before traveling.",
        },
        {
          question: "How do I change or cancel my booking?",
          answer:
            "You can manage bookings through our website or contact our support team for help.",
        },
        {
          question: "What types of accommodations are available?",
          answer:
            "We offer hotels, hostels, lodges, and camping options depending on your destination.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Si tu veux, tu peux ajouter des styles spécifiques au composant ici */
</style>
