<template>
  <ion-item-sliding @ionDrag="e=>gupushinga(e)">
    <ion-item-options side="start">
      <ion-item-option color="success">
        <ion-icon></ion-icon>
        Present
      </ion-item-option>
    </ion-item-options>

    <ion-item>
        <ion-avatar>
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
      <ion-label>
        {chorist_name}
      </ion-label>
    </ion-item>
  </ion-item-sliding>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods:{
    gupushinga(e){
      console.log(e);
      e.target.gesture.destroy();
    }
  }
}
</script>