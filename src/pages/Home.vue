<template>
  <div class="home">
    <h3>作品導覽列</h3>
    <img src="../assets/vue.svg" alt="" />
    <hr />
    <nav>
      <li><RouterLink to="/about">測試轉導1</RouterLink></li>
      <li><RouterLink to="/news">測試轉導2</RouterLink></li>
    </nav>
  </div>
</template>

<script setup lang="ts" name="Home"></script>

<style scoped>
.home {
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
