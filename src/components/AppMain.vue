<template>
    <main>
        <div class="container">
            <div class="cards-header">
                <div class="text">
                    <p>Found n cards</p>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: "AppMain"
}
</script>
<style scoped lang="scss">
    main{

        div.container{
            background-color: white;
            display: flex;
            justify-content: center;
            height: 900px;
            width: 1200px;
            margin: 3rem auto 0;

            div.cards-header{
                display: flex;
                align-items: center;
                width: 80%;
                height: 50px;
                margin-top: 3rem;
                background-color: #212529;
                
                div.text{
                    p{
                        margin-left: 1rem;
                    }
                }
            }
        }
    }
</style>