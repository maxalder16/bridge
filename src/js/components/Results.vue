<template>
    <div v-cloak class="resultsWrap">
        <div class="results">
            Results go here
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
        prevStage(){
            this.currentStage = "question_3";
            this.$emit('updateStage', this.currentStage);
        }
    }
};
</script>