<template>
  <form>
      <br>
      <v-text-field dense solo
        type="text"
        id="new-todo-input"
        name="new-todo-name"
        autocomplete="off"
        placeholder="Name of Task"
        hint="Type the name of your task here."
      ></v-text-field>

      <v-text-field dense solo
      type="text"
      id="new-todo-input"
      name="new-todo-description"
      autocomplete="off"
      placeholder="Description"
      hint="Type what you need to do to complete your task here."
      ></v-text-field>
      <br>
      <p> Due Date: </p>
      <v-date-picker
      v-model="date"
      :allowed-dates="allowedDates"
      class="mt-4"
      min="2021-01-01"
      max="2021-12-31"
    ></v-date-picker>
      <br>
      <br>
      <v-combobox
    v-model="chips"
    :items="items"
    chips
    clearable
    label="Your favorite hobbies"
    multiple
    prepend-icon="mdi-filter-variant"
    solo
  >
  <template v-slot:selection="{ attrs, item, select, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item }}</strong>&nbsp;
      </v-chip>
    </template>
</v-combobox>

      <br>
      <v-btn rounded class="success" type="submit">
        Add
      </v-btn>
    </form>
</template>

<script lang="ts">
export default {
    data: () => ({
      date: '2021-01-01',
    }),

    methods: {

    },
  }
</script>
