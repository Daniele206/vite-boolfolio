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
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas molestiae necessitatibus soluta voluptatem quidem quibusdam facere iusto labore saepe ipsa, ullam voluptas fugit similique vero, non neque? Porro, pariatur minima!',
        redyReed: true,
        sent: false,
        errors:{
            name: [],
            email: [],
            message: []
          }
      }
    },

    methods:{
      sendEmail(){
        console.log('sendEmail');
        this.redyReed = false;
        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }

        axios.post(this.store.apiUrlContacts, data)
              .then( result => {
                this.redyReed = true;
                console.log(result.data);
                this.sent = result.data.succes;
                if(!result.data.succes){
                  this.errors = result.data.errors
                }else{
                  this.errors = {
                      name: [],
                      email: [],
                      message: []
                    }
                }
              })
              .catch( error => {
                this.redyReed = true;
                console.log(error);
              })
      }
    }

  }
</script>

<template>
  <div class="my_container d-flex justify-content-center">
    <div v-if="redyReed" class="w-75">
      <div v-if="!sent">
        <h1>Contattaci</h1>
        <form class="w-100" @submit.prevent="sendEmail">
          <label class="mt-3 fs-3 fw-bold">Nome</label>
          <input class="form-control" type="text" placeholder="Nome" name="name" v-model="name">
          <p class="error">{{ errors.name?.toString() }}</p>
          <label class="mt-3 fs-3 fw-bold">E-mail</label>
          <input class="form-control" type="email" placeholder="E-mail" name="email" v-model="email">
          <p class="error">{{ errors.email?.toString() }}</p>
          <label class="mt-3 fs-3 fw-bold">Messaggio</label>
          <textarea class="form-control" cols="30" rows="10" placeholder="Messaggio" name="message" v-model="message"></textarea>
          <p class="error">{{ errors.message?.toString() }}</p>
          <button type="submit" class="btn btn-outline-primary mt-3">Invia</button>
        </form>
      </div>
      <h3 v-else class="pt-4">Email inviata correttamente</h3>
    </div>
    <h4 v-else class="mt-5">Loading...</h4>
  </div>
</template>

<style lang="scss" scoped>


@use '../assets/scss/variables' as *;

</style>