<template>
  <div class="container mx-auto">
    <div class="mt-10">
      <Logo />
      <div class="text-center mt-6">Hello World</div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/notice/Logo/Logo'

export default {
  name: 'PageHome',
  components: { Logo },
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
