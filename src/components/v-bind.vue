<script setup>
import { ref, computed, watch } from "vue";
const menu = ref([
  { id: 1, name: "厚切牛排", type: "meat" },
  { id: 2, name: "季節時蔬", type: "veg" },
  { id: 3, name: "香煎鮭魚", type: "meat" },
  { id: 4, name: "蒜炒地瓜葉", type: "veg" },
  { id: 5, name: "水果拼盤", type: "veg" },
]);
const currentTab = ref("all");
const filteredMenu = computed(() => {
  if (currentTab.value === "changeMeat") {
    return menu.value.filter((item) => item.type === "meat");
  } else if (currentTab.value === "changeVeg") {
    return menu.value.filter((item) => item.type === "veg");
  } else {
    return menu.value;
  }
});

const items = ref([
  { name: "商品 A", selected: false },
  { name: "商品 B", selected: false },
  { name: "商品 C", selected: false },
]);

const selectAll = () => {
  items.value.forEach((item) => {
    item.selected = true;
  });
};

const deselectAll = () => {
  items.value.forEach((item) => {
    item.selected = false;
  });
};
watch(
  items,
  (newVal) => {
    const selectedCount = newVal.filter((item) => item.selected).length;
    console.log(`目前勾選了:${selectedCount}項`);
    if (selectedCount === newVal.length) {
      console.log("狀態:已全部選取");
    }
  },
  { deep: true },
);
</script>

<template>
  <div class="container">
    <h2>📝 餐廳食物篩選</h2>
    <div>
      <button @click="currentTab = 'all'">全部</button>
      <button @click="currentTab = 'changeMeat'">肉類</button>
      <button @click="currentTab = 'changeVeg'">蔬菜</button>
    </div>
    <ul>
      <li v-for="item in filteredMenu" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
  <div class="container">
    <h2>📝 批量操作管理員</h2>
    <button @click="selectAll">勾選全部</button>
    <button @click="deselectAll">取消全部</button>
  </div>
  <ul>
    <li v-for="item in items" :key="item">
      <label>
        <input type="checkbox" v-model="item.selected" />
        {{ item.name }}
      </label>
    </li>
  </ul>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  line-height: 1.2;
}
</style>
