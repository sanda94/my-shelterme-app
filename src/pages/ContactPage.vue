<template>
  <div>
    <h1>Contact Us Page</h1>
    <q-item clickable tag="router-link" :to="{ name: 'home' }">
      <q-item-section>
        <q-item-label>Go to Home Page</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style>
/* Add your styles here */
</style>
