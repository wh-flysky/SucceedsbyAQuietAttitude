<template>
  <div class="backBox">
    <SVGBack class="svg"/><slot />
  </div>
</template>
<script>
import SVGBack from '@/assets/SVG/SVGBack'

export default {
  components: {
    SVGBack
  }
}
</script>
<style lang="scss">
.backBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  cursor: pointer;
  padding: 20px 10px;
}

.svg {
  margin-right: 6px;
}
</style>
