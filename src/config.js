requirejs.config({
	paths:{
		"jquery":"lib/jquery-3.1.1",
		"jqueryUi":"lib/jquery-ui-1.12.1.custom/jquery-ui"
	},
	shim:{
		"jqueryUi":["jquery"]
	}
});