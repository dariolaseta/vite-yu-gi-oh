<template>
    <main>
        
        <AppSearch @select="findArchetype" @everything="findArchetype"/>
        <div class="container">
            <div class="cards-header">
                <div class="text">
                    <p>Found n cards</p>
                </div>
            </div>

            <div class="cards-container">
                <Cards />
            </div>
        </div>
    </main>
</template>
<script>
import Cards from "./Cards.vue";
import Cardlist from "./Cardlist.vue"
import AppSearch from "./AppSearch.vue"
import axios from "axios";
import {store} from "../store.js"

export default {
    name: "AppMain",
    components: {
        Cards,
        Cardlist,
        AppSearch
    },
    methods:{
        findArchetype(name = "everyArch"){
            if(name === "everyArch"){
                axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0`)
                    .then((response) => {
                        store.cardList = response.data.data
                    })
            } else {
                axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&archetype=${name}`)
                    .then((response) => {
                        store.cardList = response.data.data
                    })
            }
        }
    }
}
</script>
<style scoped lang="scss">
    main{

        div.container{
            background-color: white;

            height: 100%;
            width: 1200px;
            margin: 3rem auto 0;
            padding-top: 3rem;

            div.cards-header{
                display: flex;
                align-items: center;
                width: 80%;
                height: 50px;
                margin: 0 auto;
                background-color: #212529;
                
                div.text{
                    p{
                        margin-left: 1rem;
                    }
                }
            }

            div.cards-container{
                margin: 0 auto;
                width: 80%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
            }
        }
    }
</style>