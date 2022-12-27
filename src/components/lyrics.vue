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
      <ion-button fill="clear"
        ><ion-icon :icon="getIcon('create')" color="success"></ion-icon
      ></ion-button>
    </div>
  </ion-card>
</template>

<script>
export default {
  data() {
    return {
      my_title: "The first Noël",
      my_pub_date: "12 décember 2023",
      my_publisher: "M. Bertrand",
      my_txt: `
            The First Noel the Angels did say
Was to certain poor shepherds in fields as they lay
In fields where they lay keeping their sheep
On a cold winter's night that was so deep
Noel Noel Noel Noel
Born is the King of Israel!
They looked up and saw a star
Shining in the East beyond them far
And to the earth it gave great light
And so it continued both day and night
Noel Noel Noel Noel
Born is the King of Israel!
And by the light of that same star
Three Wise men came from country far
To seek for a King was their intent
And to follow the star wherever it went
Noel Noel Noel Noel
Born is the King of Israel!
This star drew nigh to the northwest
O'er Bethlehem it took it's rest
And there it did both Pause and stay
Right o'er the place where Jesus lay
Noel Noel Noel Noel
Born is the King of Israel!
Then let us all with one accord
Sing praises to our heavenly Lord
That hath made Heaven and earth of nought
And with his blood mankind hath bought
Noel Noel Noel Noel
Born is the King of Israel!
Noel Noel Noel Noel
Born is the King
Born is the King
Born is the King of Israel!`,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
ion-card {
  background-color: rgb(255, 250, 210);
}
</style>
  