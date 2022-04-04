<template>
  <el-table v-loading="listLoading" :data="list" border max-height="100">
    <el-table-column align="center" label="图片">
      <template slot-scope="scope">
        {{ scope.row.imgsrc }}
      </template>
    </el-table-column>
    <el-table-column label="字" width="50" align="center">
      <template slot-scope="scope">
        <span>{{ scope.row.meaning }}</span>
      </template>
    </el-table-column>
    <el-table-column label="含义" width="50" align="center">
      <template slot-scope="scope">
        <span>{{ scope.row.note }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    list: Object
  },
  data() {
    return {
      listLoading: true
    };
  }
};
</script>

<style>
.item {
  margin: 4px;
}

.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
</style>
