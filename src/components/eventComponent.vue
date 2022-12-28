<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ event_title }}</ion-card-title>
      <ion-card-subtitle>published on {{ event_date }}</ion-card-subtitle>
      <ion-card-subtitle>by {{ event_publisher }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>{{ event_text }}</ion-card-content>
    <div class="container">
      <ion-button fill="clear"
        ><ion-icon :icon="getIcon('heart')" color="blue"></ion-icon
      ></ion-button>
      <ion-button fill="clear"
        ><ion-icon :icon="getIcon('create')" color="black"></ion-icon
      ></ion-button>
    </div>
  </ion-card>
</template>

<script>
export default {
  data() {
    return {
      event_title: "Engagement de mariage",
      event_text: "descriptions de l'événément est tout simplement est événément comme les autres",
      event_date: "12 décember 2023",
      attandances:null,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
ion-card {
  background-color: rgb(255, 255, 255);
}
</style>
  