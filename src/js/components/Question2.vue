<template>
    <div v-cloak class="questionWrap">
        <div class="question">
            <h3>Calculating your total costs</h3>

            <div class="questionFlex">
                <div class="questionInner">
                    <div class="backArrow" @click="prevStage"></div>
                    <div class="textWrap">
                        <h4>Approximately how many unique purchase orders are raised per annum for these items?</h4>
                        <p><strong>2</strong> of <strong>3</strong></p>
                    </div>
                    <div class="nextArrow" @click="nextStage"></div>
                </div>
                <div class="questionValue">
                    <input value="1300" type="number"/>
                </div>
            </div>
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
            this.$emit('updateStage', this.currentStage);
        },
        prevStage(){
            this.currentStage = "question_1";
            this.$emit('updateStage', this.currentStage);
        }
    },
};
</script>