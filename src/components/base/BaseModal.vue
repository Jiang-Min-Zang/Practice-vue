<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
defineEmits(["close"]);
</script>

<template>
  <div
    v-if="isOpen"
    class="modal fade show d-block"
    style="background: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="title">預設標題</slot>
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          ></button>
        </div>

        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
