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