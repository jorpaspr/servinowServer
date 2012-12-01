(function(ep){
	ep.Util.BSearchElementArray = function (element, array){
		for(var i = 0; i < array.length; ++i){
			if(array[i] == element) return true;
		}
		return false;
	}
})(ep);



/*(function($) {
    $.strRemove = function(theTarget, theString) {
        return $("<div/>").append(
            $(theTarget, theString).remove().end()
        ).html();
    };
})(jQuery);

(function($) {
    $.createElementFromStr = function(html) {
        var el = $("<div>").html(html)
        .children().first();
        
		return el;
    };
})(jQuery);*/
