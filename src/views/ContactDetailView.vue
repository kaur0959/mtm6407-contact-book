<template>
  <div class="container mt-4">
    <div v-if="contact">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p><strong>Email:</strong> {{ contact.email }}</p>
      <router-link :to="`/edit/${contact.id}`" class="btn btn-warning">Edit</router-link>
      <button @click="deleteContact" class="btn btn-danger ms-2">Delete</button>
      <router-link to="/" class="btn btn-secondary ms-2">Back to list</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: null
    };
  },
  created() {
    const id = this.$route.params.id;
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.contact = contacts.find(contact => contact.id === id);
  },
  methods: {
    deleteContact() {
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts = contacts.filter(contact => contact.id !== this.contact.id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.$router.push('/');
    }
  }
};
</script>
