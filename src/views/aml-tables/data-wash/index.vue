<template>
  <div>
    <el-table
      :data="tableData"
      :stripe="true"
      :border="true"
      max-height="200"
    >
      <template v-for="(item, index) in tableColumns">
        <template v-if="item.key === 'deletion_attr'">
          <el-table-column
            :key="index"
            :prop="item.key"
            :label="item.title"
          >
            <template slot-scope="scope">
              <el-select
                v-model="portTableOneData[index][item.key]"
                @change="handleDeletionAttrSelect(value, scope)"
              >
                <el-option
                  v-for="(_item, _index) in item"
                  :key="_index"
                  :label="_item.cnName"
                  :value="_item.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            :key="index"
            :prop="item.key"
            :label="item.title"
          ></el-table-column>
        </template>
      </template>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'dataWash',
  mounted () {
    this.init()
  },
  data () {
    return {
      portTableOneData: [],
      tableColumns: [
        {
          key: 'deletion_attr',
          title: '缺失值处理'
        },
        {
          key: 'handle_func',
          title: '处理方法'
        },
        {
          key: 'result',
          title: '替换为'
        },
        {
          key: 'handle_coloumns',
          title: '+'
        }
      ],
      tableData: [
        {
          deletion_attr: [
            {
              cnName: '缺失属性1',
              enName: 'delation_attr_1',
              value: '10'
            },
            {
              cnName: '缺失属性1',
              enName: 'delation_attr_1',
              value: '10'
            }
          ],
          handle_func: [
            {
              func_name: '替换',
              en_func_name: 'instead',
              value: 0
            },
            {
              func_name: '舍弃',
              en_func_name: 'throw_it',
              value: 1
            }
          ],
          result: 10
        }
      ]
    }
  },
  methods: {
    init () {
      this.initPortTableOneData()
    },
    initPortTableOneData () {
      this.portTableOneData = this.tableData.map((ov, oi) => {
        const keys = Object.keys(ov)
        if (ov === undefined) {
          let obj = {}
          keys.forEach(value => {
            obj[value] = ''
          })
          obj.rowIndex = 1
          return obj
        } else {
          let obj = {}
          keys.forEach(value => {
            obj[value] = ''
          })
          obj.rowIndex = 1
          return obj
        }
      })
      console.log(this.portTableOneData)
    },
    handleDeletionAttrSelect (value, row) {
      console.log(value, row)
    }
  }
}
</script>
<style lang="scss">

</style>
