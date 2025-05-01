<template>
  <main class="home-container">
    <SectionBlock title="Топ 10" :subject="'fiction'" />
    <SectionBlock title="Новинки" :subject="'new'" />
    <SectionBlock title="Программирование" :subject="'programming'" />
    <SectionBlock title="Сказки для детей" :subject="'children'" />
  </main>
</template>

<script setup>
import SectionBlock from "../components/SectionBlock.vue";
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>
