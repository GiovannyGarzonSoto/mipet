<template>
  <div class="signin">
    <h1 class="heading-1 signin__title">Iniciar Sesion</h1>
    <form class="form">
      <div class="form__group">
        <ion-icon name="mail-open-outline"></ion-icon>
        <input type="mail" name="mail" class="form__input" placeholder="Ingresa tu correo">
      </div>
      <div class="form__group">
        <label for="password" class="form__label"><ion-icon name="lock-closed-outline"></ion-icon></label>
        <input type="password" name="password" class="form__input" placeholder="Ingresa tu contraseña">
      </div>
      <router-link to="/news" tag="a" class="button button--primary">Entrar</router-link> 
    </form>
    <p class="link-text">Registrate <router-link class="link" to="/signup" tag="a">aquí</router-link></p> 
  </div>
</template>

<script>
export default {
  name: 'Signin'
}
</script>