<template>
  <div class="row between-sm between-xs">
    <div v-on:click="takeStep('auditionCreator-stepOne')" class="col-sm-12 col-xs-12 last-step">
    <span class="icon-container">
      <i class="fa fa-chevron-left is-golden icon" aria-hidden="true"></i>
    </span>
    <span class="strong step-label">Step 2 of 2</span>
  </div>  
    <div class="col-sm-9 col-xs-12">

      <h3>Select Audition Type</h3>
      <div class='form-checkboxes'>
        <div class="inline-checkbox-group">
          <input id='general' type='radio' value='general' v-model='newAudition.type' />
          <label for='general'><span></span>General</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='specific' type='radio' value='specific' v-model='newAudition.type' />
          <label for='specific'><span></span>Specific</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='private' type='radio' value='private' v-model='newAudition.type' />
          <label for='private'><span></span>Private</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='youn-artist' type='radio' value='young artist program' v-model='newAudition.type' />
          <label for='youn-artist'><span></span>Young Artist Program</label>
        </div>
      </div>

      <h3>Select Voice Type</h3>
      <div class='form-checkboxes'>
        <div class="inline-checkbox-group">
          <input id='soprano' type='checkbox' value='soprano' v-model='newAudition.voiceType' />
          <label for='soprano'><span></span>soprano</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='mezzo-soprano' type='checkbox' value='mezzo soprano' v-model='newAudition.voiceType' />
          <label for='mezzo-soprano'><span></span>mezzo soprano</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='tenor' type='checkbox' value='tenor' v-model='newAudition.voiceType' />
          <label for='tenor'><span></span>tenor</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='baritone' type='checkbox' value='baritone' v-model='newAudition.voiceType' />
          <label for='baritone'><span></span>baritone</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='bass' type='checkbox' value='bass' v-model='newAudition.voiceType' />
          <label for='bass'><span></span>bass</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='counter-tneor' type='checkbox' value='counter tenor' v-model='newAudition.voiceType' />
          <label for='counter-tneor'><span></span>counter tenor</label>
        </div>
      </div>

      <h3>Select Opportunity Type</h3>
      <div class='form-checkboxes'>
        <div class="inline-checkbox-group">
          <input id='paid' type='radio' value='paid/contract' v-model='newAudition.opportunityType' />
          <label for='paid'><span></span>paid/contract</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='expenses' type='radio' value='honorarium/expenses' v-model='newAudition.opportunityType' />
          <label for='expenses'><span></span>honorarium/expenses</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='pay-to-sing' type='radio' value='pay to sing' v-model='newAudition.opportunityType' />
          <label for='pay-to-sing'><span></span>pay to sing</label>
        </div>
        <div class="inline-checkbox-group">
          <input id='training' type='radio' value='training programme' v-model='newAudition.opportunityType' />
          <label for='training'><span></span>training program</label>
        </div>
      </div>
      <h3>Description</h3>
      <textarea placeholder="Description"></textarea>
    
    </div>

    <div class="col-sm-3 col-xs-12">
      <div v-on:click="saveAudition('company-auditionPlanner')" class="next-step">
        <span class="strong">Publish Audition</span>
        <div class="smaller">Go to the planner to schedule singers.</div>
        <div class="icon-container">
          <i class="fa fa-chevron-right is-golden icon" aria-hidden="true"></i>
        </div>
      </div>
    </div>    

  </div>
</template>

<script>
import stepMixin from '../mixins/stepMixin';

export default {
  name: 'auditionCreatorStepTwo',
  components: {
  }, 
  props: {

  },
  data () {
    return {
      newAudition: {
        voiceType: []
      }
    }
  },
  methods: {
  },
  mixins: [stepMixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.next-step {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.step-label {
  display: inline-flex;
}

.last-step {
  cursor: pointer;
}

.next-step:hover > .icon-container, .next-step:hover .icon,
  .last-step:hover > .icon-container, .last-step:hover .icon {
  background-color: #cd9d2b;
  color: white;
}

.last-step {
  cursor: pointer;
}
</style>
