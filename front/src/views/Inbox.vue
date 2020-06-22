<template>
  <section class="inbox">
    <Options/>
    <router-link to="/message" tag="div" class="inbox__block">
        <img class="inbox__img" src="../assets/images/person1.jpg" alt="burbuja mensaje">
        <span class="inbox__on"></span>
        <h3 class="inbox__name">Lorem Ipsum</h3>
        <p class="paragraph inbox__message">Hey! ,I can see u tonight?</p>
    </router-link> 
    <router-link to="/message" tag="div" class="inbox__block">
        <img class="inbox__img" src="../assets/images/person3.jpg" alt="burbuja mensaje">
        <span class="inbox__off"></span>
        <h3 class="inbox__name">Lorem Dolor</h3>
        <p class="paragraph inbox__message">Jajaja soo funnyyy</p>
    </router-link> 
    <router-link to="/message" tag="div" class="inbox__block">
        <img class="inbox__img" src="../assets/images/person2.jpg" alt="burbuja mensaje">
        <span class="inbox__on"></span>
        <h3 class="inbox__name">Ipsum Lorem</h3>
        <p class="paragraph inbox__message">Que sucedeeee</p>
    </router-link> 
    <Menu/>
  </section>
</template>

<script>
import Options from '@/components/Options.vue'
import Menu from '@/components/Menu.vue'

export default {
    name: 'Inbox',
    components: {
        Options,
        Menu
    }

}
</script>

<style>

</style>