<template>
    <section class="reportBugs">
        <Nav/>

        <div class="reportBugs__card">
            <h3 class="reportBugs__title">Cuentanos tu problema</h3>
            <p class="reportBugs__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam corrupti labore, alias in ipsam accusamus quas repellat atque, similique, aut unde sequi officia odit earum odio error inventore nam? Sapiente.</p>
            <input type="text" name="problem" class="reportBugs__input">
            <router-link  class="button button--primary" tag="a" to="/news">Enviar</router-link>
        </div>

        <Menu/>
    </section>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Menu from '@/components/Menu.vue'

export default {
    name: 'ReportBugs',
    components: {
        Nav,
        Menu
    }
}
</script>