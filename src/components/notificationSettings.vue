<template>
  <div id="notification-settings">
  	<div class="row top-sm between-sm between-xs">
	  	<div class="col-sm col-xs">
	  		<h3>Notifcations:</h3>
	  	</div>
	  	<div class="col-sm col-xs">
	  		<div class="row end-sm end-xs">
	  			<button>SAVE</button>
	  		</div>
	  	</div>
	</div>
	<div class="col-sm-12">
		<ul class="non-list">
			<li v-for="setting in notificationSettings">
				{{setting.title}}
				<label class="switch">
					<input type="checkbox" v-model="setting.isChecked"/>
					<span class="slider"></span>
				</label>
				{{setting.desc}}
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
export default {
  name: '',
  computed: {
  	notificationSettings() {
  		return this.$store.state.company.notification_settings;
  	}
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#notification-settings {
	min-height: 100%;
	border: 1.5px solid #ceae62;
	padding: 26px 22px 26px 28px;
}

</style>
