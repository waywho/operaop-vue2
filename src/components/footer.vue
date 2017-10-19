<template>
  <div id="footer">
  	<div class="row">
  		<div class="col-sm-2">
		  	<div class="footer-logo">
		  		<img src='../assets/images/operaop-logo-gray.png' alt="operaop logo" />
		  	</div>
	  	</div>
 		<div class="col-sm-2">
	    	<b>memberships</b>
	    	<ul>
	    		<li class="is-lightgray">Adante Artist</li>
	    		<li class="is-lightgray">Adagio Artist</li>
	    		<li class="is-lightgray">Company</li>
	    	</ul>
	    </div>
	    <div class="col-sm-2">
	    		 <b>account</b>
	    	<ul>
	    		<li class="is-lightgray">login</li>
	    		<li class="is-lightgray">settings</li>
	    		<li class="is-lightgray">contact</li>
	    	</ul>
	    </div>
	    <div class="col-sm-2">
	    	<b>socials</b>
	    	<ul>
	    		<li class="is-lightgray">facebook</li>
	    		<li class="is-lightgray">twitter</li>
	    		<li class="is-lightgray">instagram</li>
	    	</ul>
	    </div>
	</div>
	<div class="row">
		<div class="col-sm-8 is-lightgray footnote">
			©OperaOp 2017. All Rigths Reserved.
		</div>
	</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {
  background-color: white;
  padding: 125px 0px 105px 100px;
}

.footer-logo {
	width: 98px;
}

#footer ul {
	padding-left: 0px;
}

#footer li {
	list-style: none;
}

.footnote {
	padding: 23px 0px;
	border-top: 1px solid #706d6c;
}
</style>
