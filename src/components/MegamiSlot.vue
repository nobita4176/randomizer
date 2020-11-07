<template>
  <div :class="$style.cylinder_container">
    <template v-for="megami in state.megamiTuple" :key="megami.code">
      <MegamiSlotCylinder :code="megami.code" />
    </template>
  </div>
  <div :class="$style.button_container">
    <MegamiSlotButton v-show="state.state === 'ready'" v-on:click="rollStart()" text="開始" color="#cc6666" />
    <MegamiSlotButton v-show="state.state !== 'ready'" :disabled="state.state === 'stopping'" v-on:click="rollStop()" text="止" color="#66cc66" />
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import MegamiSlotCylinder from '@/components/MegamiSlotCylinder.vue';
import MegamiSlotButton from '@/components/MegamiSlotButton.vue';
import {pick} from '@/modules/pick';

export default defineComponent({
  'name': 'MegamiSlot',
  'components': {
    MegamiSlotCylinder,
    MegamiSlotButton,
  },
  setup(props, context) {
    const state = reactive({
      'state': 'ready',
      'megamiTuple': pick(3),
    });
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
      }, 1000);
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
  }
  @media (orientation: portrait) {
    flex-direction: column;
  }
  justify-content: space-around;
}
.button_container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1vmin;
  display: flex;
  flex-direction: row;
  align-content: start;
  justify-content: space-around;
}
</style>
