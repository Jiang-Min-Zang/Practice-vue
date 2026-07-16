<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useBrandData } from "@/hooks/sunnyHills/useBrandData";
import Navbar from "@/components/SunnyHills/Navbar.vue";
import Footer from "@/components/SunnyHills/Footer.vue";
import Share from "@/components/SunnyHills/Share.vue";

const { brandItem } = useBrandData();
</script>

<template>
  <div class="wrapper">
    <div class="other">
      <router-link to="/" class="btn btn-outline-primary">回導覽列</router-link>
    </div>

    <div class="navbar">
      <Navbar />
      <hr />
    </div>

    <div class="story-title">
      <p>一個天真的初衷與持續努力的未來</p>
    </div>
    <div class="brand-wrapper">
      <div v-for="item in brandItem" :key="item.id" class="brand-item">
        <div class="item-img">
          <img :src="item.img" :alt="item.title" />
        </div>
        <div class="item-text">
          {{ item.desc }}
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
    <div class="share">
      <Share />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.other {
  text-align: center;
}
.story-title {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 35px;
  font-size: 18px;
  color: #585252;
  letter-spacing: 6px;
  padding-left: 10px;
  padding-right: 10px;
}
.brand-item {
  display: flex;
  flex-direction: column;
  width: 100%;

  .item-img {
    > img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .item-text {
    white-space: pre-line;
    text-align: center;
    padding: 10px;
    font-size: 15px;
    letter-spacing: 3px;
    margin: 40px 0;
  }
}

.footer {
  text-align: center;
  font-size: 12px;
  line-height: 30px;
  color: #827e7d;
}
@media (min-width: 768px) {
  .other {
    display: none;
  }

  .brand-wrapper {
    display: flex;
    flex-direction: column;
    gap: 100px;
    .brand-item {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(232, 238, 238);

      .item-img {
        width: 70%;
      }
      .item-text {
        width: 30%;
        padding: 0 50px;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;
        background-color: white;
      }
    }
  }
}
</style>
