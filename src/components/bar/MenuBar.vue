<script lang="ts">

export default {
  name: "menu-bar",
};
</script>

<template>
  <div>
    <div class="div-menu-bar card border-0 shadow-sm text-center">
      <div class="row mt-5" >
        <div class="col icons-menu-bar">
            <img src="/src/assets/images/icons/svg/gift-icon.svg" alt="" class="icons-menu-bar"/> 
            <p class="text-color-menu-bar">สิทธิพิเศษ</p>
        </div>
        <div class="col icons-menu-bar" >
            <img src="/src/assets/images/icons/svg/history-icon.svg" alt="" class="icons-menu-bar"/> 
            <p class="text-color-menu-bar">ประวัติ</p>
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
}
.text-color-menu-bar {
    color: #949494;
}
.text-color-menu-bar:hover {
    color: #88BDC0;
}
.icons-menu-bar {
  width: 25px;
  margin-top: -10px;
  filter: invert(62%) sepia(1%) saturate(0%) hue-rotate(34deg) brightness(93%) contrast(100%);
}
.icons-menu-bar:hover {
  filter: brightness(0) saturate(100%) invert(71%) sepia(48%) saturate(198%) hue-rotate(135deg) brightness(92%) contrast(90%);
}
</style>
