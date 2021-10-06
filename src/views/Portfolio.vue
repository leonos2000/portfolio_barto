<template>
  <v-container fluid>
    <v-navigation-drawer clipped app permanent>
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
            <v-list-item link v-bind="attrs" v-on="on" @click="changeProject(item.url)">
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
    

    <component :is="activeProject"/>

  </v-container>
</template>

<script>
import Otodom from '../components/Otodom.vue'
import Otomoto from '../components/Otomoto.vue'

export default {
  name: "App",
  mounted() {
    this.active = this.$route.params.prj
  },

  computed: {
    activeProject() {
      switch(this.active) {
        case 'otomoto':
          return Otomoto
        case 'otodom':
          return Otodom
        default:
          return Otodom
      }
    }
  },

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
          url: "otodom",
          image: require("../assets/buildings.jpg"),
        },
        {
          title: "Otomoto",
          icon: "mdi-car",
          hoverTitle: "Otomoto",
          hoverText: "Otomoto opis",
          url: "otomoto",
          image: require("../assets/cars.jpg"),
        },
      ],
      active: 'otodom',
    }
  },
  methods: {
    changeProject(project) {
      if (this.$route.params.prj != project) this.$router.push(`/portfolio/${project}`)
      this.active = project
    }
  }
};
</script>
