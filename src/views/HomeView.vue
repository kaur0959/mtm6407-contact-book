<template>
  <div class="container mt-4">
    <h1 class="mb-4">Contact Book</h1>
    <input v-model="search" class="form-control mb-3" placeholder="Search contacts" />
    <ul class="list-group">
      <li v-for="contact in filteredContacts" :key="contact.id" class="list-group-item d-flex justify-content-between align-items-center">
        <router-link :to="`/contact/${contact.id}`" class="btn btn-link">
          {{ contact.lastName }}, {{ contact.firstName }}
        </router-link>
      </li>
    </ul>
    <router-link to="/add" class="btn btn-primary mt-3">Add New Contact</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      contacts: JSON.parse(localStorage.getItem('contacts')) || []
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .filter(contact =>
          (contact.firstName + ' ' + contact.lastName).toLowerCase().includes(this.search.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    }
  }
};
</script>
