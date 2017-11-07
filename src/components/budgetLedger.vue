<template>
  <div class="panel panel-right">
  		Ledger: {{budgetItems}}
      
  </div>
</template>

<script>
import budgetInput from './budgetInput'
export default {
  name: 'budgetLedger',
  components: {
      'company-budgetInput': budgetInput
  },
  props: {
    budgetItems: Array,
    currentAmountValue: Number,
    currentTextValue: String

  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
