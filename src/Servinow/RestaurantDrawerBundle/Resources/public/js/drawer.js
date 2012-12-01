$(function(){
	var nCols = 15;
	var nRows = 10;
	var colWidth;
	var rowHeight;
	
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
	
	var prepareEvents = function(){
		var els = $('#formDraggers_object, #formDraggers_table');
		els.find('.configRight input[type="number"]').on('change', function(){
			var t = $(this);
			
			var type;
			if(t.parent().is('.tall')) {
				type = "tall"
			} else {
				type = "wide";
			}
			
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
	}
	
	var canvas = $('#drawerCanvas');
	if (canvas[0].getContext){
		var ctx = canvas[0].getContext('2d');
		prepareCanvas(canvas, ctx);
		prepareEvents();
	} else {
	}
});