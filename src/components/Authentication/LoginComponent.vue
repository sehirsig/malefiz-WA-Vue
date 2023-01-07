<template>
  <Navigation selected="login"></Navigation>
  <div class="row d-flex justify-content-center">
    <div class="col-md-8 mt-5">
      <form @submit.prevent="onSubmit">
        <div class="form-group mb-3">
          <label><strong>Email</strong></label>
          <input type="email" class="form-control form-control-lg" v-model="user.email"/>
        </div>

        <div class="form-group mb-3">
          <label><strong>Password</strong></label>
          <input type="password" class="form-control form-control-lg" v-model="user.password"/>
        </div>

        <div class="d-grid">
          <input type="submit" class="btn btn-primary btn-lg btn-block" value="Login"/>
        </div>
      </form>
    </div>
  </div>
  <br>
  <div>
    <button type="button" @click="googleSignIn" class="google-login-btn">
      Sign in with Google
    </button>
  </div>
  <br>
  <div>
    <a>Not Registered yet? </a>
    <router-link style="text-decoration: none; color: #c7c7c7" :to="{name:'register-user'}">
      <a class="btn link-primary">Register</a>
    </router-link>
  </div>
  <div>
    <a>Forgot Password? </a>
    <a class="btn link-primary" @click="forgotPassword">Reset Password</a>
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
.google-login-btn {
  background-color: white;
  background-image: url(../../assets/images/google-logo.png);
  background-color: white;
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