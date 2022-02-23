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
                  <form>
                    <md-field>
                      <label>中文（简体）</label>
                      <md-textarea
                        v-model="textarea"
                        md-counter="100"
                      ></md-textarea>
                    </md-field>
                  </form>
                  <form>
                    <md-field>
                      <label>中文（已纠正）</label>
                      <md-textarea v-model="textarea"></md-textarea>
                    </md-field>
                  </form>
                  <br />
                  <md-content>手语</md-content>
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
      textarea: null
    };
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
