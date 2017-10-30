<template>
  <div class="settings">
  	<h2>Settings</h2>
  	<div class="row">
        <div class="selection col-sm-4">
          <span class="selection-text-vertical">Profile</span>
          <span class="selection-text-vertical">Messaging</span>
          <span class="selection-text-vertical">Notifications</span>
          <span class="selection-text-vertical">Budget Planner</span>
          <span class="selection-text-vertical">Language support</span>
          <span class="selection-text-vertical">Preferences</span>
          <span class="selection-text-vertical">Admin / Roles</span>
        </div>
        <div class="setting-panel col-sm-8">
          <notification-settings></notification-settings>
        </div>
    </div>
  </div>
</template>

<script>
import notificationSettings from './notificationSettings';

export default {
	components: {
		'notification-settings': notificationSettings
	},
  	data () {
	    return {
	      
	    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.setting-panel {
		min-height: 100%;
	}
</style>
