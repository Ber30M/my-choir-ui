<template>
    <ion-header >
      <ion-toolbar class="no_border" mode="md">
        <ion-segment value="/home" mode="md" @ionChange="e=>navigate(e)">
          <ion-segment-button value="/home">
            Home
          </ion-segment-button>
          <ion-segment-button value="/events">
            Event
          </ion-segment-button>
          <ion-segment-button value="/attendances">
            Attendances
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
      </ion-header>
</template>
<script>
export default {
  data() {
    return{

    }
  },
  methods:{
    navigate(e){
      this.$router.push(e.target.value);
      console.log(e.target.value);
    }
  }
}
</script>

<style scoped>
ion-header{
  background: white;
}
</style>
