<template>
    <section class="editProfile">
        <Nav/>

        <div class="editProfile__card">
            <div class="editProfile__header">
                <img src="../assets/images/person3.jpg" alt="human" class="editProfile__img">
                <span class="editProfile__edit">
                    <svg class="editProfile__icon">
                      <use xlink:href="../assets/sprite.svg#icon-pencil"></use>
                    </svg>
                </span>
            </div>
            <div class="editProfile__footer">
                <form class="editProfile__form">
                    <input type="text" name="name" class="editProfile__input" placeholder="Editar Nombre">
                    <input type="text" name="description" class="editProfile__input" placeholder="Editar Descripcion">
                    <input type="text" name="telephone" class="editProfile__input" placeholder="Editar Telefono">
                    <input type="mail" name="mail" class="editProfile__input" placeholder="Editar Correo">

                    <router-link to="/profile" tag="a" class="button button--primary mt-bg">Guardar Cambios</router-link> 
                </form>
            </div>
        </div>

        <Menu/>
    </section>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Menu from '@/components/Menu.vue'

export default {
    name: 'EditProfile',
    components: {
        Nav,
        Menu
    }
}
</script>