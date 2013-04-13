(function($$){
	var Masonry = {
		element: null,
		childs: [],
		data: {
			col_index: 0,
			col_number: 4,
		},
		
		init: function(element, options){
			/**
			 * init masonry element, and grab all 1st level child in element
			 */
			this.element = element;
			this.element.children().each(function(){
				Masonry.childs.push(this)
			});
			this.element.addClass("mason");
			/**
			 * create n-columns
			 * n-columns should be fluid next time
			 */
			for(c=0;c<this.data.col_number;c++){
				this.element.append("<div class='col'></div>");
			}
			this.draw_item();
		},
		
		draw_item: function(){
			/**
			 * clear all n-column's item, and
			 * moving 1st level child into appropriate column,
			 * and marking next column index
			 */
			$$(".mason .col").empty();
			for(i=0;i<this.childs.length;i++){
				this.add_item(this.childs[i],i)
			}
		},
		
		add_item: function(item, index){
			this.data.col_index = (index%this.data.col_number)
			$$($$(".mason .col")[this.data.col_index]).append(item)
		},
	};
	
	$$.fn.masonry = function(options){
		Masonry.init(this,options)
	};
	
	$$.fn.masonry.append = function(item){
		Masonry.childs.push(item);
		Masonry.add_item(item,Masonry.childs.length-1)
	};
	
	$$.fn.masonry.prepend = function(item){
		Masonry.childs.unshift(item[0]);
		Masonry.draw_item();
	};
})(Quo);
