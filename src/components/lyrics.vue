<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ my_title }}</ion-card-title>
      <ion-card-subtitle>published on {{ my_pub_date }}</ion-card-subtitle>
      <ion-card-subtitle>by {{ my_publisher }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>{{ my_txt }}</ion-card-content>
    <div class="container">
      <ion-button fill="clear"
        ><ion-icon :icon="getIcon('heart')" color="danger"></ion-icon
      ></ion-button>
      <ion-button fill="clear" @click="changeTheTitle"
        ><ion-icon :icon="getIcon('create')" color="success"></ion-icon
      ></ion-button>
    </div>
  </ion-card>
</template>

<script>
export default {
  props: ["my_title", "my_pub_date", "my_publisher", "my_txt"],
};
</script>

<style scoped>
.container {
  display: flex;
}
ion-card {
  background-color: rgb(255, 250, 210);
}
ion-button:active {
  scale: 1.2;
}
</style>
  