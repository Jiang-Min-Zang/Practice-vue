<template>
  <div class="card" :class="`border-${theme}`">
    <div class="card-header">
      <h3>{{ title }}</h3>
    </div>

    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props 負責定義資料與設定
defineProps<{
  title: string;
  theme: "primary" | "danger" | "success";
}>();
</script>
