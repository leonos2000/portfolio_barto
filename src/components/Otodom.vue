<template>
  <v-container class="pa-0">
    <v-img src="../assets/mountains.jpg" max-height="200">
      <v-container fill-height fluid>
        <v-row justify="center" align="center" no-gutters>
          <div class="text-h1 white--text">Otodom</div>
        </v-row>
      </v-container>
    </v-img>

    <v-row
      justify="center"
      align="center"
      no-gutters
      max-height="400"
      v-for="(item, i) in items"
      :key="i"
    >
      <v-col cols="6" lg="5" class="pa-8" :order="i % 2 ? 1 : 12">
        <v-img v-if="item.img != null" :src="item.img" max-height="300"/>
        <iframe v-else class="prj" :src="item.iframeUrl" width="100%" />
      </v-col>
      <v-col cols="6" lg="5" class="pa-2" :order="i % 2 ? 12 : 1">
        <div class="text-h3 text-center mb-4">
          {{ item.header }}
        </div>
        <div v-for="(text, j) in item.texts" :key="j" class="text-h6 mb-4">
          {{ text }}
        </div>
      </v-col>
    </v-row>

    <iframe class="prj" src="http://192.168.10.163:8050" width="100%" />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          header: "Project",
          texts: [
            'He has been interested in the real estate market in Warsaw for some time. For this reason, I decided to conduct an analysis of this sector in my spare time. I found that I will download the data from the most popular website dealing in the sale and rental of real estate in Poland (otodom).',
          ],
          img: require("../assets/otodom1.jpg"),
        },
        {
          header: "Getting data",
          texts: [
            'I was primarily interested in the key information that characterized a given flat and had a real impact on the price of the flat, such as the flat area, location, and equipment of the flat.',
            'To retrieve information, I have written a program that opens every page with an advertisement about an apartment and downloads its content. Using the "beautifulsoup" library, I search for information that interests me.',
          ],
          img: require("../assets/otodom3.jpg"),
        },
        {
          header: "Data cleaning",
          texts: [
            'A lot of numerical data has been added with units such as "PLN" or "m2". I remove them so that later it can be easier to analyze the numerical data.',
            'Since the data is entered by ordinary users, sometimes there may be data that deviates from the norm. It can be text in the field where I expect numbers or data very different from reality. For this reason, I clear the data from all incorrect data.',
          ],
          img: require("../assets/otodom2.jpg"),
        },
        {
          header: "Flats localization",
          texts: [
            'To get the location of the apartment, I download data about its location. It is usually a City, district, street, building number. Using the "GeoPy" library, I generate the latitude and longitude from the downloaded location, thanks to which I will be able to apply the data about the location of the apartments on the map.',
          ],
          img: require("../assets/otodom3.jpg"),
        },
        {
          header: "Database",
          texts: [
            'The data is then loaded into the "PostgreSQL" database where it stores the retrieved information. It is a very convenient solution because SQL queries enable a very simple selection of information that interests us.',
          ],
          img: require("../assets/otodom3.jpg"),
        },
        {
          header: "Model Regression",
          texts: [
            "I found that many people would like to, for example, check the estimated price of an apartment that is not currently on the market. Therefore, I used regression to be able to check the hypothetical price of such an apartment. The model works well when looking for standard flats. The less and less real the data is, the model shows less and less accurate data until it shows abstract data.",
          ],
          img: require("../assets/otodom3.jpg"),
        },
        {
          header: 'Visualization with Dash',
          texts: [
            'I considered many different options for visualizing the downloaded data, such as classic graphs from the "plotly" library as well as visualizations in Microsoft Power BI. However, I found that interactive visualizations using "Dash" would be the best. They provide the user with the most possibilities, such as manual data browsing and parameter variables that are used to select the data. Moreover, Dash offers extensive possibilities of styling the displayed data using CSS. We can create our own style as well as load an existing one.',
            "This is one of the visualizations that show us apartments for rent and for sale in the ranges we have chosen. The data we use to select a property is the purchase price",
          ],
          img: require("../assets/otodom3.jpg"),
        },
      ],
    };
  },
};
</script>


<style scoped>
.prj {
  height: 100vh;
  border: hidden;
}
</style>