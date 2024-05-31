<script>
  //axios
  import axios from 'axios';
  //axios

  import ProjectCard from './components/ProjectCard.vue';

  export default {

    components:{
      ProjectCard
    },
    
    data(){
      return{
        projects: [],
        redyReed: false
      }
    },

    methods:{
      getApi(){
        axios.get('http://127.0.0.1:8000/api/projects')
          .then(result => {
            this.redyReed = true;
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
      <h1 class="fw-bold mt-4 text-center">Lista Progetti</h1>
      <div class="container" v-if="redyReed">
        <div class="row justify-content-center">
          <ProjectCard
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
          />
        </div>
      </div>
      <h4 v-else>Loading...</h4>
    </div>
  </div>
</template>


<style lang="scss">

</style>