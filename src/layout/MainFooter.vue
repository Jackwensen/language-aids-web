<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://youth.pku.edu.cn/tzgg/zytz/357979.htm">
              北京大学第30届“挑战杯”项目
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}
        <md-icon>favorite</md-icon>
        “以字传情，为爱发声”——基于深度学习的聋哑人语言辅助工具项目·2022
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
