<!--
 * @Author: chenhao
 * @Date: 2022-10-27 10:26:43
 * @LastEditTime: 2022-11-10 14:48:04
 * @FilePath: \maptalkstext\src\components\map\shipInfoCard.vue
 * @Description: 
-->
<template>
  <v-card ref="shipInfo">
    <!-- <v-card-title primary-title>
      <div v-if="shipInfo.properties">
        {{shipInfo.properties.mmsi}}
      </div>
    </v-card-title> -->
    <v-toolbar dense flat>
      <div v-if="shipInfo.properties">
        {{shipInfo.properties.mmsi}}
      </div>
      <v-spacer></v-spacer>
      123
      <!-- <v-btn>
        <v-icon>

        </v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-card-text>
      <slot></slot>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="lockBearing">视角锁定</v-btn>
      <v-btn color="success" @click="close">close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    shipInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  // watch: {
  //   shipInfo (val) {
  //     console.log(val)
  //   }
  // },
  data() {
    return {
      
    }
  },
  methods: {
    close() {
      this.$emit('close')
      // this.$refs.shipInfo.closeShipInfo()
    },
    lockBearing() {
      this.$emit('lockBearing', this.shipInfo)
    }
  },
}
</script>

<style>

</style>