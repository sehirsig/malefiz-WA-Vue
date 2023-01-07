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
                    <p>Please login to your account</p>
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
                      <input type="submit" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" value="Login"/>
                      <br>
                      <a class="btn text-muted text-italic" @click="forgotPassword">Forgot password?</a>
                    </div>
                    <div class="text-center pt-1 mb-5 pb-1">
                      <a>Other sign in options</a>
                      <br>
                      <button type="button" @click="googleSignIn" class="google-login-btn">
                        Sign in with Google
                      </button>
                    </div>
                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <router-link style="text-decoration: none; color: #c7c7c7" :to="{name:'register-user'}">
                        <button type="button" class="btn btn-outline-danger">Register</button>
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
  name: "LoginComponent",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  components: {Navigation},
  methods: {
    onSubmit() {
      firebase.auth()
          .signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
        this.$router.push('/')
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
    },
    googleSignIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            let token = result.credential.accessToken;
            let user = result.user;
            console.log(token) // Token
            console.log(user) // User that was authenticated
            this.$router.push('/')
          })
          .catch((err) => {
            this.$swal({
              icon: "warning",
              text: err,
              title: "Error!",
              showCloseButton: "Nice",
            })
            console.log(err); // This will give you all the information needed to further debug any errors
          });
    },
    forgotPassword() {
      this.$swal({
        title: 'Reset Password',
        text: 'Enter your E-Mail. If the E-Mail exists, you will get an Reset Link to your E-Mail.',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Reset',
        showLoaderOnConfirm: true,
        preConfirm: (email) => {
          firebase.auth().sendPasswordResetEmail(email);
        },
        allowOutsideClick: () => !this.$swal.isLoading()
      })
    }
  }
}
</script>

<style scoped lang="less">

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

.google-login-btn {
  background-color: white;
  background-image: url(../../assets/images/google-logo.png);
  background-repeat: no-repeat;
  background-position: 12px 14px;
  border-radius: 3px;
  border: none;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  color: #757575;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 16px 12px 42px;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25), 0 0 0 3px #c8dafc;
    outline: none;
  }

  &:disabled {
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;
    filter: grayscale(100%);
  }
}
</style>