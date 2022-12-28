<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>HOME</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <lyrics
      :my_title="my_title"
      :my_pub_date="my_pub_date"
      :my_publisher="my_publisher"
      :my_txt="my_txt"
      ></lyrics>


      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button
        @click="txtChange"
        >
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
      my_title: "The first Noël",
      my_pub_date: "12 décember 2023",
      my_publisher: "M. Bertrand",
      my_txt: `The First Noel the Angels did say
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
    }
  },
  components: {
    choristComponet,
    lyrics,
  },
  methods: {
    txtChange() {
      this.my_txt = prompt("andika titre nshasha ngaha");
    },
  },
};
</script>
<style scoped>
ion-fab{
  position: fixed;
}
</style>
