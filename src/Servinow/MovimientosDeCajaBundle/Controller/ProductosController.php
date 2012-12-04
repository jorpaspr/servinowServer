<?php

namespace Servinow\MovimientosDeCajaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ProductosController extends Controller
{
    public function productosAction($restaurantID)
    {
        return $this->render('ServinowMovimientosDeCajaBundle:Productos:productos.html.twig',
                array('restaurantID'=>$restaurantID));
    }
    
    public function productos_idAction($restaurantID, $producto_id)
    {
        return $this->render('ServinowMovimientosDeCajaBundle:Productos:productos_id.html.twig', 
                array('restaurantID'=>$restaurantID, 'producto_id'=> $producto_id));
    }
}