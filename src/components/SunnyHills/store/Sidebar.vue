<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { Store } from "@/hooks/sunnyHills/useStoreData";
const props = defineProps<{
  regions: Array<{ sidebarImg: string }>;
  stores: Store[];
  activeId: string;
}>();

const emit = defineEmits<{
  (e: "change-store", id: string): void;
}>();
//純 Vue 響應式變數：用來給 <select v-model> 綁定
const selectedId = ref(props.activeId);
//當外部傳進來的 activeId 變了 (例如切換地區)，同步更新本地的 selectedId
watch(
  () => props.activeId,
  (newId) => {
    selectedId.value = newId;
  },
  { immediate: true },
);
const onSelectChange = () => {
  emit("change-store", selectedId.value);
};
</script>

<template>
  <aside class="left-sidebar">
    <!-- 手機板 -->
    <div class="mobile-select-box">
      <select
        v-model="selectedId"
        @change="onSelectChange"
        class="store-select"
      >
        <!-- <option value="disable">請選擇門市</option> -->
        <option v-for="item in stores" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
    <!-- web版 -->
    <div class="desktop-menu-box">
      <ul class="store-menu">
        <div>
          <!-- 這個還沒修好 -->
          <img :src="regions[0].sidebarImg" alt="" />
        </div>
        <li
          v-for="store in stores"
          :key="store.id"
          class="menu-item"
          :class="{ active: activeId === store.id }"
          @click="emit('change-store', store.id)"
        >
          {{ store.name }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.mobile-select-box {
  display: flex;
  justify-content: center;
  padding: 10px;
  .store-select {
    width: 90%;
    height: 50px;
    font-size: 14px;
  }
}
.desktop-menu-box {
  display: none;
}
li {
  list-style: none;
}

@media (min-width: 768px) {
  .mobile-select-box {
    display: none;
  }
  .desktop-menu-box {
    display: flex;
    margin: auto;
    // text-align: center;
    // width: 100px;
    line-height: 20px;
    padding: 16px 0;
  }
  .store-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    font-size: 15px;
  }
  .menu-item {
    padding: 12px 16px;
    border-radius: 8px; /* 圓角框框 */
    border: 1.5px solid transparent; /* 預設透明邊框，避免 hover 時框框抖動 */
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #f5f5f5;
      color: #333;
      border-color: #e0e0e0; /* 微微浮現的淺色框框 */
    }
  }
}
</style>
