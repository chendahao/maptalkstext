<!--
 * @Author: chenhao
 * @Date: 2022-11-15 11:46:59
 * @LastEditTime: 2022-11-17 16:07:05
 * @FilePath: \maptalkstext\src\views\alarmPolicy\index.vue
 * @Description: 
-->
<template>
  <div>
    <PageHeader :headertitle="title">
      <v-spacer></v-spacer>
      <v-btn
        class="ma-2"
        color="green"
        dark
        @click="addItem()"
      >
        <v-icon>mdi-add</v-icon>新增
      </v-btn>
      <v-btn
        class="ma-2"
        text
        @click="exportProfile"
      >
        导出配置文件
      </v-btn>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-2"
            text
            v-bind="attrs"
            v-on="on"
          >
            从配置文件导入
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <v-file-input
              ref="uploadplan"
              accept=".json"
              placeholder="选择要导入的文件"
              prepend-icon="mdi-paperclip"
              persistent-hint
              @change="addFile"
            ></v-file-input>
            <span class="text-red darken-1">
              * 从文件导入后将覆盖现有得配置
            </span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="importProfile">导入</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </PageHeader>
    <v-container fluid>
      <v-data-table
        :headers="headers"
        :items="tableData"
        class="elevation-1"
        :loading="loading"
        fixed-header
        hide-default-footer
        disable-pagination
        :height="setheight"
      >
        <template v-slot:item.actions="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon
                color="primary"
                v-on="on"
                @click="edit(item)"
              >mdi-pencil</v-icon>
            </template>
            <span>编辑</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon
                color="warning"
                v-on="on"
                @click="deleteitem(item)"
              >mdi-delete</v-icon>
            </template>
            <span>删除</span>
          </v-tooltip>
        </template>
        <template v-slot:no-data>
          当前没有数据或点击重试刷新
          <v-btn
            color="primary"
            @click="getdata"
          >重试</v-btn>
        </template>
      </v-data-table>
    </v-container>
    <v-dialog
      v-model="isShow"
      scrollable 
      persistent :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <policyEdit v-if="isShow" :outputs="outputs" :editedItem="editedItem" v-on:close="closeDialog" v-on:saveItem="saveItem"></policyEdit> 
    </v-dialog>
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import { BACMEdgeApi as api } from '@/api/api'
import policyEdit from './edit.vue'
import fileMixin from '@/mixins/fileMixin'
import { newGuid } from '@/components/utils/tool'
export default {
  components: {
    PageHeader,
    policyEdit
  },
  mixins: [
    fileMixin
  ],
  data() {
    return {
      title: '报警策略管理',
      isShow: false,
      loading: false,
      outputs: [],
      editedItem: {},
      headers: [
        { text: '名称', sortable: false, value: 'name' },
        { text: '输出设备', sortable: false, value: 'outputs' },
        { text: '输出内容', sortable: false, value: 'template' },
        { text: '操作', sortable: false, align: 'center', value: 'actions' }
      ],
      tableData: [],
      setheight: window.innerHeight - 153,
    }
  },
  mounted () {
    const that = this
    window.onresize = function temp () {
      that.setheight = window.innerHeight - 153
      // page 59; pageheader 64;pageheader dense 48;container padding top bottom 12px; appbar 64
    }
  },
  destroyed () {
    window.onresize = ''
  },
  created () {
    this.getdata()
    this.getType()
  },
  methods: {
    getdata () {
      if (this.loading) return
      const client = new api.AlarmPolicyClient('', this.$axios)
      client.alarmPolicyAll()
        .then(res => {
          console.log(res)
          this.tableData = res
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
    getType () {
      const client = new api.ProfileClient('', this.$axios)
      client.devices()
        .then(res => {
          this.outputs = res.filter(o => o.direction === 1)
        })
    },
    saveItem (editItem) {
      let isAdd = false
      if (editItem.id === '-1') {
        isAdd = true
        editItem.id = newGuid()
      }
      const client = new api.AlarmPolicyClient('', this.$axios)
      let saveapi = ''
      saveapi = isAdd === true ? client.alarmPolicyPOST(editItem) : client.alarmPolicyPUT(editItem.id, editItem)
      saveapi
        .then(() => {
          this.$message({message: `${isAdd?'创建': '更新'}成功`, type: 'success'})
          this.getdata()
        })
        .catch(err => {
          this.showError(err)
        })
    },
    edit (item) {
      this.editedItem = item
      this.isShow = true
    },
    addItem () {
      this.editedItem = {
        id: "-1"
      }
      this.isShow = true
    },
    closeDialog () {
      this.isShow = false
    },
    deleteitem (item) {
      this.$confirm('确定要删除此策略吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const client = new api.AlarmPolicyClient('', this.$axios)
          client.alarmPolicyDELETE(item.id)
            .then(() => {
              this.$message({message: '删除成功', type: 'success'})
              this.getdata()
            })
            .catch(err => {
              debugger
              console.log(err)
            });
        }).catch(() => {
        });
    },
    exportProfile () {
      const client = new api.AlarmPolicyClient('', this.$axios)
      client.export()
        .then(res => {
          this.jsonToFile(res, '报警策略文件')
        })
    },
    importProfile () {
      if (this.file.data === undefined) {
        this.$message('还没有选择要导入的文件')
        return
      }
      this.$confirm('确定导入此文件吗?导入后将覆盖原始配置', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const client = new api.AlarmPolicyClient('', this.$axios)
          client.import(this.file)
            .then(res => {
              this.getdata()
              this.$message({message: '导入成功', type: 'success'})
            })
            .catch(err => {
              this.showError(err)
            });
        }).catch(() => {
        });
    },
    showError(err) {
      console.error(err.response)
      const state = err.response.status
      if (state === 400) {
        this.$message('保存时出错-数据验证错误 400')
      } else if (state === 500) {
        this.$message('保存时出错-内部错误 500')
      } else {
        this.$message(`保存时出错-其他错误${state}`)
      }
    }
  }
}
</script>