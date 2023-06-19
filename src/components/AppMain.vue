<template>
    <main>
        <div class="container">
            <div class="cards-header">
                <div class="text">
                    <p>Found n cards</p>
                </div>
            </div>

            <div class="cards-container">
                <div class="card">
                    <div class="img">

                    </div>
                    <div class="test-p">
                        <p>"A" cell breeding device</p>
                        <p>Alien</p>
                    </div>
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
                height: 900px; //rimuovere
                background-color: red;
                display: flex;
                flex-wrap: wrap;

                div.card{
                    height: 300px;
                    width: 200px;
                    background-color: blue;

                    div.img{
                        height: 70%;
                        width: 100%;
                        background-color: black;
                    }

                    div.test-p{

                        p{
                            margin: 1rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>