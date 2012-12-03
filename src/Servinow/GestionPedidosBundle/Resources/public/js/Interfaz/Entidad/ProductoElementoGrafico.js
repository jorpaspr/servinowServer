(function(ep, template){
	var template = template.PRODUCTO;
	ep.Interfaz.Entidad.ProductoElementoGrafico = function() {
		this.element = null;
		this.create = function(lineaPedido){
			var data = {
				lineaPedido: lineaPedido
			};
			this.element = $(new EJS({url: template}).render(data));
                        
                        this.element.data("obj", lineaPedido);
			return this;
		}
	}
})(ep, template);
