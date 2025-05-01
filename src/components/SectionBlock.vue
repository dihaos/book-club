<template>
  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
    <div class="top-list">
      <template v-if="isLoading">
        <div v-for="n in 10" :key="n" class="skeleton-card" />
      </template>
      <div
        v-else
        v-for="book in books"
        :key="book.key"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          v-if="book.cover_id"
          :src="`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`"
          alt="cover"
          class="card-img"
        />
        <div class="p-2 text-sm">
          <p class="font-semibold line-clamp-2">{{ book.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const props = defineProps({
  title: String,
  subject: String,
});

const books = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://openlibrary.org/subjects/${props.subject}.json?limit=30`
    );
    const works = response.data.works || [];
    const shuffled = works.sort(() => 0.5 - Math.random());
    books.value = shuffled.slice(0, 10).map((book) => ({
      key: book.key,
      title: book.title,
      cover_id: book.cover_id,
    }));
  } catch (e) {
    console.error("Ошибка при загрузке книг:", e);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.top-list {
  display: flex;
  gap: 30px;
  overflow-x: auto;
}

.card-img {
  width: 200px;
  height: 300px;
}

.skeleton-card {
  width: 200px;
  height: 300px;
  border-radius: 8px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: pulse 1.5s infinite linear;
}

@keyframes pulse {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
