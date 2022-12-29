<template>
    <ion-header >
      <ion-toolbar class="no_border" mode="md">
        <ion-segment value="home" mode="md">
          <ion-segment-button value="Home" mode="md" @click="goToHome" class="active" exact>
            Home
          </ion-segment-button>
          <ion-segment-button value="Event" mode="md" @click="goToEvent" class="active" exact>
            Event
          </ion-segment-button>
          <ion-segment-button value="Attendances" mode="md" @click="goToAttendances" class="active" exact>
            Attendances
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
      </ion-header>
</template>
<script>
export default {
  data() {
    
  },
  methods:{
    goToEvent() {
        this.$router.push('/events')
  },
    goToHome() {
        this.$router.push('/')
  },
    goToAttendances() {
        this.$router.push('/Attendances')
  },
},
}
</script>

<style scoped>
ion-header{
  background: white;
}
</style>
