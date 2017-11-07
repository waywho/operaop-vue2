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
				<div class="xs-visible sm-hide company-options-xs"><i class="fa fa-ellipsis-h fa-3x is-darkgray opions-icon-xs"></i></div>
			</div>

			<div class="company-banner-text">
				<h1>{{ company.name }}</h1>
				<p><span>{{ company.city }}, {{ company.province }} </span><br class="xs-break" /><span class="is-golden">{{ company.connectionStrength }}% {{ company.connectionLevel | to-uppercase }}</span></p>
				<p>{{ company.type }} Opera Company based in {{ company.country }} |<br class="xs-break" /> Member of {{ company.membership }}</p>
			</div>
		</div>
		<div class="tool-section">
			<company-tools v-bind:companyEvents="company.events"></company-tools>
		</div>


		<div class="company-section row">
			<div class="connections-title col-sm-4 col-xs-12">
				<h2>Connections</h2>
				<span class="selection-text-vertical">Company Staff</span>
				<span class="selection-text-vertical">120 Connections</span>
			</div>
			<div class="col-sm-8 col-xs-12">
				<div class="row slide">
					<div v-for="connection in connections" class="connection-tile col-sm col-xs">
						<div class="avatar-medium connection-avatar">
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
			<div class="selection row">
				<span class="selection-text-horizontal">Soprano</span>
				<span class="selection-text-horizontal">Mezzo Soprano</span>
				<span class="selection-text-horizontal">Tenor</span>
				<span class="selection-text-horizontal">Baritone</span>
				<span class="selection-text-horizontal">Bass</span>
			</div>
			<div class="tile-container">
					<div class="row slide">
						<div v-for="auditionee in auditionees" class="auditionee-tile col-lg-3 col-md-4 col-sm-4 col-xs-4">
							<div class="avatar-large">
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
				<div class="more-auditions xs-hide"><i class="fa fa-chevron-right fa-2x is-darkgray"></i></div>
			</div>
		</div>

		<div class="post-section">
			<div class="post-box col-sm-offset-3 col-sm-9">
				<div class="row">
					<div class="col-xs-2">
						<div class="row">
				          <div class="avatar-border">
				            <img src="../assets/images/myopera-logo.png" />
				          </div>
				      </div>
					</div>
					<div class="col-xs-9">
						<textarea ></textarea>
						<div class="row between-sm">
							<div class="col-sm-8">
								<i class="fa fa-picture-o is-darkgray" aria-hidden="true"></i>
								<span class="smaller is-darkgray">Add image</span>
							</div>
							<div class="col-sm-4 end-sm col-xs-4 end-xs">
								<button>POST</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="post-masonry" class="col-xs-12 col-sm-offset-3 col-sm-9">
				<div v-for="post in company.posts" class="post-tile">
					<div class="post-header">
						<span class="name is-golden strong">{{company.name}}</span>
						<div class="status">
							<span class="smaller">{{ post.timestamp | moment("from")}} </span><div class="comment-circle"></div><span class="smaller">posted a status</span>
						</div>

		          	</div>
		          	<div class="post-text">{{post.content}}</div>
		          	<div v-if="post.imgs.length > 1" class="multi-image-container">
		          		<div v-for="image in post.imgs" class="image-in-row"><img v-bind:src="image" /></div>
		          	</div>
		          	<div v-else-if="post.imgs.length === 1" class="post-image"><img v-bind:src="post.imgs" /></div>

		          	<div class="post-icons">
			          	<i class="fa fa-heart post-icon smaller" aria-hidden="true"></i><span class="icon-count smaller">{{post.likes}}</span>
			          	<i class="fa fa-comment post-icon smaller" aria-hidden="true"></i><span class="icon-count smaller">{{post.comments.length}} comments</span>
		          	</div>
		          	<hr class="divider" />
		          	<div v-for="comment in post.comments" class="comment-container">
		          		<div class="avatar comment-avatar"><img :src="comment.user_img"></div>
		          		<div class="comment-text">
		          		<span class="small medium text-golden">{{comment.user}}</span>
		          		<p class="smaller">{{comment.commentText}}</p>
		          		</div>
		          	</div>
		          	<div class="comment-input-container">
		          		<div class="avatar-small-border">
			            	<img src="../assets/images/myopera-logo.png" />
			          	</div>
			          	<div class="message-input-container">
							<input type="text" class="message-input smaller" placeholder="write a comment" />
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import companyTools from './companyTools';

