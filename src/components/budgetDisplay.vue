<template>
  <div class="budget-display">
  	<div class="selection budget-accounts">
   		<span v-for="item in companyBudget.accounts"  class="selection-text-horizontal col-sm-2 col-xs small" v-on:click.prevent="getAccount(item)">{{item.description}}</span>
	</div>
    <div class="panels">
	  	<div class="panel-left">
	  		<chartjs-doughnut :height="320" :datalabe="null" :labels="budgetChartData.labels" :data="budgetChartData.data" :option="chartOption" :backgroundcolor="budgetChartData.backgroundColor" :bind="true"></chartjs-doughnut>
	  	</div>
	  	<div class="panel">
	  		<div class="budget-line">
	  			<span class="strong small budget-category">{{currentDisplayAccount.description}}</span><span class="strong small is-darkgray">${{currentDisplayAccount.amount}}</span>
	  		</div>
	  		<div class="budget-line">
	  			<div class="progress-border">
	  				<div class="progress smaller" :style="'width:' + percentSpent + '%'">{{percentSpent}}%</div>
	  			</div>
	  			<span class="smaller">Budget Spent to Date</span>
	  		</div>

	  		<div class="line-items budget-line">
	  			<span class="strong small">Field & Entry</span>
	  			<span class="smaller">Add fields to budget planner</span>
	  			<company-budgetInput v-for="(item, key, index) in lineItems" :key="key" :id="'lineItem' + key" :input-name="'Budget Item'" :text-value="item.description" :amount-value="item.amount" v-on:inputValue="addBudgetLines($event)"></company-budgetInput>
	  		</div>
	  		<div>
	  			<button v-on:click="saveAccount()" class="smaller">Save</button>

	  			
	  		</div>
	  	</div>
  	</div>
  </div>
</template>

<script>
import budgetLedger from './budgetLedger'
import budgetInput from './budgetInput'

export default {
  name: 'budgetDisplay',
  components: {
  	'company-budgetLedger': budgetLedger,
  	'company-budgetInput': budgetInput
  },
  props: {
  	companyBudget: Object
  },
  data () {
    return {
  		currentDisplayAccount: {
  			description:"",
  			amount: 0,
  			lineItems: []
  		},
  		lineItemInputs: {},
  		percentSpent: "",
  		budgetChartData: {
  			labels: [],
  			data: [],
			backgroundColor: [
				'rgba(247, 149, 33, 1)',
            	'rgba(249, 172, 83, 1)',
            	'rgba(251, 196, 132, 1)',
            	'rgba(255, 198, 26, 1)',
            	'rgba(255, 210, 77, 1)'
				]
  		},
  		chartOption: {
  			legend: {
  				display: true,
  				position: 'bottom'
  			}
  		}
    }
  },
  computed: {
  	lineItems() {
  		if (this.currentDisplayAccount.lineItems.length) {
  			console.log("here are the budget items 1")
  			console.log(this.currentDisplayAccount.lineItems.length)
  			// var i = Object.keys(this.currentDisplayAccount.lineItems)
  			// for(i; i < 3; i++) {
  			// 	this.currentDisplayAccount.lineItems[i] = {"description":"", "amount": null}
  			// }

  			for (var i = 0; i < this.currentDisplayAccount.lineItems.length; i++) {
  				this.lineItemInputs['lineItem' + i] = this.currentDisplayAccount.lineItems[i]
  			}
  			console.log(this.lineItemInputs)

  			return this.lineItemInputs;
  		} else {
  			console.log("no line items! 1-n")
  			console.log(this.currentDisplayAccount)
  			// for(var i = 0; i < 3; i++) {
  			// 	this.lineItemInputs['lineItem' + i] = {"description":"", "amount": null}
  			// }
  			// console.log(this.lineItemInputs)
  			// this.currentDisplayAccount.lineItems = this.lineItemInputs
  			return 3;
  		}
  	}  	
  },
  methods: {
  	getAccount(object) {
  		if(object.lineItems) {
  			this.currentDisplayAccount = object
  		} else {
  			object['lineItems'] = []
  			this.currentDisplayAccount = object
  		}
  		this.charting(this.currentDisplayAccount.lineItems);
  		console.log(this.currentDisplayAccount)
  	},
  	addBudgetLines(object) {
  		// console.log('lineItemInputs 5')
  		console.log(object)
  		Object.assign(this.lineItemInputs, object);
  		console.log('lineItemInputs 6')
  		console.log(this.lineItemInputs)
  		this.percentSpent = this.percent(this.lineItemInputs, this.currentDisplayAccount.amount)

  		const unspent = this.currentDisplayAccount.amount - this.summing(this.lineItemInputs)

 	 	this.charting(this.lineItemInputs)
		// this.budgetChartData.labels.push('unspent')
		// this.budgetChartData.data.push(unspent)
		// this.currentDisplayAccount.lineItems = filteredArray;
		console.log(this.budgetChartData)
		
		// need to update budget

		// console.log('currentDisplayAccount with line items 7')
		// console.log(this.currentDisplayAccount)
  	},
  	saveAccount() {
  		const inputArray = Object.values(this.lineItemInputs)
  		let filteredArray = inputArray.filter(function(object) {
 	 		return object.descripton !== "" && object.amount !== null
 	 	})

  		this.currentDisplayAccount.lineItems = filteredArray;
  	},
  	charting(lineitems) {
  		const inputArray = Object.values(lineitems)
  		let filteredArray = inputArray.filter(function(object) {
 	 		return object.descripton !== "" && object.amount !== null
 	 	})

 	 	console.log('input array')
 	 	console.log(filteredArray)

 	 	this.currentDisplayAccount['lineItems'] = filteredArray

  		const arrayKeys = []
 	 	const arrayValues = []
		for(var i=0; i< filteredArray.length; i++) {
			arrayKeys.push(filteredArray[i]['description'])
			arrayValues.push(filteredArray[i]['amount'])
		}

		console.log(this.budgetChartData)

		this.budgetChartData.labels = arrayKeys
		this.budgetChartData.data = arrayValues
  	},
  	percent(lineItems, accountTotal) {
		console.log("percentSpent is called 3")
		return Math.round(this.summing(lineItems)/accountTotal * 100)
  	},
  	summing(object) {
  		var sum = 0
		for (const prop in object) {
			sum += object[prop]['amount']
		}
		console.log('sum:')
		console.log(sum)
		return sum
  	}
  },
  created() {
  	// get initial display account
  	Object.assign(this.currentDisplayAccount, this.companyBudget.accounts[Object.keys(this.companyBudget.accounts)[0]]);
  	console.log('currentDisplayAccount 8')
  	console.log(this.currentDisplayAccount)
  	this.percentSpent = this.percent(this.currentDisplayAccount.lineItems, this.currentDisplayAccount.amount)

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.budget-display {
	width: 100%;
}

.panels {
	display: flex;
	width: 100%;
}

.panel {
	width: 50%;
	margin-right: 5px;
}

.panel-left {
	width: 50%;
	margin-left: 5px;
}

.budget-accounts {
	margin-bottom: 23px;
	cursor: pointer;
}
.budget-line {
	margin-bottom: 35px;
}

.item {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.budget-category {
	margin-right: 18px;
}

.progress-border {
	border: 2px solid #ecddba;
	width: 100%;
	height: 21px;
	border-radius: 21px;
	position: relative;
}

.progress {
	background-color: #ecddba;
	color: white;
	position: absolute;
	left: 0px;
	border-radius: 7px;
	height: 100%;
	padding: 0px 5px;
	text-align: center;
}

</style>
