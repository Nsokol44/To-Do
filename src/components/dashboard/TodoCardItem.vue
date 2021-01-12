<template>
  <v-card class="card mx-auto my-1" max-width="422" outlined>
    <v-expansion-panels>
      <v-expansion-panel class="cardItem">
        <v-expansion-panel-header class="display-1">
          <v-card-actions>
            <v-icon
              large
              class="mr-2"
              :color="completedIconColor"
              @click="completed()"
            >
              {{ completedIcon }}
            </v-icon>
          </v-card-actions>

          {{todoItem.name}}

          <v-row class="mx-2 mr-3 my-1" justify="space-between" align="center">
            <div class="hashtags text-center mb-5">
              <v-chip color="accent" label small>
                <v-icon left small> mdi-label </v-icon>
                {{todoItem.hashtags[0]}}
              </v-chip>

              <v-chip color="accent" label small>
                <v-icon left small> mdi-label </v-icon>
                Tags
              </v-chip>

              <v-chip color="accent" label small>
                <v-icon left small> mdi-label </v-icon>
                Tags
              </v-chip>
            </div>
          </v-row>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-list-item>
            <v-list-item-content>
              <v-row class="ma-1">
                <p>
                  Task Description Aliquam sed lacus vitae nisl semper hendrerit
                  eu in metus. Donec luctus mauris at ligula luctus, at sodales
                  libero pellentesque.
                </p>

                <v-list-item-title class="title my-2 d"
                  >Due in: (timeLeft)</v-list-item-title
                >
              </v-row>
            </v-list-item-content>
          </v-list-item>

          <v-row class="ma-0" justify="space-around" align="center">
            <v-card-actions>
              <v-btn
                rounded
                :color="timerIconColor"
                @click="toggleTimer()"
                ><v-icon left> {{ timerIcon }} </v-icon> {{ timerText }}
              </v-btn>
            </v-card-actions>
          </v-row>

          <v-chip
            class="secondary"
            @click="editItem()"
          >
            Edit
          </v-chip>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import "@mdi/font/css/materialdesignicons.css";
import {TodoItem} from "@/model/model.ts"
export default Vue.extend({

  props:{
    todoItem: {type: Object,
    required: true}
  },

  data: () => ({
    completedIcon: "mdi-check-circle-outline",
    completedIconColor: "secondary",

    timerFlag: false,
    timerIcon: "mdi-play-circle",
    timerIconColor: "success",
    timerText: "Start",
  }),

  methods: {
    completed() {
      this.completedIcon = "mdi-check-decagram";
      this.completedIconColor = "success";
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
</style>