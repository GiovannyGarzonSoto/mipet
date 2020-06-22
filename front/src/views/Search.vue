<template>
  <section class="search">
      <Options/>
      <div class="search__block">
          <img class="search__img" src="../assets/images/person1.jpg" alt="busqueda">
          <span class="search__on"></span>
          <h3 class="search__name">Lorem Ipsum</h3>
      </div>
      <div class="search__block">
          <img class="search__img" src="../assets/images/person2.jpg" alt="busqueda">
          <span class="search__on"></span>
          <h3 class="search__name">Lorem Dolor</h3>
      </div>
      <Menu/>
  </section>
</template>

<script>
import Options from '@/components/Options.vue'
import Menu from '@/components/Menu.vue'

export default {
    name: 'Search',
    components: {
        Options,
        Menu
    }
}
</script>

<style>

</style>