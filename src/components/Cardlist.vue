<template>
    <div v-for="(cards, index) in store.cardList" class="card">
            <div class="img">
                <img :src="store.cardList[index].card_images[0].image_url" :alt="store.cardList[index].name">
            </div>

            <div class="card-names">
                <p>{{store.cardList[index].name}}</p>
                <p>{{store.cardList[index].archetype}}</p>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
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
    },

    created(){
        axios.get(this.api)
        .then((response) => {
            // per accedere all'url delle carte: response.data.data[0].card_images[0].image_url
            // response.data.data[0].name per accedere al nome della carta
            // response.data.data[0].archetype per l'archetipo
            this.store.cardList = response.data.data;
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
</script>

<style scoped lang="scss">
    div.card{
        width: calc(100% / 6);
        background-color: #d48f38;
        display: flex;
        flex-wrap: wrap;
        margin: 0 .5rem;

        div.img{
            height: 70%;
            width: 100%;

            img{
                width: 100%;
            }
        }

        div.card-names{
            height: 100px;
            p{
                margin: 1rem;
                text-align: center;
            }
        }
    }
</style>