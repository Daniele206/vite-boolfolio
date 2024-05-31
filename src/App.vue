<script>
  //axios
  import axios from 'axios';
  //axios

  export default {
    
    data(){
      return{
        projects: []
      }
    },

    methods:{
      getApi(){
        console.log('ciao');
      }
    },

    mounted(){
      this.getApi();
    }

  }
</script>


<template>
  <div class="main_container">
    <div>
      <h1 class="fw-bold mt-4">Lista Progetti</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>


<style lang="scss">

  @use './assets/scss/main.scss';

</style>