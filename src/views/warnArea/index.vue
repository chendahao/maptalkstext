<!--
 * @Author: chenhao
 * @Date: 2022-11-11 16:44:59
 * @LastEditTime: 2022-11-17 15:32:22
 * @FilePath: \maptalkstext\src\views\warnArea\index.vue
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
        @click="$router.push({name: 'areaEdit'})"
      >
        <v-icon>mdi-add</v-icon>新增/编辑区域
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
        <template v-slot:item.policies="{ item }">
          <template v-for="">
            <!-- {{item.policies[0]}} -->
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <span 
                  v-on="on"
                >
                  {{item.policies[0].name}}
                  <v-icon
                    color="primary"
                  >mdi-information-outline</v-icon>
                </span>
              </template>
              <span>{{item.policies[0].template}}</span>
            </v-tooltip>
          </template>
        </template>
        <template v-slot:item.actions="{ item }">
          <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon
                color="info"
                v-on="on"
                @click="edit(item.berthId,'detail')"
              >view_quilt</v-icon>
            </template>
            <span>详细</span>
          </v-tooltip> -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon
                color="primary"
                v-on="on"
                @click="edit(item)"
              >mdi-pencil</v-icon>
            </template>
            <span>报警策略</span>
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
      <policyEdit v-if="isShow" :editedItem="editedItem" v-on:close="closeDialog" v-on:saveItem="saveItem"></policyEdit> 
    </v-dialog>
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import { BACMEdgeApi as api } from '@/api/api'
import fileMixin from '@/mixins/fileMixin'
import policyEdit from './policyEdit.vue'
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
      title: '监控区域管理',
      loading: false,
      isShow: false,
      headers: [
        { text: '名称', sortable: false, value: 'name' },
        { text: '描述', sortable: false, value: 'description' },
        { text: '标签', sortable: false, value: 'tags' },
        { text: '关联报警策略', sortable: false, value: 'policies' },
        { text: '操作', sortable: false, align: 'center', value: 'actions' }
      ],
      editedItem: {},
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
  },
  methods: {
    getdata () {
      if (this.loading) return
      const client = new api.AreaClient('', this.$axios)
      client.areaAll()
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
    deleteitem (item) {
      this.$confirm('确定要删除此区域吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const client = new api.AreaClient('', this.$axios)
          client.areaDELETE(item.id)
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
    edit (item) {
      this.editedItem = item
      this.isShow = true
    },
    // 单个规则添加
    saveItem (item) {
      console.log(item)
      const client = new api.AreaClient('', this.$axios)
      client.policyPOST(this.editedItem.id, item)
        .then(() => {
          this.$message({message: '更新成功', type: 'success'})
          this.getdata()
          this.closeDialog()
        })
    },
    closeDialog () {
      this.isShow = false
      this.editedItem = null
    },
    exportProfile () {
      const client = new api.AreaClient('', this.$axios)
      client.export2()
        .then(res => {
          this.jsonToFile(res, '区域配置文件')
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
          const client = new api.AreaClient('', this.$axios)
          client.import2(this.file)
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
  }
}
</script>