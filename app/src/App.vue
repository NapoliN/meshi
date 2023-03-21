<template>
  <v-app id="inspire" class="custom-bg">
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="py-0"><v-btn size="ex-large" @click="toHome" class="py-0">飯ぶ</v-btn></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon @click="info_activator = !info_activator">
        <v-icon>mdi-dots-vertical</v-icon>
        <v-menu activator="parent">
          <v-card>
            <v-container>
              <v-row>
                <v-col>
                  <v-btn flat icon="mdi-github" href="https://github.com/NapoliN"></v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
      </v-menu>
      </v-btn>
      
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
            <v-list-item class="py-4" @click="toTop" value="all">一覧</v-list-item>
            <v-list-item class="py-4" @click="toArea" value="search_area"> 
              <v-icon class="px-2" icon="mdi-map-marker-circle"></v-icon>
              エリアから探す
            </v-list-item>
            <v-list-item class="py-4" @click="toGenre" value="search_genre">
              <v-icon class="px-2" icon="mdi-basket"></v-icon>
              ジャンルから探す
            </v-list-item>
            <v-list-item class="py-4" @click="toRandom">
              <v-icon class="px-2" icon="mdi-dice-multiple"></v-icon>
              今日のご飯(準備中)
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item class="pa-4" v-bind="props"> 旅行飯(準備中) </v-list-item>
            </template>
            <v-list-item class="pa-4"> 地域別 </v-list-item>
            <v-list-item class="pa-4"> 時期別 </v-list-item>
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
    info_activator : true
  }),
  methods: {
    toHome(){
      this.$router.push("/")
    },
    toTop(){
      this.$router.push("/ohokayama")
    },
    toArea(){
      this.$router.push("/ohokayama/area")
    },
    toGenre(){
      this.$router.push("/ohokayama/genre")
    },
    toRandom(){
      this.$router.push("/ohokayama/random")
    }
  }
};
</script>

<style>
.custom-bg {
  background: rgb(var(--v-theme-base)) !important;
}

.v-application{
    font-family: "M Plus 2" !important;
}
</style>

