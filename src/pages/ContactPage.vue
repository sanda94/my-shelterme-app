<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p>
      If you have any questions or inquiries, please feel free to contact us:
    </p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="name">contact:</label>
        <input type="text" id="name" v-model="formData.Contact" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.Email" required />
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="formData.subject" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          rows="4"
          v-model="formData.message"
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>

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
  data() {
    return {
      formData: {
        name: "",
        contact: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // You can handle form submission here, e.g., send data to server
      console.log("Form submitted with data:", this.formData);
    },
  },
};
</script>

<style scoped>
.contact-page {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

p {
  text-align: center;
  color: #555;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
