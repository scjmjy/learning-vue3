<template>
    <div>
        Hellow, Vue 3! {{ state.count }}
    </div>
</template>

<script>
// import { reactive } from 'vue';

export default {
    data() {
        return {
            state: { count: 0 },
        };
    },
    created() {
        setInterval(() => {
            this.state.count++;
        }, 200);
    },
    // setup() {
    //     const state = reactive({
    //         count: 0,
    //     });
    //     return {
    //         state,
    //     };
    // },
};
</script>

<style lang="scss" scoped>

</style>
