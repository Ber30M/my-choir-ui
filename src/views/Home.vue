<template>
  <ion-page>

    <ion-searchbar show-clear-button="focus" value="Show on Focus" mode="ios"></ion-searchbar>
    
    <ion-content class="ion-padding">
      <lyrics
        :my_title="my_title"
        :my_pub_date="my_pub_date"
        :my_publisher="my_publisher"
        :my_txt="my_txt"></lyrics>
      <lyrics
        :my_title="my_title"
        :my_pub_date="my_pub_date"
        :my_publisher="my_publisher"
        :my_txt="my_txt"
        ></lyrics>

      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button @click="txtChange">
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

Noel Noel Noel Noel
Born is the King of Israel!
This star drew nigh to the northwest
O'er Bethlehem it took it's rest
And there it did both Pause and stay
Right o'er the place where Jesus lay

Born is the King of Israel!`,
    };
  },
  components: {
    choristComponet,
    lyrics,
  },
  methods: {
    txtChange() {
      console.log("andika titre nshasha ngaha");
    },
    goToEvent() {
        this.$router.push('/events')
    }
  },
};
</script>
<style scoped>
ion-fab {
  position: fixed;
}
a{
  color:rgb(4, 29, 12);
  text-decoration: none;
}

</style>
