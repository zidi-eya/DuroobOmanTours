<template>
<section class="our-partner pb-6 pt-6">
    <div class="container">
      <div class="section-title mb-6 w-75 mx-auto text-center">
        <h4 class="mb-1 theme1">Our Partners</h4>
        <h2 class="mb-1">Our Awesome <span class="theme">partners</span></h2>
        <p>
         We collaborate with trusted car rental companies and service providers to ensure quality, safety, and the best experience for our customers. Together, we bring you reliable vehicles and exceptional service worldwide.
        </p>
      </div>
      <div class="row align-items-center partner-in partner-slider">
        
        <div class="col-md-3 col-sm-6">
          <div class="partner-item p-4 py-2 rounded bg-lgrey">
            <img src="/assets/images/partner/DMC.jpg" alt=""  class="partner-logo" />
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="partner-item p-4 py-2 rounded bg-lgrey">
            <img src="/assets/images/partner/dhiefa.png" alt="" class="partner-logo"  />
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="partner-item p-4 py-2 rounded bg-lgrey">
            <img src="/assets/images/partner/duroob.jpg" alt=""  class="partner-logo" />
          </div>
        </div>
       


        <div class="col-md-3 col-sm-6">
          <div class="partner-item p-4 py-2 rounded bg-lgrey">
            <img src="/assets/images/partner/hotelbeds.png" alt=""  class="partner-logo" />
          </div>
        </div>
        
        
        <div class="col-md-3 col-sm-6">
          <div class="partner-item p-4 py-2 rounded bg-lgrey">
            <img src="/assets/images/partner/millennium.png" alt=""  class="partner-logo" />
          </div>
        </div>
        
        
        <div class="col-md-3 col-sm-6">
          <div class="partner-item p-4 py-2 rounded bg-lgrey">
            <img src="/assets/images/partner/ratehawk.png" alt=""  class="partner-logo" />
          </div>
        </div>
        
        
        
        <div class="col-md-3 col-sm-6">
          <div class="partner-item p-4 py-2 rounded bg-lgrey">
            <img src="/assets/images/partner/resort.jpg" alt=""  class="partner-logo" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup>
import { onMounted, nextTick } from "vue";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

onMounted(async () => {

  $('.partner-slider').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          speed: 5000,
          rows:0,
          loop:true,
          responsive: [{
              breakpoint: 1000,
              settings: {
                  slidesToShow: 3
              }
          }, {
              breakpoint: 800,
              settings: {
                  slidesToShow: 2
              }
          }, {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1
              }
          }]
      });});

</script>
<style scoped>
.partner-logo {
  width: 100px;   /* largeur fixe */
  height: 100px;   /* hauteur fixe */
  object-fit: contain; /* garde les proportions sans déformer */
  display: block;
  margin: 0 auto; /* centrer horizontalement */
}
</style>