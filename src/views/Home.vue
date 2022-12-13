<template>
  <Navigation selected="home"></Navigation>
  <div class="q-pa-md row justify-center">
    <welcome-chat></welcome-chat>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import WelcomeChat from "@/components/Home/WelcomeChat.vue";

export default {
  name: "Home-View",
  components: {Navigation, WelcomeChat}
}
</script>

<style scoped>

</style>