<?php

namespace Servinow\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Servinow\EntitiesBundle\Entity\Pedido;
use Servinow\EntitiesBundle\Entity\Restaurante;
use Servinow\EntitiesBundle\Entity\LineaPedido;
use Symfony\Component\HttpFoundation\Response;

class ApiController extends Controller
{
    public function confirmarAction($restaurantID)
    {
        $request = $this->getRequest();
        
        $json = "";
        
        if($request->request->has('DATA')){
            $json = $request->request->get('DATA');
        }
        else{
            return new Response();
        }
        
        // Returns a object (false). True -> returns a associative array
        $data = json_decode($json, false); 
        
        // Gets the entity manager
        $em = $this->getDoctrine()->getManager();

        $mesa_id = $data->mesa_id;
        $lineas_pedido = $data->lineas_pedido;
        // Conseguir la fecha de fin = fecha actual
        $fecha = date("Ymd");
        $pagado = 0;
        $confirmado = 1;
        $restaurante = $em->getRepository('ServinowEntitiesBundle:Restaurante')->find($restaurantID);
        $mesa = $em->getRepository('ServinowEntitiesBundle:Mesa')->find($mesa_id);
        
        $pedido = new Pedido();
        $pedido->setMesa($mesa);
        $pedido->setConfirmado($confirmado);
        $pedido->setFecha($fecha);
        $pedido->setPagado($pagado);
        $pedido->setRestaurante($restaurante);
        
                
        // insertar el pedido en la base de datos
        $em->persist($pedido);
        $em->flush();
        
        $id_pedido_online = $pedido->getId();
        
        // insertar las lineas de pedido en la base de datos
        foreach ($lineas_pedido as $lp) {
            $linea_pedido_id = $lp->linea_pedido_id;
            $producto_id = $lp->producto_id;
            $cantidad = $lp->cantidad;
            $estado = "cola";
            $producto = $em->getRepository('ServinowEntitiesBundle:Producto')->find($producto_id);
            
            $linea_pedido = new LineaPedido();
            $linea_pedido->setId($linea_pedido_id);
            $linea_pedido->setPedido($pedido);
            $linea_pedido->setProducto($producto);
            $linea_pedido->setCantidad($cantidad);
            $linea_pedido->setEstado($estado);
            $em->persist($linea_pedido);           
        }
        $em->flush();
        
        return new Response(json_encode($id_pedido_online));
    }
    
    public function borrarAction($restaurantID)
    {
        $request = $this->getRequest();
        
        $json = "";
        if($request->request->has('DATA')){
            $json = $request->request->get('DATA');
        }
        else{
            Return new Response;
        }
        
        $data = json_decode($json, false);
        
        // Gets the entity manager
        $em = $this->getDoctrine()->getManager();
        
        $pedido_id_online = $data->pedido_id_online;
        $mesa_id = $data->mesa_id;
        $linea_pedido_local = $data->linea_pedido_local;
        $cantidad = $data->cantidad;
        
        $json_response = json_encode($datos);
        
        $response = new Response($json_response);
        
        return $response;
    }
    
    public function consultarAction($restaurantID)
    {
        $request = $this->getRequest();
        
        $json = "";
        if($request->request->has('DATA')){
            $json = $request->request->get('DATA');
        }
        else{
            Return new Response;
        }
        
        $data = json_decode($json, false);
        
        // Gets the entity manager
        $em = $this->getDoctrine()->getManager();
        
        $mesa_id = $data->mesa_id;
        $pedido_id_online = $data->pedido_id_online;
        
        foreach ($pedido_id_online as $pIdOnline) {
            $pedidoId = $pIdOnline->pedido_id_online;
        }
        
        
        $json_response = json_encode($datos);
        
        $response = new Response($json_response);
        
        return $response;
    }
    
    public function pagarAction($restaurantID)
    {
        $request = $this->getRequest();
        
        $json = "";
        if($request->request->has('DATA')){
            $json = $request->request->get('DATA');
        }
        else{
            Return new Response;
        }
        
        $data = json_decode($json, false);
        
        // Gets the entity manager
        $em = $this->getDoctrine()->getManager();
        
        $mesa_id = $data->mesa_id;
        $pedido_id_online = $data->pedido_id_online;
        
        foreach ($pedido_id_online as $pIdOnline) {
            $pedidoId = $pIdOnline->pedido_id_online;
            $metodo_pago = $pIdOnline->metodo_pago;
            
            $pedido = $em->getRepository('ServinowEntitiesBundle:Pedido')->find($pedidoId);
            $pedido->setMetodoPago($metodo_pago);
            $pedido->setPagado(1);
        }
        
        $em->flush();
        
        return new Response();
    }
}
