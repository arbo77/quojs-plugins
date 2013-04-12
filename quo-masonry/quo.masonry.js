(function($$){
	$$.fn.masonry = function(options){
		var i=0;
		var cols  = 4;
		this.append("<div class='tmp'></div>");
		this.children().each(function(){
			if(this.className !== "tmp"){
				$$(".tmp").append(this)
			}
		});
		this.addClass("mason");
		for(c=0;c<cols;c++){
			this.append("<div class='col'></div>");
		}
		$$(".tmp").children().each(function(){
		  $$($$(".mason .col")[i%4]).append(this)
		  i++;
		});
		
		$$(".tmp").remove();
	}
})(Quo);
