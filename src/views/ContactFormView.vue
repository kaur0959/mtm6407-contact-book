<template>
  <div class="container mt-4">
    <h2>{{ isEditing ? 'Edit Contact' : 'Add Contact' }}</h2>
    <form @submit.prevent="saveContact">
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input id="firstName" v-model="contact.firstName" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input id="lastName" v-model="contact.lastName" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input id="email" v-model="contact.email" type="email" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Update' : 'Add' }}</button>
      <router-link to="/" class="btn btn-secondary ms-2">Cancel</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: { firstName: '', lastName: '', email: '' },
      isEditing: false
    };
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const contact = contacts.find(contact => contact.id === id);
      if (contact) {
        this.contact = contact;
        this.isEditing = true;
      }
    }
  },
  methods: {
    saveContact() {
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      if (this.isEditing) {
        contacts = contacts.map(contact =>
          contact.id === this.contact.id ? this.contact : contact
        );
      } else {
        this.contact.id = Date.now().toString();
        contacts.push(this.contact);
      }
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.$router.push(`/contact/${this.contact.id}`);
    }
  }
};
</script>
