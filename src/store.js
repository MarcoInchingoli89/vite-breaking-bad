import {
    reactive
} from 'vue'

export const store = reactive({
    api_url: 'https://www.breakingbadapi.com/api/characters',
    characters: null,
})