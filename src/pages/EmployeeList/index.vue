<script setup>
import { ref, computed, watch } from "vue";
import { RouterLink } from "vue-router";

const employees = [
  {
    id: "E001",
    name: "張三",
    position: "前端工程師",
    content: "pm需求一直亂改",
  },
  {
    id: "E002",
    name: "李四",
    position: "UI設計師",
    content: "弄半天最後用第一版",
  },
  {
    id: "E003",
    name: "王五",
    position: "專案經理",
    content: "老闆的想法好難抓",
  },
];
</script>

<template>
  <div>
    <div class="">
      <ul>
        <li v-for="value in employees" :key="value.id">
          <RouterLink
            :to="{
              name: 'Employeedetail',
              query: {
                id: value.id,
                name: value.name,
                position: value.position,
                content: value.content,
              },
            }"
            >{{ value.id }}</RouterLink
          >
        </li>
      </ul>
    </div>
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>
