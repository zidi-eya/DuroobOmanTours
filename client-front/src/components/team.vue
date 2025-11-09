<template>
  <section class="our-team pb-6">
    <div class="container">
      <div class="section-title mb-6 w-75 mx-auto text-center">
        <h4 class="mb-1 theme1">Team</h4>
        <h2 class="mb-1">Meet Our <span class="theme">Excellent Teams</span></h2>
        <p>
          Discover our team of passionate and experienced tour guides dedicated to making your journey unforgettable. <br />
          They’ll share local insights, stories, and hidden gems at every stop.
        </p>
      </div>

      <div class="team-main">
        <div class="row shop-slider">
          <div
            v-for="member in team"
            :key="member.name"
            class="col-lg-3 col-md-6 col-sm-12 mb-4"
          >
            <div class="team-list rounded">
              <div class="team-image" @click="openPopup(member)">
                <img :src="member.image" alt="team" />
              </div>
              <div class="team-content text-center p-3 bg-theme">
                <h4 class="mb-0 white">{{ member.name }}</h4>
                <p class="mb-0 white">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup -->
    <div v-if="selectedMember" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>

        <h3 class="mb-0 theme1">{{ selectedMember.name }}</h3>
                <h4  class="mb-0 theme">{{ selectedMember.role }}</h4>
<br/>
<br/>
        <p>{{ selectedMember.description }}</p>
        <button @click="closePopup" >Close</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const team = [
  {
    name: "Suhail Ali Jaboob",
    role: "Founder & CEO — Omani",
    image: "/assets/images/team/souhail.png",
    description: "Suhail Ali Jaboob is the founder and CEO of Duroob Oman Tours, a leading travel company based in Salalah. Proudly Omani and passionate about the heritage and natural beauty of his country, he created the agency with the mission to offer travelers authentic, meaningful, and high-quality experiences across Oman. With strong leadership and a deep knowledge of local culture, Suhail ensures that every guest discovers Oman with respect, comfort, and genuine Omani hospitality..",
  },
  {
    name: "Mohamed Anis Ben Amor",
    role: "Sales Manager — Tunisian",
    image: "/assets/images/team/anis.png",
    description: "Mohamed Anis Ben Amor serves as the Sales Manager at Duroob Oman Tours. Originally from Tunisia, he brings extensive experience in tourism, customer service, and sales. His expertise, commitment to excellence, and multicultural background allow him to provide tailored guidance and exceptional service to each traveler. Passionate about travel and hospitality, Anis plays a key role in building customer relationships and supporting the agency’s growth and reputation..",
  },
];

const selectedMember = ref(null);

function openPopup(member) {
  selectedMember.value = member;
}

function closePopup() {
  selectedMember.value = null;
}
</script>

<style scoped>

.team-main .row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.team-list {
  text-align: center;
  cursor: pointer;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 👈 brings it to the front */
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 800px;
  max-width: 90%;
  z-index: 10000;
}

</style>
