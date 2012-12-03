(function(ep){
	var elements = new ep.Interfaz.ElementoGraphicTree();
	ep.Interfaz.ElementoDrawer = function(){
		this.drawPanelCocinero = function(elementParent, panel){
			var panelElementGraphic = new ep.Interfaz.Entidad.PanelElementoGrafico();
			panelElementGraphic.create(panel);
			
			elements.newPanelElement(panelElementGraphic, panel);
			
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
			
                        elements.newEstadoElement(estadoElementGraphic, panel, estado);
			
			var panelElementGraphic = elements.getPanelElement(panel).element;
			
			panelElementGraphic.addEstado(estadoElementGraphic);
			
			this.drawVistaProductosAgrupadosPedidos(panel, estado);
		}
		this.drawVistaProductosAgrupadosPedidos = function (panel, estado){
			var vistaPedidosElementGraphic = new ep.Interfaz.Entidad.ProductosAgrupadosPedidosElementoGrafico();
			vistaPedidosElementGraphic.create();
                        
                        elements.newVistaPedidosElement(vistaPedidosElementGraphic, panel, estado);
			
			var estadoElementGraphic = elements.getEstadoElement(panel, estado).element;
			estadoElementGraphic.addVistaProductosAgrupadosPedidos(vistaPedidosElementGraphic);
		}
		this.drawPedidos = function(panel, pedidos){
			for(var i = 0; i < pedidos.length; ++i){
				this.drawPedido(panel, pedido[i]);
			}
		}
		this.drawPedido = function(panel, pedido){
			for(var j = 0; j < pedido.lineasPedido.length; ++j){
				var lineaPedido = pedido.lineasPedido[j];
				var estado = lineaPedido.estado;
                                
                                this.drawPedidoEnEstado(panel, pedido, estado);
                                this.drawLineaPedido(panel, pedido, lineaPedido);
			}
		}
                this.drawPedidoEnEstado = function(panel, pedido, estado){
                     var pedidoExist = elements.getPedidoElement(panel, estado, pedido);
                     if(pedidoExist == null){
			var pedidoElementGraphic = new ep.Interfaz.Entidad.PedidoElementoGrafico();
			pedidoElementGraphic.create(pedido);
					
			elements.newPedidoElement(pedidoElementGraphic, panel, estado, pedido);
					
			var vistaPedidosElementoGrafico = elements.getVistaPedidosElement(panel, estado).element;
				
			vistaPedidosElementoGrafico.addPedido(pedidoElementGraphic);
                    }
                    
                }
		this.drawLineaPedido = function(panel, pedido, lineaPedido){
			var estado = lineaPedido.estado;
                        
                        var existeLineaPedido = elements.getLineaPedidoElement(panel, estado, pedido, lineaPedido);
                        if(existeLineaPedido == null){
                            var productoElementGraphic = new ep.Interfaz.Entidad.ProductoElementoGrafico();
                            productoElementGraphic.create(lineaPedido);
                            
                            elements.newLineaPedidoElement(productoElementGraphic, panel, estado, pedido, lineaPedido);
                            
                            var pedidoElementGraphic = elements.getPedidoElement(panel, estado, pedido).element;                        
                            pedidoElementGraphic.addProducto(productoElementGraphic);
                        }
		}
                this.drawUpdatedEstadoLineaPedido = function(panel, pedido, lineaPedido, estado){
                    this.drawPedidoEnEstado(panel, pedido, lineaPedido.estado);
                    
                    var productoElementGraphic = elements.getLineaPedidoElement(panel, estado, pedido, lineaPedido).element;
                    elements.deleteLineaPedidoElement(panel, estado, pedido, lineaPedido);
                    
                    elements.newLineaPedidoElement(productoElementGraphic, panel, lineaPedido.estado, pedido, lineaPedido);

                    var pedidoElementGraphic =  elements.getPedidoElement(panel, lineaPedido.estado, pedido).element;
                    
                    pedidoElementGraphic.addProducto(productoElementGraphic);
                }
                this.clearLineaPedido = function(panel, pedido, lineaPedido){
                    var estado = lineaPedido.estado;
                    
                    console.log(elements);
                    
                    var productoElementGraphic = elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].productos["producto"+lineaPedido.producto.id].element;
                    elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].productos["producto"+lineaPedido.producto.id] = null;
                    
                    productoElementGraphic.element.remove();
                }
	}
})(ep);
