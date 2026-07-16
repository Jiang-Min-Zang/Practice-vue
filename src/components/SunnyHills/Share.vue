<script setup lang="ts">
import { ref, computed, watch } from "vue";
import cartSvg from "@/assets/SunnyHills/story/imgi_20_bt_shop.svg";
</script>

<template>
  <div class="noselect" id="share-container">
    <div id="share_buttons" tabindex="-1"></div>
    <div id="shopping_cart"></div>
  </div>
</template>

<style lang="scss" scoped>
#share-container {
  position: fixed;
  bottom: 112px;
  right: 0;
  z-index: 500;
}
#shopping_cart {
  position: absolute;
  right: 0;
  width: 60px;
  height: 52px;
  background-size: cover;
  background-image: url(../../assets/SunnyHills/story/imgi_20_bt_shop.svg);
}
</style>
