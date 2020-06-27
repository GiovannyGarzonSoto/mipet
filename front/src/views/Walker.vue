<template>
    <section class="walker">
        <img src="../assets/images/googlemini.png" alt="map" class="walker__map">
        <img src="../assets/images/pas.jpg" alt="" class="walker__profile">
        <h3 class="walker__name">Lorem Erbmon</h3>
        <div class="walker__stars">
            <svg class="minicon">
                <use xlink:href="../assets/sprite.svg#icon-star-full"></use>
            </svg>

            <svg class="minicon">
                <use xlink:href="../assets/sprite.svg#icon-star-full"></use>
            </svg>

            <svg class="minicon">
                <use xlink:href="../assets/sprite.svg#icon-star-full"></use>
            </svg>

            <svg class="minicon">
                <use xlink:href="../assets/sprite.svg#icon-star-full"></use>
            </svg>

            <svg class="minicon">
                <use xlink:href="../assets/sprite.svg#icon-star-full"></use>
            </svg>
        </div>

        <div class="walker__info">
          <div class="walker__box">
            <h3 class="walker__box-name">27</h3>
            <span>Paseos</span>
          </div>
          
          <div class="walker__box">
            <h3 class="walker__box-name">27</h3>
            <span>Votos</span>
          </div>

          <div class="walker__box">
            <h3 class="walker__box-name">6,7</h3>
            <span>Nota</span>
          </div>
        </div>
        <p class="walker__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere aliquid, nemo accusantium aspernatur blanditiis corporis quas qui maxime in beatae perspiciatis expedita cum temporibus. Corrupti numquam eius atque facere.
        </p>

        <a class="button button--primary">
            Solicitar Paseo
        </a>

        <Menu/>
    </section>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
    name: 'Walker',
    components: {
        Menu
    }
}
</script>