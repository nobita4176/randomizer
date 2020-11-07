<template>
  <MegamiSlot />
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
  font-family: "Noto Serif JP", serif;
}
#app {
}
</style>
