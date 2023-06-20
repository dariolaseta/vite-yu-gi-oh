<template>
    <select name="archetype">
            <option @click=" $emit('everything', 'everyArch')" value="archetype">Archetype</option>
            <option v-for="(archetype, index) in store.archetypeArr" @click=" $emit('select', archetype.archetype_name)">
                {{ archetype.archetype_name }}
            </option>
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