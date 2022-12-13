<template>
  <div class="col text-center">
    <button type="button" class="btn btn-warning btn-block input-warning-button" v-on:click="parentMethod()">
      Start Game</button>
  </div>
</template>

<script>

export default {
  props: {
    method: { type: Function },
  },
  methods: {
    parentMethod() {
      this.method();
    }
  }
}
</script>

<style scoped>

</style>