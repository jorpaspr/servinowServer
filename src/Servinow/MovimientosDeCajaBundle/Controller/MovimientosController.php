<?php

namespace Servinow\MovimientosDeCajaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MovimientosController extends Controller
{
    public function movimientosAction($restaurantID)
    {
        return $this->render('ServinowMovimientosDeCajaBundle:Movimientos:movimientos.html.twig',
                array('restaurantID'=>$restaurantID));
    }
    
    public function movimientos_fechaAction($restaurantID, $fecha)
    {
        return $this->render('ServinowMovimientosDeCajaBundle:Movimientos:movimientos_fecha.html.twig',
                array('restaurantID'=>$restaurantID, 'fecha'=> $fecha));
    }
}
