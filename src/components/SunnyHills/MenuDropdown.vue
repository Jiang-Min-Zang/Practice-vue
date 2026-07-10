<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits<{
  (e: "close"): void;
}>();
const navigateTo = (path: string) => {
  router.push(path); // 換網址
  emit("close"); // 跳轉後自動把選單關起來，體驗比較好
};
</script>

<template>
  <div class="menu-dropdown" @click.stop>
    <div class="close-row">
      <button type="button" class="close-btn" @click="emit('close')">
        <img src="../../assets/SunnyHills/imgi_14_bt_x.svg" alt="" />
      </button>
    </div>

    <ul class="menu-list">
      <li @click="navigateTo('/story')">陽光燦爛的山丘</li>
      <li @click="navigateTo('/')">各地的微熱山丘</li>
      <li @click="navigateTo('/')">陽光美點</li>
      <li @click="navigateTo('/')">陽光計畫</li>
      <li @click="navigateTo('/')">微熱生活</li>
      <li @click="navigateTo('/')">購買方式</li>
      <li @click="navigateTo('/')">網路購物</li>
      <li @click="navigateTo('/')">聯絡我們</li>
      <li @click="navigateTo('/')">檢測報告</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu-dropdown {
  position: absolute;
  top: 100%;
  //   top: 0;
  right: 0;
  //   left: 0;
  width: 220px;
  //   height: 100vh;
  background-color: white;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 10px 0 15px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  margin-top: 10px;

  /* 關閉按鈕那一列 */
  .close-row {
    display: flex;
    justify-content: flex-end;
    padding: 0 15px 5px 15px;

    .close-btn {
      > img {
        width: 15px;
      }
      background: none;
      border: none;
      //   color: #888;
      //   font-size: 18px;
      //   cursor: pointer;
      padding: 5px;
      //   transition: color 0.2s;

      //   &:hover {
      //     color: #000000; /* 滑過時變白 */
      //   }
    }
  }

  /* 選項清單 */
  .menu-list {
    list-style: none;
    padding: 5px 0 0 0;
    margin: 0;
    text-align: left;

    li {
      padding: 12px 20px;
      color: black;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: #222222;
        color: #d4af37; /* 屋馬經典金 */
        padding-left: 25px; /* 滑過時稍微往右縮，會有一點動態高級感 */
      }
    }
  }
}

@media (max-width: 768px) {
  .menu-dropdown {
    left: 0;
    .close-row {
      display: none;
    }
  }
}
</style>
