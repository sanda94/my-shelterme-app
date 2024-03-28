<template>
  <div>
    <h1>Home Page</h1>
    <q-item clickable tag="router-link" :to="{ name: 'about' }">
      <q-item-section>
        <q-item-label>Go to About Us Page</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
/* Add your styles here */
</style>
