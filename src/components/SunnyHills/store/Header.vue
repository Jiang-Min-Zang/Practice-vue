<script setup lang="ts">
// import { ref, computed, watch } from "vue";
const emit = defineEmits<{
  (e: "change-region", index: number): void;
}>();
defineProps<{
  regions: Array<{ region: string; bannerImg: string }>;
  activeIndex: number;
}>();
</script>

<template>
  <div class="banner-box" v-if="regions[activeIndex]">
    <img
      :src="regions[activeIndex].bannerImg"
      :alt="regions[activeIndex].region"
    />
  </div>
  <div class="region-nav">
    <span
      v-for="(item, index) in regions"
      :key="item.region"
      :class="{ active: activeIndex === index }"
      @click="emit('change-region', index)"
    >
      {{ item.region }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.banner-box {
  > img {
    width: 100%;
    height: 100%;
  }
}
.region-nav {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: black;
  color: white;
}
</style>
