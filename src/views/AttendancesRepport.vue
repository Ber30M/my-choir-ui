<template>
  <ion-page>
    <my_header></my_header>
    <ion-searchbar show-clear-button="focus" value="Show on Focus" mode="ios"></ion-searchbar>


    <ion-content class="ion-padding"
      ><p>We are going to display chorists' attendances repport soon!!!</p>
    </ion-content>
  </ion-page>
</template>

<script>
import my_header from '../components/headercomponent.vue'
export default {
  components:{
    my_header
  }
};
</script>
