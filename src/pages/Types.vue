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
    name: 'types',

    components:{
      List
    },

    data(){
      return{
        store,
        types: [],
        redyReed: false
      }
    },

    methods:{
      getApi(){
        axios.get(this.store.apiUrlTypes)
          .then(result => {
            this.redyReed = true;
            this.types = result.data;
            console.log(this.types);
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
    <h1>Types</h1>
    <List v-if="redyReed" :objects="types"/>
    <h4 v-else>Loading...</h4>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

</style>