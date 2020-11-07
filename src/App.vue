<template>
  <MegamiSlot />
  <footer>
    <p>ふるよにコモンズ/BakaFire,TOKIAME</p>
    <p>https://main-bakafire.ssl-lolipop.jp/furuyoni/na/rule.html</p>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MegamiSlot from './components/MegamiSlot.vue';

export default defineComponent({
  'name': 'App',
  'components': {
    MegamiSlot,
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');

body, body * {
  box-sizing: border-box;
}
body {
  font-family: "Noto Serif JP", serif;
  margin: 0;
  overflow-y: hidden;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
    background-color: #222222;
  }
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (orientation: portrait) {
    justify-content: flex-start;
  }

  footer {
    text-align: center;
    font-size: 0.7rem;

    @media (orientation: portrait) {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;

      background-color: rgba(255, 255, 255, 0.5);
      @media (prefers-color-scheme: dark) {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    p {
      margin: 0;
      line-height: 1;
    }
  }
}
</style>
