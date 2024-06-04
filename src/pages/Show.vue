<script>

  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from '../data/store';
  // store

  export default {
    name: 'show',

    data(){
      return{
        store,
        project: {},
        redyReed: false
      }
    },

    methods:{
      getApi(){
        const slug = this.$route.params.slug;
        axios.get(this.store.apiUrlProjectShow + slug)
          .then(result => {
            this.redyReed = true;
            this.project = result.data.project;
            console.log(this.project);
          })
          .catch(error => {
            console.log(error);
          })
      },
    },

    mounted(){
      this.getApi()
    }
  }
</script>

<template>
  <div class="my_container">
    <h1 class="fw-bold">{{ project.name }}</h1>
    <h2>{{ project.type?.name }}</h2>
    <p>{{ project.description }}</p>
    <ul v-if="project.technologies" class="list-unstyled p-0 ms-4">
      <h4 class="fw-bold">Tecnologie</h4>
      <li v-for="(technology, i) in project.technologies" :key="i">{{i + 1}} - {{technology.name}}</li>
    </ul>
    <router-link :to="{ name: 'projects' }" class="btn btn-primary mt-4">Back</router-link>
  </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/variables' as *;

</style>