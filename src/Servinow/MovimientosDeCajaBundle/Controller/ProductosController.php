<?php

namespace Servinow\MovimientosDeCajaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ProductosController extends Controller
{
    public function productosAction()
    {
        return $this->render('ServinowMovimientosDeCajaBundle:Productos:productos.html.twig');
    }
    
    public function productos_idAction($producto_id)
    {
        return $this->render('ServinowMovimientosDeCajaBundle:Productos:productos_id.html.twig', 
                array('producto_id'=> $producto_id));
    }
}
