<template>
  <div id="app">
    <EmptyLayout v-if="$route.meta.layout === 'empty'">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </EmptyLayout>
    <MainLayout v-else-if="$route.meta.layout === 'main'">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </MainLayout>
    <router-view v-else />
  </div>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
import EmptyLayout from '@/layout/EmptyLayout'
export default {
  name: 'app',
  components: {
    MainLayout,
    EmptyLayout
  }
}
</script>
