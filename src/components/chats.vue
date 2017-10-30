<template>
  <div class="message-panel">
	  	<div class="message-sidepanel">
	  		<h2>Messages</h2>
	  		<div class="senders-window">
		  		<input type="text" id="sender-search" placeholder="search" />
		  		<div v-for="(chat, key) in chats" :class="{ sender, isActive: chat.isActive }" v-on:click="getMessages(key)">
		  			<div class="avatar-box">
			  			<div class="avatar">
					      	<img src="../assets/images/myopera-logo.png" />
					    </div>
					</div>
				    <div class="sender-name">
				    	<b>{{ chat.sender }}</b><br />
				    	<span class="small">{{chat.lastMessage}}</span>
				    </div>
		  		</div>
	  		</div>
	  	</div>
	  	<div class="message-window">
	  		<div class="message-title">
				<b>{{ sender.firstName }} {{ sender.lastName}}</b><br />
				<span class="small">{{ sender.role }}</span>
			</div>
		  	<div class="messages">
			  	<message v-for="message in messages" :message="message" :key="message.created">
			  	</message>
		  	</div>
			<div class="message-input-container">
				<textarea type="text" id="message-input" placeholder="message"></textarea>
			</div>
		</div>
  </div>
</template>

<script>

import message from './message';

export default {
  name: 'chats',
  components: {
  	'message': message,
  },
  data () {
    return {
      messages: [],
      sender: {}
    }
  },
  computed: {
  	chats() {
  		return this.$store.state.conversations;
  	}
  },
  methods: {
  	getMessages: function (id) {
  		// console.log(id);
  		console.log(this.$store.state.messages[id]);
  		this.messages = this.$store.state.messages[id];
  		this.sender = this.$store.state.users[id];
  		// this.$store.state.conversations[id].isActive = !this.$store.state.conversations[id].isActive;
  		console.log(this.sender);
  	}
  },
  created() {
  	// console.log(this.$store.state.conversations);
  	this.messages = this.$store.state.messages['AlyssaID'];
  	this.sender = this.$store.state.users['AlyssaID'];
  	// this.$store.state.conversations['AlyssaID'].isActive = !this.$store.state.conversations['AlyssaID'].isActive;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.message-panel {
	min-height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.message-window {
	border: 1px solid #dddcdc;
	min-height: 459px;
	flex-grow: 2;
}

.message-title {
	height: 10%;
}

.messages {
	height: 65%;
	overflow-y: scroll;
}

.message-sidepanel {
	flex-grow: 1;
}

.sender {
	border: 1px solid #dddcdc;
	height: 75px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.senders-window {
	overflow-y: scroll;
}

#sender-search {
	max-width: 80%;
	margin-bottom: 30px;
}

#message-input {
	max-width: 80%;
	height: 75px;
	border: 2px solid #ecddba;
}

.message-input-container {
	border-top: 1px solid #dddcdc;
	min-height: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.sender {
	display: flex;
	justify-content: flex-start;
	cursor: pointer;
}

.sender:hover {
	background: #ecddba;
	color: white;
}

.avatar-box {
	width: 75px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
}

.sender-name {
	display: inline-block;
}

.isActive {
	background: #ecddba;
	color: white;
	font-weight: bold;
}
</style>
