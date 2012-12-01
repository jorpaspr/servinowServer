(function(ep){
	var elements = {};
	ep.Interfaz.ElementoDrawer = function(){
		this.drawPanelCocinero = function(elementParent, panel){
			elements["panel"+panel.tipo] = {};
			elements["panel"+panel.tipo].estados = {};
			elements["panel"+panel.tipo].pedidos = {};
			elements["panel"+panel.tipo].productos = {};
			
			var panelElementGraphic = new ep.Interfaz.Entidad.PanelElementoGrafico();
			panelElementGraphic.create(panel.tipo);
			
			elements["panel"+panel.tipo].element = panelElementGraphic;
			
			for(var i = 0; i < panel.estados.length; ++i){
				this.drawEstado(panel, panel.estados[i]);
			}
			
			panelElementGraphic.addTo(elementParent);
		}
		this.drawPanelCamarero = function(panel){
			elements["panel"+panel.tipo].estados = {};
			elements["panel"+panel.tipo].pedidos = {};
			elements["panel"+panel.tipo].productos = {};
		}
		this.drawEstado = function(panel, estado){
			var estadoElementGraphic = new ep.Interfaz.Entidad.EstadoElementoGrafico();
			estadoElementGraphic.create(estado, estado.botonera);
			
			elements["panel"+panel.tipo].estados["estado"+estado.tipo] = {};		
			elements["panel"+panel.tipo].estados["estado"+estado.tipo].element = estadoElementGraphic;
			
			var panelElementGraphic = elements["panel"+panel.tipo].element;
			
			panelElementGraphic.addEstado(estadoElementGraphic);
			
			this.drawVistaProductosAgrupadosPedidos(panel, estado);
		}
		this.drawVistaProductosAgrupadosPedidos = function (panel, estado){
			var vistaPedidosElementGraphic = new ep.Interfaz.Entidad.ProductosAgrupadosPedidosElementoGrafico();
			vistaPedidosElementGraphic.create();
			
			elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos = {};
			elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos = {};
			elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.element = vistaPedidosElementGraphic;
			
			var estadoElementGraphic = elements["panel"+panel.tipo].estados["estado"+estado.tipo].element;
			estadoElementGraphic.addVistaProductosAgrupadosPedidos(vistaPedidosElementGraphic);
		}
		this.drawPedidos = function(panel, pedidos){
			for(var i = 0; i < pedidos.length; ++i){
				this.drawPedido(panel, pedido[i]);
			}
		}
		this.drawPedido = function(panel, pedido){
			var estadosDibujados = [];
			
			for(var j = 0; j < pedido.lineasPedido.length; ++j){
				var lineaPedido = pedido.lineasPedido[j];
				var estado = lineaPedido.estado;
				
				if(!ep.Util.BSearchElementArray(estado.tipo, estadosDibujados)) {
					var pedidoElementGraphic = new ep.Interfaz.Entidad.PedidoElementoGrafico();
					pedidoElementGraphic.create(pedido);
					
					elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id] = {};					
					elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].productos = {};
					elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].element = pedidoElementGraphic;
					
					var vistaPedidosElementoGrafico = elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.element;
				
					vistaPedidosElementoGrafico.addPedido(pedidoElementGraphic);
					
					this.drawLineaPedido(panel, pedido, lineaPedido);
				
					estadosDibujados.push(estado.tipo);
				}
			}
		}
		this.drawLineaPedido = function(panel, pedido, lineaPedido){
			var productoElementGraphic = new ep.Interfaz.Entidad.ProductoElementoGrafico();
			productoElementGraphic.create(lineaPedido);
			
			var estado = lineaPedido.estado;
			
			var pedidoElementGraphic = elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].element;
			
			elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].productos["producto"+lineaPedido.producto.id] = productoElementGraphic;
			
			pedidoElementGraphic.addProducto(productoElementGraphic);
		}
	}
})(ep);
