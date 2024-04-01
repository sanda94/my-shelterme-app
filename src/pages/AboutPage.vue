import './AboutPage.css';

<template>
  <div class="about-page">
    <h1>About Quasar</h1>

    <div class="about-content">
      <p>Quasar is a leading technology company dedicated to...</p>

      <h2>Our Mission</h2>
      <p>
        At Quasar, our mission is to revolutionize the way people interact with
        technology, empowering them to...
      </p>

      <h2>Our Unique Value Proposition</h2>
      <p>
        Quasar stands out from the competition because of our cutting-edge
        technology that seamlessly integrates...
      </p>

      <h2>Our Core Values</h2>
      <ul>
        <li>Innovation</li>
        <li>Integrity</li>
        <li>Collaboration</li>
        <li>Customer-Centricity</li>
      </ul>

      <h2>Meet Our Team</h2>
      <p>Our team of passionate professionals is dedicated to...</p>

      <h2>Contact Us</h2>
      <p>
        For more information about Quasar, feel free to contact us at
        <a href="mailto:info@quasar.com">info@quasar.com</a>.
      </p>
    </div>

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

<style scoped>
/* Add your scoped styles here */

.about-page {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.about-content {
  margin-bottom: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

h2 {
  color: #555;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
