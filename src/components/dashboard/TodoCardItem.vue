<template>
  <v-card class="card mx-auto my-1" outlined>
    <v-row class="my-0" align-content="center">
      <!-- TodoCard -->
      <v-col cols="2">
        <v-card-text>
          <v-icon
            large
            class="ml-3"
            :color="completedIconColor"
            @click="toggleCompleted()"
          >
            {{ completedIcon }}
          </v-icon>
        </v-card-text>
      </v-col>
      <v-col cols="9">
        <v-text-field
          class="mt-1"
          solo
          flat
          :background-color="fieldBG"
          v-model="todoItem.name"
          :readonly="fieldReadonly"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Hashtags & Expansion for additional information -->
    <v-expansion-panels>
      <v-expansion-panel :readonly="panelReadonly" @click="openPanel()">
        <v-expansion-panel-header>
          <v-row justify="center">
            <v-col>
              <v-btn color="primary" @click="openHash()" small>
                Hashtags
              </v-btn>
            </v-col>

            <v-col>
              <v-tooltip v-model="showHashtags">
                <div v-for="tag in todoItem.hashtags" :key="tag">
                  <v-chip
                    class="ma-1"
                    color="accent"
                    label
                    small
                    :close="closeHashtag"
                  >
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
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                solo
                flat
                auto-grow
                row-height="1"
                :background-color="fieldBG"
                :value="todoItem.description"
                :readonly="fieldReadonly"
              ></v-textarea>
            </v-col>
          </v-row>

          <!-- Due Date -->
          <v-row justify="center">
            <v-card-title class="subtitle-1"
              >Due: {{ todoItem.dueDate }}</v-card-title
            >
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
          <v-chip class="secondary" @click="toggleEditing()">
            {{ editBtnText }}
          </v-chip>
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
    showHashtags: false,
    fieldReadonly: true,
    editBtnText: "Edit",
    fieldBG: "white",
    panelReadonly: false,
    closeHashtag: false,
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
      if (!this.timerFlag) {
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

    toggleEditing() {
      if (this.fieldReadonly) {
        //Open for Editing
        this.editBtnText = "Finish";
        this.fieldBG = "pink lighten-5";
        this.closeHashtag = true;
      } else {
        //Closed for Edit
        this.editBtnText = "Edit";
        this.fieldBG = "white";
        this.closeHashtag = false;
      }
      this.fieldReadonly = !this.fieldReadonly;
    },

    openHash() {
      this.showHashtags = !this.showHashtags;
      if (!this.panelReadonly) {
        this.panelReadonly = true;
      }
    },

    openPanel() {
      this.panelReadonly = false;
    },
  },
});
</script>

<style scoped>
.card {
  width: 420px;
}
</style>