<template>
  <form @submit.prevent="submitBook">
    <input v-model="title" placeholder="Название книги" required />
    <input v-model="author" placeholder="Автор" required />
    <button type="submit">Добавить</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const title = ref("");
const author = ref("");
const emit = defineEmits(["add-book"]);

const submitBook = () => {
  if (!title.value || !author.value) return;

  emit("add-book", {
    id: Date.now(),
    title: title.value,
    author: author.value,
  });

  title.value = "";
  author.value = "";
};
</script>

<style scoped>
form {
  margin-bottom: 15px;
  display: flex;
  gap: 10px;
}

input {
  padding: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
