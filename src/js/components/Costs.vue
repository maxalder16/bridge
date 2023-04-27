<template>
    <div v-cloak class="costsWrap">
        <div>
            Costs goes here
            <button @click="nextStage">Continue</button>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'stage',
    ],
    data() {
        return {
            currentStage: this.stage
        }
    },
    methods: {
        nextStage(){
            this.currentStage = "question_1";
            this.$emit('callEvent', this.currentStage);
        }
    },
};
</script>