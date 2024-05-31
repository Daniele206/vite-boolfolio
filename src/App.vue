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
        axios.get('http://127.0.0.1:8000/api/projects')
          .then(result => {
            this.projects = result.data.data;
            console.log(this.projects);
          })
          .catch(error => {
            console.log(error);
          })
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
        <li v-for="(project, i) in projects" :key="i">{{ project.name }}</li>
      </ul>
    </div>
  </div>
</template>


<style lang="scss">

  @use './assets/scss/main.scss';

</style>