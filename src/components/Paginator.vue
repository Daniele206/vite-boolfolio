<script>
// store
  import { store } from '../data/store';
// store

  export default {
    name: 'paginator',

    props:{
      page: String,
      totPage: String
    },
    
    methods:{
      pageswap(isNext){
        if(isNext){
          this.store.params.page++;
        }else{
          this.store.params.page--;
        }
        
        this.$emit('pageSwap')
      }
    },

    data(){
      return{
        store
      }
    }

  }
</script>

<template>
  <div>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li v-if="page > 1" class="page-item"><button @click="pageswap(false)" class="page-link"><i class="fa-solid fa-caret-left"></i></button></li>
          <li class="page-item"><p class="page-link">Pgina {{ page }} di {{ totPage }}</p></li>
          <li v-if="page < totPage" class="page-item"><button @click="pageswap(true)" class="page-link"><i class="fa-solid fa-caret-right"></i></button></li>
        </ul>
      </nav>
  </div>
</template>

<style lang="scss" scoped>

</style>