<template>
  <div id="company-tools">
    <div class="tool-panel">
      <company-calendar v-if="showTool === 'calendar'"></company-calendar>
      <company-chats v-else-if="showTool === 'chats'">message</company-chats>
      <div v-else-if="showTool === 'budget'">budget</div>
      <company-settings v-else-if="showTool === 'settings'">settings</company-settings>
      <div v-else-if="showTool === 'ticket'">ticket</div>
      <div v-else-if="showTool === 'cloud'">cloud</div>
    </div>
    <div class="toolbox">
      <div @click="showTool = 'chats'" class="toolbox-tile"><i class="fa fa-comments-o fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
      <div @click="showTool = 'budget'" class="toolbox-tile"><i class="fa fa-bar-chart fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
      <div @click="showTool = 'calendar'" class="toolbox-tile"><i class="fa fa-calendar fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
      <div @click="showTool = 'settings'" class="toolbox-tile"><i class="fa fa-cogs fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
      <div @click="showTool = 'ticket'" class="toolbox-tile"><i class="fa fa-ticket fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
      <div @click="showTool = 'cloud'" class="toolbox-tile"><i class="fa fa-database fa-3x is-lightgray tool-icon" aria-hidden="true"></i></div>
     </div>
  </div>
</template>

<script>
import calendar from './calendar';
import settings from './settings';
import chats from './chats';

export default {
  components: {
    'company-calendar': calendar,
    'company-settings': settings,
    'company-chats': chats,
  },
  data() { 
    return {
      showTool: 'chats'
    }

  },
  method: {

  }
}
</script>

<style scoped>
#company-tools {
  height: 100%;
  padding: 0px;
  display: flex;
  align-items: stretch;
}

.tool-panel {
  background-color: white;
  padding: 0px 0px 0px 20px;
  width: 63%;
  display: inline-block;
  height: 100%;
  float: left;
}

.toolbox {
  display: inline-grid;
  width: 35%;
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
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
}

.bottom-space {
  margin-bottom: 15px;
}

@media screen and (max-width: 46rem) {

  .tool-panel {
    padding: 50px 20px 50px 20px;
    order: 2;
  }

  .toolbox {
    margin-top: 20px;
    margin-bottom: 20px;
    order: 1;
  }

  .toolbox-inner {
    width: 100%;
  }
}
</style>
