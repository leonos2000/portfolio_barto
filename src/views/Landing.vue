<template>
  <v-container 
    fluid
    class="ma-0 pa-0"
  >
    <v-img
      src="../assets/mountain.jpg"
      max-height="800"
    ></v-img>

    <v-row class="ma-4 pt-16 pb-16" justify="center">
      <v-col
        cols="12"
        md="3"
        v-for="(card, i) in cards"
        :key="i"
      >
        <v-card class="pa-2" height="100%">
          <v-row justify="center" class="ma-4">
            <v-icon x-large>{{ card.icon }}</v-icon>
          </v-row>
          <v-card-title style="word-break: break-word" class="justify-center text-center">{{ card.title }}</v-card-title>
          <v-card-text class="text-center">
            {{ card.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Landing",

  data() {
    return {
      cards: [
        {
          title: "Data science",
          text: "Imma data mad scientisto",
          icon: "mdi-chemical-weapon",
        },        
        {
          title: "Data analitycs",
          text: "I like big data",
          icon: "mdi-database",
        },        
        {
          title: "Alcoholic",
          text: "I like dring a lot of alcholol with my pussies",
          icon: "mdi-glass-cocktail",
        },
      ]
    }
  }
};
</script>

<style scoped>
/* .ekahau-bg {
  background: url("../assets/landing/ekahau-background.png");
} */
</style>