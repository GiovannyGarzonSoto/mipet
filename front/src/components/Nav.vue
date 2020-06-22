<template>
  <nav class="nav">
      <router-link class="icon--box icon--camera" to="/news" tag="div">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-camera"></use>
        </svg>
      </router-link>
      <router-link class="icon--box icon--heart " to="/news" tag="div">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-heart"></use>
        </svg>
        <span class="nav__notification">7</span>
      </router-link>
      <router-link class="icon--box icon--pushpin" to="/news" tag="div">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-pushpin"></use>
        </svg>
        <span class="nav__notification">13</span>
      </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>