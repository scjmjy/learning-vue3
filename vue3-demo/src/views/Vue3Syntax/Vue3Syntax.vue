<template>
    <div>
        <div>a: {{ myShallowRef.a }}</div>
        <div>nest.a: {{ myShallowRef.nest.a }}</div>
        <button @click="onShallowRefBtnClick">Increase Shallow Ref</button>
        <br />
        <div>a: {{ myShallowReact.a }}</div>
        <div>nest.a: {{ myShallowReact.nest.a }}</div>
        <button @click="onShallowReactBtnClick">Increase Shallow React</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, shallowRef, ref, watch, shallowReactive } from 'vue';

export default defineComponent({
    name: 'Vue3Syntax',
    props: {
        personName: {
            type: String,
            default: 'No Body',
        },
    },
    setup(props) {
        watch(
            () => props.personName,
            (newName, oldName) => {
                console.log('【vue3 - watch】 personName is changed:', `${oldName} -> ${newName}`);
            }
        );
        const myShallowRef = ref({
            a: 1,
            nest: {
                a: 1,
            },
        });
        const myShallowReact = shallowReactive({
            a: 1,
            nest: {
                a: 1,
            },
        });
        const onShallowRefBtnClick = () => {
            myShallowRef.value.a++;
            myShallowRef.value.nest.a++;
            // myShallowRef.value = {
            //     a: performance.now(),
            //     nest: {
            //         a: performance.now(),
            //     },
            // };
        };
        const onShallowReactBtnClick = () => {
            myShallowReact.nest.a++; // not reactive
        };
        return {
            myShallowReact,
            onShallowReactBtnClick,
            myShallowRef,
            onShallowRefBtnClick,
        };
    },
});
</script>

<style scoped></style>
