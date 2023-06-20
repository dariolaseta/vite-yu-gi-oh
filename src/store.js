import { reactive } from 'vue';

export const store = reactive({
    isLoading : true,
    archetypeArr: [],
    cardList: [],
    selectedEl: "",
});