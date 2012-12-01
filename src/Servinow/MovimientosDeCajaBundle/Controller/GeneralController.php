<?php

namespace Servinow\MovimientosDeCajaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class GeneralController extends Controller
{
    public function ingresosAction()
    {
        return $this->render('ServinowMovimientosDeCajaBundle:General:ingresos.html.twig',
                array('restaurantID'=>$restaurantID));
    }
    
    public function pagoAction($restaurantID)
    {
        return $this->render('ServinowMovimientosDeCajaBundle:General:pago.html.twig',
                array('restaurantID'=>$restaurantID));
    }
    
    public function pedidosAction($restaurantID)
    {
        return $this->render('ServinowMovimientosDeCajaBundle:General:pedidos.html.twig',
                array('restaurantID'=>$restaurantID));
    }
    
    public function mesasAction($restaurantID)
    {
        return $this->render('ServinowMovimientosDeCajaBundle:General:mesas.html.twig',
                array('restaurantID'=>$restaurantID));
    }
}
