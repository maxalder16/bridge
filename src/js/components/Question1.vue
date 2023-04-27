<template>
    <div v-cloak class="questionWrap">
        <div class="question">
            Question 1 goes here
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
            this.currentStage = "question_2";
            this.$emit('updateStage', this.currentStage);
        },
        prevStage(){
            this.currentStage = "costs";
            this.$emit('updateStage', this.currentStage);
        }
    },
};
</script>