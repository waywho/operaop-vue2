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
		<div class="notification-title">Notify me when:</div>
		<ul class="non-list">
			<li v-for="setting in notificationSettings" class="notification-line small">
				{{setting.title}}
				<div>
				<label class="switch">
					<input type="checkbox" v-model="setting.isChecked"/>
					<span class="slider"></span>
				</label>
				</div>
				<div class="notification-desc smaller">{{setting.desc}}</div>
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
	border: 1.5px solid #ceae62;
	padding: 26px 22px 26px 28px;
}

.notification-title {
	margin-bottom: 25px;
}

.notification-line {
	display: flex;
	align-items: center;
	margin-bottom: 25px;
}

.notification-desc {
	display: inline-block;
	margin-left: 10px;
}

</style>
