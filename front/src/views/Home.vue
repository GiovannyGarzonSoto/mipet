<template>
  <div class="home">
    <img class="home__img" alt="mascota" src="../assets/logo.png">
    <h1 class="heading heading-1 home__title">Lorem ipsum dolor sit</h1>
    <p class="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing, amet consectetur adipisicing elit.</p>
    <router-link to="/signin" tag="button" class="button button--primary">Iniciar Sesion</router-link> 
    <router-link to="/signup" tag="button" class="button button--secondary">Registrarse</router-link> 
    <p class="link-text">
      Recupera tu contraseña <router-link class="link" to="/forgot" tag="a">aquí</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
