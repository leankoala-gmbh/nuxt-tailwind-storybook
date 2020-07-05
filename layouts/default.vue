<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

<style lang="postcss">
.pageLayout {
  &__header {
    width: 100px;
    @media screen and (min-width: 768px) {
      width: 400px;
    }
  }
  &__body {
    max-width: 1900px;
    min-width: 240px;
  }
}
</style>
