<template>
    <div v-cloak class="appWrap">
        <div class="appInner">
            <costs :stage="stage" :costs="costs" :costs_total="costs_total" v-if="this.stage == 'costs'" @updateStage="updateStage" @toggleCost="toggleCost"></costs>
            <question1 :stage="stage" v-if="this.stage == 'question_1'" @updateStage="updateStage"></question1>
            <question2 :stage="stage" v-if="this.stage == 'question_2'" @updateStage="updateStage"></question2>
            <question3 :stage="stage" v-if="this.stage == 'question_3'" @updateStage="updateStage"></question3>
            <results :stage="stage" v-if="this.stage == 'results'" @updateStage="updateStage"></results>
            <complete v-if="this.stage == 'complete'"></complete>
        </div>
    </div>
</template>

<script>
import Costs from './Costs.vue';
import Question1 from './Question1.vue';
import Question2 from './Question2.vue';
import Question3 from './Question3.vue';
import Results from './Results.vue';
import Complete from './Complete.vue';

export default {
    data() {
        return {
            loaded: false,
            stage: "costs",
            costs: {},
            costs_total: 0
        };
    },
    mounted() {
        this.boot()
    },
    methods: {
        boot(){
            this.setInitialCosts();
            console.log("booted");
        },
        updateStage(stage) {
            this.stage = stage;
        },
        setInitialCosts() {
            //or get from headless API
            this.initCost("identify_requirements", "Identify Requirements", 6);
            this.initCost("request_quotation", "Request a quotation", 3);
            this.initCost("find_products", "Find products", 16);
            this.initCost("raise_order", "Raise an order", 6);
            this.initCost("authorise_sale", "Authorise sale", 21.55);
            this.initCost("pay_provider", "Pay provider", 13);
            this.initCost("deliver_product", "Deliver product", 4.3);
            this.initCost("invoice_check", "Invoice check", 6);
            this.initCost("place_order", "Place order", 6.5);
        },
        initCost(key, title, cost) {
            if (!this.costs[key]) {
                this.$set(this.costs, key, {});
            }
            
            this.$set(this.costs[key], 'key', key);
            this.$set(this.costs[key], 'title', title);
            this.$set(this.costs[key], 'active', false);
            this.updateCost(key, cost);
        },
        updateCost(key, cost) {
            if (!this.costs[key]) {
                this.$set(this.costs, key, {});
            }
            
            this.$set(this.costs[key], 'cost', cost);
        },
        toggleCost(key) {
            if (!this.costs[key]) {
                this.$set(this.costs, key, {});
            }

            if(this.costs[key].active){
                this.$set(this.costs[key], 'active', 0);
            }
            else {
                this.$set(this.costs[key], 'active', 1);
            }

            //update costs total
            let costs_total = 0;

            for (const key in this.costs) {
                if(this.costs[key].active){
                    costs_total += this.costs[key].cost;
                }
            }

            this.costs_total = costs_total;
        },
    },
    components: {
        Costs,
        Question1,
        Question2,
        Question3,
        Results,
        Complete
    }
};
</script>