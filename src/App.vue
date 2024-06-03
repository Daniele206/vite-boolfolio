<script>
  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from './data/store';
  // store

  import ProjectCard from './components/ProjectCard.vue';
  import Paginator from './components/Paginator.vue';

  export default {

    components:{
      ProjectCard,
      Paginator
    },
    
    data(){
      return{
        store,
        projects: [],
        page: '',
        totPage: '',
        redyReed: false
      }
    },

    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params: this.store.params
        })
          .then(result => {
            this.redyReed = true;
            this.page = result.data.current_page
            this.totPage = result.data.last_page
            this.projects = result.data.data;
            console.log(this.projects);
          })
          .catch(error => {
            console.log(error);
          })
      },
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
      <Paginator
      v-if="redyReed"
      :page="page"
      :totPage="totPage"
      @pageSwap="getApi()"
      />
    </div>
  </div>
</template>


<style lang="scss">

</style>