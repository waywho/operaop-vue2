<template>
  <div id="calendar">
  	 <h2>Schedule</h2>
        <div class="selection row">
          <span class="selection-text-horizontal col-sm-2 col-xs">Production</span>
          <span class="selection-text-horizontal col-sm-2 col-xs">Rehearsal</span>
          <span class="selection-text-horizontal col-sm-2 col-xs">Audition</span>
        </div>
        <div class="calendar">
          <vue-event-calendar :events="companyEvents"></vue-event-calendar>
        </div>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data () {
    return {
      
    }
  },
  computed: {
    companyEvents() {
      return this.$store.state.company.events;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
