<template>
  <div class="wrapper">
    <tabs
      :tab-name="['我要求助', '我是志愿者']"
      :tab-icon="['chat', 'favorite']"
      plain
      nav-pills-icons
      color-button="primary"
    >
      <!-- here you can add your content for tab-content -->
      <template slot="tab-pane-1">
        <md-field>
          <label>输入短语</label>
          <md-input v-model="textarea"></md-input>
        </md-field>
        <md-button class="md-rose" @click="onSubmit">求助</md-button>
      </template>
      <template slot="tab-pane-2">
        <table>
          <tr>
            <th>日期</th>
            <th>语句</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>2020/4/1</td>
            <td>你在多久这等了？</td>
            <td>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </td>
          </tr>
          <tr>
            <td>2020/5/3</td>
            <td>今天孩子八年了</td>
            <td>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </td>
          </tr>
          <tr>
            <td>2021/11/4</td>
            <td>你帮助给了我很多</td>
            <td>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </td>
          </tr>
          <tr>
            <td>20221/12/5</td>
            <td>你能棒忙一个我吗</td>
            <td>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </td>
          </tr>
        </table>
      </template>
    </tabs>
  </div>
</template>

<script>
import { Tabs } from "@/components";

export default {
  components: {
    Tabs
  },
  data() {
    return {
      textarea: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.textarea !== "") {
        this.$message.success("提交成功！！");
        this.textarea = "";
      } else {
        this.$message.error("请输入语句 :）");
      }
    }
  }
};
</script>

<style lang="css">
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
