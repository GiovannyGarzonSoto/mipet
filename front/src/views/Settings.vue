<template>
  <section class="settings">
    <Nav/>

    <div class="settings__card">
        <router-link class="settings__option" tag="a" to="editProfile">
            <h3 class="settings__name">Editar Perfil</h3>
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-circle-right"></use>
            </svg>
        </router-link>

        <router-link class="settings__option" tag="a" to="petSignup">
            <h3 class="settings__name">Registrar Mascota</h3>
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-circle-right"></use>
            </svg>
        </router-link>

        <router-link class="settings__option" tag="a" to="editProfile">
            <h3 class="settings__name">Cambiar Contraseña</h3>
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-circle-right"></use>
            </svg>
        </router-link>

        <router-link class="settings__option" tag="a" to="editProfile">
            <h3 class="settings__name">Historial de Pagos</h3>
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-circle-right"></use>
            </svg>
        </router-link>

        <router-link class="settings__option" tag="a" to="editProfile">
            <h3 class="settings__name">Privacidad y Seguridad</h3>
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-circle-right"></use>
            </svg>
        </router-link>

        <router-link class="settings__option" tag="a" to="reportBugs">
            <h3 class="settings__name">Reportar Problemas</h3>
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-circle-right"></use>
            </svg>
        </router-link>

        <router-link class="settings__option" tag="a" to="signin">
            <h3 class="settings__name">Cerrar Sesion</h3>
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-circle-right"></use>
            </svg>
        </router-link>
    </div>

    <Menu/>
  </section>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Menu from '@/components/Menu.vue'

export default {
    name: 'Settings',
    components: {
        Nav,
        Menu
    }
}
</script>