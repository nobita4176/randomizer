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
      'megamiTuple': [
        {'code': 'na-01-yurina-a1',},
        {'code': 'na-02-saine-o',},
        {'code': 'na-07-shinra-o',},
      ],
    });

    const rollStart = () => {
      state.state = 'running';
    };
    const rollStop = () => {
      state.state = 'stopping';
      const picked = pick(3);
      setTimeout(() => {
        state.state = 'ready';
        state.megamiTuple = picked;
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
  flex-direction: row;
  justify-content: space-around;
}
.button_container {
  display: flex;
  flex-direction: row;
  align-content: start;
  justify-content: space-around;
}
</style>