export default {
	components: {
		'company-tools': companyTools
	},
	data() {
		return {
			connections: [],
			auditionees: [],
			voice_types: [],
		}
	},
	computed: {
		company() {
			return this.$store.state.company;
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

<style lang="scss" scoped>
@import '../styles/style-variables.scss';

.company-account {
	grid-area: main;
}

circle {
  fill: white;
  stroke: #998c55;
  stroke-width: 15;
  stroke-dasharray: 841.946;
  stroke-dashoffset: 210.487;
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
	height: 100%;
}

.company-banner-assets {
	box-sizing: border-box;
	display: block;
	height: 573px;
	margin-bottom: 47px;
	position: relative;
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
	top: 45%;
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
	margin-bottom: 55px;
}

.company-section {
	background-color: white;
	padding: 40px 30px 30px 100px;
	margin: 0px 0px 24px 0px;
}

.company-section h2 {
	margin-top: 0px;
}

.tool-section {
  padding: 0;
  margin-bottom: 24px;
  display: block;
  height: 100%;
}

.xs-break {
	display: none;
}

.sm-hide {
	display: none;
}

.name {
	font-size: $font-size-small;
	font-weight: 500;
}

.role {
	font-size: $font-size-smaller;
}

.more {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}

.more-auditions {
	width: 5%;
	display: inline-flex;
	align-items: flex-end;
	justify-content: center;
}

.connection-avatar {
	margin-bottom: 21px;
}


.tile-container {
	display: flex;
}

/*.tile-section {
	display: inline-flex;
	width: 90%;
}*/

.auditionee-tile {
	background-color: #e5e1df;
	margin: 12px 12px;
	flex-basis: 20%;
	text-align: center;
	padding: 26px 0px;
}

.tile-text {
	margin-top: 26px;
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

.post-section {
	height: 1700px;
	margin-bottom: 70px;
}

.post-box {
	background: white;
	padding-top: 35px;
	padding-bottom: 35px;
	margin-bottom: 26px;
}

.post-box textarea {
	height: 79px;
	max-width: 95%;
	margin-bottom: 36px;
	border: 2px solid #d4d4d4;
}

#post-masonry {
	column-count: 2;
	column-gap: 23px;
}

.post-tile {
	background-color: white;
	display: inline-block;
	margin: 0 0 23px;
	width: 368px;
	padding: 45px 25px;
}

.post-text {
	margin-bottom: 30px;
}

.post-header {
	margin-bottom: 30px;
}


.post-image {
	margin-bottom: 30px;
	width: 100%;
}

.image-in-row {
	min-width: 250px;
	margin: 0px 10px;
	overflow-y: hidden;
}

.image-row img {
	width: 100%;
}

.multi-image-container {
	display: flex;
	overflow-x: auto;
	flex-wrap: nowrap;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
	margin-bottom: 30px;
}

.comment-circle {
	width: 9px;
	height: 9px;
	border: 2px solid #73020d;
	border-radius: 50%;
	display: inline-block;
	margin-right: 5px;
}

.status {
	display: block;
}

.post-icon {
	margin-right: 14px;
}

.post-icons {
	margin-bottom: 25px;
}

.comment-input-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.comment-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.comment-avatar {
	min-width: 41px;
	margin-right: 24px;
}

.icon-count {
	margin-right: 35px;
}

.message-input-container {
	flex-grow: 2;
	margin-left: 10px;
}

.message-input {
	border: 2px solid #cd9d2b;
}

.divider {
	border-width: 2px;
	border-color: #cd9d2b;
	background-color: #cd9d2b;
	color: #cd9d2b;
}

/*for phone-only*/

@media screen and (max-width: 599px) {
	.company-section {
		width: 100%;
		padding: 50px 28px 28px 28px;
		margin: 0px 0px 24px 0px;
	}

	.xs-break {
		display: inline;
	}

	.xs-visible {
		display: inline;
	}

	.xs-hide {
		display: none;
	}    

	.company-options-xs {
	    margin: 125px;
	    display: block;
	    text-align: center;
  	}

	#comment-masonry {
		column-count: 1;
		column-gap: 0px;
		padding: 0px;
	} 

	.comment-tile {
		width: 100%;
	}
	.slide {
		overflow-x: auto;
		flex-wrap: nowrap;
		-webkit-overflow-scrolling: touch;
	  	-ms-overflow-style: -ms-autohiding-scrollbar;
	}

	.auditionee-tile {
		background-color: #e5e1df;
		margin: 12px 12px;
		min-width: 221px;
		text-align: center;
		padding: 26px 0px;
	}
}

</style>
