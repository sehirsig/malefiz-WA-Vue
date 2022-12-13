<template>
  <button type="button" class="btn btn-success input-normal-button" v-on:click="parentMethod()">
    {{ symbol }}
  </button>
</template>

<script>

export default {
  props: {
    method: { type: Function },
    direction: { type: String },
    symbol: { type: String },
  },
  methods: {
    parentMethod() {
      this.method(this.direction);
    }
  }
}
</script>

<style scoped>

</style>