<template>

</template>

<script>
import axios from 'axios';
import Cards from "./Cards.vue"
import {store} from "../store.js"

export default {
    name: "Cardlist",
    data(){
        return {
            api: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
            cardList: [],
            store
        }
    },
    components:{
        Cards
    }
}
</script>

<style scoped lang="scss">
    
</style>