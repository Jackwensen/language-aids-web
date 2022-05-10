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
                  <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="请求帮助" name="1">
                      <div>
                        你能帮我一个忙吗
                      </div>
                      <el-divider></el-divider>
                      <div>
                        麻烦你帮帮我吧
                      </div>
                      <el-divider></el-divider>
                      <div>
                        可以用一下你的电话吗
                      </div>
                      <el-divider></el-divider>
                      <div>
                        这里的地址/wifi密码是什么？
                      </div>
                      <el-divider></el-divider>
                      <div>
                        你在这等了多久了？
                      </div>
                    </el-collapse-item>
                    <el-collapse-item title="购物" name="2">
                      <div>
                        您要买什么？
                      </div>
                      <el-divider></el-divider>
                      <div>
                        这个多少钱？这个打折吗？
                      </div>
                      <el-divider></el-divider>
                      <div>
                        便宜一点儿行吗
                      </div>
                      <el-divider></el-divider>
                      <div>
                        还有别的颜色的吗？
                      </div>
                      <el-divider></el-divider>
                      <div>
                        这是什么材料的?
                      </div>
                      <el-divider></el-divider>
                      <div>
                        我喜欢这条裤子，可以试试吗？
                      </div>
                    </el-collapse-item>
                    <el-collapse-item title="告别" name="3">
                      <div>时间过得真快</div>
                      <el-divider></el-divider>
                      <div>
                        这是一个小礼物,请收下
                      </div>
                      <el-divider></el-divider>
                      <div>
                        你给了我很多帮助.
                      </div>
                      <el-divider></el-divider>
                      <div>
                        感谢你为我们做的一切
                      </div>
                      <el-divider></el-divider>
                      <div>
                        希望以后还能再见面
                      </div>
                      <el-divider></el-divider>
                      <div>
                        能给我您的联系方式吗？
                      </div>
                    </el-collapse-item>
                    <el-collapse-item title="常见文言文" name="4">
                      <div>
                        温故而知新，可以为师矣。
                      </div>
                      <el-divider></el-divider>
                      <div>
                        学而不思则罔;思而不学则殆。
                      </div>
                      <el-divider></el-divider>
                      <div>
                        逝者如斯夫，不舍昼夜。
                      </div>
                      <el-divider></el-divider>
                      <div>
                        知之者不如好之者，好之者不如乐之者。
                      </div>
                      <el-divider></el-divider>
                      <div>
                        先天下之忧而忧，后天下之乐而乐
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </md-tab>

                <md-tab id="tab-posts" md-label="互助交流论坛" md-icon="build">
                  <p>
                    <md-icon>favorite</md-icon>
                    互助交流，共赢美好明天。
                  </p>
                  <div class="demo-image__placeholder">
                    <div class="block">
                      <el-image
                        style="width: 35%; height: 35%"
                        :src="src"
                      ></el-image>
                    </div>
                  </div>
                  <el-button type="info" @click="open">建设中</el-button>
                </md-tab>

                <md-tab
                  id="tab-space"
                  md-label="志愿服务空间"
                  md-icon="favorite"
                >
                  <p>
                    互助交流，共赢美好明天。
                  </p>
                  <br />
                  <nav-pills></nav-pills>
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
import NavPills from "./NavPillsSection";

export default {
  components: {
    NavTabsCard,
    NavPills
  },
  data() {
    return {
      textarea: "",
      modifiedText: "",
      list: null,
      listLoading: false,
      src: "http://pic.616pic.com/ys_b_img/00/19/43/gitbDmOJLS.jpg",
      activeName: "1"
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
    },
    open() {
      this.$alert("论坛正在建设中", "提示：", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `互助交流论坛正在建设中`
          });
        }
      });
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
