<template>
  <div class="container p-0 m-1" id="gamepanel">
    <div v-for="(n, i) in 18" :key="i" class="row justify-content-center">
      <div v-for="(k, j) in 19" :key="j" class="col p-0 m-0">
        <img class="game-field" :id="'field{'+ i +'}_{'+ j +'}'"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gameboard-Game"
}
</script>

<style scoped>

</style>