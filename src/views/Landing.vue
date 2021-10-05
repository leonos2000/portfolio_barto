<template>
  <v-container 
    fluid
    class="ma-0 pa-0"
  >
    <v-parallax
      src="../assets/mountain.jpg"
      max-height="800"
    >
      <v-container
        fill-height
        fluid
      >
        <v-row
          justify="center"
          align="center"
          no-gutters
        >
          <v-col align="right">
            <div
              class="text-h3 white--text font-weight-bold"
            >
              Bartosz Czarnecki
            </div>
            <div class="text-h5 white--text font-weight-light">
              Data Science | Data Analytics
            </div>
          </v-col>
          <v-col class="ma-12">
            <v-avatar 
              class="outlined"
              size="300"
            >
              <v-img
                src="../assets/avatar.jpg"
              >
              </v-img>
            </v-avatar>

          </v-col>
        </v-row>
      </v-container>
    </v-parallax>

    <v-row class="ma-4 pt-16 pb-16" justify="center">
      <v-col
        cols="12"
        md="3"
        v-for="(card, i) in cards"
        :key="i"
      >
        <v-card height="100%" elevation="0">
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

    <v-parallax
      src="../assets/analytics.jpg"
      max-height="800"
    >
      <v-container
        fill-height
        fluid
      >
        <v-row
          justify="center"
          align="center"
          no-gutters
        >
          <v-col
            v-for="(project, i) in projectsCards"
            :key="i"
            cols="5"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="ma-6"
                @click="$router.push(project.url)"
              >
                <v-img
                  height="250"
                  :src="project.image"
                >
                  <v-container
                    fluid
                    fill-height
                    class="prjImg pa-0"
                    :class="{ 'prjImgHover': hover }"
                  >
                    <v-row
                      justify="center"
                      align="center"
                    >
                      <v-card-title
                        class="text-center white--text prjText text-h3 pb-0"
                      >
                        {{ project.title }}
                      </v-card-title>
                      <v-card-text
                        class="text-center white--text prjText"
                      >
                        {{ project.text }}
                      </v-card-text>
                    </v-row>
                  </v-container>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>

  </v-container>
</template>

<script>

export default {
  name: "Landing",

  data() {
    return {
      cards: [
        {
          title: "Collect",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus pulvinar risus, quis fermentum erat eleifend in. Donec tortor arcu, ultricies quis justo a, fermentum lacinia purus. Nullam pretium nunc.",
          icon: "mdi-chemical-weapon",
        },        
        {
          title: "Process",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus pulvinar risus, quis fermentum erat eleifend in. Donec tortor arcu, ultricies quis justo a, fermentum lacinia purus. Nullam pretium nunc.",
          icon: "mdi-database",
        },        
        {
          title: "Visualize",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus pulvinar risus, quis fermentum erat eleifend in. Donec tortor arcu, ultricies quis justo a, fermentum lacinia purus. Nullam pretium nunc.",
          icon: "mdi-glass-cocktail",
        },
      ],
      projectsCards: [
        {
          title: "Otomoto",
          text: "Otomoto data visualisation",
          image: require("../assets/otodom-thumbnail-landing.jpg"),
          url: "/portfolio/otomoto",
        },
        {
          title: "Otodom",
          text: "Otodom data visualisation",
          image: require("../assets/buildings.jpg"),
          url: "/portfolio/otodom",
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

.v-avatar.outlined {
  border: 2px solid white;
}
.prjImg {
  transition: backdrop-filter .2s ease-in-out;
}
.prjImgHover {
  backdrop-filter: blur(5px) brightness(70%);
}
</style>