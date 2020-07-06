<script>
import Layout from '@layouts/main.vue'
import PlayGroundComp from '@components/playGroundComp.vue'

export default {
  page: {
    title: 'playGroundView',
    meta: [
      { name: 'description', content: 'this page shows users from users API' },
    ],
  },
  components: { Layout, PlayGroundComp },
}
</script>

<template>
  <Layout>
    <h1>
      <BaseIcon name="gamepad" />
      Play Ground
    </h1>
    <PlayGroundComp />
  </Layout>
</template>
