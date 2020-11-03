<template>
  <button :class="$style.outer" :style="'background-color:' + color">
    <div :class="$style.inner">{{ text }}</div>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  'name': 'MegamiSlotButton',
  'props': {
    'text': {
      'type': String,
      'required': true,
    },
    'color': {
      'type': String,
      'required': true,
    },
  },
});
</script>

<style lang="scss" module>
.outer {
  display: grid;
  place-items: center;
  width: 7rem;
  height: 7rem;
  border: 8px ridge #888800;
  margin: 2rem;
  padding: 0;
  cursor: pointer;
  transform: rotate(45deg);
}
.inner {
  transform: rotate(-45deg);
  writing-mode: vertical-rl;
  font-family: "KSW闘龍", serif;
  font-size: 3rem;
  color: #fff;
  text-shadow: 1px 1px 5px #222222;
}
button[disabled] {
  cursor: not-allowed;
  filter: grayscale(0.9);
}
</style>
