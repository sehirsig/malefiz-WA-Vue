<template>
  <Navigation selected="auth"></Navigation>
  <div class="row d-flex justify-content-center">
    <div class="col-md-8 mt-5 align-content-center">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Account Name</h5>
              <p class="card-text">{{ user.displayName }}</p>
            </div>
            <button class="btn btn-outline-danger" type="button" @click="changeName">
              Change Name
            </button>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Account Email</h5>
              <p class="card-text">{{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "AccountComponent",
  data() {
    return {
      user: {
        user: ''
      }
    };
  },
  components: {Navigation},
  methods: {
    changeName() {
      this.$swal({
        title: 'Change Name',
        text: 'Enter your new name. (12 Characters max.)',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Change Name',
        showLoaderOnConfirm: true,
        preConfirm: (newName) => {
          if (newName.length <= 12) {
            const currentUser = firebase.auth().currentUser;
            currentUser.updateProfile({
              displayName: newName
            })
            this.$router.go(); // Reload page
          } else {
            this.$swal({
              icon: "warning",
              text: "Username is not allowed to have more than 12 Characters.",
              title: "Too many characters!",
              showCloseButton: "Ok",
            })
          }
        },
        allowOutsideClick: () => !this.$swal.isLoading()
      })
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.user = user;
      } else {
        this.isLoggedIn = false;
        this.user = ""
      }
    });
  },
}
</script>

<style scoped>

</style>