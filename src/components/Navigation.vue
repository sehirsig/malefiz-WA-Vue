<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand header-text" id="navBrand" @click="goHome">Malefiz</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link style="text-decoration: none; color: #c7c7c7" :to="{name:'Home'}">
            <a v-if="selected === 'home'" class="nav-link active hoverable text-center" aria-current="page">Home</a>
            <a v-else class="nav-link hoverable text-center">Home</a>
          </router-link>
          <router-link style="text-decoration: none; color: #c7c7c7" :to="{name:'About'}">
            <a v-if="selected === 'about'" class="nav-link active hoverable text-center" aria-current="page">About</a>
            <a v-else class="nav-link hoverable text-center">About</a>
          </router-link>
          <router-link v-if="isLoggedIn" style="text-decoration: none; color: #c7c7c7" :to="{name:'Malefiz'}">
            <a v-if="selected === 'malefiz'" class="nav-link active hoverable text-center"
               aria-current="page">Malefiz</a>
            <a v-else class="nav-link hoverable text-center">Malefiz</a>
          </router-link>
          <p v-if="isLoggedIn" class="nav-link text-center" data-bs-toggle="modal"
             data-bs-target="#infoModal">
            <q-icon name="info"/>
            Game Instructions
          </p>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                    aria-expanded="false">
              <q-icon v-if="selected === 'auth'" name="account_circle" color="white" size="2em"/>
              <q-icon v-else name="account_circle" color="grey" size="2em"/>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuAccount">
              <li>
                <router-link v-if="!isLoggedIn" class="dropdown-item" style="text-decoration: none; color: #c7c7c7"
                             :to="{name:'signin'}">
                  <a class="dropdown-item">Login</a>
                </router-link>
              </li>
              <li>
                <router-link v-if="isLoggedIn" class="dropdown-item" style="text-decoration: none; color: #c7c7c7" :to="{name:'account'}">
                  <a class="dropdown-item">Account: {{ user.displayName }}</a>
                </router-link>
              </li>
              <li><a v-if="isLoggedIn" class="dropdown-item text-danger" @click="signOut">Sign Out</a></li>
            </ul>
          </div>
          <game-instruction/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase/compat/app";
import GameInstruction from "@/components/Navigation/GameInstruction.vue";

export default {
  name: "Navigation-Bar",
  components: {GameInstruction},
  data() {
    return {
      isLoggedIn: false,
      user: "",
      homeLink: "/",
      aboutLink: "/about",
      malefizLink: "/malefiz",
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/')
        })
      })
    },
    goHome() {
      this.$router.push('/')
    }
  },
  created() {
    document.title = "Malefiz"
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
  props: ['selected'],
}
</script>

<style lang="less">
@header_color: #fcedd8;
@header_font: 'Niconne', cursive;

#header_text {
  clear: both;
  font-size: 5vw;
  width: 5vw;
  color: @header_color;
  font-family: @header_font;
  text-shadow: 0.1vw 0.1vw #eb452b, 0.15vw 0.15vw #efa032, 0.2vw 0.2vw #46b59b, 0.25vw 0.25vw #017e7f, 0.3vw 0.3vw #052939, 0.35vw 0.35vw #c11a2b;
}

.modal-backdrop {
  position: unset !important;
}

.hoverable {
  display: inline-block;
  backface-visibility: hidden;
  vertical-align: middle;
  position: relative;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transform: translateZ(0);
  transition-duration: .3s;
  transition-property: transform;
}

.hoverable:before {
  position: absolute;
  pointer-events: none;
  z-index: -1;
  content: '';
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(center, ellipse, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 80%);
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 80%);
  /* W3C */
  transition-duration: 0.3s;
  transition-property: transform, opacity;
}

.hoverable:hover, .hoverable:active, .hoverable:focus {
  transform: translateY(-5px);
}

.hoverable:hover:before, .hoverable:active:before, .hoverable:focus:before {
  opacity: 1;
  transform: translateY(-5px);
}


@keyframes bounce-animation {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }

  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }

  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.bounce {
  animation-name: bounce-animation;
  animation-duration: 2s;
}


.spinner {
  animation: rotate 2s linear infinite;
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;

  & .path {
    stroke: hsl(210, 70, 75);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

@header_color: #fcedd8;
@header_font: 'Niconne', cursive;

.header-text {
  clear: both;
  font-size: min(5vw, 30px) ! important;
  width: min(5vw, 30px) ! important;
  color: @header_color;
  font-family: @header_font;
  text-shadow: 0.05vw 0.05vw #eb452b, 0.075vw 0.075vw #efa032, 0.1vw 0.1vw #46b59b, 0.125vw 0.125vw #017e7f, 0.15vw 0.15vw #052939, 0.175vw 0.175vw #c11a2b;
}
</style>