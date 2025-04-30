<template>
  <div>
    <h1>Мои книги</h1>

    <BookForm @add-book="addBook" />

    <input
      v-model="searchQuery"
      @input="fetchBooks"
      placeholder="Найти книгу"
    />

    <ul>
      <li v-for="book in books" :key="book.key">
        <strong>{{ book.title }}</strong> —
        {{ book.author_name?.join(", ") || "Неизвестный автор" }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import BookForm from "../components/BookForm.vue";

const books = ref([]);
const searchQuery = ref("");

// Функция для поиска книг
const fetchBooks = async () => {
  if (!searchQuery.value) {
    books.value = [];
    return;
  }

  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        searchQuery.value
      )}&limit=10`
    );
    books.value = response.data.docs;
  } catch (error) {
    console.error("Ошибка загрузки книг:", error);
  }
};

// Добавление книги вручную
const addBook = (newBook) => {
  books.value.unshift(newBook);
};
</script>

<style scoped>
input {
  padding: 5px;
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #ccc;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 5px 0;
}
</style>
