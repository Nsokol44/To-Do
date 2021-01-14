<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-list flat color="primary" class="mx-auto my-12" max-width="374">
          <v-title class="title">To Do List</v-title>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="item in todoList" :key="item">
              <TodoCardItem :todoItem="item" />
            </v-list-item>
          </v-list-item-group>
        </v-list>


        <v-card class="card mx-auto my-1 cardItem elevation=4" max-width="422" outlined color="#ee44aa">
          <v-card-title color="#fff!important"> Got More To Do? </v-card-title>
          <v-card-actions>
            <v-btn
            text
            rounded
            color="#fff!important"
            @click="reveal = true"
            >
            Add Another Item
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
          >
          <v-card-text class="pb-0">
            <p class="display-1 text--primary">
              <ToDoForm />
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
            text
            rounded
            color="teal accent-4"
            @click="reveal = false"
            >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>


      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TodoCardItem from "./TodoCardItem.vue";
import { mapGetters } from "vuex";
import ToDoForm from "./ToDoForm.vue";
export default Vue.extend({
  name: "HelloWorld",
  components: {
    TodoCardItem,
    ToDoForm,
  },
  computed: {
    // map `this.todoList` to `this.$store.getters.todoItems`
    ...mapGetters({
      todoList: "userData/todoItems"
    })
  },
  data: () => ({
    reveal: false,
  })
});
</script>

<style scoped>
.title {
  font-size: 24px;
  color: white;
}
</style>
