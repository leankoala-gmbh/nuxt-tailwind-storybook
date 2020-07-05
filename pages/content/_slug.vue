<template>
  <div>
    <nuxt-content :document="doc" class="max-w-3xl" />
  </div>
</template>

<script>
export default {
  name: 'PageContentExample',
  async asyncData ({ $content, params }) {
    const doc = await $content(params.slug || 'index').fetch()
    return { doc }
  },
  head () {
    return {
      title: `${process.env.appName} - ${this.doc.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.doc.description }
      ]
    }
  }
}
</script>
