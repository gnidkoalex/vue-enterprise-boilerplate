<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PlayGroundComp',
  computed: mapGetters({ Data: ['playGroundModul/playGroundDataGetter'] }),

  created() {
    this['playGroundModul/getPlayGroundData']()
  },

  methods: {
    ...mapActions(['playGroundModul/getPlayGroundData']),
  },
}
</script>

<template>
  <div>
    <template v-if="Data.length !== 0" class="tableHight">
      <b-table striped hover :items="Data" style="text-align: center;">
        <template v-slot:cell(avatar)="data">
          <img :src="data.item.avatar" height="70vh" />
        </template>
      </b-table>
    </template>
    <template v-else>
      <div>
        <span>Loading...</span>
        <Transition appear>
          <BaseIcon :class="$style.loadingIcon" name="sync" spin />
        </Transition>
      </div>
    </template>
  </div>
</template>

<style lang="scss" module>
.tableHight {
  height: 10vh;
}
</style>
