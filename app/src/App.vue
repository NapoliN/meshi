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
      <v-container>
        <v-row class="mt-3">
          <h1>一覧</h1>
        </v-row>
        <v-row class="mb-3">
          <hr :color="$vuetify.theme.themes.light.colors.primary" width="100%">
        </v-row>
        <v-row>
          <v-col v-for="shop in shops" cols="4">
            <ShopCard :shop="shop"></ShopCard>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NoImage from "./assets/NoImage.png?url";
import ShopCard from "./components/ShopCard.vue";
import Shops from "./assets/shops.json";

export default {
  name: "App",
  components:{
    ShopCard
  },
  data: () => ({
    shops: Shops,
    NoImage,
    drawer: false,
  }),
};
</script>

<style>
.custom-bg {
  background: rgb(var(--v-theme-base)) !important;
}
</style>
