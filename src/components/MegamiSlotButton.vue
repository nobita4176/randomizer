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
:root {
  --button-size: 20vmin;
}
.outer {
  display: grid;
  place-items: center;
  width: var(--button-size);
  height: var(--button-size);
  border: calc(var(--button-size) * 0.075) ridge #888800;
  margin: calc(var(--button-size) * 0.2);
  padding: 0;
  cursor: pointer;
  transform: rotate(45deg);
  user-select: none;
}
.inner {
  transform: rotate(-45deg);
  writing-mode: vertical-rl;
  white-space: nowrap;
  font-family: "KSW闘龍", serif;
  font-size: calc(var(--button-size) * 0.4);
  color: #fff;
  text-shadow: 1px 1px 5px #222222;
}
button[disabled] {
  cursor: not-allowed;
  filter: grayscale(0.9);
}
</style>
