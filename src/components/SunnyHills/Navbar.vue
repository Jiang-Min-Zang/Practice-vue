<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import MenuDropdown from "@/components/SunnyHills/MenuDropdown.vue";
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const goHome = () => {
  router.push("/SunnyHills");
};
</script>

<template>
  <div class="Navbar">
    <button class="button" @click="toggleMenu">
      <img src="@/assets/SunnyHills/imgi_13_menu_3.svg" alt="" />
      <transition name="dropdown">
        <MenuDropdown v-show="isMenuOpen" @close="isMenuOpen = false" />
      </transition>
    </button>
    <div class="Navbar-img" @click="goHome">
      <img src="@/assets/SunnyHills/imgi_12_logo.svg" alt="" />
    </div>

    <nav class="nav-menu d-none d-md-flex">
      <li><router-link to="/story">陽光燦爛的山丘</router-link></li>
      <li><router-link to="/">各地的微熱山丘</router-link></li>
      <li><router-link to="/">陽光美點</router-link></li>
      <li><router-link to="/">購買方式</router-link></li>
      <li><router-link to="/">網路購物</router-link></li>
      <!-- <a href="#"> 陽光燦爛的山丘 </a>
      <a href="#"> </a>
      <a href="#"> </a>
      <a href="#"> </a>
      <a href="#"> </a> -->
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
li {
  color: #595353;
  text-decoration: none;
  list-style: none;
}

/* 🎯 下拉選單的過渡動畫 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.8s ease;
}

/* 剛出現與消失時的狀態：透明度為 0，且往上縮 10px */
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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
