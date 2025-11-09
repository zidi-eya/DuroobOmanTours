<template>
  <section class="comingsoon d-flex align-items-center" style="background-image:url('assets/images/bg/bg7.jpg');">
    <div class="overlay"></div>
    <div id="particles-js"></div>

    <div class="container">
      <div class="comingsoon-content text-center">
        <div class="coming-title mb-3">
          <div class="logo-main mb-4">
            <img src="/assets/images/logo-white.png" alt="logo" />
          </div>
          <h1 class="white m-0">
            Under <span class="theme1">Construction</span>
          </h1>
          <p class="white m-0">
            Our website is under construction. <br />
            We’ll be here soon with our awesome new site. Subscribe to be notified.
          </p>
        </div>

        <div class="coming-counter">
          <div class="counter-box">{{ timeLeft.days }} Days</div>
          <div class="counter-box">{{ timeLeft.hours }} Hours</div>
          <div class="counter-box">{{ timeLeft.minutes }} Minutes</div>
          <div class="counter-box">{{ timeLeft.seconds }} Seconds</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const targetDate = new Date('2025-12-28T00:00:00')

function updateCountdown() {
  const now = new Date()
  const diff = targetDate - now
  if (diff <= 0) return

  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

let interval
onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => clearInterval(interval))
</script>


