<template>
  <section class="newPost">
    <form class="newPost__form">
      <input type="text" class="newPost__input" placeholder="Escribe una descripcion">
    </form>
    <div class="newPost__box">
      <img class="newPost__img" src="../assets/images/image2.jpg" alt="human and dog">
      <img class="newPost__img" src="../assets/images/image3.jpg" alt="human and dog">
      <a href="#" class="newPost__add">
        <svg class="newPost__icon minicon">
            <use xlink:href="../assets/sprite.svg#icon-plus"></use>
        </svg>
        <span class="newPost__add-name">Subir Archivo</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewPost'
}
</script>