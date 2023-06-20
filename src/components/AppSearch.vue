<template>
    <select v-model="store.selectedEl" placeholder="seleziona" @change="filterArchetype">
        <option v-for="(option, index) in store.archetypeArr">
        {{ store.archetypeArr[index].archetype_name }}</option>
    </select>

    
</template>

<script>
import axios from 'axios';
import {store} from "../store.js"

export default {
    name: "AppSearch",
    components:{
    },
    data(){
        return{
            archetypeApi: "https://db.ygoprodeck.com/api/v7/archetypes.php",
            store
        }
    },
    methods:{
        filterArchetype(){
            if(this.store.selectedEl !== ""){
                console.log(this.store.cardList.filter((el) => el.archetype === this.store.selectedEl))
                return this.store.cardList.filter((el) => el.archetype === this.store.selectedEl)
            }else{
                console.log(this.store.cardList)
                return this.store.cardList
            }
        }
    },
    created(){
        axios.get(this.archetypeApi).then((response) =>{
            //per accedere al nome dell'archetipo: response.data[0].archetype_name
            this.store.archetypeArr = response.data.slice(0, 20)
            console.log(this.store.archetypeArr);
        })
    }
}
</script>

<style scoped lang="scss">
    
</style>