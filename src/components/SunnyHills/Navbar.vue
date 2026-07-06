<script setup lang="ts"></script>

<template>
  <div class="Navbar">
    <button class="button">
      <img src="@/assets/SunnyHills/imgi_13_menu_3.svg" alt="" />
    </button>
    <!-- <button>
      <img src="@/assets/SunnyHills/imgi_12_logo.svg" alt="" />
    </button> -->
    <img src="@/assets/SunnyHills/imgi_12_logo.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.Navbar {
  .button {
    // margin-right: 20px;
    width: 50px;
    height: 30px;
    background: none;
    border: none;

    > img {
      width: 60%;
    }
  }
  padding-top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > img {
    width: 50%;
  }
}
</style>
