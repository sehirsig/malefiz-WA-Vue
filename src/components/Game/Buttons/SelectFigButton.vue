<template>
  <button type="button" class="btn btn-success input-normal-button" v-on:click="parentMethod()">
    {{ num }}
  </button>
</template>

<script>

export default {
  props: {
    method: { type: Function },
    num: { type: Number },
  },
  methods: {
    parentMethod() {
      this.method(this.num);
    }
  }
}
</script>

<style scoped>

</style>