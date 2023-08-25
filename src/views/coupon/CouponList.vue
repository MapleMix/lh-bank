<script setup lang="ts">
import CardCoupon from "/ChocoCRM/lh-bank/src/components/card/CardCoupon.vue"

//  export default {
//  name: "coupon-list",
// };
</script>

<template>
  <div style="background-color: #F8F8F8;">
    <div class="container">
      <div class="row pt-5 px-2 div-coupon-list">
        <div class="col-4">
          <router-link
            to="/"
            style="text-decoration: none; color: inherit"
          >
            <img
              src="/src/assets/images/icons/svg/left-arrow-icon.svg"
              alt=""
              class="icons-coupon-list"
            />
          </router-link>
        </div>
        <div class="col-4">
          <b>พิเศษเฉพาะคุณ</b>
        </div>
      </div>
    </div>
    <div class="card-list">
      <CardCoupon/>
    </div>
  

  </div>
</template>

<style>
.div-coupon-list {
  background-color: #cd7b56;
  border-radius: 0px 0px 36px 36px;
  width: 500px;
  height: 200px;
  overflow: hidden;
}

.icons-coupon-list {
  width: 20px;
  color: #ffffff;
}

.card-list {
margin-top: -115px;
/* position: absolute; */
}
</style>
