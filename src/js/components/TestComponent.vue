<template>
    <div v-cloak class="testComponentWrap">
        <div>
            Vue is installed
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'foo',
    ],
    data() {
        return {
            loaded: false,
        };
    },
    mounted() {
        this.boot()
    },
    methods: {
        boot(){
            console.log("booted");
        }
    }
};
</script>