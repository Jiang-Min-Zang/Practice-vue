<script setup lang="ts">
import { ref, computed, watch } from "vue";
import Navbar from "@/components/SunnyHills/Navbar.vue";
import Carousel from "@/components/SunnyHills/Carousel.vue";
import Footer from "@/components/SunnyHills/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <div class="other">
      <router-link to="/" class="btn btn-outline-primary">回導覽列</router-link>
    </div>
    <div class="navbar">
      <Navbar />
    </div>
    <div class="carousel">
      <Carousel />
    </div>
    <div class="Main-content">
      <div class="content-box">
        <img
          class="contentimg"
          src="@/assets/SunnyHills/imgi_6_index210709083552490.png"
          alt=""
        />
        <h1>微熱生活</h1>
      </div>
      <div class="content-box">
        <img
          class="contentimg"
          src="@/assets/SunnyHills/imgi_7_index250822161204045.jpg"
          alt=""
        />
        <h1>陽光美點</h1>
      </div>
      <div class="content-box">
        <img
          class="contentimg"
          src="@/assets/SunnyHills/imgi_8_index210709083630335.png"
          alt=""
        />
        <h1>陽光計畫</h1>
      </div>
    </div>
    <div class="">
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-box {
  .contentimg {
    margin: 20px 0;
  }
  > img {
    width: 100%;
  }
}

@media (min-width: 768px) {
  // .carousel {
  //   width: 100vw;
  // }
}
</style>
