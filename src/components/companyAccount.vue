<template>
	<div class="company-account">
		<div class="company-banner">
			<div class="company-banner-assets">
				<div class="company-cover">
				</div>

				<div class="logo-wrap">
					<div class="company-logo-test">
						<svg height="100%" width="100%">
							<circle cx="142" cy="142" r="134" transform="rotate(268 142 142)" />
							<image y="0" x="0" width="100%" height="100%" xlink:href="../assets/images/myopera-logo.png" />
	  						

						</svg>
						
					</div>
					<i class="fa fa-ellipsis-h fa-2x is-darkgray company-options"></i>
				</div>



			</div>

			<div class="company-banner-text">
				<h1>{{ company.name }}</h1>
				<p><span>{{ company.city }}, {{ company.province }} </span><span class="is-golden">{{ company.connectionStrength }}% {{ company.connectionLevel | to-uppercase }}</span></p>
				<p>{{ company.type }} Opera Company based in {{ company.country }} | Member of {{ company.membership }}</p>
			</div>
		</div>

		<div class="company-section row">
			<div class="connections-title col-sm-4">
				<h2>Connections</h2>
				<p>Company Staff</p>
				<p>120 Connections</p>
			</div>
			<div class="col-sm-8">
				<div class="row">
					<div v-for="connection in connections" class="connection-tile col-sm">
						<div class="avatar-frame">
							<img v-bind:src="connection.img" />
						</div>
						<span class="name">{{ connection.firstName}} {{ connection.lastName }}</span><br />
						<span class="role">{{ connection.role }}</span>
					</div>
					<div class="col-sm more">
						<i class="fa fa-chevron-right fa-2x is-darkgray"></i>
					</div>
				</div>
			</div>

		</div>

		<div class="company-section">
			<h2>Audition Candidates</h2>
			<div class="selection">
				<span class="selection-text">Soprano</span>
				<span class="selection-text">Mezzo Soprano</span>
				<span class="selection-text">Tenor</span>
				<span class="selection-text">Baritone</span>
				<span class="selection-text">Bass</span>
			</div>
			<div class="tile-container">
				<div class="tile-section">
					<div class="row">
						<div v-for="auditionee in auditionees" class="auditionee-tile">
							<div class="avatar-frame-large">
									<img v-bind:src="auditionee.img" />
							</div>
							<div class="tile-text">
								<span class="name">{{ auditionee.firstName}} {{ auditionee.lastName }}</span><br />
								<span class="role">{{ auditionee.city }}, {{ auditionee.province}}</span>
							</div>
							<div class="icon-container">
								<i class="fa fa-envelope-o is-golden icon" aria-hidden="true"></i>
							</div>
							<div class="icon-container">
								<i class="fa fa-check is-golden icon" aria-hidden="true"></i>
							</div>
							<div class="icon-container">
								<i class="fa fa-times is-golden icon" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="more-auditions"><i class="fa fa-chevron-right fa-2x is-darkgray"></i></div>
			</div>
		</div>

		<div class="tool-section row between-sm">
			<div class="tool-panel col-sm-8">
				<h2>Schedule</h2>
				<div class="selection">
					<span class="selection-text">Production</span>
					<span class="selection-text">Rehearsal</span>
					<span class="selection-text">Audition</span>
				</div>
				<div class="calendar">
					<vue-event-calendar :events="company.events"></vue-event-calendar>
				</div>
			</div>
			<div class="toolbox col-sm-4">
				<div class="row">
					<div class="toolbox-tile col-sm-5 bottom-space "><i class="fa fa-comments-o fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
					<div class="toolbox-tile col-sm-5 bottom-space "><i class="fa fa-bar-chart fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
					<div class="toolbox-tile col-sm-5 bottom-space "><i class="fa fa-calendar fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
					<div class="toolbox-tile col-sm-5 bottom-space "><i class="fa fa-cogs fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
					<div class="toolbox-tile col-sm-5"><i class="fa fa-bell-o fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
					<div class="toolbox-tile col-sm-5"><i class="fa fa-database fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
				</div>		
			</div>
		</div>

		<div class="comment-section">
			<div class="comment-box col-sm-offset-3 col-sm-9">
				<div class="row">
					<div class="col-sm-2">
						<div class="row">
				          <div class="avatar">
				            <img src="../assets/images/myopera-logo.png" />
				          </div>
				      </div>
					</div>
					<div class="col-sm-10">
						<textarea ></textarea>
						<div class="row between-sm">
							<div class="col-sm-8">
								<i class="fa fa-picture-o" aria-hidden="true"></i>
								<i class="fa fa-map-marker" aria-hidden="true"></i>
							</div>
							<div class="col-sm-4 end-sm">
								<button>POST</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="comment-masonry" class="col-sm-offset-3 col-sm-9">
				<div class="comment-tile">
					<div class="comment-header">
						<div class="comment-header-status">
							<span class="is-golden">Justin Taylor</span><span>posted a status</span><div class="comment-circle"></div>
						</div>
						<div class="avatar">
			            	<img src="../assets/images/myopera-logo.png" />
			          	</div>
		          	</div>
		          	<div class="comment-text">asdfas asdfasdfq4 qehfstjstaer h32tasdf</div>
		          	<div class="comment-image"></div>
		          	<div class="comment-icons">
			          	<i class="fa fa-heart comment-icon" aria-hidden="true"></i><span class="icon-count">123</span>
			          	<i class="fa fa-comment comment-icon" aria-hidden="true"></i><span class="icon-count">123</span>
		          	</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			connections: [],
			auditionees: [],
			voice_types: [],
			company: {
				name: "MY OPERA",
				city: "Toronto",
				province: "Ontario",
				connectionStrength: 98,
				connectionLevel: "connected allstar",
				type: "Regional",
				country: "Canada",
				membership: "Indie Opera TO",
				connections: [{
					firsName: "Alyssa",
					lastName: "Durnie",
					role: "Artistic Director",
					img: require("../assets/images/Alyssa-Durnie.png"),
					type: "staff"
					}, { 
					firstName: "Brittany",
					lastName: "Cann",
					role: "Coordinator",
					img: require("../assets/images/Brittany-Cann.png"),
					type: "staff"
					},
					{ firstName: "Camille",
					lastName: "Rogers",
					role: "Stage Director",
					img: require("../assets/images/Camille-Rogers.png"),
					type: "staff"
					},
					{ firstName: "Dalen",
					lastName: "Roberts",
					role: "Conductor",
					img: require("../assets/images/Dalen-trimmed.png"),
					type: "staff"
					},
					{
					firstName: "Caitlin",
					lastName: "McCaughe",
					role: "Soprano",
					img: require("../assets/images/Caitlin-McCaughey.png"),
					type: "connector"
					},
					{ firstName: "Daevyd",
					lastName: "Pepper",
					role: "Baritone",
					img: require("../assets/images/Daevyd-Pepper.png"),
					type: "connector"
					},
					{ firstName: "Brenden",
					lastName: "Friesen",
					role: "Tenor",
					img: require("../assets/images/Brenden-Friesen.png"),
					type: "connector"
					},
					{ firstName: "Julie",
					lastName: "Adams",
					role: "Mezzo Soprano",
					img: require("../assets/images/Julie-Adams.png"),
					type: "connector"
					}],
				auditionCandidates: [{
					firstName: "Caitlin",
					lastName: "McCaughey",
					voice_type: "Soprano",
					img: require("../assets/images/Caitlin-McCaughey.png"),
					city: "Vancouver",
					province: "BC",
					selected: true
					},
					{ firstName: "Daevyd",
					lastName: "Pepper",
					voice_type: "Baritone",
					img: require("../assets/images/Daevyd-Pepper.png"),
					city: "Calgary",
					province: "AB",
					selected: false
					},
					{ firstName: "Brenden",
					lastName: "Friesen",
					voice_type: "Tenor",
					img: require("../assets/images/Brenden-Friesen.png"),
					city: "Montreal",
					province: "QC",
					selected: true
					},
					{ firstName: "Julie",
					lastName: "Adams",
					voice_type: "Mezzo Soprano",
					img: require("../assets/images/Julie-Adams.png"),
					city: "Winnipeg",
					province: "MB",
					selected: true
					},
					{ firstName: "Matthew",
					lastName: "Dalen",
					voice_type: "Bass",
					img: require("../assets/images/Matthew-Dalen.png"),
					city: "Toronto",
					province: "ON",
					selected: false
					},
					{ firstName: "Leanne",
					lastName: "Kaufman",
					voice_type: "Soprano",
					img: require("../assets/images/Leanne-Kaufman.png"),
					city: "Vancouver",
					province: "BC",
					selected: true
					},
					{ firstName: "Joel",
					lastName: "Allison",
					voice_type: "Baritone",
					img: require("../assets/images/Joel-Allison.png"),
					city: "Toronto",
					province: "ON",
					selected: false
					},
					{ firstName: "Georgia",
					lastName: "Burashko",
					voice_type: "Mezzo Soprano",
					img: require("../assets/images/Georgia-Burashko.png"),
					city: "Toronto",
					province: "ON",
					selected: true
					}, 
					{ firstName: "Daniel",
					lastName: "Thielman",
					voice_type: "Tenor",
					img: require("../assets/images/Daniel-Thielman.png"),
					city: "Edmonton",
					province: "AB",
					selected: true
					}
				],
				events: [{
					date: '2017/12/15',
					title: 'Foo',
					desc: 'longlonglong description'
				}, { 
					date: '2017/11/15',
					title: 'Wonderful Event',
					desc: "bar"
				}]
			}
		}
	},
	created () {
		this.connections = this.company.connections.slice(0, 4);
		console.log(this.connections);
		this.auditionees = this.company.auditionCandidates.slice(0, 8);
		console.log(this.auditionees);
		// find out all voice types
		// const voices = []
		// for (var i=0; 1< this.company.auditionCandidates.length; i++) {
		// 		voices.push(this.company.auditionCandidates[i].voice_type);
		// 		console.log(voices);
		// };
	}
}
</script>

