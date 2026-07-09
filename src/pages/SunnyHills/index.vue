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
        <p>微熱生活</p>
      </div>
      <div class="content-box">
        <img
          class="contentimg"
          src="@/assets/SunnyHills/imgi_7_index250822161204045.jpg"
          alt=""
        />
        <p>陽光美點</p>
      </div>
      <div class="content-box">
        <img
          class="contentimg"
          src="@/assets/SunnyHills/imgi_8_index210709083630335.png"
          alt=""
        />
        <p>陽光計畫</p>
      </div>
    </div>
    <div class="Footer">
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.other {
  text-align: center;
}
.content-box {
  text-align: center;
  font-size: 28px;
  color: #595353;
  .contentimg {
    margin: 30px 0;
  }
  > img {
    width: 100%;
  }
}
.Footer {
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  color: #827e7d;
}
@media (min-width: 768px) {
  .other {
    display: none;
  }

  .Main-content {
    display: flex;
    gap: 3px;
    flex-direction: row;
    .content-box {
      font-size: 19px;
      // padding-left: 10px;
      margin-top: 2rem;
      color: black;
      text-align: left;
      display: flex;
      flex-direction: column-reverse;
      .contentimg {
        margin: 0;
      }
    }
  }
}
</style>
