<template>
  <div class="signup">
    <h1 class="heading-1 signup__title">Registrate</h1>
    <form class="form">
      <div class="form__group">
        <label for="name" class="form__label">
          <ion-icon name="person-circle-outline"></ion-icon>
        </label>
        <input type="text" name="name" class="form__input" placeholder="Nombre" />
      </div>
      <div class="form__group">
        <label for="mail" class="form__label">
          <ion-icon name="mail-open-outline"></ion-icon>
        </label>
        <input type="mail" name="mail" class="form__input" placeholder="Correo" />
      </div>
      <div class="form__group">
        <label for="phone" class="form__label">
          <ion-icon name="phone-portrait-outline"></ion-icon>
        </label>
        <input type="text" name="phone" class="form__input" placeholder="Telefono" />
      </div>
      <div class="form__group">
        <label for="password" class="form__label">
          <ion-icon name="lock-closed-outline"></ion-icon>
        </label>
        <input type="password" name="password" class="form__input" placeholder="Contraseña" />
      </div>
      <div class="form__group">
        <label for="repeat-pass" class="form__label">
          <ion-icon name="key-outline"></ion-icon>
        </label>
        <input type="password" name="repeat-pass" class="form__input" placeholder="Repite Contraseña"/>
      </div>
      <router-link to="/signin" tag="a" class="button button--primary">Enviar</router-link> 
    </form>
    <p class="link-text">
      Inicia Sesion <router-link class="link" to="/signin" tag="a">aquí</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Signup'
}
</script>