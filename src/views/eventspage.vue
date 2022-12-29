<template>
  <ion-page>
    <my_header></my_header>
    <ion-searchbar show-clear-button="focus" value="Show on Focus" mode="ios"></ion-searchbar>


    <ion-content class="ion-padding">

      <event></event>

      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="getIcon('addOutline')"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import my_header from "../components/headercomponent.vue"
import choristComponet from "@/components/choristComponet.vue";
import event from "@/components/eventComponent.vue";
export default {
  data() {
    return {
      name: "Bertrand",
      voice: "Tenor",
    };
  },
  components: {
    choristComponet,
    event,
    my_header
  },
};
</script>
<style scoped>
ion-fab {
  position: fixed;
}
</style>
