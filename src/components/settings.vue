<template>
  <div class="settings row">
  	<h2 class="col-sm-12">Settings</h2>

    <div class="selection col-sm-3">
      <span class="selection-text-vertical">Profile</span>
      <span class="selection-text-vertical">Messaging</span>
      <span class="selection-text-vertical">Notifications</span>
      <span class="selection-text-vertical">Budget Planner</span>
      <span class="selection-text-vertical">Language support</span>
      <span class="selection-text-vertical">Preferences</span>
      <span class="selection-text-vertical">Admin / Roles</span>
    </div>

    <notification-settings class="col-sm-9"></notification-settings>

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
  .settings {
    height: 100%;
    padding-right: 0.5rem;
  }
</style>
