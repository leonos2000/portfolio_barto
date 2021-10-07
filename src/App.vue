<template>
  <v-app>
    <!-- APPBAR -->
    <v-app-bar app clipped-left>
      <v-toolbar-title class="toolbar-home" @click="goToPage('/')"
        >Bartosz Czarnecki</v-toolbar-title
      >
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(btn, i) in menuButtons"
          :key="i"
          class="pa-2"
          text
          @click="btn.action()"
        >
          {{ btn.text }}
          <v-icon v-show="btn.icon">{{ btn.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">mdi-menu</v-icon>
          </template>
          <v-list>
            <v-list-item v-for="(btn, i) in menuButtons" :key="i">
              <v-btn text width="100%" @click="btn.action()">
                {{ btn.text }}
                <v-icon v-show="btn.icon">{{ btn.icon }}</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app color="grey darken-3" dark no-gutters clipped-left>
      <v-container>
        <v-row justify="center" class="grey--text"
          >© 2021 Bartosz Czarnecki</v-row
        >
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

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
            this.goToPage("/portfolio/otodom");
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
    };
  },

  methods: {
    goToPage(page) {
      if (this.$route.path == page) return;
      this.$vuetify.goTo(0, { duration: 0 }).then(() => {
        this.$router.push(page);
      });
    },
  },
};
</script>

<style>
html,
body {
  overflow-x: hidden;
}

.toolbar-home {
  cursor: pointer;
}
</style>