<template>
  <button type="button" class="btn btn-warning input-warning-button" v-on:click="parentMethod()">
    Skip
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