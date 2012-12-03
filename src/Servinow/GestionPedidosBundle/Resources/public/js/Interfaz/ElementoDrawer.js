(function(ep){
	var elements = {};
        var VISTA_PEDIDO = 0;
        var getElementGraphic = function(panel, estado, vista, pedido, lineaPedido){
            var element = getElement(panel, estado, vista, pedido, lineaPedido);
            return element.element;
        }
        var addElementGraphic = function(elementGraphic, panel, estado, vista, pedido, lineaPedido){
            var element = getElement(panel, estado, vista, pedido, lineaPedido);
            element = {};
            element.element = elementGraphic;
        }
        var removeElement = function(panel, estado, vista, pedido, lineaPedido){
             var element = getElement(panel, estado, vista, pedido, lineaPedido);
             element = null;            
        }
        var getElement =  function(panel, estado, vista, pedido, lineaPedido){
            var result;
            if(panel != null){
                if(elements["panel"+panel.tipo] == null) elements["panel"+panel.tipo] = {};
                result = elements["panel"+panel.tipo];
                if(estado != null){
                    if(result.estados["estado"+estado.tipo] == null) result.estados["estado"+estado.tipo] = {};
                    result = result.estados["estado"+estado.tipo];
                    if(vista == VISTA_PEDIDO) {
                        if(result.vistaPedidos == null) result.vistaPedidos = {};
                        result = result.vistaPedidos;
                        if(pedido != null){
                            if(result.pedidos["pedido"+pedido.id] == null) result.pedidos["pedido"+pedido.id] = {};
                            result = result.pedidos["pedido"+pedido.id];
                            if(lineaPedido != null){
                                if(result.productos["producto"+lineaPedido.producto.id] == null) result.productos["producto"+lineaPedido.producto.id] = {};
                                result = result.productos["producto"+lineaPedido.producto.id];
                            }
                        }
                    }
                }
            }
                    
            return result;
        }
	ep.Interfaz.ElementoDrawer = function(){
		this.drawPanelCocinero = function(elementParent, panel){
			elements["panel"+panel.tipo] = {};
			elements["panel"+panel.tipo].estados = {};
			elements["panel"+panel.tipo].pedidos = {};
			elements["panel"+panel.tipo].productos = {};
			
			var panelElementGraphic = new ep.Interfaz.Entidad.PanelElementoGrafico();
			panelElementGraphic.create(panel);
			
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
			for(var j = 0; j < pedido.lineasPedido.length; ++j){
				var lineaPedido = pedido.lineasPedido[j];
				var estado = lineaPedido.estado;
                                
                                this.drawPedidoEnEstado(panel, pedido, estado);
                                this.drawLineaPedido(panel, pedido, lineaPedido);
			}
		}
                this.drawPedidoEnEstado = function(panel, pedido, estado){
                     var pedidoExist = elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id];
                     if(pedidoExist == null){
			var pedidoElementGraphic = new ep.Interfaz.Entidad.PedidoElementoGrafico();
			pedidoElementGraphic.create(pedido);
					
			elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id] = {};					
			elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].productos = {};
			elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].element = pedidoElementGraphic;
					
			var vistaPedidosElementoGrafico = elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.element;
				
			vistaPedidosElementoGrafico.addPedido(pedidoElementGraphic);
                    }
                    
                }
		this.drawLineaPedido = function(panel, pedido, lineaPedido){
			var productoElementGraphic = new ep.Interfaz.Entidad.ProductoElementoGrafico();
			productoElementGraphic.create(lineaPedido);
			
			var estado = lineaPedido.estado;
                        
			var pedidoElementGraphic = elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].element;
			
                        var existeLineaPedido = elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].productos["producto"+lineaPedido.producto.id];
                        if(existeLineaPedido == null){
                            elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].productos["producto"+lineaPedido.producto.id] = {};
                            elements["panel"+panel.tipo].estados["estado"+estado.tipo].vistaPedidos.pedidos["pedido"+pedido.id].productos["producto"+lineaPedido.producto.id].element = productoElementGraphic;
                        
                            pedidoElementGraphic.addProducto(productoElementGraphic);
                        }
		}
                this.drawUpdatedEstadoLineaPedido = function(panel, pedido, lineaPedido, estado){
                    this.drawPedidoEnEstado(panel, pedido, lineaPedido.estado);
                    
                    var productoElementGraphic = getElementGraphic(panel, estado, VISTA_PEDIDO, pedido, lineaPedido);
                    removeElement(panel, estado, VISTA_PEDIDO, pedido, lineaPedido);
                    
                    addElementGraphic(productoElementGraphic, panel, lineaPedido.estado, VISTA_PEDIDO, pedido, lineaPedido);

                    var pedidoElementGraphic =  getElementGraphic(panel, estado, VISTA_PEDIDO, pedido);
                    
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
