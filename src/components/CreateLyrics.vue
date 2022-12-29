<template>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">Nom de l'employee</ion-label>
        <ion-input
          type="text"
          @ionChange="e => nom=e.target.value"/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Prenom de l'employee</ion-label>
        <ion-input
          type="text"
          @ionChange="e => prenom=e.target.value"/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Numero matricule</ion-label>
        <ion-input
          type="text"
          @ionChange="e => matricule=e.target.value"/>
      </ion-item>
      <ion-list>
        <ion-item>
          <ion-select placeholder="Selectionnez le niveau d'instruction" :multiple="false">
            <ion-select-option
              v-for="niveau in niveaux"
              :value="niveau.nom">
              {{ niveau.nom }}
            </ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
      <ion-button
        fill=clear
        @click="ajouterNiveau">
        Ajouter niveau
      </ion-button>
      <ion-button expand="block" @click="ajouter">
        Ajouter
      </ion-button>
    </ion-content>
</template>

<script>
import FormNiveau from "../components/niveau"
export default {
  components:{ FormNiveau },
  data(){
    return {
      nom:"",
      prenom:"",
      matricule:"",
      niveaux: this.$store.state.niveaux,
      niveaux_shown:false,
    }
  },
  methods:{
    ajouter(){

    },
    ajouterNiveau(){
      this.niveaux_shown = true
    }
  }
}
</script>