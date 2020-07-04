<template>
  <div>
    Hello World
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  head () {
    return {
      title: `${process.env.MAINTITLE}`,
      meta: [
        { hid: 'description', name: 'description', content: this.$t('pageDescription') }
      ]
    }
  }
}
</script>
