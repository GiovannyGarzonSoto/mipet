<template>
  <section class="message">
      <Options/>
      <router-link to="/message" tag="div" class="message__block">
          <img class="message__img" src="../assets/images/person1.jpg" alt="burbuja mensaje">
          <span class="message__on"></span>
          <div class="message__box">
            <h3 class="message__name">Lorem Ipsum</h3>
            <p class="paragraph message__message">Hey! ,can se u?</p>
          </div>
      </router-link> 
      <router-link to="/message" tag="div" class="message__block">
      <div class="message-box">
        <h3 class="message__name">Lorem Dolor</h3>
        <p class="paragraph message__message2">Jajaja soo funnyyy</p> 
      </div>
        <img class="message__img2" src="../assets/images/person3.jpg" alt="burbuja mensaje">
        <span class="message__off"></span>
      </router-link> 
      <router-link to="/message" tag="div" class="message__block">
        <img class="message__img" src="../assets/images/person1.jpg" alt="burbuja mensaje">
        <span class="message__on"></span>
        <div class="message__box">
          <h3 class="message__name">Lorem Ipsum</h3>
          <p class="paragraph message__message">Heyyyyy!</p>
        </div>
      </router-link> 

      <div class="message__send">
        <form class="message__form">
            <div class="message__form-group">
                <label for="message">
                    <svg class="message__icon minicon">
                        <use xlink:href="../assets/sprite.svg#icon-bx-search"></use>
                    </svg>
                </label>
                <input name="message" class="message__input" type="text">
            </div>
        </form>

        <router-link class="icon--box icon--menu" to="/menu" tag="div">
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-nut"></use>
            </svg>
        </router-link>
      </div>
      
  </section>
</template>

<script>
import Options from '@/components/Options.vue'

export default {
    name: 'Message',
    components: {
        Options
    }
}
</script>