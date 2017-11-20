<template>
	<div class="company-account">
		<div class="company-banner">
			<div class="company-banner-assets">
				<div class="company-cover">
				</div>

				<div class="logo-wrap">
					<div class="company-logo">
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
						<div class="name">{{ connection.firstName}} {{ connection.lastName }}</div>
						<div class="role">{{ connection.role }}</div>
					</div>
					<div class="col-sm more">
						<i class="fa fa-chevron-right fa-2x is-darkgray"></i>
					</div>
				</div>
			</div>

		</div>

		<company-auditions class="company-section"></company-auditions>
			
		<company-posts :name="company.name" :posts="company.posts"></company-posts>
	</div>
</template>

<script>
import tools from './tools';
import auditions from './auditions'
import posts from './posts'

export default {
	components: {
		'company-tools': tools,
		'company-auditions': auditions,
		'company-posts': posts
	},
	data() {
		return {
			connections: []
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
  stroke: #cd9d2b;
  stroke-width: 15;
  stroke-dasharray: 841.946;
  stroke-dashoffset: 210.487;
  animation: dash 2s linear reverse;
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

.company-logo {
	border-radius: 50%;
	height: 285px;
	width: 285px;
	margin: 0 5px 0px 50%;
	transform: translateX(-50%);
	background: transparent;
	display: inline-flex;
	align-items: center;
}

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

.sm-hide {
	display: none;
}

.name {
	font-size: $font-size-small;
	font-weight: 500;
	text-align: center;
}

.role {
	font-size: $font-size-smaller;
	text-align: center;
}

.more {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}

.connection-avatar {
	margin-bottom: 21px;
	display: block;
	text-align: center;
}


/*for phone-only*/

@media screen and (max-width: 46rem) {
	.company-account {
		width: 100%;
	}

	.company-section {
		width: 100%;
		padding: 50px 28px 28px 28px;
		margin: 0px 0px 24px 0px;
	}

	.company-options-xs {
	    margin: 125px;
	    display: block;
	    text-align: center;
  	}

	.slide {
		overflow-x: auto;
		flex-wrap: nowrap;
		-webkit-overflow-scrolling: touch;
	  	-ms-overflow-style: -ms-autohiding-scrollbar;
	}

}

</style>
