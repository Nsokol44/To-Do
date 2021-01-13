<template>
  <form>
      <br>
      <input
        type="text"
        id="new-todo-input"
        name="new-todo-name"
        autocomplete="off"
        placeholder="Name of Task"
      />
      <br>
      <input
      type="text"
      id="new-todo-input"
      name="new-todo-description"
      autocomplete="off"
      placeholder="Description"
      />
      <br>
      <br>
      <p> Due Date: </p>
      <input
      type="date"
      id="new-todo-date"
      autocomplete="off"
      placeholder="Due Date"
      />
      <br>
      <br>
      <p> Time Due: </p>
      <input
      type="time"
      id="new-todo-time"
      autocomplete="off"
      placeholder="Time Due"
      />
      <br>
      <br>
      <input
      type="input"
      id="new-todo-input"
      autocomplete="off"
      placeholder="Hashtags"
      />
      <br>
      <br>
      <v-btn rounded class="success" type="submit">
        Add
      </v-btn>
    </form>
</template>

<script>
  export default {};
</script>
