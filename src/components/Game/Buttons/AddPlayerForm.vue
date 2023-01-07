<template>
  <button type="button" class="btn btn-success input-normal-button" v-on:click="parentMethod()">
    Join Game
  </button>
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