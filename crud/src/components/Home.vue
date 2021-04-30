<template>
  <main class="flex-shrink-0">
    <div class="container">
      Message Here
      <form @submit.prevent="addUser()">
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
          <button v-if="!isEdit" type="submit" class="btn btn-primary">Save</button>
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
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address }}</td>
            <td>
              <button
                type="button"
                @click="editUser(user.id)"
                class="btn btn-warning"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                @click="deleteUser1(user.id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr v-if="users.length == 0">
            <td colspan="5">NO DATA</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
import axios from "axios";

const baseURL = 'http://localhost:3000/users';

export default {
  name: "Home",

  data: function () {
    return {
      isEdit: false,
      formData: {
        id: null,
        name: "",
        email: "",
        address: "",
      },
      users: []
    };
  },

  async created(){
    try {
      const res = await axios.get(baseURL);

      this.users = res.data;
    } catch(e){
      console.error(e);
    }
  },

  methods: {

    async addUser(){
      console.log(this.formData)
      for (var i = 0; i < this.users.length; i++);
      this.formData.id = i++

      this.editUser1(this.formData.id)
        
      axios.post(baseURL, this.formData)
        .then(response => this.formData.id = response.data.id)
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
      });
    },

    deleteUser: async function(id) {
      console.error(id);
      await axios.delete(baseURL + ""+id+"")
      console.log(this.users);
    },
/*
    async deleteUser(id){
      
      const res = await axios.delete(baseURL + {id: id})
      this.users = [...this.formData, res.data]
    },

    handleForm: function () {
      console.log(this.formData);
      if (this.isEdit) {
        for (var i = 0; i < this.users.length; i++) {
          if (this.users[i].id === this.formData.id) {
            this.users[i] = this.formData;
          }
        }
      } else {
        this.formData.id = this.users.length + 1;

        this.users.push(this.formData);
      }
      this.formData = {
        name: "",
        email: "",
        address: "",
      };
      this.isEdit = false;
      console.log(this.users);
    },
*/
    editUser1: function (id) {
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.formData = this.users[i];
          this.isEdit = true;
        }
      }
      console.log(id);
    },
    
    deleteUser1: function (id) {
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.users.splice(i, 1);
          i--;
        }
      }
      console.log(this.users);
    },
    
  },
};
</script>

<style scoped>
</style>
