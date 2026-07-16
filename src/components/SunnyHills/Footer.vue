<script setup lang="ts">
import { ref, computed, watch } from "vue";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <hr />
  <p>© 2025 SunnyHills. 微熱山丘</p>
  <div @click="scrollToTop" class="pinned">
    <img src="@/assets/SunnyHills/imgi_9_bt_arrow_big_top.jpg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.pinned {
  width: 100%;
  background-color: #f7f7f7;
  padding: 20px;
}
</style>
