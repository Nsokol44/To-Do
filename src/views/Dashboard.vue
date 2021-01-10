<template>
  <div class="dashboard">
    <v-container>
      <v-row>
        <v-col lg="6" md="6" sm="12">
          <OverviewList />
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <List />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/dashboard/TodoList.vue";
import OverviewList from "@/components/dashboard/OverviewList.vue";
export default {
  name: "Home",
  components: {
    List,
    OverviewList,
  },
  props:{},
  data: () => ({}),

  methods: () => ({}),
};
</script>
