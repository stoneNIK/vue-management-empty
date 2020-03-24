<template>
  <svg class="icon" aria-hidden="true" :style="{ color, fontSize: size }">
    <use :xlink:href="`#mana-${type}`"></use>
  </svg>
</template>

<script>
import util from '@/utils/util'
util.loadScriptAsync(process.env.VUE_APP_ICON_FONT_URL)
export default {
  name: 'icon-font',
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      validator: e => {
        return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(e)
      }
    },
    size: {
      type: Number
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
