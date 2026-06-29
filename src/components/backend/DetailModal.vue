<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  item: any; // 之後可以換成你的 GoodsItem 型別
}>();

defineEmits(["close"]);
</script>

<template>
  <div
    v-if="isOpen && item"
    class="modal fade show d-block custom-modal-backdrop"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold">🔍 商品詳細資訊</h5>
          <button
            @click="$emit('close')"
            type="button"
            class="btn-close"
          ></button>
        </div>

        <div class="modal-body text-start">
          <div class="text-center mb-3">
            <img
              :src="item.imageUrl"
              class="img-thumbnail detail-product-img"
            />
          </div>
          <p>
            <strong>商品 ID：</strong>
            <span class="badge bg-secondary">{{ item.id }}</span>
          </p>
          <p><strong>商品名稱：</strong> {{ item.title }}</p>
          <p>
            <strong>商品價格：</strong>
            <span class="text-danger fw-bold">${{ item.price }}</span>
          </p>
          <p><strong>目前庫存：</strong> {{ item.stock }} 件</p>
          <p>
            <strong>圖片狀態：</strong>
            {{ item.status === "1" ? "啟用中" : "已禁用" }}
          </p>
          <p><strong>最後更新：</strong> {{ item.updateTime || "尚未更新" }}</p>
        </div>

        <div class="modal-footer">
          <button
            @click="$emit('close')"
            type="button"
            class="btn btn-secondary"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 半透明背景遮罩 */
.custom-modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

/* 商品圖片美化與大小限制 */
.detail-product-img {
  max-height: 200px;
  object-fit: cover;
}
</style>
