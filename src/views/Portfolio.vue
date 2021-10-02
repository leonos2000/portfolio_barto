<template>
  <v-container fluid>
    <v-navigation-drawer absolute permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> My projects </v-list-item-title>
          <v-list-item-subtitle> Data analytics </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-menu
          v-for="item in items"
          :key="item.title"
          :close-on-content-click="false"
          open-on-hover
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item link v-bind="attrs" v-on="on">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-card width="300">
            <v-img :src="item.image"></v-img>
            <v-card-title class="justify-center text-center">
              {{ item.hoverTitle }}
            </v-card-title>
            <v-card-text class="text-center">
              {{ item.hoverText }}
            </v-card-text>
          </v-card>
        </v-menu>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "App",
  mounted() {},

  data() {
    return {
      menuButtons: [
        {
          action: () => {
            this.goToPage("/");
          },
          text: "home",
        },
        {
          action: () => {
            this.goToPage("/portfolio");
          },
          text: "portfolio",
        },
        {
          action: () => {
            this.goToPage("/contact");
          },
          text: "contact",
        },
      ],
      items: [
        {
          title: "Otodom",
          icon: "mdi-home-city-outline",
          hoverTitle: "Otodom",
          hoverText: "Otodom opis",
          link: "/otodom",
          image: require("../assets/mountain.jpg"),
        },
        {
          title: "Otomoto",
          icon: "mdi-car",
          hoverTitle: "Otomoto",
          hoverText: "Otomoto opis",
          link: "/otomoto",
          image: require("../assets/mountain.jpg"),
        },
      ],
      right: null,
    };
  },
};
</script>