<style scoped>

circle {
  fill: white;
  stroke: #998c55;
  stroke-width: 15;
  stroke-dasharray: 841.946;
  stroke-dashoffset: 16.839;
  animation: dash 4s linear reverse;
}

@keyframes dash {
	to {
		stroke-dashoffset: 841.946;
	}
}

.company-banner {
	display: block;
	margin-bottom: 24px;
	background-color: white;
	height: 780px;
}

.company-banner-assets {
	display: block;
	height: 573px;
	margin-bottom: 47px;
}

.company-cover {
	width: 100%;
	background-image: url('../assets/images/myoperacover.jpg');
	background-color: white;
	height: 434px;
	overflow: hidden;    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.logo-wrap {
	height: 283px;
	position: absolute;
	top: 350px;
	width: 100%;
}

.company-logo-test {
	border-radius: 50%;
	height: 285px;
	width: 285px;
	margin: 0 5px 0px 50%;
	transform: translateX(-50%);
	background: transparent;
	display: inline-flex;
	align-items: center;
}

/*#company-logo {
	border-radius: 50%;
	height: 283px;
	width: 283px;
	border: solid 15px #998c55;
	animation: connection-level 4s linear 1s 1;
	margin: 0 5px 0px 50%;
	transform: translateX(-50%);
	background: white;
	display: inline-flex;
	align-items: center;
}*/


.company-options {
	display: inline-block;
	transform: translateX(-130px);
}

.company-banner-text {
	text-align: center;
}

.company-section {
	background-color: white;
	padding: 50px 48px 28px 100px;
	margin-bottom: 24px;
}

.avatar-frame {
	height: 98px;
	width: 98px;
	border-radius: 50%;
	margin-bottom: 21px;
}

.avatar-frame img {
	width: 100%;
}

.avatar-frame-large {
	height: 119px;
	width: 119px;
	border-radius: 50%;
	margin: 0 auto 26px auto;
}


.name {
	font-size: 16px;
}

.role {
	font-size: 12px;
}

.more {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}

.more-auditions {
	display: inline-flex;
	align-items: flex-end;
	justify-content: center;
}

.selection {
	margin-bottom: 83px;
}

.selection-text {
	margin-left: 20px;
}

.selection-text:hover {
	color: #998c55;
	font-size: 18px;
}

.tile-container {
	display: flex;
}

.tile-section {
	display: inline-flex;
	width: 90%;
}

.auditionee-tile {
	width: 195px !important;
	background-color: #e5e1df;
	margin: 12px 12px;
	flex-basis: 20%;
	text-align: center;
	padding: 26px 0px;
}

.tile-text {
	margin-bottom: 19px;
}

.icon-container {
	background-color: white;
	border-radius: 50%;
	width: 31px;
	height: 31px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin: 0px 6px 33px;
	cursor: pointer;
}


.icon-container:hover, .icon-container:hover .icon, .icon:hover,
.toolbox-tile:hover, .toolbox-tile:hover .tool-icon, .tool-icon:hover  {
	background-color: #998c55;
	color: white;
}


.tool-section {
	padding: 0;
	margin-bottom: 24px;
}

.tool-panel {
	background-color: white;
	padding: 50px 48px 28px 100px;
}

.toolbox {
	display: inline-flex;
	background: #f9f9f9;
}

.toolbox-tile {
	height: 143px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: white;
	margin-left: 15px;
	cursor: pointer;
}

.bottom-space {
	margin-bottom: 15px;
}

.comment-section {
	height: 1700px;
	margin-bottom: 70px;
}

.comment-box {
	background: white;
	padding-top: 35px;
	padding-bottom: 35px;
	margin-bottom: 26px;
}

.comment-box textarea {
	height: 79px;
	width: 575px;
	margin-bottom: 36px;
}

#comment-masonry {
	column-count: 2;
	column-gap: 23px;
}

.comment-tile {
	background-color: white;
	display: inline-block;
	margin: 0 0 23px;
	width: 323px;
	padding: 45px 25px;
}

.comment-header {
	margin-bottom: 30px;
}

.comment-header-status {
	margin-bottom: 22px;
	display: flex;
	justify-content: space-between;
}

.comment-text {
	margin-bottom: 30px;
}

.comment-image {
	margin-bottom: 30px;
	width: 100%;
}

.comment-circle {
	width: 25px;
	height: 25px;
	border: 2px solid #73020d;
	border-radius: 50%;
	display: inline-block;
}

.comment-icon {
	margin-right: 14px;
}

.icon-count {
	margin-right: 35px;
}

</style>
