/** 
 *      quo.masonry.js
 *      
 *      QuoJS Masonry plugin
 *      
 *      @arbo77 - 2013
 *      
 *      This program is free software; you can redistribute it and/or modify
 *      it under the terms of the GNU General Public License as published by
 *      the Free Software Foundation; either version 2 of the License, or
 *      (at your option) any later version.
 *      
 *      This program is distributed in the hope that it will be useful,
 *      but WITHOUT ANY WARRANTY; without even the implied warranty of
 *      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *      GNU General Public License for more details.
 *      
 *      You should have received a copy of the GNU General Public License
 *      along with this program; if not, write to the Free Software
 *      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 *      MA 02110-1301, USA.
 *      
 */
 
(function($$){
	
	var Masonry = {
		element: null,
		childs: [],
		options: {
			itemWidth: 240,
			cols: 4,
			gap: 10,
		},
		column: {
			index: 0,
			number: 4,
			height: [0,0,0,0],
		},
		is_redraw: false,
		
		init: function(element, options){
			/**
			 * init masonry element, and grab all 1st level child in element
			 */
			this.element = element;
			this.element.addClass("mason");
			if(options.cols === "auto" && options.itemWidth){
				this.options['cols'] = options.cols;
				this.options['itemWidth'] = options.itemWidth;
			}
			this.element.children().each(function(){
				Masonry.childs.push(this)
			});
			this.draw_item();
			$$(window).on("resize",function(){
				Masonry.redraw()
			})
		},
		
		make_fluid: function(){
			$$(".mason .col").remove();
			this.element[0].style["width"] = "auto";
			this.column.number = Math.floor(this.element.width()/this.options.itemWidth)
			this.element[0].style["width"] = (this.column.number * this.options.itemWidth)+"px";
			var colWidth = this.options.itemWidth - this.options.gap;
			if(!this.is_redraw){
				$$("head").append("<style>\n.mason{margin: 0 auto}\n.mason .col{float:left;width:"+colWidth+"px;margin:0 "+(this.options.gap/2)+"px;}\n</style>")
			}
			for(i=0;i<this.column.number;i++){
				this.column.height[i] = 0;
				this.element.append("<div class='col' style=''></div>");
			}
		},
		
		draw_item: function(){
			this.make_fluid();
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
		
		redraw: function(){
			this.is_redraw = true;
			this.draw_item();
		},
		
		add_item: function(item, index){
			$$($$(".mason .col")[this.get_shortest_column()]).append(item);
		},
		
		get_shortest_column: function(){
			var min = 999999999999;
			var i = 0; 
			var c = 0;
			$$(".mason .col").each(function(){
				if(this.offsetHeight < min){
					c = i;
					min = this.offsetHeight;
				}
				i++;
			})
			return c;
		}
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
