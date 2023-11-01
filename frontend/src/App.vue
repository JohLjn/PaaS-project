<script>
import IntroContainer from "./components/IntroContainer.vue";
import MainContainer from "./components/MainContainer.vue";

export default {
  data() {
    return {
      showIntro: true,
    };
  },
  components: {
    IntroContainer,
    MainContainer,
  },
};
</script>

<template>
  <div id="container">
    <transition name="slide-fade" mode="out-in">
      <IntroContainer
        v-if="showIntro"
        @toggle-main="showIntro = false"
        key="intro"
      />
      <MainContainer v-else key="main" />
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
#container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  @include transition(all 0.9s ease);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}
</style>
