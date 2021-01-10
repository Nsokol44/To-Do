<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-list flat color ="primary" class="mx-auto my-12" max-width="374">
          <v-title class="title">To Do List</v-title>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item  >
          <TodoCardItem/>             
            </v-list-item>
            <v-list-item  >
          <TodoCardItem/>             
            </v-list-item>
            <v-list-item  >
          <TodoCardItem/>             
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TodoCardItem from "./TodoCardItem";

export default Vue.extend({
  name: "HelloWorld",
  components:{
    TodoCardItem,
  },

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
});
</script>


<style scoped>
.title {
  font-size: 24px;
  color: white
}
</style>