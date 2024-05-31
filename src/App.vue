<script>
  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from './data/store';
  // store

  import ProjectCard from './components/ProjectCard.vue';

  export default {

    components:{
      ProjectCard
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

      pageswap(isNext){
        if(isNext){
          this.store.params.page++;
        }else{
          this.store.params.page--;
        }
        
        this.getApi()
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
      <nav v-if="redyReed" aria-label="Page navigation example">
        <ul class="pagination">
          <li v-if="page > 1" class="page-item"><button @click="pageswap(false)" class="page-link"><i class="fa-solid fa-caret-left"></i></button></li>
          <li class="page-item"><p class="page-link">Pgina {{ page }} di {{ totPage }}</p></li>
          <li v-if="page < totPage" class="page-item"><button @click="pageswap(true)" class="page-link"><i class="fa-solid fa-caret-right"></i></button></li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<style lang="scss">

</style>