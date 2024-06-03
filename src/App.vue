<script>
  // components
  import Nav from './components/Nav.vue';
  // components

  export default {

    components:{
      Nav
    },

  }
</script>


<template>
  <div class="main_container">
    <div>
      <h1 class="fw-bold mt-4 text-center">Vite Boolfolio</h1>
      <Nav />
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<style lang="scss">

</style>