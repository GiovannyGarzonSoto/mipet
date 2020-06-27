<template>
  <section class="message">
      <Options/>
      <div class="message__block">
          <img class="message__img" src="../assets/images/person3.jpg" alt="burbuja mensaje">
          <span class="message__on"></span>
          <div class="message__box">
            <h3 class="message__name">Lorem Ipsum</h3>
            <p class="paragraph message__message">Hey! ,can se u?</p>
          </div>
      </div> 
      <div class="message__block">
      <div class="message-box">
        <h3 class="message__name">Lorem Dolor</h3>
        <p class="paragraph message__message2">Jajaja soo funnyyy</p> 
      </div>
        <img class="message__img2" src="../assets/images/person1.jpg" alt="burbuja mensaje">
        <span class="message__off"></span>
      </div> 
      <div class="message__block">
        <img class="message__img" src="../assets/images/person3.jpg" alt="burbuja mensaje">
        <span class="message__on"></span>
        <div class="message__box">
          <h3 class="message__name">Lorem Ipsum</h3>
          <p class="paragraph message__message">Heyyyyy!</p>
        </div>
      </div>  
      <SendMessage/> 
  </section>
</template>

<script>
import Options from '@/components/Options.vue'
import SendMessage from '@/components/SendMessage'

export default {
  name: 'Message',
  components: {
    Options,
    SendMessage
  }
}
</script>