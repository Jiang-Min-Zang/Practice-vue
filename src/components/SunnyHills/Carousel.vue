<script setup lang="ts">
// import { ref, computed, watch } from "vue";
</script>

<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide custom-carousel"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../assets/SunnyHills/imgi_1_IndexBannerL230628170812209.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/SunnyHills/imgi_2_IndexBannerL220711105429445.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/SunnyHills/imgi_3_IndexBannerL240705231414806.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.custom-carousel {
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden; /* 超出這個高度的圖片切掉，不讓它亂擠 */

  .carousel-inner,
  .carousel-item,
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
</style>
