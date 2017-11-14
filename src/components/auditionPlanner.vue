<template>
  <div class="">
  	<div class="audition-datetime">
  		<h4>Audition Time</h4>
	  	<input class="audition-date" id="date" type="date" />
	  	<input class="audition-time" id="time" type="time" />
	  	<input class="audition-time" id="time" type="time" />
  	</div>

  	<div class="row">
  		<div class="col-sm-3">
  			<h4>Select City</h4>
  			<textarea placeholder="Enter Address"></textarea>
  			<br />
  			<div class="selection">
  				<span v-for="city in cities" class="selection-text-vertical">{{city}}</span>
  			</div>
  		</div>
  		<div class="col-sm-3">
  			<h4>Audition Type</h4>
  			<div class="selection">
  				<span v-for="type in auditionTypes" class="selection-text-vertical">{{type}}</span>
  			</div>
  			<h4>Candidate Type</h4>
  			<div class="selection">
  				<span v-for="type in candidateTypes" class="selection-text-vertical">{{type}}</span>
  			</div>
  		</div>
  		<div class="col-sm-3">
  			<h4>Candidates</h4>
  				<div class="auditionee-row">
		  			<div v-for="auditionee in auditionees" class="auditionee-tile">
		  				<div class="avatar avatar-small auditionee-avatar">
		  					<img :src="auditionee.img">
						</div>
						<div>
							<span class="small auditionee-name strong">{{auditionee.firstName}} {{auditionee.lastName}}</span>
							<span class="tiny">{{auditionee.voice_type}}</span>
						</div>
		  			</div>
	  			</div>

  		</div>
  		<div class="col-sm-3">
  			<h4>Book Audition</h4>
  			<input class="audition-time" id="time" type="time" />
  			<button>Book</button>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'auditionPlanner',
  props: {
  	auditionees: Array
  },
  data () {
    return {
      cities: ['Calgary', 'Chicago', 'Edmonton', 'Montreal', 'New York', 'Ottawa', 'Toronto', 'Vancouver'],
      auditionTypes: ['General', 'Specific', 'Private', 'Young Artist Programme'],
      candidateTypes: ['Tenor', 'Bass/Baritone', 'Soprano', 'Mezzo Soprano']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.audition-datetime {
	width: 700px;
}

.audition-date, .audition-time {
	display: inline-block !important;
	width: 200px;
	margin-right: 10px;
}

.auditionee-avatar {
	min-width: 41px;
	min-height: 41px;
	margin-right: 5px;
}

.auditionee-row {
	display: flex;
	flex-wrap: wrap;
}

.auditionee-name {
	display: block;
}

.auditionee-tile {
	background-color: #f7f4f4;
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	margin-bottom: 7px;
	margin-right: 8px;
	width: 43%;
	padding: 5px 5px;
	cursor: pointer;
}


.auditionee-tile:hover {
	background-color: #cd9d2b;
	color: white;
}
</style>
