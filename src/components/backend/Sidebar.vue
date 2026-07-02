<script setup lang="ts">
import { useUserStore } from "@/store/userStore";

const userStore = useUserStore();
</script>

<template>
  <nav class="nav flex-column">
    <li v-for="menu in userStore.visibleMenus" :key="menu.id" class="nav-item">
      <router-link class="nav-link" :to="menu.path">
        {{ menu.name }}
      </router-link>
    </li>
  </nav>
</template>

<style lang="scss" scoped></style>
