<template>
  <ion-app>
    <my_header></my_header>
    <ion-router-outlet/>
  </ion-app>
</template>
<script>
import my_header from './components/headercomponent.vue'
export default {
  components:{
    my_header
  }
}
</script>
<style>
</style>