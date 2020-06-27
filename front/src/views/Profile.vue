<template>
  <div class="profile">
    <Nav/>
    <div class="profile__header">
      <div class="profile__box-img">
        <img src="../assets/images/person3.jpg" alt="person" class="profile__img">
      </div>

      <div class="profile__info">
        <div class="profile__row--1">
          <h2 class="profile__name">Foo Erbmon</h2>
          <router-link to="settings" tag="div" class="profile__edit">
            <svg class="icon">
              <use xlink:href="../assets/sprite.svg#icon-nut"></use>
            </svg>
            <span>Ajustes</span>
          </router-link>
        </div>

        <div class="profile__row--2">
          <h3 class="profile__desc">@tetrahidrocannabinol</h3>
        </div>

        <div class="profile__row--3">
          <div class="profile__box-post">
            <h3 class="profile__name-post">19</h3>
            <span>Archivos</span>
          </div>
          <div class="profile__box-post">
            <h3 class="profile__name-post">27</h3>
            <span>Seguidores</span>
          </div>
          <div class="profile__box-post">
            <h3 class="profile__name-post">27</h3>
            <span>Seguidos</span>
          </div>
        </div>
      </div>
    </div>

    <div class="profile__pets">
      <router-link class="profile__pet-box" to="petProfile" tag="div">
        <img class="profile__pet-img" src="../assets/images/perro1.jpg" alt="perro">
        <span class="profile__pet-name">Devorador</span>
      </router-link>

      <router-link class="profile__pet-box" to="petProfile" tag="div">
        <img class="profile__pet-img" src="../assets/images/perro2.jpg" alt="perro">
        <span class="profile__pet-name">Firu</span>
      </router-link>
    </div>

    <div class="profile__publications">
      <div class="profile__box-post" @click="selected='Videos'">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-video-camera"></use>
        </svg>
        <span>Videos</span>
      </div>

      <div class="profile__box-post" @click="selected='Photos'">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-document-outline"></use>
        </svg>
        <span>Fotos</span>
      </div>

      <div class="profile__box-post" @click="selected='Favorites'">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-bookmark"></use>
        </svg>
        <span>Favoritos</span>
      </div>

      <div class="profile__box-post" @click="selected='NewPost'">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-plus"></use>
        </svg>
        <span>Nueva Publ</span>
      </div>
    </div>
    <component :is="selected"></component>
    <Menu/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Menu from '@/components/Menu.vue'
import Photos from '@/components/Photos.vue'
import Videos from '@/components/Videos.vue'
import Favorites from '@/components/Favorites.vue'
import NewPost from '@/components/NewPost.vue'

export default {
  name: 'Profile',
  components: {
    Menu,
    Nav,
    Photos,
    Videos,
    Favorites,
    NewPost
  },
  data() {
    return {
      selected: 'Photos'
    }
  }
}
</script>