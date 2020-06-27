<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  console.log('Application on!')
</script>

<style>
  #app{
  height: 100%;
  width: 100%;
  background: linear-gradient(-30deg, var(--color-light), var(--text-white) 30%);}
</style>