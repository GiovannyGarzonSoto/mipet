<template>
  <section class="walk">
    <img src="../assets/images/google.png" alt="map" class="walk__map">
    <h3 class="walk__title">
        Paseadores Activos
    </h3>
    <div class="walk__data">
        <router-link to="walker" tag="div" class="walk__box">
            <img src="../assets/images/pas.jpg" alt="person" class="walk__img">
            <h3 class="walk__name">Lorem Impsum</h3>
            <div class="walk__stars">
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
        </router-link>
    </div>

    <div class="walk__data">
        <div class="walk__box">
            <img src="../assets/images/pas2.jpg" alt="person" class="walk__img">
            <h3 class="walk__name">Ipsum lorem</h3>
            <div class="walk__stars">
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
        </div>
    </div>

    <Menu/>
  </section>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {    
    name: 'Walk',
    components: {
        Menu
    }
}
</script>