<template>
  <div class="forgot">
    <h1 class="heading-1 forgot__title">Olvidaste tu contraseña?</h1>
    <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil nemo eligendi nisi sunt consectetur quia odio quas? Nemo ipsum nobis totam repudiandae eveniet deleniti eum sit veritatis similique nostrum!</p>
    <form class="form">
        <div class="form__group">
            <label for="mail" class="form__label">
                <ion-icon name="mail-open-outline"></ion-icon>
            </label>
            <input type="mail" class="form__input" name="mail" placeholder="Ingresa tu correo">
        </div>
        <a href="#" class="button button--primary">Enviar</a>
    </form>
    <p class="link-text">Vuelve al inicio <router-link class="link" to="/" tag="a">aquí</router-link></p>
  </div>
</template>

<script>
export default {
    name: 'Forgot'
}
</script>