<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>CHORISTES</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"
      ><p>We are going to display chorists components soon!!!</p>

      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>
      <choristComponet></choristComponet>


      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="getIcon('addOutline')"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import choristComponet from '@/components/choristComponet.vue';
export default {
  components:{
    choristComponet
  }
};
</script>
