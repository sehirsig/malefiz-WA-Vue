<template>
  <Navigation selected="auth"></Navigation>
  <div class="h-100 gradient-form">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">

                  <div class="text-center">
                    <h4 class="mt-1 mb-5 pb-1">Malefiz</h4>
                  </div>

                  <form @submit.prevent="onSubmit">
                    <p>Please register an account</p>

                    <div class="form-outline mb-4">
                      <input type="text" id="usernameForm" class="form-control"
                             placeholder="Username" v-model="user.name"/>
                      <label class="form-label" for="usernameForm">Username</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="email" id="emailForm" class="form-control"
                             placeholder="Email address" v-model="user.email"/>
                      <label class="form-label" for="emailForm">E-Mail</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="passwordForm" class="form-control" v-model="user.password"/>
                      <label class="form-label" for="passwordForm">Password</label>
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <input type="submit" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                             value="Register User"/>
                    </div>

                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Already have an account?</p>
                      <router-link style="text-decoration: none; color: #c7c7c7" :to="{name:'signin'}">
                        <button type="button" class="btn btn-outline-success">Sign In</button>
                      </router-link>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">HTWG Constance - AIN - WA - Game Project Malefiz</h4>
                  <p class="small mb-0">Game was made by (Github) @sehirsig & @jojoGraff.</p>
                </div>
              </div>
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
      if (this.user.name === '') {
        this.$swal({
          icon: "warning",
          text: "Blank Username is not allowed.",
          title: "Enter an Username",
          showCloseButton: "Ok",
        })
      } else {
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
                    }).then(() => {
                      this.$router.push('/')
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
}
</script>

<style scoped>
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #ffa200, #e08201, #c16401, #a04800);

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #ffa200, #e08201, #c16401, #a04800);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}

@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
}
</style>