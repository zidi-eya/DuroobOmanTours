<template>
  <header class="main_header_area">
    <!-- Top header bar -->
  
    <topbar />

    <!-- Navigation Bar -->
    <div class="header_menu" id="header_menu">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-flex d-flex align-items-center justify-content-between w-100 pb-3 pt-3">
            <!-- Brand -->
            <div class="navbar-header">
              <RouterLink to="/" class="navbar-brand">
                <img src="/assets/images/logo.png" alt="logo" style="width: 210px;" />
              </RouterLink>
            </div>

            <!-- Navigation Links -->
            <div class="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav" id="responsive-menu">
               

               
                 <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
                <li><RouterLink to="/pack" class="nav-link">Packs</RouterLink></li>
                <li><RouterLink to="/rentcar" class="nav-link">Rent Car</RouterLink></li>
                <li><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
            </ul> 
            </div>

            
            <!--<div class="register-login d-flex align-items-center">
              <a href="#" class="me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="icon-user"></i> Login/Register
              </a>
              <RouterLink to="/booking" class="nir-btn white">Book Now</RouterLink>
            </div>-->

            <div id="slicknav-mobile"></div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
// aucun script requis pour le moment
import topbar from "./topbar.vue"
</script>

<style scoped>


</style>
