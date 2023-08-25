<script setup lang="ts">
import HeaderBar from "/ChocoCRM/lh-bank/src/components/bar/HeaderBar.vue"
import MenuBar from "/ChocoCRM/lh-bank/src/components/bar/MenuBar.vue";
import SpecialCoupon from "../special-coupon/SpecialCoupon.vue";
// import Coupon from "../coupon/Coupon.vue";
import CardCoupon from "../../components/card/CardCoupon.vue";

// export default {
//   name: "home-page",
//   methods : {
//      headerChangetolist() {
//       this.$router.push('/coupon')
//      }
//   }
// }
</script>

<template>
   
  <div class="d-flex justify-content-center container">
    <div class="size-page">
      <div style="background-color: #f8f8f8">
        <div>
        <HeaderBar/>
          <MenuBar />
        </div>
        <!-- <router-view> </router-view> -->
        <div class="d-flex bd-highlight mb-1 mt-4">
          <div class="p-2 bd-highlight">
            <img
              src="/src/assets/images/icons/svg/gift-icon.svg"
              alt=""
              class="icons"
            />
          </div>
          <div class="pt-2 bd-highlight">
            <b style="color: #333132">พิเศษเฉพาะคุณ</b>
          </div>
          <div class="ms-auto p-2 bd-highlight" >
            <router-link to="/coupon" style="text-decoration: none; color: inherit;">
              <a style="color: #88bdc0" >
             ดูทั้งหมด <img src="/src/assets/images/icons/svg/right-chevron-icon.svg" alt="" class="icon-home-page">
            </a>
            </router-link>
          </div>
        </div>
        <SpecialCoupon />
        <div class="d-flex bd-highlight mb-1 mt-4">
          <div class="p-2 bd-highlight">
            <img
              src="/src/assets/images/icons/svg/coupon-icon.svg"
              alt=""
              class="icons"
            />
          </div>
          <div class="pt-1 bd-highlight">
            <b style="color: #333132">คูปองและส่วนลด</b>
          </div>
        </div>
        <CardCoupon />
        <MenuBar />
      </div>
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
/* .logo {
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
} */
.icon-home-page { 
  width: 15px;
}
</style>
