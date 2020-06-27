<template>
  <section class="help">
      <nav class="help__filter">
        <div class="help__box">
          <label for="location">
            <svg class="icon">
              <use xlink:href="../assets/sprite.svg#icon-location-outline"></use>
            </svg>
          </label>
          <input name="location" type="text" class="help__input" placeholder="Caldera, III Region">
        </div>
        <div class="help__box">
          <label for="category">
            <svg class="icon">
              <use xlink:href="../assets/sprite.svg#icon-stack"></use>
            </svg>
          </label>
        <input name="category" type="text" class="help__input" placeholder="Todo">
        </div>
        <div class="help__button">
          <svg class="help__button-icon">
            <use xlink:href="../assets/sprite.svg#icon-plus"></use>
          </svg>
          <span class="help__button-name">Agregar</span>
        </div>
      </nav>
      
      <div class="help__card">
        <div class="help__header">
          <img src="../assets/images/person3.jpg" alt="person" class="help__header-img">
          <span class="help__name">Lorem Ipsum</span>
          <span class="help__text">Mascota Busca Hogar</span>
        </div>

        <div class="help__content">
          <img src="../assets/images/doghelp.jpg" alt="dog help" class="help__content-img">
        </div>

        <div class="help__footer">
          <div class="help__ubication">
            <svg class="icon">
              <use xlink:href="../assets/sprite.svg#icon-location-outline"></use>
            </svg>
            <span class="help__location">
              Caldera, Playa Brava
            </span>
          </div>

          <div class="help__reacts">
            <svg class="help__icon">
              <use xlink:href="../assets/sprite.svg#icon-chat-right"></use>
            </svg>

            <svg class="help__icon">
              <use xlink:href="../assets/sprite.svg#icon-eye"></use>
            </svg>
          </div>
        </div>
      </div>

       <div class="help__card">
        <div class="help__header">
          <img src="../assets/images/person2.jpg" alt="person" class="help__header-img">
          <span class="help__name">Ipsum Lorem</span>
          <span class="help__text">Perro Perdido</span>
        </div>

        <div class="help__content">
          <img src="../assets/images/dogmiss.jpg" alt="dog miss" class="help__content-img">
        </div>

        <div class="help__footer">
          <div class="help__ubication">
            <svg class="icon">
              <use xlink:href="../assets/sprite.svg#icon-location-outline"></use>
            </svg>
            <span class="help__location">
              Caldera, Playa Brava
            </span>
          </div>

          <div class="help__reacts">
            <svg class="help__icon">
              <use xlink:href="../assets/sprite.svg#icon-chat-right"></use>
            </svg>

            <svg class="help__icon">
              <use xlink:href="../assets/sprite.svg#icon-eye"></use>
            </svg>
          </div>
        </div>
      </div>

      <Menu/>
  </section>
</template>

<script>
import Menu from '@/components/Menu.vue' 

export default {
  name: 'Help',
  components: {
    Menu
  }
}
</script>