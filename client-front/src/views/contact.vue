<template>
  <HeaderComponent />
<section class="breadcrumb-main pb-20 pt-14" style="background-image: url(/assets/images/destination/Salalah.jpg);">
        <div class="section-shape section-shape1 top-inherit bottom-0" style="background-image: url(/assets/images/shape8.png);"></div>
        <div class="breadcrumb-outer">
            <div class="container">
                <div class="breadcrumb-content text-center">
                    <h1 class="mb-3">Contact Us</h1>
                    <nav aria-label="breadcrumb" class="d-block">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                            <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="dot-overlay"></div>
    </section>
  <!-- contact starts -->
  <section class="contact-main pt-6 pb-60">
    <div class="container">
      <div class="contact-info-main mt-0">
        <div class="row">
          <div class="col-lg-10 col-offset-lg-1 mx-auto">
            <div class="contact-info bg-white">
              <div class="contact-info-title text-center mb-4 px-5">
                <h3 class="mb-1">INFORMATION ABOUT US</h3>
                <p class="mb-0">
We are a dedicated team committed to providing high-quality travel services, with a focus on customer satisfaction, safety, and comfort.                </p>
              </div>

              <div class="contact-info-content row mb-1">
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="info-item bg-lgrey px-4 py-5 border-all text-center rounded">
                    <div class="info-icon mb-2">
                      <i class="fa fa-map-marker-alt theme"></i>
                    </div>
                    <div class="info-content">
                      <h3>Office Location</h3>
                      <p class="m-0">Oman, Salalah</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="info-item bg-lgrey px-4 py-5 border-all text-center rounded">
                    <div class="info-icon mb-2">
                      <i class="fa fa-phone theme"></i>
                    </div>
                    <div class="info-content">
                      <h3>Phone Number</h3>
                      <p class="m-0">+968 9351 8889</p>
                      <p class="m-0">+968 7608 5308</p>
                        <p class="m-0">+968 9297 5322</p>
                  </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-12 mb-4">
                  <div class="info-item bg-lgrey px-4 py-5 border-all text-center rounded">
                    <div class="info-icon mb-2">
                      <i class="fa fa-envelope theme"></i>
                    </div>
                    <div class="info-content ps-4">
                      <h3>Email Address</h3>
                      <p class="m-0">info@Durrobomantours.com</p>
                      <p class="m-0">sales@Durrobomantours.com</p>
                                            <p class="m-0">manager@Durrobomantours.com</p>

                    </div>
                  </div>
                </div>
              </div>

              <div id="contact-form1" class="contact-form">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="map rounded overflow-hidden mb-md-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.148330785694!2d54.0763613!3d17.0163928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd1618dd0820041%3A0xe8bbea2c5a6072d!2sDarb%20rent%20a%20car!5e0!3m2!1sfr!2stn!4v1762375978183!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <form @submit.prevent="sendMessage">
                      <div class="form-group mb-2">
                        <input v-model="form.first_name" type="text" placeholder="First Name" class="form-control" required />
                      </div>
                      <div class="form-group mb-2">
                        <input v-model="form.last_name" type="text" placeholder="Last Name" class="form-control" required />
                      </div>
                      <div class="form-group mb-2">
                        <input v-model="form.email" type="email" placeholder="Email" class="form-control" required />
                      </div>
                      <div class="form-group mb-2">
                        <input v-model="form.phone" type="text" placeholder="Phone" class="form-control" required />
                      </div>
                      <div class="textarea mb-2">
                        <textarea v-model="form.comments" placeholder="Enter a message" required></textarea>
                      </div>
                      <div class="comment-btn text-center">
                        <button type="submit" class="nir-btn">Send Message</button>
                      </div>

                      <p v-if="successMsg" class="text-success mt-3">{{ successMsg }}</p>
                      <p v-if="errorMsg" class="text-danger mt-3">{{ errorMsg }}</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <FooterComponent />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import HeaderComponent from "../components/header.vue";
import BannerComponent from "../components/banner.vue";
import FooterComponent from "../components/footer.vue";
import BreadCrumb from "../components/BreadCrumb.vue";

const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  comments: ''
})

const successMsg = ref('')
const errorMsg = ref('')

const sendMessage = async () => {
  successMsg.value = ''
  errorMsg.value = ''
  try {
    const res = await axios.post('http://127.0.0.1:8000/api/contact', form.value)
    successMsg.value = res.data.message
    form.value = { first_name: '', last_name: '', email: '', phone: '', comments: '' }
  } catch (err) {
    errorMsg.value = err.response?.data?.message || 'Failed to send message.'
  }
}

onMounted(() => {
  console.log("Contact page loaded")
})
</script>
