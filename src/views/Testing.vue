<template>
  <div class="about">
    <v-container>
      <v-row class="text-center">
        <v-spacer />
        <cols cols="12">
          <h1>Test your components here:</h1>
          <h2>Don't commit this file</h2>
          <div id="Add-components-below">
            <TodoCardItem />
            <List />
            <HelloWorld />
          </div>
        </cols>
        <v-spacer />
      </v-row>
    </v-container>
  </div>
</template>
<script>
// @ is an alias to /src
import List from "@/components/dashboard/TodoList.vue";
import TodoCardItem from "@/components/dashboard/TodoCardItem.vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    List,
    TodoCardItem,
    HelloWorld,
  },
    props:{},
  data: () => ({}),

  methods: () => ({}),
};
</script>

<style scoped>

</style>
