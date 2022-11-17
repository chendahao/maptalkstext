<!--
 * @Author: chenhao
 * @Date: 2022-11-11 16:44:59
 * @LastEditTime: 2022-11-17 16:03:17
 * @FilePath: \maptalkstext\src\views\profile\index.vue
 * @Description: 设备管理
-->
<template>
  <div>
    <PageHeader :headertitle="title">
      <v-spacer></v-spacer>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            新增
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in deviceTypes"
            :key="index"
          >
            <v-list-item-title @click="addItem(item.type)">{{ item.description }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
      <v-toolbar dense flat class="mb-2">
        <v-tabs
          v-model="deviceType"
        >
          <v-tab v-for="(item, index) in deviceTypes" :key="index" :href="`#${item.type}`">{{item.description}}-{{item.type}}</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
      </v-toolbar>
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
            @click="getTypeProfile(deviceType)"
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
      <profileEdit v-if="isShow" :editedItem="editedItem" v-on:close="closeDialog" v-on:saveItem="saveItem"></profileEdit> 
    </v-dialog>
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import { BACMEdgeApi as api } from '@/api/api'
import profileEdit from './edit.vue'
import fileMixin from '@/mixins/fileMixin'
import dayjs from 'dayjs'
export default {
  components: {
    PageHeader,
    profileEdit
  },
  mixins: [
    fileMixin
  ],
  data() {
    return {
      title: '设备配置管理',
      loading: false,
      isShow: false,
      headers: [
        { text: '名称', sortable: false, value: 'name' },
        { text: '描述', sortable: false, value: 'description' },
        { text: '标签', sortable: false, value: 'tags' },
        { text: '操作', sortable: false, align: 'center', value: 'actions' }
      ],
      deviceTypes: [],
      editedItem: {},
      deviceType: null,      
      tableData: [],
      setheight: window.innerHeight - 210,
    }
  },
  mounted () {
    const that = this
    window.onresize = function temp () {
      that.setheight = window.innerHeight - 210
      // page 59; pageheader 64;pageheader dense 48;container padding top bottom 12px; appbar 64
    }
  },
  destroyed () {
    window.onresize = ''
  },
  created () {
    this.getType()
  },
  watch: {
    deviceType(val) {
      this.getTypeProfile(val)
    }
  },
  methods: {
    getType () {
      const client = new api.ProfileClient('', this.$axios)
      client.devices()
        .then(res => {
          this.deviceTypes = res
        })
    },
    getTypeProfile (type) {
      if (this.loading) return
      const client = new api.ProfileClient('', this.$axios)
      this.loading = true
      // HLR | aIS | CAM LED SPK VHF WLG
      if (type === 'HLR') {
        client.hLRAll()
          .then(res => {
            this.headers = [
              { text: '地址', sortable: false, value: 'address' },
              { text: '描述', sortable: false, value: 'description' },
              { text: '标签', sortable: false, value: 'tags' },
              { text: '采样频率', sortable: false, value: 'frequency' },
              { text: '设备安装位置', sortable: false, value: 'location' },
              { text: '限高杆基准高度', sortable: false, value: 'refHeight' },
              { text: '操作', sortable: false, align: 'center', value: 'actions' }
            ]
            this.tableData = res
          })
          .finally(() => this.loading = false)
      } else if (type === 'AIS') {
        client.aISAll()
          .then(res => {
            this.headers = [
              { text: '地址', sortable: false, value: 'address' },
              { text: '描述', sortable: false, value: 'description' },
              { text: '标签', sortable: false, value: 'tags' },
              { text: '接收范围', sortable: false, value: 'bBox' },
              { text: '操作', sortable: false, align: 'center', value: 'actions' }
            ]
            this.tableData = res
          })
          .finally(() => this.loading = false)
      } else if (type === 'CAM' || type === 'LED' || type === 'SPK' || type === 'VHF' || type === 'WLG') {
        let api = ''
        switch (type) {
          case 'CAM': api = client.cAMAll()
          break;
          case 'LED': api = client.lEDAll()
          break;
          case 'SPK': api = client.sPKAll()
          break;
          case 'VHF': api = client.vHFAll()
          break;
          case 'WLG': api = client.wLGAll()
          break;
        }
        api.then(res => {
            this.headers = [
              { text: '地址', sortable: false, value: 'address' },
              { text: '描述', sortable: false, value: 'description' },
              { text: '标签', sortable: false, value: 'tags' },
              { text: '设备安装位置', sortable: false, value: 'location' },
              { text: '操作', sortable: false, align: 'center', value: 'actions' }
            ]
            this.tableData = res
          })
          .finally(() => this.loading = false)
      }
    },
    edit (item) {
      const deviceType = this.deviceType
      if (!deviceType) return
      this.editedItem = item
      this.isShow = true
    },
    closeDialog () {
      this.isShow = false
    },
    saveItem (editItem) {
      let isAdd = false
      if (editItem.id === '-1') {
        isAdd = true
        editItem.id = dayjs().unix().toString()
      }
      let saveapi = ''
      // console.log(editItem.location)
      // console.log(editItem.bBox)
      if (editItem.location && typeof(editItem.bBox) !== 'object') editItem.location = JSON.parse('[' + editItem.location + ']')
      if (editItem.bBox && typeof(editItem.bBox) !== 'object') editItem.bBox = JSON.parse('[' + editItem.bBox + ']')
      const type = editItem.type
      const client = new api.ProfileClient('', this.$axios)
      switch (type) {
        case 'HLR': saveapi = isAdd === true ? client.hLRPOST2(editItem) : client.hLRPUT(editItem)
        break;
        case 'AIS': saveapi = isAdd === true ? client.aISPOST(editItem) : client.aISPUT(editItem)
        break;
        case 'CAM': saveapi = isAdd === true ? client.cAMPOST(editItem) : client.cAMPUT(editItem)
        break;
        case 'LED': saveapi = isAdd === true ? client.lEDPOST(editItem) : client.lEDPUT(editItem)
        break;
        case 'SPK': saveapi = isAdd === true ? client.sPKPOST(editItem) : client.sPKPUT(editItem)
        break;
        case 'VHF': saveapi = isAdd === true ? client.vHFPOST(editItem) : client.vHFPUT(editItem)
        break;
        case 'WLG': saveapi = isAdd === true ? client.wLGPOST(editItem) : client.wLGPUT(editItem)
        break;
      }
      saveapi.then(() => {
        this.getTypeProfile(this.deviceType)
        this.$message({message: `${isAdd?'创建': '更新'}成功`, type: 'success'})
        this.closeDialog()
      })
      .catch(err => {
        this.showError(err)
      })
      .finally(() => {
      })
    },
    // 新增
    addItem (type) {
      this.deviceType = type
      this.editedItem = {
        type: type,
        id: "-1"
      }
      this.isShow = true
    },
    deleteitem (editItem) {
      let clientapi = ''
      const type = editItem.type
      const client = new api.ProfileClient('', this.$axios)
      switch (type) {
        case 'HLR': clientapi = client.hLRDELETE(editItem.id)
        break;
        case 'AIS': clientapi = client.aISDELETE(editItem.id)
        break;
        case 'CAM': clientapi = client.cAMDELETE(editItem.id)
        break;
        case 'LED': clientapi = client.lEDDELETE(editItem.id)
        break;
        case 'SPK': clientapi = client.sPKDELETE(editItem.id)
        break;
        case 'VHF': clientapi = client.vHFDELETE(editItem.id)
        break;
        case 'WLG': clientapi = client.wLGDELETE(editItem.id)
        break;
      }
      this.$confirm('确定要删除此设备吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          clientapi
            .then(() => {
              this.$message({message: '删除成功', type: 'success'})
              this.getTypeProfile()
            })
            .catch(err => {
              this.showError(err)
            });
        }).catch(() => {
        });
    },
    exportProfile () {
      const client = new api.ProfileClient('', this.$axios)
      client.export3()
        .then(res => {
          this.jsonToFile(res, '设备配置文件')
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
          const client = new api.ProfileClient('', this.$axios)
          client.import3(this.file)
            .then(res => {
              this.getTypeProfile()
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