<script setup lang="ts">
import LoadingIcon from '../Icons/LoadingIcon.vue'
</script>

<template>
  <div class="AppLoading">
    <LoadingIcon />
    <p>Loading...</p>
  </div>
</template>

<style scoped lang="scss">
.AppLoading {
  margin-top: 50px;
  text-align: center;
  svg {
    height: 40px;
  }
}
</style>
