const amlTable = () => import('@/views/aml-tables/')
const dataWash = () => import('@/views/aml-tables/data-wash/')

export default {
  path: 'aml-tables',
  name: 'amlTables',
  meta: {
    title: '复杂表格'
  },
  component: amlTable,
  children: [
    {
      path: 'dataWash',
      name: 'dataWash',
      meta: {
        title: '数据清洗'
      },
      component: dataWash,
      children: []
    }
  ]
}
