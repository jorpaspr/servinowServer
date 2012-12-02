$(function(){
	var nCols = 15;
	var nRows = 10;
	var colWidth;
	var rowHeight;
	
	var knowledge;
	
	var prepareCanvas = function(canvasEl, ctx){
		var width = canvasEl.prop('width');
		var height = canvasEl.prop('height');
		
		colWidth = width/nCols;
		rowHeight = height/nRows;
		
		//Vertical lines.
		for(var x=0; x<=nCols; x++){
			var posx = colWidth*x;

			ctx.beginPath();
			ctx.moveTo(posx,0);
			ctx.lineTo(posx,height);
			ctx.stroke();
		}
		
		//Horizontal lines.
		for(var y=0; y<=nRows; y++){
			var posy = rowHeight*y;
			
			ctx.beginPath();
			ctx.moveTo(0,posy);
			ctx.lineTo(width,posy);
			ctx.stroke();
		}
	}
	
	var setSizes = function(el, def){
		el.css({'width' : colWidth*def.width, 'height': rowHeight*def.height})
			.find('.title').css({'width' : colWidth*def.width, 'height': rowHeight*def.height});
			
		if(def.height == def.width){
			el.removeClass('wide tall').addClass('square');
		} else if(def.height < def.width){
			el.removeClass('square tall').addClass('wide');
		} else {
			el.removeClass('square wide').addClass('tall');
		}
	}
	
	var setPositions = function(el, pos){
		el.css({
			top: pos.y * rowHeight + 5,
			left: pos.x * colWidth + 5,
			position: 'absolute'
		});
	}
	
	var prepareEvents = function(els){
		els.find('.configRight input[type="number"]').on('change', function(){
			var t = $(this);
			
			var obEl = t.parents('.option').find('.object > p');
			var tallEl = t.parents('.configRight').find('.tall input');
			var wideEl = t.parents('.configRight').find('.wide input');
			
			obEl.css({'width' : colWidth*wideEl.val(), 'height': rowHeight*tallEl.val()})
				.find('.title').css({'width' : colWidth*wideEl.val(), 'height': rowHeight*tallEl.val()});
			
			if(tallEl.val() == wideEl.val()){
				obEl.removeClass('wide tall').addClass('square');
			} else if(tallEl.val() < wideEl.val()){
				obEl.removeClass('square tall').addClass('wide');
			} else {
				obEl.removeClass('square wide').addClass('tall');
			}
		});

		prepareDraggable($('#formDraggers_object .objectElement'), true);
	}
	
	var prepareDraggable = function(els, isGeneric){
		var cont = $('#drawerCanvasContainer');
		
		els.draggable({
			helper: (isGeneric? (function(){return $('<div>p</div>');}) : null)
			,scroll: false
			,containment: cont
			,appendTo: cont
			,handle: '.handler'
			,stop : function(e, ui){
				var helper;
				if(isGeneric)
					helper = ui.helper.clone(true);
				else
					helper = ui.helper;
				
				var helperDef = {};
				helper.removeClass('ui-draggable-dragging isGeneric').css({
					top: helperDef.top=(Math.floor(ui.position.top/rowHeight) * rowHeight + 5),
					left: helperDef.left=(Math.floor(ui.position.left/colWidth) * colWidth + 5),
					position: 'absolute'
				}).data('id', helperDef.id=(Math.floor(Math.random()*1000)) );
				
					helperDef.name = helper.find('.title').val();
				
				knowledge.objects.push(helperDef);
				
				helper.find('.removeHandler').click(function(){
					removeObject(helper);
				});
				
				prepareDraggable(helper, false);
				helper.appendTo(cont);
			}
		});
	}
	
	var removeObject = function(el){
		console.log(knowledge.objects);
		
		for(var i=0; i<knowledge.objects.length; i++){
			var id = el.data('id');
			
			if(id == knowledge.objects[i].id) { 
				knowledge.objects.splice(i, 1);
				el.remove();
			
				return;
			}
		}
	}
	
	var prepareElements = function(){
		var json = $('#drawerKnowledge').text();
		knowledge = $.parseJSON(json);
		
		for(var i=0; i<knowledge.objects.length; i++){
			var newObject = $('#formDraggers_object .objectElement').clone().removeClass('isGeneric');
			setSizes(newObject, knowledge.objects[i]);
			prepareDraggable(newObject);
			setPositions(newObject, knowledge.objects[i]);
			(function(el){
				el.find('.removeHandler').click(function(){
					removeObject(el);
				});
			})(newObject);
			newObject.data('id', knowledge.objects[i].id);
			newObject.find('.title').val(knowledge.objects[i].name);
			$('#drawerCanvasContainer').append(newObject);
		}
	}
	
	var canvas = $('#drawerCanvas');
	if (canvas[0].getContext){
		var ctx = canvas[0].getContext('2d');
		prepareCanvas(canvas, ctx);
		prepareEvents( $('#formDraggers_object, #formDraggers_table') );
		prepareElements();
	} else {
	}
});