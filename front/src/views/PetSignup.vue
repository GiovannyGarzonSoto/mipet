<template>
  <section class="petSignup">
    <h1 class="heading-1 signup__title">Registra Tu Mascota</h1>
    <form class="form mt-md">
        <div class="form__group">
            <label for="name" class="form__label">
                <ion-icon name="paw-sharp"></ion-icon>
            </label>
            <input type="text" name="name" class="form__input" placeholder="Nombre" />
        </div>

        <div class="form__group">
            <label for="weight" class="form__label">
                <ion-icon name="clipboard-outline"></ion-icon>
            </label>
            <input type="text" name="weight" class="form__input" placeholder="Peso" />
        </div>

        <div class="form__group">
            <label for="height" class="form__label">
                <ion-icon name="clipboard-outline"></ion-icon>
            </label>
            <input type="text" name="height" class="form__input" placeholder="Altura" />
        </div>
    
        <div class="form__group">
            <label for="text" class="form__label">
              <ion-icon name="clipboard-outline"></ion-icon>
            </label>
            <input type="text" name="specie" class="form__input" placeholder="Especie" />
        </div>

        <div class="form__group">
            <label for="race" class="form__label">
              <ion-icon name="clipboard-outline"></ion-icon>
            </label>
            <input type="text" name="race" class="form__input" placeholder="Raza"/>
        </div>

        <div class="form__group">
            <label for="race" class="form__label">
                <ion-icon name="calendar-sharp"></ion-icon>
            </label>
            <input type="text" name="race" class="form__input" placeholder="Fecha de Nacimiento"/>
        </div>

        <a href="#" class="petSignup__add">
            <svg class="petSignup__icon minicon">
                <use xlink:href="../assets/sprite.svg#icon-plus"></use>
            </svg>
            <span class="petSignup__add-name">Subir Imagen</span>
        </a>

      <router-link to="/profile" tag="a" class="button button--primary">Registrar</router-link> 
    </form>

    <Menu/>
  </section>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
    name: 'PetSignup',
    components: {
        Menu
    }
}
</script>