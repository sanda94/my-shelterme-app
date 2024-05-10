<template>
  <q-page class="">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
        >
          <q-toggle
            dense
            dark
            color="orange"
            v-model="autoplay"
            label="Auto Play"
          />
        </q-carousel-control>

        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>

    <!-- New Task Input Field and Button -->
    <div class="add-task">
      <input
        type="text"
        v-model="newTask"
        placeholder="Enter a new task"
        @keyup.enter="addTask"
      />
      <q-btn color="primary" @click="addTask">Add Task</q-btn>
    </div>

    <!-- Display added tasks -->
    <div class="task-list">
      <q-list highlight>
        <q-list-header>Tasks</q-list-header>
        <q-item v-for="(task, index) in tasks" :key="index">
          <q-item-main :label="task.name" />
          <q-item-side
            icon="check"
            color="green"
            @click="completeTask(index)"
          />
          <q-item-side
            icon="delete"
            color="negative"
            @click="deleteTask(index)"
          />
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
const autoplay = ref(false);
const newTask = ref("");
const tasks = ref([
  { name: "Wake up", completed: false },
  { name: "Brush teeth", completed: false },
  { name: "Shower", completed: false },
]);

function addTask() {
  // Implement logic to add the new task
  if (newTask.value.trim() !== "") {
    tasks.value.push({ name: newTask.value.trim(), completed: false });
    // Reset the new task input
    newTask.value = "";
  }
}

function completeTask(index) {
  // Implement logic to toggle the completion status of the task
  tasks.value[index].completed = !tasks.value[index].completed;
}

function deleteTask(index) {
  // Implement logic to delete the task
  tasks.value.splice(index, 1);
}
</script>

<style scoped>
.add-task {
  margin-top: 20px;
}

.add-task input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-task q-btn {
  margin-left: 8px;
}

.task-list {
  margin-top: 20px;
}
</style>
