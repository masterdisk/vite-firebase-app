<script lang="ts" setup>
import { Ref, ref } from "vue"

// state
const firstName: Ref<string> = ref("Anonymous")
const age: Ref<number> = ref(0)

// methods
const changeTheName = (name: string): void => {
    firstName.value = name
}

// lifecycle hooks
</script>

<template>
    <div class="flex flex-col justify-center items-center space-y-5">
        <h1>{{ firstName }} {{ age }}</h1>
        <div class="w-full h-full bg-amber-500 flex flex-row items-center justify-center p-28 space-x-3">
            <button class="text-2xl font-bold border-2 border-black red p-3 flex rounded-full" @click="age--">-</button>
            <button class="text-2xl font-bold border-2 border-black red p-3 flex rounded-full" @click="age++">+</button>
        </div>
        <button @click="changeTheName('something :D')">Change the name to something</button>
    </div>
</template>

<style scoped></style>
