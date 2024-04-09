<template>
  <div>
    <h1>Device Page</h1>
    <q-item clickable tag="router-link" :to="{ name: 'Home' }">
      <q-item-section>
        <q-item-label>Device Page</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "DevicePage",
};
</script>

<style>
/* Add your styles here */
</style>
