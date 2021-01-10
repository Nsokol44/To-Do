<template>
  <v-card class="card mx-auto" max-width="422" outlined>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="display-1">
          <v-card-actions>
            <v-icon large class="mr-2" @click="performAction()">
              mdi-check-circle-outline
            </v-icon>
          </v-card-actions>
          Task Name
          <v-row class="mx-2 mr-3 my-1" justify="space-between" align="center">
      <div class="hashtags text-center mb-5">
        <v-chip class="ma-1" color="accent" label>
          <v-icon left small> mdi-label </v-icon>
          Tags
        </v-chip>

        <v-chip class="ma-1" color="accent" label>
          <v-icon left small> mdi-label </v-icon>
          Tags
        </v-chip>

        <v-chip class="ma-1" color="accent" label>
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

          <v-row class="mt-0" justify="space-around" align="center">
            <v-card-actions>
              <v-btn outlined rounded text class="success"
                ><v-icon left> mdi-play-circle </v-icon> Start
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn outlined rounded text class="red"
                ><v-icon left> mdi-stop-circle </v-icon> Stop
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
    active: false,
    mainButtonText: "completed",
    mainButtonColor: "primary",

    loading: true,
    times: ["5:30PM", "5:45PM", "6:01PM", "8:30PM"],
    selectedTime: "",
  }),

  methods: {
    performAction() {
      this.mainButtonText = "completed";
      this.mainButtonColor = "primary";
    },
    moveItem() {
      this.mainButtonText = "moving";
      this.mainButtonColor = "secondary";
    },
    editItem() {
      this.mainButtonText = "editing";
      this.mainButtonColor = "accent";
    },
    deleteItem() {
      this.mainButtonText = "deleted";
    },
  },
});
</script>

<style scoped>
.hashtags {
  max-width: 250px;
}
</style>