<template>
  <footer class="menu">
      <router-link class="icon--box icon--market" to="/news" tag="div">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-market"></use>
        </svg>
      </router-link>

      <router-link class="icon--box icon--dog" to="/news" tag="div">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-guide-dog"></use>
        </svg>
      </router-link>

      <router-link class="icon--box icon--search" to="/search" tag="div">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-bx-search"></use>
        </svg>
      </router-link>

      <router-link class="icon--box icon--chat-right" to="/inbox" tag="div">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-chat-right"></use>
        </svg>
      </router-link>

      <router-link class="icon--box icon--profile" to="/news" tag="div">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-profile"></use>
        </svg>
      </router-link>
  </footer>
</template>

<script>
export default {
  name: 'Menu'
}
</script>