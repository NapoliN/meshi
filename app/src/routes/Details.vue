<template>
<v-container>
    <v-row>
          <v-col cols="2">
            <v-sheet elevation="3">
                <v-list rounded="lg">
                <v-list-item link>
                  <v-icon icon="mdi-map-marker"></v-icon>{{ this.detail.area }}
                </v-list-item>
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-title>
                    List Item {{ n }}
                  </v-list-item-title>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey-lighten-4"
                >
                  <v-list-item-title>
                    Refresh
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14989.401215625141!2d139.6818817766185!3d35.61617091907855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f2.5!3m3!1m2!1s0x6018f5164fa3d47b%3A0xab369835b05291ac!2z44GK5aW944G_54S844GNIOS9kOeruQ!5e0!3m2!1sja!2sjp!4v1677773232197!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        }
    }
    };
</script>