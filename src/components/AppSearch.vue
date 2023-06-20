<template>
    <select v-model="archetypeArr" placeholder="seleziona">
        <option v-for="(option, index) in archetypeArr">
        {{ archetypeArr[index].archetype_name }}</option>
    </select>

    
</template>

<script>
import axios from 'axios';

export default {
    name: "AppSearch",
    data(){
        return{
            archetypeApi: "https://db.ygoprodeck.com/api/v7/archetypes.php",
            archetypeArr: []
        }
    },
    created(){
        axios.get(this.archetypeApi).then((response) =>{
            //per accedere al nome dell'archetipo: response.data[0].archetype_name
            this.archetypeArr = response.data.slice(0, 20)
            console.log(this.archetypeArr);
        })
    }
}
</script>

<style scoped lang="scss">
    
</style>