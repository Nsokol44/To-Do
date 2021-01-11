<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-list flat color="primary" class="mx-auto my-12" max-width="374">
          <v-title class="title">To Do List</v-title>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="item in todoList" :key="item">
         
              <TodoCardItem :todoItem="item"/>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TodoCardItem from "./TodoCardItem.vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  name: "HelloWorld",
  components: {
    TodoCardItem,
  },
 computed: {
    // map `this.todoList` to `this.$store.getters.todoItems`
    ...mapGetters({
      todoList: "userData/todoItems"
    })
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