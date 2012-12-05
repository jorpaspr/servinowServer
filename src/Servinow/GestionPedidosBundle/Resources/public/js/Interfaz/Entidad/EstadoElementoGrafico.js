(function(ep, template){
	var template = template.ESTADO;
	ep.Interfaz.Entidad.EstadoElementoGrafico = function() {
		this.element = null;
		this.create = function(estado, botonera){
			var data = {
				estado: estado,
				botonera: botonera
			};
			this.element = $(new EJS({url: template}).render(data));
			this.contentDiv = this.element.find('.contentDiv');
			
			this.cantidadProductosElement = this.element.find('.cantidadProductos');
			this.cantidadProduct = 0;
			this.cambiarCantidadProductos();
			return this;
		}
		this.addVistaProductosAgrupadosPedidos= function(vistaPedidosElementoGrafico){
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
	}
})(ep, template);
