<template>
<v-container class="mt-3">
    <v-row justify="center" class="my-3">
        <v-sheet width="60%" color="secondary3">
            <v-container>
                <v-row justify="center">
                    <v-col cols="6">
                        <ShopCard :shop=shop></ShopCard>
                    </v-col>
                </v-row>
                
            </v-container>
        </v-sheet>
    </v-row>
    <v-row justify="center" align-content="center">
        <v-btn color="primary" class="ma-3 text-button" @click="choose_shop"><div>今日のご飯はココ！</div></v-btn>
    </v-row>
</v-container>
</template>

<script>
import ShopCard from "@/components/ShopCard.vue";
import {random,voidObject} from "@/funcs/functions.js"
import Shops from "@/assets/shops.json";

export default {
    data: () => ({
        shop : voidObject,
        t : 0
    }),
    components:{
        ShopCard
    },
    methods:{
        choose_shop : function(){
            const idx = random(Shops.length)
            this.shop = Shops[idx]
        }
    }
}
</script>