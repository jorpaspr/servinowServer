(function(ep, template){
	var template = template.PANEL;
	ep.Interfaz.Entidad.PanelElementoGrafico = function() {
		this.element = null;
		this.create = function(panel){
			var data = {
				panel: panel
			};
			this.element = $(new EJS({url: template}).render(data));
                        
                        this.element.data("obj", panel);

			return this;
		}
		this.addEstado = function(estadoElementoGrafico){
			this.element.append(estadoElementoGrafico.element);
		}
		this.addPedido = function(estadoElementoGrafico, pedidoElementoGrafico){
			estadoElementoGrafico.addPedido(pedidoElementoGrafico);
		}
		this.addTo = function(elementParent){
			elementParent.append(this.element);
		}
	}
})(ep, template);
