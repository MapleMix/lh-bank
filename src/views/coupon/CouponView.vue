<script setup lang="ts">
import CardCouponView from "../../components/card/CardCouponView.vue";
import PopupRedeem from "../../components/pop-up/PopupRedeem.vue";
import ButtonBar from "../../components/bar/ButtonBar.vue";
import ConfirmRedeemMadal from "../../components/modal/ConfirmRedeemMadal.vue"
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
  <div style="background-color: #f8f8f8">
    <div class="container">
      <div class="row pt-5 px-2">
        <div class="col-4">
          <router-link to="/" style="text-decoration: none; color: inherit">
            <img
              src="/src/assets/images/icons/svg/left-arrow-icon.svg"
              alt=""
              class="icons-coupon-list"
            />
          </router-link>
        </div>
        <div class="col-4" style="text-align: center">
          <b>รายละเอียด</b>
        </div>
      </div>
    </div>
    <CardCouponView :getUsers="getUsers" />
    <ButtonBar :getUsers="getUsers" toggle="modal" target="#staticBackdrop" />
    <PopupRedeem :getUsers="getUsers" />
  </div>

  <!-- Confirm Modal -->
  <ConfirmRedeemMadal/>

</template>

<style>
.icons-coupon-list {
  width: 20px;
  color: #ffffff;
}
.modal-footer {
  border-top: var(--bs-modal-footer-border-width) solid #ffffff
    var(--bs-modal-footer-border-color);
}

</style>
