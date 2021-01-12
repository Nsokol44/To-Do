<template>
  <v-card class="card mx-auto my-1" outlined>
    <v-row>
      <!-- TodoCard -->
      <v-card-actions>
        <v-icon
          large
          class="ma-6"
          :color="completedIconColor"
          @click="toggleCompleted()"
        >
          {{ completedIcon }}
        </v-icon>
      </v-card-actions>
      <v-card-title class="display-1"> {{ todoItem.name }} </v-card-title>
    </v-row>

    <!-- Hashtags & Expansion for additional information -->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-row justify="center">
            <v-col>
              <v-btn color="primary" @click="show = !show" small>
                Hashtags
              </v-btn>
            </v-col>

            <v-col>
              <v-tooltip v-model="show">
                <div v-for="tag in todoItem.hashtags" :key="tag">
                  <v-chip class="mx-1" color="accent" label small>
                    {{ tag }}
                  </v-chip>
                </div>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-expansion-panel-header>

        <!-- Panel Contents -->
        <v-expansion-panel-content>
          <!-- Task Description -->
          <v-row class="ma-0">
            <p>
              {{ todoItem.description }}
            </p>
          </v-row>

          <!-- Due Date -->
          <v-row justify="center">
            <v-card-title class="subtitle-1">Due: {{ todoItem.dueDate }}</v-card-title>
          </v-row>

          <!-- Timer Button -->
          <v-row class="ma-0" justify="space-around" align="center">
            <v-card-actions>
              <v-btn rounded :color="timerIconColor" @click="toggleTimer()"
                ><v-icon left> {{ timerIcon }} </v-icon> {{ timerText }}
              </v-btn>
            </v-card-actions>
          </v-row>

          <!-- Edit Button -->
          <v-chip class="secondary" @click="editItem()"> Edit </v-chip>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import "@mdi/font/css/materialdesignicons.css";
import { TodoItem } from "@/model/model.ts";
export default Vue.extend({
  props: {
    todoItem: { type: Object, required: true },
  },

  data: () => ({
    completedFlag: false,
    completedIcon: "mdi-check-circle-outline",
    completedIconColor: "secondary",
    timerFlag: false,
    timerIcon: "mdi-play-circle",
    timerIconColor: "success",
    timerText: "Start",
    show: false,
  }),

  methods: {
    toggleCompleted() {
      if (!this.completedFlag) {
        //Check as completed
        this.completedIcon = "mdi-check-decagram";
        this.completedIconColor = "success";
      } else {
        //Uncheck for not completed
        this.completedIcon = "mdi-check-circle-outline";
        this.completedIconColor = "secondary";
      }
      this.completedFlag = !this.completedFlag;
    },

    toggleTimer() {
      if (this.timerFlag) {
        //Start Timer, button changes to STOP
        this.timerIcon = "mdi-stop-circle";
        this.timerIconColor = "error";
        this.timerText = "Stop";
      } else {
        //Stop Timer, button changes to START
        this.timerIcon = "mdi-play-circle";
        this.timerIconColor = "success";
        this.timerText = "Start";
      }
      this.timerFlag = !this.timerFlag;
    },
  },
});
</script>

<style scoped>
.card {
  width: 420px;
}
</style>