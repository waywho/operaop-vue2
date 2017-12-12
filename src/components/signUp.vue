<template>
  <div class="signup">
  	<div class="signup-inner">
	  	<h1>Create Profile</h1>
		<div class="strong subheadline">Create your account, and start connecting today.</div>
		<keep-alive>
	  		<component :is="component" v-on:takeStep="updateProfile($event)" v-on:saveData="saveProfile($event)" class="signup-content"></component>
	  	</keep-alive>
  	</div>
  </div>
</template>

<script>
import signUpCredentials from './signUpCredentials'
import signUpProfileType from './signUpProfileType'
import signUpDetails from './signUpDetails'
import signUpSocials from './signUpSocials'
import signUpPhotos from './signUpPhotos'
import signUpArtistConnections from './signUpArtistConnections'
import signUpCompanyConnections from './signUpCompanyConnections'
import signUpComplete from './signUpComplete'
import nextLastStep from './nextLastStep'

export default {
  name: 'signUp',
  components: {
  	'signUpCredentials': signUpCredentials,
 	'signUpProfileType': signUpProfileType,
 	'signUpDetails': signUpDetails,
 	'signUpSocials': signUpSocials,
 	'signUpPhotos': signUpPhotos,
 	'signUpArtistConnections': signUpArtistConnections,
 	'signUpCompanyConnections': signUpCompanyConnections,
 	'signUpComplete': signUpComplete,
 	'next-last-step': nextLastStep
  },
  data () {
    return {
      component: "signUpCredentials",
      newProfile: {},
      currentStep: 0,
      signUpSteps: [
      	  	'signUpCredentials',
		 	'signUpProfileType',
		 	'signUpDetails',
		 	'signUpPhotos',
		 	'signUpSocials',
		 	'signUpArtistConnections',
		 	'signUpComplete'
      ]
    }
  },
  methods: {
  	updateProfile: function(object) {
  	  this.currentStep += object.theStep	
      this.component = this.signUpSteps[this.currentStep]
      this.newProfile = Object.assign({}, this.newProfile, object.newData)
    },
    saveProfile: function(object) {
      this.component = object.theStep
      this.newProfile = Object.assign({}, this.newProfile, object.newData)
      // add setter to add new profile to database
      // if successful
      this.currentStep += object.theStep	
      this.component = this.signUpSteps[this.currentStep]
    }
  },
  created() {
  	this.currentStep = this.signUpSteps.indexOf(this.component)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup {
	width: 100%;
	height: 100%;
	/*grid-area: main;*/
	text-align: center;
}

.signup-headline {
	margin-top: 130px;
}

.signup-inner {
	background: white;
	margin: 50px auto 130px;
	min-height: 600px;
	width: 63%;
	max-width: 792px;
	text-align: center;
	padding: 65px 8%;
}



/*component css*/
.subheadline {
	margin-bottom: 65px;
}

.signup-input {
	margin-bottom: 34px;
}

.signup-content {
	text-align: left;
}

@media screen and (max-width: 1024px) {
	.signup-inner {
		background: white;
		margin: 50px auto;
		min-height: 600px;
		width: 90%;
		grid-area: main;
		text-align: center;
		padding: 65px 100px;
	}

}

@media screen and (max-width: 46rem) {
	.signup-inner {
		background: white;
		margin: 50px auto;
		min-height: 600px;
		width: 100%;
		grid-area: main;
		text-align: center;
		padding: 65px 25px;
	}

}
</style>
