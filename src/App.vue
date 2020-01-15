<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <router-view />
  </transition>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media (max-width: 576px) {
  .display-1 {
    font-size: 3rem !important;
    text-align: center;
  }

  .display-4 {
    font-size: 2.5rem !important;
  }
}

.container-fluid {
  max-width: 1920px;
}
</style>