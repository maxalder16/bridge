<template>
    <div v-cloak class="appWrap">
        <div>
            <costs :stage="stage" v-if="this.stage == 'costs'" @callEvent="updateStage"></costs>
            <question1 :stage="stage" v-if="this.stage == 'question_1'" @callEvent="updateStage"></question1>
            <question2 :stage="stage" v-if="this.stage == 'question_2'" @callEvent="updateStage"></question2>
            <question3 :stage="stage" v-if="this.stage == 'question_3'" @callEvent="updateStage"></question3>
            <results :stage="stage" v-if="this.stage == 'results'" @callEvent="updateStage"></results>
        </div>
    </div>
</template>

<script>
import Costs from './Costs.vue';
import Question1 from './Question1.vue';
import Question2 from './Question2.vue';
import Question3 from './Question3.vue';
import Results from './Results.vue';

export default {
    data() {
        return {
            loaded: false,
            stage: "costs" 
        };
    },
    mounted() {
        this.boot()
    },
    methods: {
        boot(){
            console.log("booted");
        },
        updateStage(stage) {
            this.stage = stage;
        }
    },
    components: {
        Costs,
        Question1,
        Question2,
        Question3,
        Results
    },
};
</script>