<template>
  <v-card width="100%">
    <v-row>
      <v-card-title> {{ name }} </v-card-title> <v-spacer />
      <v-card-title> 2 </v-card-title>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OverviewListItem",
  components: {},
  props: {
    name: String,
  },

  data: () => ({}),
});
</script>


<style scoped>
.title {
  font-size: 24px;
  color: white;
}
</style>