<template>
	<div class="profile-account">
		<div class="profile-banner">
			<div class="profile-banner-assets">
				<div class="profile-cover" :style="{'background-image': 'url('+ profile.coverImage +')'}">
				</div>

				<div class="profile-avatar-wrap">
					<div class="profile-avatar">
						<svg height="100%" width="100%">
							<circle cx="142" cy="142" r="134" transform="rotate(268 142 142)" />
							<image y="0" x="0" width="100%" height="100%" :xlink:href="profile.image" />
						</svg>
						
					</div>
					<i class="fa fa-ellipsis-h fa-2x is-darkgray profile-options"></i>
				</div>
				<div class="xs-visible sm-hide profile-options-xs"><i class="fa fa-ellipsis-h fa-3x is-darkgray opions-icon-xs"></i></div>
			</div>
			<div class="profile-name"><h1>{{ profile.name }}</h1></div>

			<company-details v-if="profile.type === 'company'" class="profile-banner-text" v-bind:profile-details="profile.details"></company-details>
			<artist-details v-if="profile.type === 'artist'" class="profile-banner-text" v-bind:profile-details="profile.details"></artist-details>
		</div>

		<company-tools v-if="profile.type === 'company'" v-bind:profile-id="profile.id"></company-tools>

		<artist-tools v-if="profile.type === 'artist'" v-bind:profile-id="profile.id"></artist-tools>

		<profile-connections class="profile-section" :connections="profile.connections" v-bind:profile-id="profile.id"></profile-connections>

		<company-auditions v-if="profile.type === 'company'" class="profile-section" v-bind:profile-id="profile.id"></company-auditions>
			
		<profile-posts :name="profile.name" :posts="profile.posts" v-bind:profile-id="profile.id"></profile-posts>
	</div>
</template>

<script>
import companyDetails from './companyDetails';
import artistDetails from './artistDetails';
import companyTools from './companyTools';
import artistTools from './artistTools';
import auditions from './auditions';
import posts from './posts';
import connections from './connections';

export default {
	components: {
		'company-details': companyDetails,
		'company-tools': companyTools,
		'company-auditions': auditions,
		'artist-details': artistDetails,
		'profile-posts': posts,
		'profile-connections': connections,
		'artist-tools': artistTools
	},
	data() {
		return {
			id: this.$route.params.id,
			profile: {}
		}
	},
	computed: {
	},
	created () {
		this.profile = this.$store.state.profiles[this.id]
		console.log(this.id)
		console.log(this.profile)
		// find out all voice types
		// const voices = []
		// for (var i=0; 1< this.profile.auditionCandidates.length; i++) {
		// 		voices.push(this.profile.auditionCandidates[i].voice_type);
		// 		console.log(voices);
		// };
	}
}
</script>

<style lang="scss" scoped>
@import '../styles/style-variables.scss';

.profile-account {
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

.profile-banner {
	display: block;
	margin-bottom: 24px;
	background-color: white;
	height: 100%;
}

.profile-banner-assets {
	box-sizing: border-box;
	display: block;
	height: 573px;
	margin-bottom: 47px;
	position: relative;
}

.profile-name {
	width: 100%;
	text-align: center;
}

.profile-cover {
	width: 100%;
	
	background-color: white;
	height: 434px;
	overflow: hidden;    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.profile-avatar-wrap {
	height: 283px;
	position: absolute;
	top: 45%;
	width: 100%;
}

.profile-avatar {
	border-radius: 50%;
	height: 285px;
	width: 285px;
	margin: 0 5px 0px 50%;
	transform: translateX(-50%);
	background: transparent;
	display: inline-flex;
	align-items: center;
}

.profile-options {
	display: inline-block;
	transform: translateX(-130px);
}



.profile-banner-text {
	text-align: center;
	margin-bottom: 55px;
}

.profile-section {
	background-color: white;
	padding: 40px 30px 30px 100px;
	margin: 0px 0px 24px 0px;
}

.profile-section h2 {
	margin-top: 0px;
}

.sm-hide {
	display: none;
}

/*for phone-only*/

@media screen and (max-width: 46rem) {
	.profile-account {
		width: 100%;
	}

	.profile-section {
		width: 100%;
		padding: 50px 28px 28px 28px;
		margin: 0px 0px 24px 0px;
	}

	.profile-options-xs {
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
