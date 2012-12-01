(function(ep, template){
	var template = template.PRODUCTOSAGRUPADOSPEDIDOS;
	ep.Interfaz.Entidad.ProductosAgrupadosPedidosElementoGrafico = function() {
		this.element = null;
		this.create = function(){
			var data = {};
			this.element = $(new EJS({url: template}).render(data));
			return this;
		}
		this.addPedido = function(pedidoElementoGrafico){
			this.element.append(pedidoElementoGrafico.element);
		}
	}
})(ep, template);
