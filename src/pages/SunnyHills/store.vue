<script setup lang="ts">
import { ref, computed, watch } from "vue";
import Navbar from "@/components/SunnyHills/Navbar.vue";
import Footer from "@/components/SunnyHills/Footer.vue";
import Share from "@/components/SunnyHills/Share.vue";
import Header from "@/components/SunnyHills/store/Header.vue";
import Sidebar from "@/components/SunnyHills/store/Sidebar.vue";
import StoreCard from "@/components/SunnyHills/store/StoreCard.vue";
import { useStoreData } from "@/hooks/sunnyHills/useStoreData";

const store = useStoreData(); //先不解購
const {
  storeData,
  currentRegionIndex,
  currentRegion,
  currentStores,
  activeStore,
  setRegion,
  setStore,
} = useStoreData();
</script>

<template>
  <div class="wrapper">
    <div class="other">
      <router-link to="/" class="btn btn-outline-primary">回導覽列</router-link>
    </div>
    <div class="navbar">
      <Navbar />
      <hr />
    </div>
    <div>
      <Header
        :regions="storeData"
        :active-index="currentRegionIndex"
        @change-region="setRegion"
      />
    </div>

    <div class="store-centent">
      <Sidebar
        :regions="storeData"
        :stores="currentStores"
        :active-id="activeStore?.id || ''"
        @change-store="setStore"
      />

      <StoreCard v-if="activeStore">
        <template #title>
          {{ activeStore.name }}
        </template>
        <template #banner>
          <img
            class="slot-img"
            v-if="activeStore.image"
            :src="activeStore.image"
            :alt="activeStore.name"
          />
        </template>
        <template #info>
          <p><strong>地址：</strong>{{ activeStore.address }}</p>
          <p><strong>營業時間：</strong>{{ activeStore.time }}</p>
          <p><strong>電話：</strong>{{ activeStore.phone }}</p>
          <p v-if="activeStore.fax">
            <strong>傳真：</strong>{{ activeStore.fax }}
          </p>
          <p v-if="activeStore.other">
            <strong>相關資訊：</strong><a :href="activeStore.other">點此檢視</a>
          </p>
        </template>
      </StoreCard>
    </div>
    <div class="footer">
      <Footer />
    </div>
    <div class="share">
      <Share />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.other {
  text-align: center;
}
.footer {
  text-align: center;
  font-size: 12px;
  line-height: 30px;
  color: #827e7d;
}
.slot-img {
  width: 100%;
}
@media (min-width: 768px) {
  .other {
    display: none;
  }
  .store-centent {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
}
</style>
