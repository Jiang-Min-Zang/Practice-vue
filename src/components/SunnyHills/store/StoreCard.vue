<script setup lang="ts">
import { ref, computed, watch } from "vue";
</script>

<template>
  <div class="store-card">
    <div class="header-banner">
      <div class="card-header">
        <h2>
          <slot name="title">預設門市名稱</slot>
        </h2>
      </div>
      <div class="card-banner">
        <slot name="banner">
          <div class="placeholder-img">預設圖片位置</div>
        </slot>
      </div>
    </div>

    <div class="card-info">
      <slot name="info">
        <p>還沒塞</p>
      </slot>
    </div>
    <div class="card-slogan" v-if="$slots.slogan">
      <slot name="slogan"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.store-card {
  padding: 20px 0;
  .header-banner {
    display: flex;
    flex-direction: column-reverse;
  }
  .card-header {
    padding: 10px;
  }
  .card-info {
    padding: 10px;
  }
}

@media (min-width: 768px) {
  .store-card {
    .header-banner {
      // display: flex;
      flex-direction: column;
    }
  }
}
</style>
