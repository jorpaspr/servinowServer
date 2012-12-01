(function(ep, template){
	var template = template.PEDIDO;
	ep.Interfaz.Entidad.PedidoElementoGrafico = function() {
		this.element = null;
		this.create = function(pedido){
			var data = {
				pedido: pedido
			};
			this.element = $(new EJS({url: template}).render(data));
			this.listaProductos = this.element.find('.listaProductos');
			return this;
		}
		this.addProducto = function(productoElementGraphic){
			this.listaProductos.append(productoElementGraphic.element);
		}
	}
})(ep, template);
