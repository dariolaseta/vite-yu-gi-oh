<template>
    <main>
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

export default {
    name: "AppMain",
    components: {
        Cards,
        Cardlist
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
                background-color: red;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
            }
        }
    }
</style>