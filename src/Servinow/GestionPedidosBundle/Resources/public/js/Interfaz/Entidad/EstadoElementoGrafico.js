(function(ep, template){
	var template = template.ESTADO;
	ep.Interfaz.Entidad.EstadoElementoGrafico = function() {
		this.element = null;
		this.estado = null;
		this.vistaAgrupadaPedido = null;
		this.create = function(estado, botonera){
			var data = {
				estado: estado,
				botonera: botonera
			};
			this.element = $(new EJS({url: template}).render(data));
			
			this.estado = estado;
			
			this.contentDiv = this.element.find('.contentDiv');
			
			this.cantidadProductosElement = this.element.find('.cantidadProductos');
			this.cantidadProduct = 0;
			this.cambiarCantidadProductos();
			return this;
		}
		this.addVistaProductosAgrupadosPedidos= function(vistaPedidosElementoGrafico){
			this.vistaAgrupadaPedido = vistaPedidosElementoGrafico;
			this.contentDiv.append(vistaPedidosElementoGrafico.element);
		}
		this.cambiarCantidadProductos = function(){
			this.cantidadProductosElement.text("("+this.cantidadProduct+")");
		}
		this.incrLineasPedido = function(){
			this.cantidadProduct++;
			this.cambiarCantidadProductos();
		}
		this.decrLineasPedido = function(){
			this.cantidadProduct--;
			this.cambiarCantidadProductos();
		}
		this.addPedido = function(pedidoElementGraphic){			
			this.vistaAgrupadaPedido.addPedido(pedidoElementGraphic);
		}
		this.hasPedido = function(pedido){
			return this.vistaAgrupadaPedido.hasPedido(pedido);
		}
		this.getPedido = function(pedido){
			return this.vistaAgrupadaPedido.getPedido(pedido);
		}
	}
})(ep, template);
