<template>
  <v-app id="inspire" class="custom-bg">
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>飯ぶ</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        app
        v-model="drawer"
        color="secondary3"
      >
      <v-list density="compact" nav class="px-0">
          <v-list-item class="pa-4" value="all">一覧</v-list-item>
          <v-list-item class="pa-4" value="search_area">エリアから探す</v-list-item>
          <v-list-item class="pa-4" value="search_genre">ジャンルから探す</v-list-item>
      </v-list>  
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
      
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
    drawer: false,
  }),
};
</script>

<style>
.custom-bg {
  background: rgb(var(--v-theme-base)) !important;
}
</style>
