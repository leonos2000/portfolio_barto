<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-card class="ma-12 justify-center" max-width="960" elevation="20">
        <v-row no-gutters>
          <v-col cols="8">
            <v-card elevation="0" height="100%" class="pa-10">
              <div class="text-h3 grey--text">GET IN TOUCH</div>
              <div class="text-h7 ml-1 mt-2 grey--text">
                Feel free to ask me anything about my job.
              </div>
              <v-form v-model="valid" ref="form">
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Name"
                        required
                      />
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        autocapitalize="simon"
                        type="email"
                      />
                    </v-col>
                  </v-row>
                  <v-textarea
                    v-model="message"
                    label="Message"
                    :rules="messageRules"
                    required
                    scrollable
                  />
                  <v-row>
                    <v-spacer />
                    <v-btn color="black" text @click="sendMessage()"
                      >Send</v-btn
                    >
                  </v-row>
                </v-container>
              </v-form>
              <v-progress-linear
                :active="progress"
                absolute
                bottom
                indeterminate
                color="cyan"
              />
            </v-card>
          </v-col>

          <v-col cols="4" class="grey darken-3">
            <div class="mt-10 text-h5 text-center font-weight-bold white--text">
              CONTACT INFORMATION
            </div>
            <v-container fluid>
              <v-row justify="center">
                <v-avatar class="mt-6 outlined" size="50%">
                  <v-img src="../assets/avatar.jpg" />
                </v-avatar>
              </v-row>
            </v-container>
            <v-container fluid class="mt-4">
              <v-row v-for="(element, i) in contacts" :key="i" class="ml-6">
                <v-col class="pa-1 white--text">
                  <v-icon color="white">{{ element.icon }}</v-icon>
                  {{ element.text }}
                </v-col>
              </v-row>
            </v-container>
            <v-container fluid>
              <v-row justify="center" align="center" class="mt-6">
                <div class="caption white--text">CLICK TO KNOW ME BETTER</div>
                <v-row justify="center" align="center">
                  <v-col v-for="(icon, i) in icons" :key="i" cols="3">
                    <v-btn fab text>
                      <v-icon large color="white">{{ icon.icon }}</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <v-snackbar v-model="snackbar" :color="snackbarColor">
      {{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
          OK
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      valid: true,
      message: "",
      messageRules: [(v) => !!v || "Message is required"],
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      icons: [
        {
          icon: "mdi-linkedin",
          url: "www.google.com",
        },
        {
          icon: "mdi-github",
          url: "www.google.com",
        },
        {
          icon: "mdi-twitter",
          url: "www.google.com",
        },
      ],
      contacts: [
        {
          icon: "mdi-email-outline",
          text: "bartoszcz@gmail.comcom",
        },
        {
          icon: "mdi-map-marker",
          text: "Poland, Warsaw",
        },
      ],
      snackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
      progress: false,
    };
  },
  methods: {
    sendMessage() {
      if (!this.$refs.form.validate()) return;

      let data = new FormData();

      data.append("csrfmiddlewaretoken", this.$cookies.get("csrftoken"));
      data.append("name", this.name);
      data.append("email", this.email);
      data.append("message", this.message);

      this.progress = true;

      this.axios
        .post("/message", data)
        .then((res) => {
          if (res.data.status == "success") {
            this.snackbarColor = "success";
            this.snackbarMessage =
              "Your message is sent! I'll reply to you asap :)";
            this.snackbar = true;
          } else {
            this.snackbarColor = "error";
            this.snackbarMessage =
              "Something went wrong :( please try again later or send email directly";
            this.snackbar = true;
          }
        })
        .finally(() => {
          this.progress = false;
        });
    },
  },
};
</script>

<style scoped>
.v-avatar.outlined {
  border: 2px solid white;
}
</style>