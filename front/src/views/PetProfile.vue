<template>
  <div class="profile">
    <Nav/>
    <div class="profile__header">
      <div class="profile__box-img">
        <img src="../assets/images/perro1.jpg" alt="person" class="profile__img">
      </div>

      <div class="profile__info">
        <div class="profile__row--1">
          <h2 class="profile__name">Devorador Lam</h2>
          <router-link to="settings" tag="div" class="profile__edit">
            <svg class="icon">
              <use xlink:href="../assets/sprite.svg#icon-pencil"></use>
            </svg>
            <span>Editar</span>
          </router-link>
        </div>

        <div class="profile__row--2">
          <h3 class="profile__desc">La ladrasion es mi pasion</h3>
        </div>

        <div class="profile__row--3">
          <div class="profile__box-post">
            <h3 class="profile__name-post">11</h3>
            <span>Archivos</span>
          </div>
          <div class="profile__box-post">
            <h3 class="profile__name-post">127</h3>
            <span>Seguidores</span>
          </div>
          <div class="profile__box-post">
            <h3 class="profile__name-post">327</h3>
            <span>Me Gusta</span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="profile__pets">
      Datos </div> -->

    <div class="profile__publications">
      <div class="profile__box-post" @click="selected='petInfo'">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-price-tags"></use>
        </svg>
        <span>Informacion</span>
      </div>

      <div class="profile__box-post" @click="selected='petVideos'">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-video-camera"></use>
        </svg>
        <span>Videos</span>
      </div>

      <div class="profile__box-post" @click="selected='petPhotos'">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-document-outline"></use>
        </svg>
        <span>Fotos</span>
      </div>
    </div>
    <component :is="selected"></component>
    <Menu/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Menu from '@/components/Menu.vue'
import PetPhotos from '@/components/PetPhotos.vue'
import PetVideos from '@/components/PetVideos.vue'
import PetInfo from '@/components/PetInfo.vue'

export default {
  name: 'PetProfile',
  components: {
    Menu,
    Nav,
    PetPhotos,
    PetVideos,
    PetInfo
  },
  data() {
    return {
      selected: 'PetPhotos'
    }
  }
}
</script>