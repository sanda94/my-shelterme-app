<template>
  <div>
    <h1>Users Page</h1>
    <q-item clickable tag="router-link" :to="{ name: 'Home' }">
      <q-item-section>
        <q-item-label>Profile Page</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "UseresPage",
};
</script>

<style>
/* Add your styles here */
</style>
