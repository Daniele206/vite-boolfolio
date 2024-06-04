<script>
  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from '../data/store';
  // store

  // components
  import ProjectCard from '../components/ProjectCard.vue';
  import Paginator from '../components/Paginator.vue';
  // components

  export default {
    name: 'projects',

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
        axios.get(this.store.apiUrlProjects, {
          params: this.store.paramsProjects
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
  <div class="container">
    <h1>Progetti</h1>
    <div v-if="redyReed">
      <div class="row justify-content-center">
        <ProjectCard
        v-for="(project, i) in projects"
        :key="i"
        :project="project"
        />
      </div>
      <Paginator
      :page="page"
      :totPage="totPage"
      @pageSwap="getApi()"
      />
    </div>
    <h4 v-else>Loading...</h4>
  </div>
</template>

<style lang="scss" scoped>

</style>