<!--
 * @Author: chenhao
 * @Date: 2022-11-16 09:34:08
 * @LastEditTime: 2022-11-17 11:28:30
 * @FilePath: \maptalkstext\src\views\alarmPolicy\edit.vue
 * @Description: 
-->
<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">{{ formTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-text-field
          label="策略名称"
          v-model="item.name"
        ></v-text-field>
        <v-autocomplete
          label="输出设备"
          :items="outputs"
          v-model="item.outputs"
          item-value="type"
          item-text="description"
          multiple
          small-chips
        ></v-autocomplete>
        <v-text-field
          label="输出内容"
          v-model="item.template"
        ></v-text-field>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="close">取消</v-btn>
      <v-btn color="success" @click="saveItem">保存</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    editedItem: {
      type: Object,
      default() {
        return {}
      }
    },
    outputs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
    }
  },
  watch: {

  },
  created() {
    this.item = Object.assign({}, this.editedItem)
    console.log(this.item)
  },
  computed: {
    formTitle () {
      return this.editedItem.id === '-1' ? '新增报警策略' : '编辑报警策略'
    },
  },
  methods: {
    close () {
      this.$emit('close')
    },
    saveItem () {
      this.$emit('saveItem', this.item)
    }
  },
}
</script>