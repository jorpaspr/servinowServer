(function(ep, template){
	var template = template.PEDIDO;
	ep.Interfaz.Entidad.PedidoElementoGrafico = function() {
		this.element = null;
		this.create = function(estado, pedido){
			this.lineasPedidoCont = 0;
			this.lineasPedidoNextStates = 0;
			this.lineasPedidoTotal = pedido.lineasPedido.length;
			
			this.pedido = pedido;
			this.estado = estado;
			
			var data = {
				pedido: pedido
			};
			this.element = $(new EJS({url: template}).render(data));
			
			this.listaProductosElement = this.element.find('.listaProductos');
            this.element.data("obj", pedido);
			this.progressBarElement = this.element.find('.progressbar');
			this.progressElement = this.element.find('.progressbar .progress');
			
			this.initProgressBar();
				
			return this;
		}
		this.addProducto = function(productoElementGraphic){
			this.listaProductosElement.append(productoElementGraphic.element);
			
			this.lineasPedidoCont++;
			
			this.updateProgressBar();
		}
		this.changeProducto = function(productoElementGraphic, pedidoElementGraphic){
			this.lineasPedidoNextStates++;
			pedidoElementGraphic.addProducto(productoElementGraphic);
			
			this.updateProgressBar();
			if(this.lineasPedidoNextStates >= this.lineasPedidoTotal) {
				var elementGraphic = this;
				setTimeout(function(){
					elementGraphic.element.remove();
					delete elementGraphic;
				},1000);
			}
			
		}
		this.initProgressBar = function(){
			for(var i = 0; i < this.lineasPedidoTotal; ++i){
				var lineaPedido = this.pedido.lineasPedido[i];
				
				if(lineaPedido.estado.tipo > this.estado.tipo){
					this.lineasPedidoNextStates++;					
				}
			}
			this.updateProgressBar();
		}
		this.updateProgressBar = function(){
			var percent = this.lineasPedidoNextStates/this.lineasPedidoTotal;
			this.progressElement.css("width", (percent*100)+"%");
		}
	}
})(ep, template);
