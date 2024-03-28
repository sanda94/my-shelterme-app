<template>
  <div>
    <h1>About Us</h1>
    <q-item clickable tag="router-link" :to="{ name: 'home' }">
      <q-item-section>
        <q-item-label>Go to Home Page</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style>
/* Add your styles here */
</style>
