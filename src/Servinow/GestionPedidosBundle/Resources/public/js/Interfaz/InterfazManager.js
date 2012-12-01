(function(ep){
	ep.Interfaz.InterfazManager = function(){
		this.cargarPanelCocinero = function(place){
			var panelManager = new ep.Manejador.PanelManager();
			var elementDrawer = new ep.Interfaz.ElementoDrawer();
			
			var estados = [];
			estados.push(ep.Entidad.Estado.COLA);
			estados[0].botonera = true;
			estados.push(ep.Entidad.Estado.COCINA);
			estados[1].botonera = true;
			estados.push(ep.Entidad.Estado.PREPARADO);
			estados[2].botonera = false;
			
			var panel = panelManager.add(ep.Constant.COCINERO, estados);
			
			elementDrawer.drawPanelCocinero(place, panel);
			
			return panel;
		}
		this.cargarPanelCamarero = function(){

		}
		this.drawNewPedidos = function(panel, pedidos){
			for(var i = 0; i < pedidos.length; ++i){
				var pedido = pedidos[i];
				this.drawNewPedido(panel, pedido);
			}
		}
		this.drawNewPedido = function(panel, pedido){
			var pedidoObj = this.addPedido(pedido);
			this.drawPedido(panel, pedidoObj);
		}
		this.drawPedido = function(panel, pedido){
			var elementDrawer = new ep.Interfaz.ElementoDrawer();
			
			elementDrawer.drawPedido(panel, pedido);
		}
		this.addPedido = function(pedido){
			var pedidoManager = new ep.Manejador.PedidoManager();
			
			var pedidoObj = pedidoManager.add(pedido.id);
			
			for(var i = 0; i < pedido.lineasPedido.length; ++i){
				var lineaPedido = pedido.lineasPedido[i];
				var lineaPedidoObj = this.addLineaPedido(lineaPedido);
				pedidoManager.addLineaPedido(pedidoObj, lineaPedidoObj);
			}
			
			return pedidoObj; 
		}
		this.addLineaPedido = function(lineaPedido){
			var lineaPedidoManager = new ep.Manejador.LineaPedidoManager();
			
			var producto = this.addProducto(lineaPedido.producto);
			var estado = this.addEstado(lineaPedido.estado);
			var lineaPedidoObj = lineaPedidoManager.add(lineaPedido.id, producto, lineaPedido.cantidad, estado);
			
			return lineaPedidoObj;
		}
		this.addEstado = function(tipo){
			switch(tipo){
				case ep.Constant.ESTADO_COLA:
					return ep.Entidad.Estado.COLA;
					break;
				case ep.Constant.ESTADO_COCINA:
					return ep.Entidad.Estado.COCINA;
					break;
				case ep.Constant.ESTADO_PREPARADO:
					return ep.Entidad.Estado.PREPARADO;
					break;
				case ep.Constant.ESTADO_TRANSITO:
					return ep.Entidad.Estado.TRANSITO;
					break;
				case ep.Constant.ESTADO_SERVIDO:
					return ep.Entidad.Estado.SERVIDO;
					break;
				default:
					return null;
			}
		}
		this.addProducto = function(producto){
			if(producto.tipo == ep.Constant.PLATO){
				var productoObj = this.addPlato(producto);
			} else {
				var productoObj = this.addBebida(producto);
			}
			
			return productoObj;
		}
		this.addPlato = function(producto){
			var platoManager = new ep.Manejador.PlatoManager();
			var platoObj = platoManager.add(producto.id, producto.nombre);
			
			return platoObj;
		}
		this.addBebida = function(producto){
			var bebidaManager = new ep.Manejador.BebidaManager();
			
			var bebidaObj = bebidaManager.add(producto.id, producto.nombre);
			
			return bebidaObj;
		}
		this.drawProducto = function(panel, producto){

		}
	}
})(ep);
