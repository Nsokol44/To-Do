<template>
  <v-card class="mb-5" max-width="422" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="display-1 mb-1">
          Task Name
        </v-list-item-title>

        <v-row>
            <v-list-item-subtitle>
                Task Description Aliquam sed lacus vitae nisl semper hendrerit eu in
                metus. Donec luctus mauris at ligula luctus, at sodales libero
                pellentesque. Donec augue urna, pretium in dignissim nec, venenatis
                eget purus. Pellentesque tristique, eros nec dignissim aliquam, eros
                eros consequat diam, a tincidunt urna magna in ipsum. Duis vitae porta
                sapien. Sed maximus interdum purus efficitur consectetur. Nulla mattis
                fermentum odio sit amet pellentesque. Cras porta eget purus nec
                tincidunt.
            </v-list-item-subtitle>

    
        </v-row>

        

        <div class="overline">Total Time Spent: (timeSpent)</div>
      </v-list-item-content>
    </v-list-item>
 

    <v-row v-if="active" class="mr-2 mt-0" justify="end" align="center">
      <v-chip
        class="ml-1 secondary"
        :input-value="active"
        filter
        filter-icon="mdi-cursor-move"
        @click="moveItem()"
      >
        Move
      </v-chip>

      <v-chip
        class="ml-1 secondary"
        :input-value="active"
        filter
        filter-icon="mdi-pencil"
        @click="editItem()"
      >
        Edit
      </v-chip>

      <v-chip
        class="ml-1 secondary"
        :input-value="active"
        filter
        filter-icon="mdi-delete"
        @click="deleteItem()"
      >
        Delete
      </v-chip>
    </v-row>
 

    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>
                Time Keeping
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row class="mt-0" justify="space-around" align="center">
                    <v-card-actions>
                        <v-btn outlined rounded text class="success"
                        ><v-icon left> mdi-clock-start </v-icon> Start
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn outlined rounded text class="red"
                        ><v-icon left> mdi-stop-circle </v-icon> Stop
                        </v-btn>
                    </v-card-actions>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-header>
                Edit Task
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row class="mr-2 mt-0" justify="space-around" align="center">
                    <v-chip
                        class="ml-1 secondary"
                        :input-value="active"
                        filter
                        filter-icon="mdi-cursor-move"
                        @click="moveItem()"
                    >
                        Move
                    </v-chip>

                    <v-chip
                        class="ml-1 secondary"
                        :input-value="active"
                        filter
                        filter-icon="mdi-pencil"
                        @click="editItem()"
                    >
                        Edit
                    </v-chip>

                    <v-chip
                        class="ml-1 secondary"
                        :input-value="active"
                        filter
                        filter-icon="mdi-delete"
                        @click="deleteItem()"
                    >
                        Delete
                    </v-chip>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
          <v-card-actions>
    <v-spacer/>
        <v-btn rounded :color="mainButtonColor" @click="performAction()">
          {{ mainButtonText }}
        </v-btn>
      </v-card-actions>
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
</style>