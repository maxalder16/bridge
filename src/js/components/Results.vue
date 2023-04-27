<template>
    <div v-cloak class="resultsWrap">
        <div class="results">
            <h3>Calculating your total costs - your results</h3>
            <p>Results goes here</p>
            <button @click="prevStage">Back</button>
            <button @click="sendReport">Send me this report</button>
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
        prevStage(){
            this.currentStage = "question_3";
            this.$emit('updateStage', this.currentStage);
        },
        sendReport(){
            this.currentStage = "complete";
            this.$emit('updateStage', this.currentStage);
        }
    }
};
</script>