<!--
 * @Author: chenhao
 * @Date: 2022-11-11 16:44:59
 * @LastEditTime: 2022-11-15 17:01:14
 * @FilePath: \maptalkstext\src\views\warnArea\index.vue
 * @Description: 
-->
<template>
  <div>
    <!-- <v-btn color="success" dark @click="$router.push({name: 'areaEdit'})">areaEdit</v-btn> -->
    <PageHeader :headertitle="title">
      <v-spacer></v-spacer>
      <!-- <v-text-field
        class="ma-2"
        v-model.trim="search"
        append-icon="mdi-search"
        label="泊位编号搜索"
        single-line
        hide-details
        clearable
      ></v-text-field> -->
      <v-btn
        class="ma-2"
        color="green"
        dark
        @click="$router.push({name: 'areaEdit'})"
      >
        <v-icon>mdi-add</v-icon>新增/编辑
      </v-btn>
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
          <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon
                color="info"
                v-on="on"
                @click="edit(item.berthId,'detail')"
              >view_quilt</v-icon>
            </template>
            <span>详细</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon
                color="primary"
                v-on="on"
                @click="edit(item.berthId,'edit')"
              >edit</v-icon>
            </template>
            <span>编辑</span>
          </v-tooltip> -->
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
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import { BACMEdgeApi as api } from '@/api/api'
export default {
  components: {
    PageHeader
  },
  data() {
    return {
      title: '监控区域管理',
      loading: false,
      headers: [
        { text: '名称', sortable: false, value: 'name' },
        { text: '描述', sortable: false, value: 'description' },
        { text: '标签', sortable: false, value: 'tags' },
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
    }
  }
}
</script>