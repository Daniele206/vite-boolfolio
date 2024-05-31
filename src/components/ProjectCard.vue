<script>
  export default {
    props:{
      project: Object
    }
  }
</script>

<template>
  <div class="card mx-3 my-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title text-primary fw-bold">{{ project.name }}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.type.name }}</h6>
    <h6 class="text-primary fw-bold">Descrizzione</h6>
    <p class="card-text d-block overflow-auto" style="height: 200px;">{{ project.description }}</p>
    <div v-if="project.technologies.length > 0">
      <h6 class="text-primary fw-bold">Tecnologie</h6>
      <ul>
        <li v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>

</style>