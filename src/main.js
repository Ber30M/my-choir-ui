import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonicVue, IonRouterOutlet, IonFab,IonFabButton, IonIcon, IonSearchbar, IonSegment, IonSegmentButton, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonButton, IonCard, IonItem, IonAvatar, IonItemOption, IonItemOptions, IonLabel, IonItemSliding, IonButtons, IonImg, IonList, IonModal
} from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css'
import { DefineComponent } from 'vue';

import * as allIcons from "ionicons/icons";


const app = createApp(App).use(IonicVue).use(router).use(store);

app.component("IonRouterOutlet", IonRouterOutlet)
app.component("IonApp", IonApp)
app.component("IonPage", IonPage)
app.component("IonHeader", IonHeader)
app.component("IonToolbar", IonToolbar)
app.component("IonTitle", IonTitle)
app.component("IonContent", IonContent)
app.component("IonFab", IonFab)
app.component("IonFabButton", IonFabButton)
app.component("IonIcon", IonIcon)
app.component("IonSegment", IonSegment)
app.component("IonSearchbar", IonSearchbar)
app.component("IonSegmentButton", IonSegmentButton)
app.component("IonItem", IonItem)
app.component("IonCard", IonCard)
app.component("IonButton", IonButton)
app.component("IonCardContent", IonCardContent)
app.component("IonCardHeader", IonCardHeader)
app.component("IonCardSubtitle", IonCardSubtitle)
app.component("IonCardTitle", IonCardTitle)
app.component("IonAvatar", IonAvatar)
app.component("IonItemOption", IonItemOption)
app.component("IonItemOptions", IonItemOptions)
app.component("IonLabel", IonLabel)
app.component("IonItemSliding", IonItemSliding)
app.component("IonButtons", IonButtons)
app.component("IonImg", IonImg)
app.component("IonList", IonList)
app.component("IonModal", IonModal)

app.mount('#app');

app.mixin({
  methods: {
    getIcon(name) {
      return allIcons[name];
    }
  }
})