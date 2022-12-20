<template>
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="success">
        <ion-icon slot="bottom" :icon="archive"></ion-icon>
        Present
      </ion-item-option>
    </ion-item-options>

    <ion-item>
        <ion-avatar slot="start">
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
      <ion-label>
        Chorist's Name
      </ion-label>
    </ion-item>

    <ion-item-options>
      <ion-item-option color="danger">
        <ion-icon slot="bottom" :icon="trash"></ion-icon>
        Absent
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</template>
