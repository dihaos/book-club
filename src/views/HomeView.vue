<template>
  <div class="bg-[#eeeeee] min-h-screen">
    <main class="p-6">
      <SectionBlock title="Топ 10" :subject="'fiction'" />
      <SectionBlock title="Новинки" :subject="'new'" />
      <SectionBlock title="Программирование" :subject="'programming'" />
      <SectionBlock title="Сказки для детей" :subject="'children'" />
    </main>
  </div>
</template>

<script setup>
import SectionBlock from "../components/SectionBlock.vue";
</script>
