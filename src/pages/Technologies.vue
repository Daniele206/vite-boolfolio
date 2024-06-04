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
  <div class="my_container">
    <h1>Tecnologies</h1>
    <List v-if="redyReed" :objects="technologies"/>
    <h4 v-else>Loading...</h4>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/variables' as *;

</style>