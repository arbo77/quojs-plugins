# QuoJS Masonry Plugins

Dynamic masonry layout design using QuoJS a Micro Javascript Library.

## Dependencies

- [QouJS](http://quojs.tapquo.com)

## Changelog

2013/04/12 
- First commit

2013/04/13 
- Change entire masonry class
- Adding init method into Masonry class
- Adding add_item method into Masonry class
- Adding draw_item method into Masonry class
- Adding masonry.append method into quo-masonry plugin
- Adding masonry.prepend method into quo-masonry plugin

2013/04/14
- Change add_item method, place next item into the shortest column.
- Adding fluid placement
- Adding inline css to define .mason and .mason .col classes
- Redrawing capability when resizing window 

## Coding example

### Javascript

```js

$$("#container").masonry({
	cols:'auto', 
	itemWidth: 240
});

```

### HTML

```html
<head>
	...
	...
	<script src="quo.js"></script>
	<script src="quo.masonry.js"></script>
	<script>

	$$().ready(function(){
		$$("#container").masonry({
			cols:'auto', 
			itemWidth: 240
		});
	}
	</script>
</head>
<body>
	...
	<div id="container" class="cols">
		<div class="box" style="height:320px">1</div>
		<div class="box" style="height:400px">2</div>
		<div class="box" style="height:280px">3</div>
		<div class="box" style="height:420px">4</div>
		<div class="box" style="height:500px">5</div>
		<div class="box" style="height:350px">6</div>
		<div class="box" style="height:380px">7</div>
		<div class="box" style="height:480px">8</div>
		<div class="box" style="height:332px">9</div>
		<div class="box" style="height:420px">10</div>
		<div class="box" style="height:320px">11</div>
		<div class="box" style="height:420px">12</div>
		<div class="box" style="height:380px">13</div>
	</div>
	...
</body>

```

### CSS

No basic CSS class definition. It's already provide on plugin.

#### Container class

.mason {}

#### Item Class

.mason .col{}


## Example


