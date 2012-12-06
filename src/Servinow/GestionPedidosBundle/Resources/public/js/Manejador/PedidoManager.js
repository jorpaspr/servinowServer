(function(ep){
	var pedidos = {};
	ep.Manejador.PedidoManager = function(){
		this.add = function(id){
			if(pedidos["id"+id] != null) return pedidos["id"+id];
			var pedido = new ep.Entidad.Pedido();
			pedido.id = id;

			pedidos["id"+id] = pedido;
			
			return pedido;
		}
		this.addLineaPedido = function(pedido, lineaPedido){
			pedido.lineasPedido.push(lineaPedido);
		}
		this.loadAll = function(){
			
		}
		this.load = function(onSuccess){
			$.ajax({
				url: 'API/pedidos',
				type: "GET",
				dataType: "json",
				success: onSuccess
			});
		}
	}
})(ep);
