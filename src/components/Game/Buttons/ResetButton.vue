<template>
    <div class="row justify-content-center">
      <div class="row m-1">
        <div class="col text-center">
          <button type="button" class="btn btn-danger input-critical-button" v-on:click="parentMethod()">
            Reset Game &#8634;
          </button>
        </div>
      </div>
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