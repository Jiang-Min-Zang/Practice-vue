<template>
  <div class="col-sm-2">
    <nav class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/Dashboard">首頁</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/goods">菜單管理</router-link>
      </li>
    </nav>
  </div>
  <div class="container-fluid p-4 bg-white rounded shadow-sm m-2">
    <div
      class="d-flex justify-content-between align-items-center border-bottom mb-3"
    >
      <ul class="nav nav-tabs border-0">
        <li class="nav-item">
          <a class="nav-link active fw-bold" href="#">商品廣告圖</a>
        </li>
      </ul>
      <button class="btn btn-sm btn-primary">操作紀錄(未來功能)</button>
    </div>

    <div class="row g-3 align-items-end mb-4 bg-light p-3 rounded">
      <div class="col-md-3">
        <label class="form-label small text-secondary fw-bold">圖片 ID:</label>
        <input
          v-model="searchForm.id"
          type="text"
          class="form-control form-control-sm"
          placeholder="請輸入"
        />
      </div>
      <div class="col-md-3">
        <label class="form-label small text-secondary fw-bold">圖片狀態:</label>
        <select v-model="searchForm.status" class="form-select form-select-sm">
          <option selected>請選擇</option>
          <option value="1">啟用</option>
          <option value="0">禁用</option>
        </select>
      </div>
      <div class="col-md-3">
        <button @click="handleSearch" class="btn btn-sm btn-primary me-2 px-3">
          搜尋
        </button>
        <button
          @click="handleReset"
          class="btn btn-sm btn-outline-secondary px-3"
        >
          重置
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-sm btn-primary px-3">＋ 新增</button>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered align-middle text-center small">
        <thead class="table-light">
          <tr>
            <th style="width: 10%">圖片ID ⇅</th>
            <th style="width: 15%">圖片</th>
            <th style="width: 20%">備註</th>
            <th style="width: 15%">圖片狀態</th>
            <th style="width: 15%">更新時間 ⇅</th>
            <th style="width: 10%">操作人</th>
            <th style="width: 15%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in goodsList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <img
                :src="item.imageUrl"
                alt="商品"
                class="rounded"
                style="width: 70px; height: 70px; object-fit: cover"
              />
            </td>
            <td class="text-start">{{ item.title }}</td>
            <td>
              <select
                v-model="item.status"
                @change="
                  handleUpdateStatus(
                    item.id,
                    ($event.target as HTMLSelectElement).value,
                  )
                "
                class="form-select form-select-sm mx-auto"
                style="width: 100px"
              >
                <option value="1">啟用</option>
                <option value="0">禁用</option>
              </select>
            </td>
            <td class="text-secondary">
              {{ item.updateTime || "已設置" }}
            </td>
            <td>{{ item.updater || "admin" }}</td>
            <td>
              <button
                @click="showDetail(item)"
                class="btn btn-link btn-sm text-decoration-none me-1 p-0"
              >
                詳情
              </button>
              <span class="text-muted small">|</span>
              <button
                @click="handleDeleteGoods"
                class="btn btn-link btn-sm text-decoration-none text-danger p-0 ms-1"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <DetailModal
      :is-open="isDetailModalOpen"
      :item="currentDetail"
      @close="isDetailModalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DetailModal from "@/components/backend/DetailModal.vue";
import { useGoodTable } from "@/hooks/useGoodsTable";

const {
  goodsList,
  searchForm,
  handleSearch,
  handleReset,
  handleCreateGoods,
  handleUpdateStatus,
  handleDeleteGoods,
} = useGoodTable();

const isDetailModalOpen = ref(false);
const currentDetail = ref<any>(null);
const showDetail = (item: any) => {
  currentDetail.value = item;
  isDetailModalOpen.value = true;
  // console.log("有點下去嗎");
};
</script>

<style>
.nav {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
  background-color: rgb(245, 245, 245);
}
</style>
