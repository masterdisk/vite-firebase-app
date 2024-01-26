import { ref } from "vue"

export function useFetch(url: string) {
    const data = ref(null)
    const error = ref(null)

    fetch(url)
        .then((res) => res.json())
        .then((res) => (data.value = res))
        .catch((err) => (error.value = err))
    return { data, error }
}
