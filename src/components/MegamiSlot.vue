<template>
  <div :class="$style.cylinder_container">
    <template v-for="megami in state.megamiTuple" :key="megami.code">
      <MegamiSlotCylinder :code="megami.code" />
    </template>
  </div>
  <div :class="$style.button_container">
    <button v-show="state.state === 'loading'" disabled><img src="/button/start.png"></button>
    <button v-show="state.state === 'ready' || state.state === 'not-ready'" v-on:click="rollStart()"><img src="/button/start.png"></button>
    <button v-show="state.state === 'running'"  v-on:click="rollStop()"><img src="/button/stop.png"></button>
    <button v-show="state.state === 'stopping'" disabled><img src="/button/stop.png"></button>
  </div>
  <div :class="$style.share_container">
    <button :class="$style.share-twitter" v-show="state.state === 'ready'" v-on:click="share('twitter')"><img src="/button/twitter.svg" width="48" height="48"></button>
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
      'state': 'loading',
      'megamiTuple': [
        {'code': 'na-10-kururu-a1', 'name': '「探索者」クルル',},
        {'code': 'na-10-kururu-a1', 'name': '「探索者」クルル',},
        {'code': 'na-10-kururu-a1', 'name': '「探索者」クルル',},
      ],
    });

    setTimeout(() => {state.state = 'not-ready';}, 200);

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
    const share = (service: string) => {
      const names = state.megamiTuple.map(megami => '・' + megami.name).join('\n');
      let url = '';
      switch (service) {
        case 'twitter': {
          const text = encodeURI(`今回のランダム3柱は:\n${names}\n`);
          url = `https://twitter.com/intent/tweet?hashtags=ふるよに&text=${text}&url=${location.href}`;
          break;
        }
      }
      window.open(url, 'share');
    };

    return {
      state,
      rollStart,
      rollStop,
      share,
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

.share_container {
  position: fixed;

  @media (orientation: landscape) {
    bottom: 2vmin;
    right: 2vmin;
  }
  @media (orientation: portrait) {
    bottom: 2vmin;
    left: 2vmin;
  }

  button {
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
