<?php

namespace Servinow\MovimientosDeCajaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class GeneralController extends Controller
{
    public function ingresosAction()
    {
        return $this->render('ServinowMovimientosDeCajaBundle:General:ingresos.html.twig');
    }
    
    public function pagoAction()
    {
        return $this->render('ServinowMovimientosDeCajaBundle:General:pago.html.twig');
    }
    
    public function pedidosAction()
    {
        return $this->render('ServinowMovimientosDeCajaBundle:General:pedidos.html.twig');
    }
    
    public function mesasAction()
    {
        return $this->render('ServinowMovimientosDeCajaBundle:General:mesas.html.twig');
    }
}
