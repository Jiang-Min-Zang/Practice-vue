<script setup lang="ts"></script>

<template>
  <div class="Navbar">
    <button class="button">
      <img src="@/assets/SunnyHills/imgi_13_menu_3.svg" alt="" />
    </button>
    <!-- <button>
      <img src="@/assets/SunnyHills/imgi_12_logo.svg" alt="" />
    </button> -->
    <div class="Navbar-img">
      <img src="@/assets/SunnyHills/imgi_12_logo.svg" alt="" />
    </div>

    <nav class="nav-menu d-none d-md-flex">
      <a href="#">陽光燦爛的山丘</a>
      <a href="#">各地的微熱山丘</a>
      <a href="#">陽光美點</a>
      <a href="#">購買方式</a>
      <a href="#">網路購物</a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.Navbar {
  display: flex;
  justify-content: center;
  width: 100vw;
  align-items: center;
  > img {
    width: 25%;
  }
  .button {
    // margin-right: 20px;
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 30px;
    background: none;
    border: none;
    z-index: 99;

    > img {
      width: 50%;
    }
  }
  .Navbar-img {
    text-align: center;
    > img {
      width: 35%;
    }
  }
}
a {
  color: #595353;
  text-decoration: none;
}

@media (min-width: 768px) {
  .Navbar {
    justify-content: space-between;
    .button {
      background-color: white;
      position: fixed;
      left: auto;
      right: 0;
      width: 90px;
      height: 80px;
      > img {
        width: 25%;
      }
    }
    .Navbar-img {
      > img {
        width: 60%;
      }
    }
  }
  .nav-menu {
    display: flex;
    margin-right: 6rem;
    gap: 20px;
    color: #595353;
    letter-spacing: 3px;
  }
}
</style>
