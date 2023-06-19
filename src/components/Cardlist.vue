<template>
    <div v-for="(cards, index) in cardList" class="card">
            <div class="img">
                <img :src="cardList[index].card_images[0].image_url" alt="cardList[index].name">
            </div>

            <div class="test-p">
                <p>"A" cell breeding device</p>
                <p>Alien</p>
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
            console.log(response.data.data)
            this.cardList = response.data.data;
            console.log(this.cardList[0].card_images[0].image_url);
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
        background-color: blue;
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

        div.test-p{
            p{
                margin: 1rem;
                text-align: center;
            }
        }
    }
</style>