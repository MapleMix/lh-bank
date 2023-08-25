<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import HeaderBar from "./components/bar/HeaderBar.vue";
// import MenuBar from "./components/bar/MenuBar.vue";
// import SpecialCoupon from "./views/special-coupon/SpecialCoupon.vue";
// import Coupon from "./views/coupon/Coupon.vue";
// import CouponList from "./views/coupon/CouponList.vue";

</script>

<template>
  

  <div class="d-flex justify-content-center container" >
    <div class="size-page" >
      <router-view></router-view> 
    </div>
  </div>
</template>

<style scoped>
.size-page {
  width: 500px;
  height: auto;
}
.icons {
  width: 25px;
  margin-top: -10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
