<template>
  <v-app id="inspire" class="custom-bg">
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>飯ぶ</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-app-bar>
    <v-navigation-drawer
        app
        v-model="drawer"
        color="secondary3"
      >
      <v-list density="compact" nav class="px-0">
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item class="py-4" v-bind="props"> 大岡山飯 </v-list-item>
            </template>
            <v-list-item class="py-4" value="all">一覧</v-list-item>
            <v-list-item class="py-4" value="search_area"> 
              <v-icon class="px-2" icon="mdi-map-marker-circle"></v-icon>
              エリアから探す
            </v-list-item>
            <v-list-item class="py-4" value="search_genre">
              <v-icon class="px-2" icon="mdi-basket"></v-icon>
              ジャンルから探す
            </v-list-item>
            <v-list-item class="py-4">
              <v-icon class="px-2" icon="mdi-dice-multiple"></v-icon>
              今日のご飯(準備中)
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item class="pa-4" v-bind="props"> 旅行飯 </v-list-item>
            </template>
            <v-list-item class="pa-4" value="trip_area"> 地域別 </v-list-item>
            <v-list-item class="pa-4" value="trip_time"> 時期別 </v-list-item>
          </v-list-group>
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
