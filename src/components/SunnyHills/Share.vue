<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);

const toggleShare = () => {
  isOpen.value = !isOpen.value;
  // console.log("hi");
};
</script>

<template>
  <div class="noselect" id="share-container">
    <div
      class="btn_shares"
      id="share_buttons"
      :class="{ 'is-open': isOpen }"
      tabindex="-1"
    >
      <div class="btn_share" id="btn_share_toggle" @click="toggleShare"></div>
      <div class="btn_share" id="btn_share_fb"></div>
      <div class="btn_share" id="btn_share_weibo"></div>
      <div class="btn_share" id="btn_share_wechat"></div>
      <div class="btn_share" id="btn_share_twitter"></div>
      <div class="btn_share" id="btn_share_google"></div>
    </div>
    <div id="shopping_cart"></div>
  </div>
</template>

<style lang="scss" scoped>
// .noselect {
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// }
#share-container {
  position: fixed;
  bottom: 150px;
  right: 0;
  z-index: 500;
}
#share_buttons {
  position: absolute;
  top: 0;
  right: -290px;
  width: 350px;
  height: 52px;
  background-color: #f7f7f7;
  text-align: left;
  transition: right 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &.is-open {
    right: 0;
  }
}
.btn_shares {
  display: flex;
}
.btn_share {
  width: 60px;
  height: 52px;
  cursor: pointer;
  margin-right: -4px;
}
#btn_share_toggle {
  background-image: url(../../assets/SunnyHills/story/imgi_14_bt_share.svg);
  // transition:
  //   opacity 0.3s ease,
  //   visibility 0.3s ease;
}
// #share_buttons.is-open {
//   #btn_share_toggle {
//     opacity: 0; /* 透明度變成 0，淡出 */
//     visibility: hidden; /* 徹底讓它不可點擊、徹底隱藏，瀏覽器更省電 */
//   }
// }
#btn_share_fb {
  background-image: url(../../assets/SunnyHills/story/imgi_10_bt_share_fb.svg);
}
#btn_share_weibo {
  background-image: url(../../assets/SunnyHills/story/imgi_11_bt_share_weibo.svg);
}
#btn_share_wechat {
  background-image: url(../../assets/SunnyHills/story/imgi_12_bt_share_weixin.svg);
}
#btn_share_twitter {
  background-image: url(../../assets/SunnyHills/story/imgi_13_bt_share_twitter.svg);
}
#btn_share_google {
  background-image: url(../../assets/SunnyHills/story/imgi_14_bt_share_g.svg);
}
#shopping_cart {
  position: absolute;
  right: 0;
  top: 62px;
  width: 60px;
  height: 52px;
  background-size: cover;
  background-image: url(../../assets/SunnyHills/story/imgi_20_bt_shop.svg);
}
</style>
