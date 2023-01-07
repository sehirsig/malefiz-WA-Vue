<template>
  <Navigation selected="login"></Navigation>
  <div class="row d-flex justify-content-center">
    <div class="col-md-8 mt-5">
      <form @submit.prevent="onSubmit">
        <div class="form-group mb-3">
          <label><strong>Name</strong></label>
          <input type="text" class="form-control form-control-lg" v-model="user.name" />
        </div>

        <div class="form-group mb-3">
          <label><strong>Email</strong></label>
          <input type="email" class="form-control form-control-lg" v-model="user.email" />
        </div>

        <div class="form-group mb-3">
          <label><strong>Password</strong></label>
          <input type="password" class="form-control form-control-lg" v-model="user.password" />
        </div>

        <div class="d-grid">
          <input type="submit" class="btn btn-primary btn-lg btn-block" value="Register User"/>
        </div>
      </form>
    </div>
  </div>
  <br>
  <div>
    <a>Have an Account? </a>
    <router-link v-if="!isLoggedIn" style="text-decoration: none; color: #c7c7c7" :to="{name:'signin'}">
      <a class="btn link-primary">Login</a>
    </router-link>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "RegisterComponent",
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  components: {Navigation},
  methods: {
    onSubmit() {
      firebase.auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((response) => {
            response.user.updateProfile({
              displayName: this.user.name
            })
                .then(() => {
                  this.$swal({
                    icon: "information",
                    text: "User successfully registered!",
                    title: "Registered!",
                    showCloseButton: "Close",
                  })
                  this.user = {
                    name: '',
                    email: '',
                    password: ''
                  }
                });
          })
          .catch((err) => {
            this.$swal({
              icon: "warning",
              text: err,
              title: "Error!",
              showCloseButton: "Nice",
            })
            console.log(err);
          });
    }
  }
}
</script>

<style scoped>

</style>