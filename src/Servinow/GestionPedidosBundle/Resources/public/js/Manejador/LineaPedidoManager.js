(function(ep){
	var lineaPedidos = {};
	ep.Manejador.LineaPedidoManager = function(){
		this.add = function(id, producto, cantidad, estado){
			if(lineaPedidos["id"+id] != null) return lineaPedidos["id"+id];
			
			var lineaPedido = new ep.Entidad.LineaPedido(producto, cantidad, estado);
			lineaPedido.id = id;

			lineaPedidos["id"+id] = lineaPedido;
			
			return lineaPedido;
		}
	}
})(ep);
