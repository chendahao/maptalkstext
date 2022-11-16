<!--
 * @Author: chenhao
 * @Date: 2022-11-16 09:34:08
 * @LastEditTime: 2022-11-16 17:01:49
 * @FilePath: \maptalkstext\src\views\profile\edit.vue
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
          label="地址"
          v-model="item.address"
        ></v-text-field>
        <v-text-field
          label="描述"
          v-model="item.description"
        ></v-text-field>
        <v-combobox
          label="标签"
          hint="选择或输入后回车创建标签"
          persistent-hint
          v-model="item.tags"
          multiple
          :items="tags"
          small-chips
        ></v-combobox>
        <!-- <v-text-field
          label="标签"
        ></v-text-field> -->
        <v-text-field
          v-if="editedItem.type ==='HLR'"
          name="frequency"
          v-model="item.frequency"
          label="采样频率"
        ></v-text-field>
        <!-- 只有ais 没有location -->
        <v-text-field
          v-if="editedItem.type !=='AIS'"
          name="location"
          v-model="item.location"
          label="设备安装位置"
        ></v-text-field>
        <!-- HLR -->
        <v-text-field
          v-if="editedItem.type ==='HLR'"
          name="frequency"
          v-model="item.frequency"
          label="采样频率"
        ></v-text-field>
        <v-text-field
          v-if="editedItem.type ==='HLR'"
          name="refHeight"
          v-model="item.refHeight"
          label="限高杆基准高度"
        ></v-text-field>
        <!-- AIS -->
        <v-text-field
          v-if="editedItem.type ==='AIS'"
          name="bBox"
          v-model="item.bBox"
          label="接收范围"
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
    }
  },
  data() {
    return {
      isShow: true,
      tags: []
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
      return this.editedIndex === '-1' ? '新增设备' : '编辑设备'
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