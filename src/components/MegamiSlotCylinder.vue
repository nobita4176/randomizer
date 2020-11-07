<template>
  <div :class="$style.megami_container" :data-code="code">
    <figure :class="$style.megami">
      <img :src="'/megami/' + megami.code + '.png'" :alt="megami.code" width="320" height="480" />
      <figcaption>{{ megami.name }}</figcaption>
    </figure>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import json from '@/assets/megami_list.json';

export default defineComponent({
  'name': 'MegamiSlotCylinder',
  'props': {
    'code': {
      'type': String,
      'required': true,
    },
  },
  setup(props) {
    const megami = json.megamiList.find(m => m.code === props.code);
    return {
      megami,
    };
  },
});
</script>

<style lang="scss" module>
.megami_container {
  flex: 0 0 calc(100% / 3);
  display: flex;
  flex-direction: column;
  @media (orientation: portrait) {
    flex-direction: row;
  }

  .megami {
    margin: 0;
    border: 1px solid #eee;
    text-align: center;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
