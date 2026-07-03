<template>
  <div class="home">
    <h3>UI作品導覽列</h3>
    <img src="../assets/common/vue.svg" alt="" />
    <hr />
    <nav>
      <li><RouterLink to="/FunctionProductList">購物車</RouterLink></li>
      <li><RouterLink to="/SunnyHills">微熱山丘</RouterLink></li>
      <li><RouterLink to="/about">測試轉導-about</RouterLink></li>
    </nav>
  </div>
  <hr />
  <div class="home">
    <h3>後台練習</h3>
    <img class="bankend-icon" src="../assets/Bankend/backend.png" alt="" />
    <nav>
      <li><router-link to="/LoginvView">練習後台</router-link></li>
    </nav>
  </div>
  <hr />
  <div class="footer">
    <img class="mail-icon" src="../assets/common/mail-icon.png" alt="" />
    <span>jacky14440@gmail.com</span>
  </div>
</template>

<script setup lang="ts" name="Home"></script>

<style lang="scss" scoped>
.home {
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .bankend-icon {
    height: 50px;
  }
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  .mail-icon {
    height: 40px;
  }
  span {
    font-size: 0.8rem;
  }
}
hr {
  color: black;
}
</style>
