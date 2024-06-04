<script>
  export default {
    name: 'lsit',

    props:{
      objects: Object
    }
  }
</script>

<template>
  <div class="w-100">
  <table class="table w-100">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nome</th>
      <th scope="col">Progetti</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="object in objects" :key="object.id">
      <th scope="row">{{ object.id }}</th>
      <td>{{ object.name }}</td>
      <td>
        <ul class="list-group overflow-auto" style="height: 180px;">
          <li class="list-group-item" v-for="(project, i) in object.projects" :key="i">{{ i + 1}} - <router-link :to="{ name: 'show', params: {slug: project.slug} }">{{ project.name }}</router-link></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<style lang="scss" scoped>

</style>