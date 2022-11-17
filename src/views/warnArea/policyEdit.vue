<!--
 * @Author: chenhao
 * @Date: 2022-11-17 11:45:12
 * @LastEditTime: 2022-11-17 15:20:33
 * @FilePath: \maptalkstext\src\views\warnArea\policyEdit.vue
 * @Description: 
-->
<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        关联报警策略
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-autocomplete
            v-model="selected"
            :items="list"
            chips
            color="blue-grey lighten-2"
            label="策略列表"
            item-text="name"
            item-value="id"
            multiple
          >
            <template v-slot:selection="data">
              <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                close
                @click="data.select"
                @click:close="remove(data.item)"
              >
                {{ data.item.name }}
              </v-chip>
            </template>
            <template v-slot:item="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-item-content v-text="data.item"></v-list-item-content>
              </template>
              <template v-else>
                <v-list-item-content>
                  <v-list-item-title v-html="data.item.name"></v-list-item-title>
                  <v-list-item-subtitle v-html="data.item.template"></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </template>
          </v-autocomplete>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="close">取消</v-btn>
        <v-btn color="success" @click="save">保存</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { BACMEdgeApi as api } from '@/api/api'
export default {
  props: {
    editedItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      list: [],
      selected: null
    }
  },
  created () {
    this.getdata()
    console.log(this.editedItem)
    if (this.editedItem.policies) {
      this.selected = [...this.editedItem.policies]
    }
  },
  methods: {
    getdata () {
      if (this.loading) return
      const client = new api.AlarmPolicyClient('', this.$axios)
      client.alarmPolicyAll()
        .then(res => {
          this.list = res
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
    remove (item) {
      const index = this.selected.indexOf(item.name)
      if (index >= 0) this.selected.splice(index, 1)
    },
    close () {
      this.$emit('close')
    },
    save () {
      this.$emit('saveItem', this.selected)
      console.log(this.selected)
    }
  }
}
</script>