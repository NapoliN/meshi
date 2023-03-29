<template>
<v-container>
    <v-row>
          <v-col cols="3">
            <v-sheet elevation="3">
                <v-list rounded="lg">
                <v-list-item>
                  <v-icon icon="mdi-map-marker"></v-icon>{{ this.detail.area }}
                </v-list-item>
                <v-divider class="my-2"></v-divider>
                <v-list-item>
                  <b>値段</b>：{{ message_price(this.detail.eval?.price) }}
                </v-list-item>
                <v-list-item>
                  <b>量</b>　： {{ message_amount(this.detail.eval?.amount) }}
                </v-list-item>
                <v-list-item>
                  <b>時間</b>： {{ message_time(this.detail.eval?.time) }}
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
                  <v-col cols="12" md="6">
                    <v-img :src="render_img(this.detail.image)" cover class="text-white"> </v-img>
                  </v-col>
                  <v-col cols="12" md="6">

                    <p>{{ this.detail.description }}</p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <iframe :src=this.detail.map width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        },
        message_price(price){
          switch(price){
            case 1:
              return '〜800円';
            case 2:
              return '800円〜1000円';
            case 3:
              return '1000円〜1200円';
            case 4:
              return '1200円〜1400円';
            case 5:
              return '1400円〜1800円';
            case 6:
              return '1800円〜';
            case 11:
              return '100円～200円/個'
            case 12:
              return '200円～300円/個'
            default:
              return '調査中';
          }
        },
        message_amount(amount){
          switch(amount){
            case 1:
              return '少なめ';
            case 2:
              return '腹八分';
            case 3:
              return 'ちょうどよい';
            case 4:
              return '満腹';
            case 5:
              return 'きつい';
            case 999:
              return '買う量に依る'
            default:
              return '調査中';
          }
        },
        message_time(time){
          switch(time){
            case 3 :
              return 'すぐ来る';
            case 2 :
              return 'ちょっと待つ'  
            case 1 :
              return '結構待つ'
            default:
              return '調査中';
          }
        }
    }
    };
</script>