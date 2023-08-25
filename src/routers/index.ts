import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/page/HomePage.vue"
import CouponList from "../views/coupon/CouponList.vue"
import CouponView from "../views/coupon/CouponView.vue";


const routes = [
  { path: "/", name: "home-page", component: HomePage },
  { path: "/coupon", name: "coupon-list", component: CouponList },
  { path: "/coupon/view/:id", name: "coupon-view", component: CouponView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
