<script setup lang="ts">
import { reactive } from "vue";
import Person from "./components/Person.vue";
import shopping from "./components/shopping-cart.vue";
import vbind from "./components/v-bind.vue";
import AppHeader from "./components/AppHeader.vue";
import Count from "./components/Count.vue";
import LoveTalk from "./components/LoveTalk.vue";
import watch from "./components/watch.vue";

import { type Persons } from "./types";

let personList = reactive<Persons>([
  { id: "1", name: "張三", age: 18 },
  { id: "2", name: "旻展", age: 27 },
  { id: "3", name: "靜雯", age: 30, x: 7 },
]);
// console.log(personList);
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <AppHeader />

    <!-- 列表 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="xiaozhupeiqi">首頁</RouterLink>
      <RouterLink to="/news" active-class="xiaozhupeiqi">新聞</RouterLink>
      <RouterLink to="/about" active-class="xiaozhupeiqi">關於</RouterLink>
      <RouterLink to="/Products" active-class="xiaozhupeiqi">商品</RouterLink>
      <RouterLink to="/Employee" active-class="xiaozhupeiqi">人員</RouterLink>
    </div>
    <!-- 展示區 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
  <div class="app">
    <!-- <person :list="personList" /> -->
    <person />
  </div>

  <div>
    <!-- <watch /> -->
  </div>
  <div class="test">
    <shopping />
  </div>
  <div>
    <hr />
    <vbind />
  </div>
  <div>
    <Count />
    <br />
    <LoveTalk />
  </div>
</template>

<style>
.app {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
.test {
  margin-top: 1rem;
}
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0px 15px;
}
.navigate a {
  display: flex;
  justify-content: center;

  gap: 10px;
  text-align: center;
  width: 65px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}
.navigate a.xiaozhupeiqi {
  background-color: #64967e;
  color: #ffc268;
  font-weight: 800;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}
.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>
