<template>
  <div :class="$style.cylinder_container">
    <template v-for="megami in state.megamiTuple" :key="megami.code">
      <MegamiSlotCylinder :code="megami.code" />
    </template>
  </div>
  <div :class="$style.button_container">
    <button v-show="state.state === 'ready'" v-on:click="rollStart()"><img src="/button/start.png"></button>
    <button v-show="state.state === 'not-ready'" disabled><img src="/button/start.png"></button>
    <button v-show="state.state === 'running'"  v-on:click="rollStop()"><img src="/button/stop.png"></button>
    <button v-show="state.state === 'stopping'" disabled><img src="/button/stop.png"></button>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import MegamiSlotCylinder from '@/components/MegamiSlotCylinder.vue';
import MegamiSlotButton from '@/components/MegamiSlotButton.vue';
import {pick} from '@/modules/pick';
import json from '@/assets/megami_list.json';

export default defineComponent({
  'name': 'MegamiSlot',
  'components': {
    MegamiSlotCylinder,
    MegamiSlotButton,
  },
  setup(props, context) {
    json.megamiList.forEach(megami => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'image');
      link.setAttribute('type', 'image/png');
      link.setAttribute('href', '/megami/' + megami.code + '.png');
      document.head.appendChild(link);
    });

    const state = reactive({
      'state': 'not-ready',
      'megamiTuple': [
        {'code': 'na-10-kururu-a1',},
        {'code': 'na-10-kururu-a1',},
        {'code': 'na-10-kururu-a1',},
      ],
    });

    setTimeout(() => {state.state = 'ready';}, 200);

    let timerId: number|undefined = undefined;

    const rollStart = () => {
      state.state = 'running';

      const f = () => {state.megamiTuple = pick(3);};
      timerId = window.setInterval(f, 50);
    };
    const rollStop = () => {
      state.state = 'stopping';

      if (timerId) {
        window.clearInterval(timerId);
        timerId = undefined;
      }
      setTimeout(() => {
        state.state = 'ready';
      }, 300);
    };

    return {
      state,
      rollStart,
      rollStop,
    };
  },
});
</script>

<style lang="scss" module>
.cylinder_container {
  display: flex;
  @media (orientation: landscape) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (orientation: portrait) {
    flex-direction: column;
    justify-content: flex-start;
  }
}
.button_container {
  display: flex;
  flex-direction: row;
  align-content: start;
  justify-content: space-around;

  @media (orientation: portrait) {
    position: fixed;
    right: 2vmin;
    bottom: 2vmin;
    z-index: 2;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  button {
    width: 30vmin;
    height: 30vmin;
    cursor: pointer;
    padding: 0;
    border: none;
    background: transparent;

    &:disabled {
      cursor: not-allowed;
    }

    img {
      display: block;
      text-align: center;
      max-width: 100%;
    }
  }
}
</style>
