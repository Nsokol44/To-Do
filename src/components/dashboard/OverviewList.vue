<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-list flat color="secondary" class="mx-auto my-12" max-width="374">
          <v-title class="title">Overview List List</v-title>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item>
              
              <OverviewListItem name="Completed" />
            </v-list-item>
            <v-list-item>
              <OverviewListItem name="Today" />
            </v-list-item>
            <v-list-item>
              <OverviewListItem name="Soon" />
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import OverviewListItem from "./OverviewListItem.vue";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    OverviewListItem,
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