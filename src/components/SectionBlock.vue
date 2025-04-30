<template>
  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      <template v-if="isLoading">
        <div
          v-for="n in 10"
          :key="n"
          class="animate-pulse h-60 bg-gray-300 rounded-lg"
        />
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
          class="w-full h-60 object-cover"
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
