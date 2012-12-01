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
			return this;
		}
		this.addVistaProductosAgrupadosPedidos= function(vistaPedidosElementoGrafico){
			this.contentDiv.append(vistaPedidosElementoGrafico.element);
		}
	}
})(ep, template);
