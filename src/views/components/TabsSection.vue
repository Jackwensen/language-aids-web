<template>
  <div class="wrapper">
    <div id="nav-tabs">
      <div class="md-layout">
        <div class="md-layout-item md-small-size-100">
          <br />
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-primary" md-alignment="centered">
                <md-tab id="tab-home" md-label="语言辅助工具" md-icon="face">
                  <p>
                    帮助语言障碍人士更好地交流。
                  </p>
                  <el-form>
                    <el-form-item label="中文（简体）:"> </el-form-item>
                    <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      maxlength="50"
                      show-word-limit
                      v-model="textarea"
                    >
                    </el-input>
                    <md-button
                      class="md-primary md-round md-info"
                      @click="onSubmit"
                      >纠正</md-button
                    >
                    <el-form-item label="中文（已纠正）:">
                      <el-input
                        type="textarea"
                        v-model="modifiedText"
                        :disabled="true"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <br />
                  <div>
                    <el-divider
                      ><i class="el-icon-document-remove"></i
                      ><span>手语翻译</span></el-divider
                    >
                    <el-table
                      :data="list"
                      style="width: 100%"
                      v-loading="listLoading"
                      border
                      highlight-current-row
                      max-height="600"
                    >
                      <el-table-column label="图片" align="center" width="250%">
                        <template slot-scope="scope">
                          <el-image
                            style="width: 100px; height: 100px"
                            :src="scope.row.imgsrc"
                          />
                        </template>
                      </el-table-column>
                      <el-table-column label="字" align="center" width="150%">
                        <template slot-scope="scope">
                          <span>{{ scope.row.meaning }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="含义" align="center" width="250%">
                        <template slot-scope="scope">
                          <span>{{ scope.row.note }}</span>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </md-tab>

                <md-tab id="tab-pages" md-label="日常语句模板" md-icon="chat">
                  <p>
                    海量交流模板，让交流不再是障碍。
                  </p>
                </md-tab>

                <md-tab id="tab-posts" md-label="互助交流论坛" md-icon="build">
                  <p>
                    互助交流，共赢美好明天。
                  </p>
                </md-tab>

                <md-tab
                  id="tab-space"
                  md-label="志愿服务空间"
                  md-icon="favorite"
                >
                  <p>
                    互助交流，共赢美好明天。
                  </p>
                </md-tab>
              </md-tabs>
            </template>
            <br />
          </nav-tabs-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
  components: {
    NavTabsCard
  },
  data() {
    return {
      textarea: "",
      modifiedText: "",
      list: null,
      listLoading: false
    };
  },
  methods: {
    onSubmit() {
      if (this.textarea !== "") {
        this.listLoading = true;
        fetch(`http://localhost:5000/text2signal/${this.textarea}`, {
          method: "get",
          headers: { "Content-Type": "application/json" }
        })
          .then(res => {
            return { data: res };
          })
          .then(response => {
            response.data.json().then(res => {
              this.list = res.data;
              this.modifiedText = res.corrected;
              console.log("text2signal:", res);
              this.listLoading = false;
            });
          });
      } else {
        this.$message.error("请输入语句 :）");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-content {
  width: 200px;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0.8px solid rgba(51, 46, 46, 0.609);
  border-radius: 10px;
}
</style>
