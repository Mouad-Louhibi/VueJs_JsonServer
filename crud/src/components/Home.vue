<template>
  <main class="flex-shrink-0">
    <div class="container">
      {{ $t("message", { name: "Mouad" }) }}
      <form @submit.prevent="handleForm()">
        <div class="mb-3">
          <label for="name" class="form-label">name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="name"
            v-model="formData.name"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            v-model="formData.email"
          />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <textarea
            class="form-control"
            id="address"
            rows="2"
            v-model="formData.address"
          ></textarea>
        </div>
        <div class="mb-3">
          <button v-if="!isEdit" type="submit" class="btn btn-primary">
            Save
          </button>
          <button v-else type="submit" class="btn btn-warning">Edit</button>
        </div>
      </form>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th colspan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contact, i) in contacts" :key="i">
            <th scope="row">{{ contact._id }} {{ i }}</th>
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.address }}</td>
            <td>
              <button
                type="button"
                @click="editContact(contact._id)"
                class="btn btn-warning"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                @click="deleteContact(contact._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr v-if="contacts.length == 0">
            <td colspan="5">NO DATA</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
export default {
  name: "Home",

  data: function () {
    return {
      isEdit: false,
      formData: {
        _id: null,
        name: "",
        email: "",
        address: "",
      },
      contacts: [],
      variable: "",
      user: {
        name: "Mouad",
        city: "Fes",
      },
    };
  },
  methods: {
    handleForm: function () {
      console.log(this.formData);
      if (this.isEdit) {
        for (var i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i]._id === this.formData._id) {
            this.contacts[i] = this.formData;
          }
        }
      } else {
        this.formData._id = this.contacts.length + 1;

        this.contacts.push(this.formData);
      }
      this.formData = {
        name: "",
        email: "",
        address: "",
      };
      this.isEdit = false;
      console.log(this.contacts);
    },

    editContact: function (id) {
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i]._id === id) {
          this.formData = this.contacts[i];
          this.isEdit = true;
        }
      }
      console.log(id);
    },
    deleteContact: function (id) {
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i]._id === id) {
          this.contacts.splice(i, 1);
          i--;
        }
      }
      console.log(this.contacts);
    },
  },
};
</script>

<style scoped>
</style>
