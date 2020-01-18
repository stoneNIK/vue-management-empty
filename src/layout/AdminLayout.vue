<template>
  <EmptyLayout>
    <div>
      <router-view />
    </div>
  </EmptyLayout>
</template>

<script>
import EmptyLayout from '@/layout/EmptyLayout'
export default {
  name: 'admin-layout',
  components: {
    EmptyLayout
  }
}
</script>

<style></style>
