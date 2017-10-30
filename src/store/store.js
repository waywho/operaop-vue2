import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	strict: true,
	state: {
		conversations: {
			"AlyssaID": {	created: Date.now(),
				sender: 'Alyssa',
				lastMessage: 'How are you?'
			}, 
			"JohnID": {	
				created: Date.now(),
				sender: 'John',
				lastMessage: 'I just had the best news.'
			}, 
			"JamesID": {	
				created: Date.now(),
				sender: 'James',
				lastMessage: 'Grand.'
			}, 
			"JaneID": {	
				created: Date.now(),
				sender: 'Jane',
				lastMessage: 'And then?'
			}
		},
		users: {
			"AlyssaID": {
				firstName: "Allysia",
				lastName: "Johnson",
				role: "Artistic Director",
				isActive: false
			}, 
			"JohnID": {
				firstName: "John",
				lastName: "Brian",
				role: "Baritone",
				isActive: false
			}, 
			"JamesID": {
				firstName: "James",
				lastName: "Dean",
				role: "Conductor",
				isActive: false
			}, 
			"JaneID": {
				firstName: "Jane",
				lastName: "Great",
				role: "Project Coordinator",
				isActive: false
			}
		},
		messages: {
			"AlyssaID": {
				"m1": {
					sender: "Alyssa",
					text: "I am great! Thanks",
					timestamp: 1459361875337,
				},
				"m2": {
					sender: "MyOpera",
					text: "I have a job for you.",
					timestamp: 1459361875340,
				},
				"m3": {
					sender: "Alyssa",
					text: "Wonderful When?",
					timestamp: 1459361875345,
				},
				"m4": {
					sender: "MyOpera",
					text: "Today, can you get here by 5pm?",
					timestamp: 1459361875360,
				}
			},
			"JohnID": {
				"m1": {
					sender: "John",
					text: "I am great! Thanks",
					timestamp: 1459361875337,
				},
				"m2": {
					sender: "MyOpera",
					text: "Thanks for your ,application",
					timestamp: 1459361875340,
				},
				"m3": {
					sender: "John",
					text: "Welcome. When is the audition?",
					timestamp: 1459361875345,
				},
				"m4": {
					sender: "MyOpera",
					text: "Today, can you get here by 5pm?",
					timestamp: 1459361875360,
				}
			},
			"JamesID": {
				"m1": {
					sender: "James",
					text: "Okay. Thanks",
					timestamp: 1459361875337,
				},
				"m2": {
					sender: "MyOpera",
					text: "I need more info about you.",
					timestamp: 1459361875340,
				},
				"m3": {
					sender: "James",
					text: "Ok, I can send it over.",
					timestamp: 1459361875345,
				},
				"m4": {
					sender: "MyOpera",
					text: "Can you send today please?",
					timestamp: 1459361875360,
				}
			},
			"JaneID": {
				"m1": {
					sender: "Jane",
					text: "I am great! Thanks",
					timestamp: 1459361875337,
				},
				"m2": {
					sender: "MyOpera",
					text: "I am sorry but we need more.",
					timestamp: 1459361875340,
				},
				"m3": {
					sender: "Jane",
					text: "I can definitely do that.",
					timestamp: 1459361875345,
				},
				"m4": {
					sender: "MyOpera",
					text: "Today, can you get here by 5pm?",
					timestamp: 1459361875360,
				}
			}
		},
		company: {
				username: 'MyOpera',
				name: "MY OPERA",
				city: "Toronto",
				province: "Ontario",
				connectionStrength: 75,
				connectionLevel: "connected allstar",
				type: "Regional",
				country: "Canada",
				membership: "Indie Opera TO",
				notification_settings: [{	
						title: "Notifications on",
						desc: "Lorum ipsum deus domine allorum deus ipsum. Ave Maria lorum ipsum",
						isChecked: true
					}, {
						title: "Notifications sound",
						desc: "Lorum ipsum deus domine allorum deus ipsum. Ave Maria lorum ipsum",
						isChecked: true
					}],
				connections: [{
					firsName: "Alyssa",
					lastName: "Durnie",
					role: "Artistic Director",
					img: require("../assets/images/Alyssa-Durnie.png"),
					type: "staff"
					}, { 
					firstName: "Brittany",
					lastName: "Cann",
					role: "Coordinator",
					img: require("../assets/images/Brittany-Cann.png"),
					type: "staff"
					},
					{ firstName: "Camille",
					lastName: "Rogers",
					role: "Stage Director",
					img: require("../assets/images/Camille-Rogers.png"),
					type: "staff"
					},
					{ firstName: "Dalen",
					lastName: "Roberts",
					role: "Conductor",
					img: require("../assets/images/Dalen-trimmed.png"),
					type: "staff"
					},
					{
					firstName: "Caitlin",
					lastName: "McCaughe",
					role: "Soprano",
					img: require("../assets/images/Caitlin-McCaughey.png"),
					type: "connector"
					},
					{ firstName: "Daevyd",
					lastName: "Pepper",
					role: "Baritone",
					img: require("../assets/images/Daevyd-Pepper.png"),
					type: "connector"
					},
					{ firstName: "Brenden",
					lastName: "Friesen",
					role: "Tenor",
					img: require("../assets/images/Brenden-Friesen.png"),
					type: "connector"
					},
					{ firstName: "Julie",
					lastName: "Adams",
					role: "Mezzo Soprano",
					img: require("../assets/images/Julie-Adams.png"),
					type: "connector"
					}],
				auditionCandidates: [{
					firstName: "Caitlin",
					lastName: "McCaughey",
					voice_type: "Soprano",
					img: require("../assets/images/Caitlin-McCaughey.png"),
					city: "Vancouver",
					province: "BC",
					selected: true
					},
					{ firstName: "Daevyd",
					lastName: "Pepper",
					voice_type: "Baritone",
					img: require("../assets/images/Daevyd-Pepper.png"),
					city: "Calgary",
					province: "AB",
					selected: false
					},
					{ firstName: "Brenden",
					lastName: "Friesen",
					voice_type: "Tenor",
					img: require("../assets/images/Brenden-Friesen.png"),
					city: "Montreal",
					province: "QC",
					selected: true
					},
					{ firstName: "Julie",
					lastName: "Adams",
					voice_type: "Mezzo Soprano",
					img: require("../assets/images/Julie-Adams.png"),
					city: "Winnipeg",
					province: "MB",
					selected: true
					},
					{ firstName: "Matthew",
					lastName: "Dalen",
					voice_type: "Bass",
					img: require("../assets/images/Matthew-Dalen.png"),
					city: "Toronto",
					province: "ON",
					selected: false
					},
					{ firstName: "Leanne",
					lastName: "Kaufman",
					voice_type: "Soprano",
					img: require("../assets/images/Leanne-Kaufman.png"),
					city: "Vancouver",
					province: "BC",
					selected: true
					},
					{ firstName: "Joel",
					lastName: "Allison",
					voice_type: "Baritone",
					img: require("../assets/images/Joel-Allison.png"),
					city: "Toronto",
					province: "ON",
					selected: false
					},
					{ firstName: "Georgia",
					lastName: "Burashko",
					voice_type: "Mezzo Soprano",
					img: require("../assets/images/Georgia-Burashko.png"),
					city: "Toronto",
					province: "ON",
					selected: true
					}, 
					{ firstName: "Daniel",
					lastName: "Thielman",
					voice_type: "Tenor",
					img: require("../assets/images/Daniel-Thielman.png"),
					city: "Edmonton",
					province: "AB",
					selected: true
					}
				],
				events: [{
					date: '2017/12/15',
					title: 'Foo',
					desc: 'longlonglong description'
				}, { 
					date: '2017/11/15',
					title: 'Wonderful Event',
					desc: "bar"
				}]
			}
	},
	getters: {
		
	},
	mutations: {
		
	},
	actions: {
		
	}
})