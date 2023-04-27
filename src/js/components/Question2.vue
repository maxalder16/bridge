<template>
    <div v-cloak class="questionWrap">
        <div>
            Question 2 goes here
            <button @click="nextStage">Continue</button>
            <button @click="prevStage">Back</button>
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
            this.currentStage = "question_3";
            this.$emit('callEvent', this.currentStage);
        },
        prevStage(){
            this.currentStage = "question_1";
            this.$emit('callEvent', this.currentStage);
        }
    },
};
</script>