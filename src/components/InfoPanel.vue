<template>
  <div class="info-panel">
    <div class="panel-title" v-if="title">{{ title }}</div>
    <div class="panel-content" v-if="items">
      <div class="panel-item" :class="items.length == 1 ? 'lonely' : ''" v-for="(item, index) in items" :key="index">
        <div class="panel-item-label" :class="labelPosition">{{ item.label || '-' }}：</div>
        <div class="panel-item-value">
          <el-row class="panel-item-tags" v-if="item.type == 'tag'">
            <el-tag
              v-for="(tag, index) in item.value"
              :key="index"
              :type="tag.type || 'default'"
              :size="tag.size || 'mini'"
              >{{ tag.text || '-' }}</el-tag
            >
          </el-row>
          <el-row class="panel-item-btns" v-else-if="item.type == 'button'">
            <el-button
              :size="btn.size || 'mini'"
              v-for="(btn, index) in item.value"
              :key="index"
              :type="btn.type || 'text'"
              >{{ btn.text || '-' }}</el-button
            >
          </el-row>
          <span v-else :style="{ color: item.color, font: item.font }">{{ item.value || '-' }}</span>
          <el-button
            v-if="item.copy"
            v-clipboard:copy="item.value"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            type="text"
            size="mini"
            icon="el-icon-document-copy"
            style="margin-left: 5px;"
          ></el-button>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'info-panel',
  props: {
    labelPosition: {
      type: String,
      value: 'right'
    },
    title: {
      type: String,
      value: ''
    },
    items: {
      type: Array,
      value: []
    }
  },
  methods: {
    onCopy() {
      this.$message.success('复制成功')
    },
    onError(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.info-panel {
  margin-top: 10px;
  padding: 1px 20px 20px;
  background-color: #fff;
  .panel-title {
    margin-top: 15px;
    font-size: 20px;
    color: #333;
    line-height: 2;
  }
  .panel-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .panel-item {
      margin: 10px 0;
      width: 50%;
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #505050;
      .panel-item-label {
        flex: none;
        width: 30%;
        text-align: right;
        &.left {
          text-align: left;
        }
      }
      .panel-item-value {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        word-break: break-all;
        .el-tag,
        .el-button {
          margin-right: 5px;
        }
      }
      &.lonely {
        width: 100%;
        .panel-item-label {
          width: 15%;
        }
      }
    }
  }
}
</style>
