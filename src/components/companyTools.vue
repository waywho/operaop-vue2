<template>
  <div class="company-tools">
    <div class="tool-panel">
      <keep-alive>
        <component :is="component" :profile-id="profileId"></component>
      </keep-alive>
    </div>
    <div class="toolbox">
      <div @click="component = 'company-message'" class="toolbox-tile is-lightgray"><i class="fa fa-comments-o fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Messages</div>
      <div @click="component = 'company-budget'" class="toolbox-tile is-lightgray"><i class="fa fa-bar-chart fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Budget Planner</div>
      <div @click="component = 'company-calendar'" class="toolbox-tile is-lightgray"><i class="fa fa-calendar fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Schedule</div>
      <div @click="component = 'company-settings'" class="toolbox-tile is-lightgray"><i class="fa fa-cogs fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Settings</div>
      <div @click="component = 'company-ticket'" class="toolbox-tile is-lightgray"><i class="fa fa-ticket fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Tickets</div>
      <div @click="component = 'company-media'" class="toolbox-tile is-lightgray"><i class="fa fa-play-circle fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Media</div>
     </div>
  </div>
</template>

<script>
import calendar from './calendar';
import settings from './settings';
import messageTool from './messageTool';
import budgetTool from './budgetTool';
import mediaTool from './mediaTool';

export default {
  name: 'tools',
  components: {
    'company-calendar': calendar,
    'company-settings': settings,
    'company-message': messageTool,
    'company-budget': budgetTool,
    'company-media': mediaTool
  },
  props: {
    profileId: String
  },
  data() { 
    return {
      component: 'company-calendar'
    }

  },
  method: {

  }
}
</script>

<style scoped>
.company-tools {
  height: 100%;
  padding: 0px;
  display: flex;
  align-items: stretch;
  margin: 0px 0px 24px 0px;
}

.tool-panel {
  background-color: white;
  padding: 0px 0px 0px 100px;
  flex-basis: 69%;
  display: inline-block;
  min-height: 100%;
  float: left;
}

.toolbox {
  display: inline-grid;
  flex-basis: 30%;
  background: #f9f9f9;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 15px 15px;
  margin-left: 15px;
  float: right;
}

.toolbox-tile {
  height: 143px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
}

.bottom-space {
  margin-bottom: 15px;
}

.toolbox-tile:hover, .toolbox-tile:hover .tool-icon, .tool-icon:hover  {
  background-color: #cd9d2b;
  color: white;
}


@media screen and (max-width: 46rem) {
  .company-tools {
    flex-direction: column;
  }

  .tool-panel {
    padding: 0px 0px 0px 0px;
    width: 100%;
    order: 2;
  }

  .toolbox {
    margin: 0px 0px 20px;
    width: 100%;
    order: 1;
  }

  .toolbox-inner {
    width: 100%;
  }
}
</style>
