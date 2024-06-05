<script>

  //axios
    import axios from 'axios';
  //axios

  // store
    import { store } from '../data/store';
  // store

  export default {
    name: 'contacts',

    data(){
      return{
        store,
        name: 'Dan',
        email: 'dan@dan.com',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas molestiae necessitatibus soluta voluptatem quidem quibusdam facere iusto labore saepe ipsa, ullam voluptas fugit similique vero, non neque? Porro, pariatur minima!'
      }
    },

    methods:{
      sendEmail(){
        console.log('sendEmail');
        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }

        axios.post(this.store.apiUrlContacts, data)
              .then( result => {
                console.log(result.data);
              })
              .catch( error => {
                console.log(error);
              })
      }
    }

  }
</script>

<template>
  <div class="my_container d-flex justify-content-center">
    <div class="w-75">
      <h1>Contattaci</h1>
      <form class="w-100" @submit.prevent="sendEmail">
        <label class="mt-3 fs-3 fw-bold">Nome</label>
        <input class="form-control" type="text" placeholder="Nome" name="name" v-model="name">
        <label class="mt-3 fs-3 fw-bold">E-mail</label>
        <input class="form-control" type="email" placeholder="E-mail" name="email" v-model="email">
        <label class="mt-3 fs-3 fw-bold">Messaggio</label>
        <textarea class="form-control" cols="30" rows="10" placeholder="Messaggio" name="message" v-model="message"></textarea>
        <button type="submit" class="btn btn-outline-primary mt-3">Invia</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>


@use '../assets/scss/variables' as *;

</style>