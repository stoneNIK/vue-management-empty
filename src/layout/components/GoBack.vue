<template>
  <div class="back-link" @click="goBack" title="返回上一页">
    <svg
      t="1578296427332"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2904"
      width="20"
      height="20"
    >
      <path
        d="M512 0C229.888 0 0 229.888 0 512s229.888 512 512 512 512-229.888 512-512S794.112 0 512 0z m0 915.968c-222.72 0-403.968-181.248-403.968-403.968S289.28 108.032 512 108.032s403.968 181.248 403.968 403.968-181.248 403.968-403.968 403.968z"
        p-id="2905"
        fill="#409EFF"
      />
      <path
        d="M586.24 364.544H425.984l13.824-13.824c13.824-13.824 13.824-36.864 0-50.688s-36.864-13.824-51.2 0L308.224 379.904c-13.824 13.824-13.824 36.864 0 50.688l80.384 80.384c7.168 7.168 16.384 10.752 25.6 10.752 9.216 0 18.432-3.584 25.6-10.752 13.824-13.824 13.824-36.864 0-50.688l-3.584-3.584h150.016c37.376 0 67.584 36.864 67.584 82.432s-30.208 82.432-67.584 82.432h-230.4c-25.6 0-46.08 20.48-46.08 46.08s20.48 46.08 46.08 46.08h230.912c88.576 0 160.256-78.336 160.256-175.104s-72.192-174.08-160.768-174.08z"
        p-id="2906"
        fill="#409EFF"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'goback',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.back-link {
  margin-right: 15px;
  display: flex;
  align-content: center;
  cursor: pointer;
}
</style>
