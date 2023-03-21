<template>
<v-container>
    <v-row>
          <v-col cols="3">
            <v-sheet elevation="3">
                <v-list rounded="lg">
                <v-list-item link>
                  <v-icon icon="mdi-map-marker"></v-icon>{{ this.detail.area }}
                </v-list-item>
                

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey-lighten-4"
                  @click="router_back"
                >
                  <v-list-item-title>
                    戻る
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet color="secondary3">
              <v-container>
                <v-row>
                  <v-col>
                    <h1>{{ this.detail.name }}</h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-img :src="render_img(this.detail.image)" cover class="text-white"> </v-img>
                  </v-col>
                  <v-col cols="4">
                    <v-container>
                      <v-row>
                        <h2>量:★★★</h2>
                        <h2></h2>
                      </v-row>
                    </v-container>
                    <p>{{ this.detail.description }}</p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <iframe :src=this.detail.map width="66%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </v-col>
                </v-row>
              </v-container>
                
                
            </v-sheet>
            
          </v-col>
        </v-row>
</v-container>
</template>

<script>
import Shops from "@/assets/shops.json";
import NoImage from "@/assets/NoImage.png?url";

export default {
    name: "Details",
    components:{
        
    },
    data: () => ({
        name: "",
        detail: {}
    }),
    created(){
        this.name = this.$route.query.name
        this.detail = Shops.find((v) => {
            return v.name == this.name
        })
    },
    methods: {
        render_img : (src) => {
            if(src == null){
                return NoImage
            }
            return "./img/" + src;
        },
        router_back(){
          this.$router.back()
        }
    }
    };
</script>