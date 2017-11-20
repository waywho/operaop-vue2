export default{
	methods: {
	  	takeStep(step) {
	  		this.$emit('takeStep', { theStep: step, newAudition: this.newAudition });
	  	},
	  	saveAudition(step) {
	  		this.$emit('saveAudition', { theStep: step, newAudition: this.newAudition });
	  	}
	}
}
