<template>
  	<div class="audition-planner">
		<div class="row between-sm">
			<div class="col-sm-10 col-xs-10">
				<h2>Audition Candidates</h2>
			</div>
			<div class="selection col-sm-2 col-xs-2">
				<span v-on:click="component = 'company-auditionCandidates'" class="selection-text-vertical">Audition Candidates</span>
				<span v-on:click="selectedAuditionees('company-auditionCandidates')" class="selection-text-vertical">Selected Candidates</span>
				<span v-on:click="selectedAuditionees('company-auditionPlanner')" class="selection-text-vertical">Audition Planner</span>
			</div>
		</div>
		<div class="selection row" v-if="component === 'company-auditionCandidates'">
				<span v-on:click="filterAuditionees('soprano')" class="selection-text-horizontal">Soprano</span>
				<span v-on:click="filterAuditionees('mezzo soprano')" class="selection-text-horizontal">Mezzo Soprano</span>
				<span v-on:click="filterAuditionees('tenor')" class="selection-text-horizontal">Tenor</span>
				<span v-on:click="filterAuditionees('baritone')" class="selection-text-horizontal">Baritone</span>
				<span v-on:click="filterAuditionees('bass')" class="selection-text-horizontal">Bass</span>
		</div>
		<keep-alive>
			<component :is="component" :auditionees="filteredAuditionees"></component>
		</keep-alive>
	</div>
</template>

<script>
import auditionCandidates from './auditionCandidates'
import auditionPlanner from './auditionPlanner'

export default {
  name: 'auditionPlanner',
  components: {
  	'company-auditionCandidates': auditionCandidates,
  	'company-auditionPlanner': auditionPlanner
  },
  data () {
    return {
    	component: 'company-auditionCandidates',
      	voiceType: "",
      	auditionees: [],
      	filteredAuditionees: []
    }
  },
  computed: {
	
  },
  methods: {
  	filterAuditionees: function(voiceType) {
  		this.voiceType = voiceType;
		this.filteredAuditionees = this.auditionees.filter((auditionee) => {
			return auditionee.voice_type.toLowerCase().match(voiceType);
		})
	},
  	selectedAuditionees: function(toolName) {
  		this.component = toolName;
  		console.log(this.auditionees)
  		this.filteredAuditionees = this.auditionees.filter((auditionee) => {
			return auditionee.selected
		})
  	}
  },
  created() {
  		this.auditionees = this.$store.state.company.auditionCandidates
  		this.filteredAuditionees = this.auditionees.slice(0, 8);
		// console.log(this.auditionees);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
