<template>
  <v-app-bar app color="primary" dark>
    <div class="mr-5">
      <v-toolbar-title>
        <v-icon>mdi-bookmark-check</v-icon> To-Dooly
      </v-toolbar-title>
    </div>

    <v-tabs class="text-center">
      <v-tab to="/">Dashboard</v-tab>
      <v-tab to="/testing">Testing</v-tab>
    </v-tabs>

    <v-avatar color="secondary" size="36"> <v-icon>mdi-tea</v-icon></v-avatar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavBar",

  data: () => ({


  }),

  methods: () => ({


  }),
});
</script>
