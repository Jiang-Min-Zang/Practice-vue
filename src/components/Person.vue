<template>
  <div class="person">
    <h2>當前總數為:{{ sum }}</h2>
    <button @click="changeSum">點一下</button>
  </div>
  <hr />
  <div>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
    <br />
    <button @click="getDog">再來一隻</button>
  </div>
  <hr />
  <div>
    <h2>watch筆記本</h2>
    <p>{{ test }}</p>
    <button @click="changeTest">點我一下</button>
  </div>
  <hr />
  <div>
    <h2>自動存檔筆記本</h2>
    <textarea
      v-model.lazy="note"
      placeholder="請開始輸入內容"
      rows="5"
    ></textarea>
    <p>目前字數為:{{ charCount }}</p>
  </div>
</template>

<script setup lang="ts" name="Person">
import useSum from "../hooks/useSum";
import useDog from "../hooks/useDog";
import onMounted from "../hooks/onMounted";
import { useNote } from "../hooks/useNote";
import { computed, ref } from "vue";
const isShow = ref(true);
const { sum, changeSum } = useSum();
const { dogList, getDog } = useDog();
const { test, changeTest } = onMounted();
const { note } = useNote();
const charCount = computed(() => note.value.length);
</script>

<style scoped>
.person {
  /* margin-bottom: 1rem; */
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
img {
  width: 60%;
  height: 60%;
}
</style>
