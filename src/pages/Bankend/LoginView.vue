<script setup lang="ts">
import { ref, computed, watch } from "vue";
import Login from "../../components/Login.vue";
</script>

<template>
  <div class="container-box">
    <div class="container-login">
      <div class="brand-img">
        <picture>
          <source
            srcset="/src/assets/Bankend/燒肉640x480.jpg"
            media="(min-width: 768px)"
          />
          <img src="/src/assets/Bankend/燒肉圖.jpg" alt="" />
        </picture>
      </div>
      <div class="login">
        <Login />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-box {
  .container-login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 375px;

    .brand-img {
      width: 100%;
      aspect-ratio: 700/375;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .login {
      width: 100%;
    }
  }
}

@media (min-width: 768px) {
  .container-box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    .container-login {
      flex-direction: row;
      // height: 50vh;
      .brand-img {
        // height: 50vh;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .login {
        width: 50vw;
        height: 50vh;
      }
    }
  }
}
</style>
