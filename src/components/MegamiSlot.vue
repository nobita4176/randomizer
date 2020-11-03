<template>
  <div :class="$style.cylinder_container">
    <template v-for="megami in megamiTuple" :key="megami.code">
      <MegamiSlotCylinder :code="megami.code" />
    </template>
  </div>
  <div :class="$style.button_container">
    <MegamiSlotButton v-show="state === 'ready'" v-on:click="rollStart()" text="開始" color="#cc6666" />
    <MegamiSlotButton v-show="state !== 'ready'" :disabled="state === 'stopping'" v-on:click="rollStop()" text="止" color="#66cc66" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MegamiSlotCylinder from '@/components/MegamiSlotCylinder.vue';
import MegamiSlotButton from '@/components/MegamiSlotButton.vue';

export default defineComponent({
  'name': 'MegamiSlot',
  'components': {
    MegamiSlotCylinder,
    MegamiSlotButton,
  },
  data() {
    return {
      'state': 'ready',
      'megamiTuple': [
        {'code': 'na-01-yurina-a1',},
        {'code': 'na-02-saine-o',},
        {'code': 'na-07-shinra-o',},
      ],
    };
  },
  'methods': {
    rollStart() {
      this.state = 'running';
    },
    rollStop() {
      this.state = 'stopping';
      setTimeout(() => {this.state = 'ready';}, 1000);
    },
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
