<template>
  <div>...</div>
</template>

<script>
export default {
  name: 'PageContentStart',
  head () {
    return {
      title: `${process.env.appName}`,
      meta: [
        { hid: 'description', name: 'description', content: this.$t('pageDescription') }
      ]
    }
  }
}
</script>
