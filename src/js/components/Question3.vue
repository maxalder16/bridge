<template>
    <div v-cloak class="questionWrap">
        <div>
            Question 3 goes here
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
            this.currentStage = "results";
            this.$emit('callEvent', this.currentStage);
        },
        prevStage(){
            this.currentStage = "question_2";
            this.$emit('callEvent', this.currentStage);
        }
    },
};
</script>