<template>
  <div class="news">
    <ul>
      <li v-for="item in newList" :key="item.id">
        <!--第一種寫法 -->
        <!-- <RouterLink
          :to="`/news/detail/${item.id}/${item.title}/${item.content}`"
          >{{ item.title }}</RouterLink
        > -->
        <!-- 第二種寫法 -->
        <RouterLink
          :to="{
            name: 'detail',
            params: {
              id: item.id,
              title: item.title,
              content: item.content,
            },
          }"
        >
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from "vue";

const newList = reactive([
  { id: "01", title: "抗癌食物", content: "花椰菜" },
  { id: "02", title: "ETF推薦", content: "0050" },
  { id: "03", title: "體檢報告", content: "紅字一堆" },
  { id: "04", title: "物價上漲", content: "便當一年漲幅2倍" },
  { id: "05", title: "NBA季後賽", content: "勇士出局" },
]);
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news li::marker {
  color: #64967e;
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
