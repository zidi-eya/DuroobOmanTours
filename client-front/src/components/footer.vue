  
    <template>
    <div>
    <footer class="pt-20 pb-4" style="background-image: url(/assets/images/background_pattern.png)">
      <div class="section-shape top-0" style="background-image: url(/assets/images/shape8.png)"></div>
      <!-- Instagram starts -->
      <div class="insta-main pb-10">
          <div class="container">
      <div class="insta-inner  position-relative">
        <div class="follow-button">
          <h5 class="m-0 rounded"><i class="fab fa-instagram"></i> Follow on Instagram</h5>
        </div>

        <Carousel :itemsToShow="6" :wrapAround="true" :autoplay="2000" class="mt-6">
    <Slide v-for="(img, i) in images" :key="i">
      <div class="insta-image rounded overflow-hidden">
        <img :src="img" alt="insta" class="rounded-md object-cover w-full h-48" />
      </div>
    </Slide>
  </Carousel>
      </div>
    </div>
      </div>
      <!-- Instagram ends -->
      <div class="footer-upper pb-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4 pe-4">
              <div class="footer-about">
                <img src="/assets/images/logo-whit.png" alt="" style="width:250px;" />
                <p class="mt-3 mb-3 white">
                Duroob Oman Tours offers authentic, premium travel experiences across Oman, blending comfort, culture, and adventure with true Omani hospitality.
                </p>
                <ul>
                  <li class="white"><strong>PO Box:</strong> +47-252-254-2542</li>
                  <li class="white"><strong>Location:</strong> Oman ,Salalah</li>
                  <li class="white"><strong>Email:</strong> info@duroobomantours.com</li>
                  <li class="white"><strong>Website:</strong> www.duroobomantours.com</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="footer-links" style="margin-left: 100px;">
                <h3 class="white">Quick link</h3>
                <ul>
                  <li><RouterLink to="/contact" class="nav-link">Contact Us</RouterLink></li>
                     <li><RouterLink to="/rentcar" class="nav-link">Rent Car</RouterLink></li>

                  <li><RouterLink to="/packs" class="nav-link">Packs </RouterLink></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="footer-links">
                <h3 class="white">Categories</h3>
                <ul>
                  <li>Tours</li>
                   <li>Camping</li>
                  <li>Rent Car</li>
                   <li>Hotels</li>

                
                </ul>
              </div>
            </div>
          <!--  <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="footer-links">
                <h3 class="white">Newsletter</h3>
                <div class="newsletter-form">
                  <p class="mb-3">Jin our community of over 200,000 global readers who receives emails filled with news, promotions, and other good stuff.</p>
                  <form action="#" method="get" accept-charset="utf-8" class="border-0 d-flex align-items-center">
                    <input type="text" placeholder="Email Address" />
                    <button class="nir-btn ms-2">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>-->
          </div>
        </div>
      </div>

      <!--   <div class="footer-payment">
        <div class="container">
          <div class="row footer-pay align-items-center justify-content-between text-lg-start text-center">
            <div class="col-lg-8 footer-payment-nav mb-4">
              <ul class="">
                <li class="me-2">We Support:</li>
                <li class="me-2"><i class="fab fa-cc-mastercard fs-4"></i></li>
                <li class="me-2"><i class="fab fa-cc-paypal fs-4"></i></li>
                <li class="me-2"><i class="fab fa-cc-stripe fs-4"></i></li>
                <li class="me-2"><i class="fab fa-cc-visa fs-4"></i></li>
                <li class="me-2"><i class="fab fa-cc-discover fs-4"></i></li>
              </ul>
            </div>
            <div class="col-lg-4 footer-payment-nav mb-4">
              <ul class="d-flex align-items-center">
                <li class="me-2 w-75">
                  <select class="niceSelect rounded">
                    <option>English</option>
                    <option>Chinese</option>
                    <option>Russian</option>
                    <option>Japanese</option>
                    <option>Korean</option>
                  </select>
                </li>
                <li class="w-25">
                  <select class="niceSelect rounded">
                    <option>$ USD</option>
                    <option>$ AUD</option>
                    <option>$ YEN</option>
                    <option>$ IN</option>
                    <option>$ NP</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>-->

      <div class="footer-copyright">
        <div class="container">
          <div class="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
            <div class="copyright-text">
              <p class="m-0 white">2025 Duroob Oman Tours. All rights reserved To   <a 
    href="https://wa.me/21629310122" 
    target="_blank" 
    style="color: #fff; text-decoration: underline;"
  >
    ZIDI EYA
  </a> 
 <span style="color: red;">❤</span>.</p>
            </div>
            <div class="social-links">
              <ul>
                <li>
                  <a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="particles-js"></div>
    </footer>
    </div>

    </template>
   <script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const images = [
  '/assets/images/destination/destination3.jpg',
  '/assets/images/destination/destination4.jpg',
  '/assets/images/destination/destination5.jpg',
  '/assets/images/destination/destination1.jpg',
]
</script>

 <style scoped>
.insta-inner {
  position: relative;
}

.follow-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  text-align: center;
}

.follow-button h5 {
  background: #fff;
  color: #000;
  padding: 12px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  display: inline-block;
}


</style>