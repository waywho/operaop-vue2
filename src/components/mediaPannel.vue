<template>
  <div class="media-pannel">
		<div class="text-center">
			<p class="small">Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia?</p>
			<media-input :input-name="'Add Media URL'" v-model="mediaURL" v-on:addMedia="sendMedia($event)"></media-input>
			<div class="row media-window">
				<vue-media-embed v-for="(media, index) in medias" class="col-sm-4 media-tile" :key="media.id" :source="media.source" :allow-fullscreen="1" :auto-play="0"></vue-media-embed>
			</div>
			
		</div>
  </div>
</template>

<script>
import mediaInput from './mediaInput';

export default {
  name: 'mediaPannel',
  components: {
  	'media-input': mediaInput,
  },
  props: {
  	medias: Array,
  	mediaHost: String
  },
  data () {
    return {
    	mediaURL: ""
    }
  },
  methods: {
  	sendMedia: function(value) {
  		this.$emit('sendMedia', value)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.media-panel {
	padding-right: 60px;
}
.media-window {
	overflow-y: scroll;
	height: 298px;
}
.media-tile {
	margin-bottom: 10px;
}
</style>
