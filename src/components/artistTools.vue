<template>
  <div class="artist-tools">
    <div class="tool-panel">
      <keep-alive>
        <component :is="component" :profile-id="profileId"></component>
      </keep-alive>
    </div>
    <div class="toolbox">
      <div @click="component = 'artist-message'" class="toolbox-tile is-lightgray"><i class="fa fa-comments-o fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Messages</div>
      <div @click="component = 'artist-calendar'" class="toolbox-tile is-lightgray"><i class="fa fa-calendar fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Schedule</div>
      <div @click="component = 'artist-settings'" class="toolbox-tile is-lightgray"><i class="fa fa-cogs fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Settings</div>
      <div @click="component = 'artist-media'" class="toolbox-tile is-lightgray"><i class="fa fa-play-circle fa-3x is-lightgray tool-icon" aria-hidden="true"></i>Media</div>
      <div @click="component = 'artist-cv'" class="toolbox-tile is-lightgray"><i class="fa fa-file-text-o fa-3x is-lightgray tool-icon" aria-hidden="true"></i>CV/Resume</div>
      <div @click="component = 'artist-settings'" class="toolbox-tile is-lightgray"></div>
     </div>
  </div>
</template>

<script>
import calendar from './calendar';
import settings from './settings';
import messageTool from './messageTool';
import mediaTool from './mediaTool';
import cvTool from './cvTool';

export default {
  name: 'tools',
  components: {
    'artist-calendar': calendar,
    'artist-settings': settings,
    'artist-message': messageTool,
    'artist-media': mediaTool,
    'artist-cv': cvTool
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
.artist-tools {
  height: 100%;
  padding: 0px;
  display: flex;
  align-items: stretch;
  margin: 0px 0px 24px 0px;
}

.tool-panel {
  background-color: white;
  padding: 0px 0px 0px 100px;
  flex-basis: 63%;
  display: inline-block;
  min-height: 100%;
  float: left;
}

.toolbox {
  display: inline-grid;
  flex-basis: 35%;
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
  .artist-tools {
    flex-direction: column;
  }

  .tool-panel {
    padding: 0px 0px;
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
