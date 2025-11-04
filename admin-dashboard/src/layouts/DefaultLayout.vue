<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div>
    <header class="header">Admin Dashboard Header</header>

    <!-- 👇 le router-view doit être ici -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// tu peux ajouter ici ta logique du layout (menu, sidebar, etc.)
</script>

<style scoped>
.header {
  background: #333;
  color: white;
  padding: 1rem;
}
.main-content {
  padding: 2rem;
}
</style>
