<template>
  <v-card class="card mx-auto" max-width="422" outlined>
    <v-expansion-panels>
      <v-expansion-panel>
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

          Task Name

          <v-row class="mx-2 mr-3 my-1" justify="space-between" align="center">
            <div class="hashtags text-center mb-5">
              <v-chip color="accent" label small>
                <v-icon left small> mdi-label </v-icon>
                Tags
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
          <v-list-item three-line>
            <v-list-item-content>
              <v-row class="ma-1">
                <v-list-item-subtitle>
                  Task Description Aliquam sed lacus vitae nisl semper hendrerit
                  eu in metus. Donec luctus mauris at ligula luctus, at sodales
                  libero pellentesque. Donec augue urna, pretium in dignissim
                  nec, venenatis eget purus. Pellentesque tristique, eros nec
                  dignissim aliquam, eros eros consequat diam, a tincidunt urna
                  magna in ipsum. Duis vitae porta sapien. Sed maximus interdum
                  purus efficitur consectetur. Nulla mattis fermentum odio sit
                  amet pellentesque. Cras porta eget purus nec tincidunt.
                </v-list-item-subtitle>

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
                class="success"
                :color="timerIconColor"
                @click="toggleTimer()"
                ><v-icon left> {{ timerIcon }} </v-icon> {{ timerText }}
              </v-btn>
            </v-card-actions>
          </v-row>

          <v-chip
            class="ml-1 secondary"
            :input-value="active"
            filter
            filter-icon="mdi-pencil"
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

export default Vue.extend({
  data: () => ({
    completedIcon: "mdi-check-circle-outline",
    completedIconColor: "secondary",

    timerFlag: "false",
    timerIcon: "mdi-play-circle",
    timerIconColor: "green",
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
        this.timerIconColor = "warning";
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
.hashtags {
  max-width: 250px;
}
</style>