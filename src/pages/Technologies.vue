<script>
  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from '../data/store';
  // store

  // components
  import List from '../components/List.vue';
  // components

  export default {
    name: 'tecnologies',
    
    components:{
      List
    },

    data(){
      return{
        store,
        technologies: [],
        redyReed: false
      }
    },

    methods:{
      getApi(){
        axios.get(this.store.apiUrlTechnologies)
          .then(result => {
            this.redyReed = true;
            this.technologies = result.data;
            console.log(this.technologies);
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
  <div class="list_container">
    <h1>Tecnologies</h1>
    <List :objects="technologies"/>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/variables' as *;

</style>