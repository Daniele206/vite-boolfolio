<script>
  export default {
    name: 'nav',
  }
</script>

<template>
  <div class="d-flex justify-content-center">
    <router-link :to="{ name: 'home' }" class="mx-2 px-3 btn btn-outline-dark rounded-0">Home</router-link>
    <router-link :to="{ name: 'projects' }" class="mx-2 px-3 btn btn-outline-dark rounded-0">Progetti</router-link>
    <router-link :to="{ name: 'technologies' }" class="mx-2 px-3 btn btn-outline-dark rounded-0">Tecnologie</router-link>
    <router-link :to="{ name: 'types' }" class="mx-2 px-3 btn btn-outline-dark rounded-0">Tipologie</router-link>
    <router-link :to="{ name: 'type-projects' }" class="mx-2 px-3 btn btn-outline-dark rounded-0">Progetti per tipologia</router-link>
  </div>
</template>

<style lang="scss" scoped>

</style>