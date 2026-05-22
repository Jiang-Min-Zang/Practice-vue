<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { User } from "../types";
defineProps<{
  user: User | null;
}>();
</script>

<template>
  <div class="bar">
    <p>登入者:{{ user?.username }}</p>
    <slot name="action-button"></slot>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    margin-bottom: 0;
  }
}
</style>
