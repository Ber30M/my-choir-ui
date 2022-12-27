<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <lyrics></lyrics>
      <lyrics></lyrics>
      <lyrics></lyrics>

      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="getIcon('addOutline')"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import choristComponet from "@/components/choristComponet.vue";
import lyrics from "@/components/lyrics.vue";
export default {
  data() {
    return {
      name: "Bertrand",
      voice: "Tenor",
    };
  },
  components: {
    choristComponet,
    lyrics,
  },
};
</script>
<style scoped>
ion-fab{
  position: fixed;
}
</style>
