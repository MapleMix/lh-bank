<script setup lang="ts">
import { useModalStore } from "../../stores/useModalStore";

const props = defineProps({
  getUsers: {
    type: Object,
    required: true,
  },
  toggle: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    v-for="listData in props.getUsers.filter((datas:any) => datas.id === $route.params.id)"
    v-if="useModalStore.open === false"
  >
    <div v-if="listData.amount >= 1">
      <div v-if="listData.is_already === true">
        <div class="div-menu-bar card border-0 shadow-sm text-center">
          <div class="mt-3">
            <button
              type="button"
              class="btn btn-primary button-coupon-view-already"
              disabled
            >
              ใช้สิทธิ์แล้ว
            </button>
          </div>
        </div>
      </div>
      <div v-if="listData.is_already === false">
        <div class="div-menu-bar card border-0 shadow-sm text-center">
          <div class="mt-3">
            <button
              type="button"
              class="btn btn-primary button-coupon-view"
              :data-bs-toggle="props.toggle"
              :data-bs-target="props.target"
            >
              แลกฟรี
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="listData.amount === 0">
      <div>
        <div class="div-menu-bar card border-0 shadow-sm text-center">
          <div class="mt-3">
            <button
              type="button"
              class="btn btn-primary button-coupon-view-already"
              disabled
            >
              สิทธิ์หมด
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.div-menu-bar {
  background-color: #ffffff;
  width: 500px;
  height: 100px;
  position: fixed;
  bottom: 0px;
  border-radius: 50px 50px 0px 0px;
  z-index: 2;
}
.button-coupon-view {
  border-radius: 100px;
  width: 90%;
  height: 55px;
  --bs-btn-bg: #88bdc0;
  --bs-btn-border-color: #88bdc0;
  --bs-btn-hover-bg: #bcbec0;
  --bs-btn-hover-border-color: #bcbec0;
  --bs-btn-active-bg: #949494;
  --bs-btn-active-border-color: #949494;
}
.button-coupon-view-already {
  border-radius: 100px;
  width: 90%;
  height: 55px;
  --bs-btn-disabled-bg: #bcbec0;
  --bs-btn-disabled-border-color: #bcbec0;
}
</style>
