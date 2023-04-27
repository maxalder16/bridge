<template>
    <div v-cloak class="questionWrap">
        <div class="question">
            <h3>Calculating your total costs</h3>

            <div class="questionFlex">
                <div class="questionInner">
                    <div class="backArrow" @click="prevStage"></div>
                    <div class="textWrap">
                        <h4>Approximately how many suppliers are you using for industrial supplies?</h4>
                        <p><strong>3</strong> of <strong>3</strong></p>
                    </div>
                    <div class="nextArrow" @click="nextStage"></div>
                </div>
                <div class="questionValue">
                    <input value="30" type="number"/>
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
            this.currentStage = "results";
            this.$emit('updateStage', this.currentStage);
        },
        prevStage(){
            this.currentStage = "question_2";
            this.$emit('updateStage', this.currentStage);
        }
    },
};
</script>