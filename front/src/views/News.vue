<template>
  <div class="news">
      <Nav/>
      <Content/>
      <Menu/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Content from '@/components/Content.vue'
import Menu from '@/components/Menu.vue'

export default {
    name: 'News',
    components: {
        Nav,
        Content,
        Menu
    }
}
</script>
