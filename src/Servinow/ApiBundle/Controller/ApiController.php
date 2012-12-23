<?php

namespace Servinow\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Servinow\EntitiesBundle\Entity\Pedido;
use Servinow\EntitiesBundle\Entity\Restaurante;
use Servinow\EntitiesBundle\Entity\LineaPedido;

class ApiController extends Controller
{
    public function confirmarAction($restaurantID)
    {
        $request = $this->getRequest();
        
        if($request->request->has('DATA')){
            $json = $request->request->get('DATA');
        }
        
        $data = json_decode($json); 

        $mesa_id = $data["mesa_id"];
        $lineas_pedido = $data["lineas_pedido"];
        // Conseguir la fecha de fin = fecha actual
        $fecha = date("Ymd");
        $pagado = 0;
        $confirmado = 1;
        $restaurante = $em->getRepository('ServinowEntitiesBundle:Pedido')->find($restaurantID);
        
        $pedido = new Pedido();
        $pedido->setConfirmado($confirmado);
        $pedido->setFecha($fecha);
        $pedido->setPagado($pagado);
        $pedido->setRestaurante($restaurante);
        
                
        // insertar el pedido en la base de datos
        $em = $this->getDoctrine()->getManager();
        $em->persist($pedido);
        $em->flush();
        
        $id_pedido_online = $pedido->getId();
        
        // insertar las lineas de pedido en la base de datos
        foreach ($lineas_pedido as $lp) {
            $linea_pedido_id = $lp["linea_pedido_id"];
            $producto_id = $lp["linea_pedido_id"];
            $cantidad = $lp["cantidad"];
            $estado = "cola";
            $producto = $em->getRepository('ServinowEntitiesBundle:Producto')->find($producto_id);
            
            $linea_pedido = new LineaPedido();
            $linea_pedido->setId($linea_pedido_id);
            $linea_pedido->setPedido($pedido);
            $linea_pedido->setProducto($producto);
            $linea_pedido->setCantidad($cantidad);
            $linea_pedido->setEstado($estado);
        }
        
        return new Response(json_encode($id_pedido_online));
    }
    
    public function borrarAction($restaurantID)
    {
        $json_response = json_encode($datos);
        
        $response = new Response($json_response);
        
        return $response;
    }
    
    public function consultarAction($restaurantID)
    {
        $json_response = json_encode($datos);
        
        $response = new Response($json_response);
        
        return $response;
    }
    
    public function pagarAction($restaurantID)
    {
        $json_response = json_encode($datos);
        
        $response = new Response($json_response);
        
        return $response;
    }
}
