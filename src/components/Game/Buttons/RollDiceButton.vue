<template>
  <div class="col">
    <button type="button" v-on:click="parentMethod()" class="btn btn-success btn-block input-normal-button">
      Roll Dice
    </button>
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