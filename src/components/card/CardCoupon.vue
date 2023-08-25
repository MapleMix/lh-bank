<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCustomerStore } from "/ChocoCRM/lh-bank/src/stores/useCustomerStore";

const store = useCustomerStore();
const getUsers = computed(() => {
  return store.getUsers;
});

onMounted(() => {
  store.fetchAPI();
});
</script>

<template>
  <div class="row px-4 g-1">
    <div
      class="card border-0 shadow p-2 col-6 m-4 card-coupon currency"
      v-for="listData in getUsers"
      :key="listData.id"
    >
      <div
        class="d-flex justify-content-center align-items-center amount-coupon"
      >
        {{ listData.amount }}/100
      </div>
      <img
        :src="listData.img"
        alt=""
        class="d-flex justify-content-center img-coupon"
      />
      <div class="mt-3 text-coupon">
        <span style="font-size: 14px">{{ listData.title }}</span>
        <br /><b
          >ส่วนลดแทนเงินสด<br />มูลค่า
          {{ listData.value }} บาท<br />[E-Voucher]</b
        ><br />
        <a :href="`/coupon/view/${listData.id}`">
          <button
            class="btn btn-primary mt-3 button"
            style="
              --bs-btn-padding-y: 0rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-bg: var(--bd-#cd7b56-bg);
            "
          >
            แลกฟรี
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.card-coupon {
  width: 177px;
  height: 298px;
  border-radius: 14px;
  margin-left: 10px;
  box-shadow: 0px 0px 6px #00000029;
}
.img-coupon {
  /* width: 124px; */
  height: 143px;
  border-radius: 14px;
}
.text-coupon {
  text-align: center;
  font-size: 12px;
}
.amount-coupon {
  background-color: #f0bb0d;
  width: 67px;
  height: 30px;
  z-index: 1;
  position: absolute;
  color: aliceblue;
  border-radius: 0px 14px 14px 0px;
  margin-top: 10px;
  margin-left: -8px;
  box-shadow: 0px 3px 2px #00000029;
  opacity: 0.9;
}
</style>
