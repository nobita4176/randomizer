<template>
  <div :class="$style.megami_container">
    <template v-for="megami in megamiList" :key="megami.name">
      <figure :class="$style.megami" v-show="megami.code === code">
        <img :src="'/megami/dummy.png'" :alt="megami.code" width="320" height="480" />
        <figcaption>{{ megami.name }}</figcaption>
      </figure>
    </template>
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
  'data': function() {
    return {
      'megamiList': json.megamiList,
    };
  },
});
</script>

<style lang="scss" module>
.megami_container {
  display: flex;
  flex-direction: column;

  .megami {
    border: 1px solid #eee;
    text-align: center;
    font-family: "KSW闘龍", serif;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
