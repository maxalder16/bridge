<template>
    <div v-cloak class="costsWrap">
        <div class="costs">
            <h3>Calculating your total costs</h3>

            <div class="costsFlex">
                <div class="costBubbleWrap" v-for="cost in costs">
                    <div class="costBubble" :class="(cost.active) ? 'active':''" @click="toggleCost(cost.key)">
                        <h5>{{ cost.title }}</h5>
                        <div class="estimate">
                            <div class="estimateText">Estimate</div>
                            <div class="estimateValue">{{ cost.cost | currency }}</div>
                        </div>
                    </div>
                </div>
                <div class="costBubbleWrap">
                </div>
                <div class="costTotalWrap">
                    <div class="totalBubble">
                        <h4>Total</h4>
                        <div class="totalAmount">{{ costs_total | currency }}</div>
                    </div>
                </div>
                <div class="costButtonWrap">
                    <button @click="nextStage" class="nextButton">Continue</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: [
        'stage',
        'costs',
        'costs_total'
    ],
    data() {
        return {
            currentStage: this.stage
        }
    },
    methods: {
        doThing() {
            console.log(this.costs);
        },
        nextStage(){
            this.currentStage = "question_1";
            this.$emit('updateStage', this.currentStage);
        },
        toggleCost(key){
            this.$emit('toggleCost', key);
        }
    },
    filters: {
        currency: function (value) {
            return '£' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
    }
};
</script>