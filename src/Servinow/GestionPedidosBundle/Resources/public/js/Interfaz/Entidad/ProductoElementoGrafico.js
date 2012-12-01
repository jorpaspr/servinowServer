(function(ep, template){
	var template = template.PRODUCTO;
	ep.Interfaz.Entidad.ProductoElementoGrafico = function() {
		this.element = null;
		this.create = function(producto){
			var data = {
				lineaPedido: producto
			};
			this.element = $(new EJS({url: template}).render(data));
			return this;
		}
	}
})(ep, template);
