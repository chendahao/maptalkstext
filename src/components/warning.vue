<!--
 * @Author: chenhao
 * @Date: 2022-10-13 11:53:39
 * @LastEditTime: 2022-10-14 10:45:07
 * @FilePath: \maptalkstext\src\components\warning.vue
 * @Description: 
-->
<template>
  <div style="position:relative;">
    <v-badge
      color="green"
      :content="mockWarning.length"
    >
      <v-menu
        offset-y
        transition="slide-y-transition"
        bottom
        @input="setMenuValue"
        :value="menuvalue"
        :close-on-click="closeOnClick"
        :close-on-content-click="closeOnContentClick"
      >
        <template v-slot:activator="{ on, attrs }">
          
            <v-btn
              color="indigo"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-alert-circle</v-icon>
            </v-btn>
        </template>
        <v-card width="450">
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-alert-circle</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>报警记录</v-list-item-title>
                <v-list-item-subtitle>报警记录</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-list>
            <v-list-item-group style="max-height:450px;overflow:auto">
              <template v-for="(item, index) in mockWarning">
                <v-list-item :key="`alarm-${index}`" :value="item">
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.type" class="text--primary"></v-list-item-title>
                      <v-list-item-subtitle
                        v-text="item.content"
                      ></v-list-item-subtitle>
                      <!-- <div class="text--primary" v-if="item.content">
                        {{item.content}}
                      </div> -->
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text>
                        <v-chip small>{{ item.dateTime | fromNow }}</v-chip>
                      </v-list-item-action-text>

                      <!-- <v-icon color="grey lighten-1">check_circle</v-icon> -->
                    </v-list-item-action>
                  </template>
                </v-list-item>
              </template> 
            </v-list-item-group>
          </v-list>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-badge>
  </div>
</template>

<script>
import { fromNow } from '@/utils/dateTimeFormat'
export default {
  data() {
    return {
      menuvalue: '',
      closeOnClick: true,
      closeOnContentClick: false,
      mockWarning: [
        { type: '超高告警', content: '船舶123 超高', dateTime: '2022-10-13 14:00' },
        { type: '超高告警', content: '船舶123 超高', dateTime: '2022-10-13 14:00' },
        { type: '超高告警', content: '船舶123 超高', dateTime: '2022-10-13 14:00' },
        { type: '超高告警', content: '船舶123 超高', dateTime: '2022-10-13 14:00' },
        { type: '超高告警', content: '船舶123 超高', dateTime: '2022-10-13 14:00' }
      ]
    }
  },
  filters: {
    fromNow
  },
  methods: {
    setMenuValue () {
      this.menuvalue = !this.menuvalue
    },
  }
}
</script>

<style scoped>

</style>