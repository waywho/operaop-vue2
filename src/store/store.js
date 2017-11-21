import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	strict: false,
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
			},
			"EdwardID": {	
				created: Date.now(),
				sender: 'Edward',
				lastMessage: 'And then?'
			},
			"GrantID": {	
				created: Date.now(),
				sender: 'Grant',
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
			},
			"EdwardId": {
				firstName: "Edward",
				lastName: "Great",
				role: "Project Coordinator",
				isActive: false
			},
			"GrantID": {
				firstName: "Grant",
				lastName: "Ferries",
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
			},
			"EdwardID": {
				"m1": {
					sender: "Edward",
					text: "I would like to audition",
					timestamp: 1459361875337,
				},
				"m2": {
					sender: "MyOpera",
					text: "When would you like to come in?",
					timestamp: 1459361875340,
				},
				"m3": {
					sender: "Edward",
					text: "What about tomorrow",
					timestamp: 1459361875345,
				},
				"m4": {
					sender: "MyOpera",
					text: "Today, can you get here by 5pm?",
					timestamp: 1459361875360,
				}
			},
			"GrantID": {
				"m1": {
					sender: "Grant",
					text: "I am wonderful! Thanks",
					timestamp: 1459361875337,
				},
				"m2": {
					sender: "MyOpera",
					text: "That is great news.",
					timestamp: 1459361875340,
				},
				"m3": {
					sender: "Grant",
					text: "I can definitely do that.",
					timestamp: 1459361875345,
				},
				"m4": {
					sender: "MyOpera",
					text: "Today, when can you get here?",
					timestamp: 1459361875360,
				}
			}
		},
		profiles:{
			'companyXYZ': {
				id: 'companyXYZ',
				type: 'company',
				username: 'MyOpera',
				name: "MY OPERA",
				image: require("../assets/images/myopera-logo.png"),
				coverImage: require("../assets/images/myoperacover.jpg"),
				details: {
					city: "Toronto",
					province: "Ontario",
					connectionStrength: 75,
					connectionLevel: "connected allstar",
					companyType: "Regional",
					country: "Canada",
					memberships: ["Indie Opera TO"],
				},
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
					firstName: "Alyssa",
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
				auditions: [{
		    		title: "General Audition",
		    		address: "2351 Audition Street",
		    		city: "Toronto",
		    		applicationDeadline: 1512892800,
		    		date: 1514188800,
		    		starts: 1514188800,
		    		ends: 1514217600,
		    		type: "general",
		    		voiceTypes: ['soprano', 'mezzo soprano', 'tenor'],
		    		pianist: true,
		    		oppType: "paid",
		    		description: "Amazing opportunity for emerging singers",
		    		invitedCandidates: [{
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
						}],
					schedule: [{
						time: 1513584000,
						candidate: "Joel Allison"
					}, { time: 1513584900,
						candidate: "Leanne Kaufman"
						}]
					}, {
		    		title: "Specific Audition",
		    		address: "2351 Audition Street",
		    		city: "Vancouver",
		    		applicationDeadline: 1512892800,
		    		date: 1514188800,
		    		starts: 1514188800,
		    		ends: 1514217600,
		    		type: "general",
		    		voiceTypes: ['soprano', 'mezzo soprano', 'tenor'],
		    		pianist: true,
		    		oppType: "paid",
		    		description: "Amazing opportunity for emerging singers",
		    		invitedCandidates: [{
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
						}],
					schedule: [{
						time: 1513584000,
						candidate: "Joel Allison"
					}, { time: 1513584900,
						candidate: "Leanne Kaufman"
						}]
					}, {
		    		title: "Specific Audition",
		    		address: "2351 Audition Street",
		    		city: "Vancouver",
		    		applicationDeadline: 1512892800,
		    		date: 1514188800,
		    		starts: 1514188800,
		    		ends: 1514217600,
		    		type: "general",
		    		voiceTypes: ['soprano', 'mezzo soprano', 'tenor'],
		    		pianist: true,
		    		oppType: "paid",
		    		description: "Amazing opportunity for emerging singers",
		    		invitedCandidates: [{
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
						}],
					schedule: [{
						time: 1513584000,
						candidate: "Joel Allison"
					}, { time: 1513584900,
						candidate: "Leanne Kaufman"
						}]
					}
				],
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
					start: '',
					end: '',
					title: 'Foo',
					location: '',
					desc: 'longlonglong description',
					type: 'production'
				}, { 
					date: '2017/11/15',
					start: '',
					end: '',
					title: 'Wonderful Event',
					location: '',
					desc: "bar",
					type: 'rehearsal'
				}],
				posts: [
					{
					content: 'Veniam tofu raw denim id. Waistcoat culpa consequat DIY, aliqua try-hard fugiat taxidermy succulents. Enim helvetica viral heirloom raclette. Veniam duis salvia taiyaki poke thundercats before they sold out meh hella dolore skateboard. Swag fam glossier ut.',
					imgs: "",
					timestamp: 	1508518037,
					likes: 24,
					comments: [{
							user: 'Ed Remi',
							user_img: require("../assets/images/Brenden-Friesen.png"),
							commentText: 'Pounce on unsuspecting person eat prawns daintily with a claw then lick paws clean wash down prawns with a lap.',
							timestamp: 	1508521637
						}, {
							user: 'Jane Smith',
							user_img: require("../assets/images/Camille-Rogers.png"),
							commentText: 'The short, stubby, 11.2-ounce Duvel-style bottle releases a dark, leathery-brown brew, with a tan-colored, super-tight, creamy, fluffy lacing.',
							timestamp: 	1508521637
						}]
					}, {
					content: 'Doggo ipsum floofs the neighborhood pupper bork. Stop it fren pupper heckin good boys and girls long bois the neighborhood pupper shooberino, boofers clouds heckin angery woofer very jealous pupper.',
					imgs: [require("../assets/images/greathall.jpg"), require("../assets/images/stagetub.jpg")],
					timestamp: 	1508518037,
					likes: 24,
					comments: [{
							user: 'Ed Remi',
							user_img: require("../assets/images/Dalen-trimmed.png"),
							commentText: 'Cake bear claw cheesecake oat cake candy canes chocolate.',
							timestamp: 	1508521637
						}, {
							user: 'Jane Smith',
							user_img: require("../assets/images/Caitlin-McCaughey.png"),
							commentText: 'The short, stubby, 11.2-ounce Duvel-style bottle releases a dark, leathery-brown brew, with a tan-colored, super-tight, creamy, fluffy lacing.',
							timestamp: 	1508521637
						}]
					},{
					content: 'Boof you are doing me a frighten he made many woofs stop it fren, sub woofer very jealous pupper. Boofers puggorino shoober long water shoob what a nice floof boof, dat tungg tho shoob floofs.',
					imgs: "",
					timestamp: 	1508518037,
					likes: 24,
					comments: [{
							user: 'Edward Great',
							user_img: require("../assets/images/Daniel-Thielman.png"),
							commentText: 'Pounce on unsuspecting person eat prawns daintily with a claw then lick paws clean wash down prawns with a lap.',
							timestamp: 	1508521637
						}, {
							user: 'Jane Smith',
							user_img: require("../assets/images/Leanne-Kaufman.png"),
							commentText: 'Marshmallow topping sweet jujubes bonbon cupcake I love sweet roll I love.',
							timestamp: 	1508521637
						}]
					},{
					content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?',
					imgs: [require("../assets/images/backstage.gif")],
					timestamp: 	1508518037,
					likes: 24,
					comments: [{
							user: 'Maggie Gyllenhall',
							user_img: require("../assets/images/Georgia-Burashko.png"),
							commentText: 'Dessert apple pie wafer jelly cupcake. Sweet donut brownie bear claw.',
							timestamp: 	1508521637
						}, {
							user: 'Tom Price',
							user_img: require("../assets/images/Julie-Adams.png"),
							commentText: 'Gingerbread gummi bears bonbon cheesecake wafer tiramisu. ',
							timestamp: 	1508521637
						}]
					}

				]
			},
			'artistXYZ': {
				id: 'artistXYZ',
				type: 'artist',
				username: 'johnsmith',
				name: "John Smith",
				image: require("../assets/images/Dalen-trimmed.png"),
				coverImage: require("../assets/images/baritoneCover.jpg"),
				details: {
					city: "Vancouver",
					province: "British Columbia",
					connectionStrength: 80,
					connectionLevel: "connected allstar",
					voiceType: "tenor",
					country: "Canada",
					memberships: ["Indie Opera TO", "Tapestry Opera", "L'Opera de Montreal"],
				},
				notification_settings: [{	
						title: "Notifications on",
						desc: "Lorum ipsum deus domine allorum deus ipsum. Ave Maria lorum ipsum",
						isChecked: true
					}, {
						title: "Notifications sound",
						desc: "Lorum ipsum deus domine allorum deus ipsum. Ave Maria lorum ipsum",
						isChecked: true
					}],
				connections: [
					{ firstName: "Camille",
					lastName: "Rogers",
					role: "Stage Director",
					img: require("../assets/images/Camille-Rogers.png"),
					type: "staff"
					},{ firstName: "Dalen",
					lastName: "Roberts",
					role: "Conductor",
					img: require("../assets/images/Dalen-trimmed.png"),
					type: "staff"
					}, {
					firstName: "Alyssa",
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
					}, {
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
					}
				],
				events: [{
					date: '2017/12/15',
					start: '',
					end: '',
					title: 'Foo',
					location: '',
					desc: 'longlonglong description',
					type: 'production'
				}, { 
					date: '2017/11/15',
					start: '',
					end: '',
					title: 'Wonderful Event',
					location: '',
					desc: "bar",
					type: 'rehearsal'
				}],
				posts: [
					{
					content: 'Veniam tofu raw denim id. Waistcoat culpa consequat DIY, aliqua try-hard fugiat taxidermy succulents. Enim helvetica viral heirloom raclette. Veniam duis salvia taiyaki poke thundercats before they sold out meh hella dolore skateboard. Swag fam glossier ut.',
					imgs: "",
					timestamp: 	1508518037,
					likes: 24,
					comments: [{
							user: 'Ed Remi',
							user_img: require("../assets/images/Brenden-Friesen.png"),
							commentText: 'Pounce on unsuspecting person eat prawns daintily with a claw then lick paws clean wash down prawns with a lap.',
							timestamp: 	1508521637
						}, {
							user: 'Jane Smith',
							user_img: require("../assets/images/Camille-Rogers.png"),
							commentText: 'The short, stubby, 11.2-ounce Duvel-style bottle releases a dark, leathery-brown brew, with a tan-colored, super-tight, creamy, fluffy lacing.',
							timestamp: 	1508521637
						}]
					}, {
					content: 'Doggo ipsum floofs the neighborhood pupper bork. Stop it fren pupper heckin good boys and girls long bois the neighborhood pupper shooberino, boofers clouds heckin angery woofer very jealous pupper.',
					imgs: [require("../assets/images/greathall.jpg"), require("../assets/images/stagetub.jpg")],
					timestamp: 	1508518037,
					likes: 24,
					comments: [{
							user: 'Ed Remi',
							user_img: require("../assets/images/Dalen-trimmed.png"),
							commentText: 'Cake bear claw cheesecake oat cake candy canes chocolate.',
							timestamp: 	1508521637
						}, {
							user: 'Jane Smith',
							user_img: require("../assets/images/Caitlin-McCaughey.png"),
							commentText: 'The short, stubby, 11.2-ounce Duvel-style bottle releases a dark, leathery-brown brew, with a tan-colored, super-tight, creamy, fluffy lacing.',
							timestamp: 	1508521637
						}]
					},{
					content: 'Boof you are doing me a frighten he made many woofs stop it fren, sub woofer very jealous pupper. Boofers puggorino shoober long water shoob what a nice floof boof, dat tungg tho shoob floofs.',
					imgs: "",
					timestamp: 	1508518037,
					likes: 24,
					comments: [{
							user: 'Edward Great',
							user_img: require("../assets/images/Daniel-Thielman.png"),
							commentText: 'Pounce on unsuspecting person eat prawns daintily with a claw then lick paws clean wash down prawns with a lap.',
							timestamp: 	1508521637
						}, {
							user: 'Jane Smith',
							user_img: require("../assets/images/Leanne-Kaufman.png"),
							commentText: 'Marshmallow topping sweet jujubes bonbon cupcake I love sweet roll I love.',
							timestamp: 	1508521637
						}]
					},{
					content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?',
					imgs: [require("../assets/images/backstage.gif")],
					timestamp: 	1508518037,
					likes: 24,
					comments: [{
							user: 'Maggie Gyllenhall',
							user_img: require("../assets/images/Georgia-Burashko.png"),
							commentText: 'Dessert apple pie wafer jelly cupcake. Sweet donut brownie bear claw.',
							timestamp: 	1508521637
						}, {
							user: 'Tom Price',
							user_img: require("../assets/images/Julie-Adams.png"),
							commentText: 'Gingerbread gummi bears bonbon cheesecake wafer tiramisu. ',
							timestamp: 	1508521637
						}]
					}

				]
			},
		}

	},
	getters: {
		
	},
	mutations: {
		
	},
	actions: {
		
	}
})