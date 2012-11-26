<?php

namespace Servinow\MovimientosDeCajaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MovimientosController extends Controller
{
    public function movimientosAction()
    {
        return $this->render('ServinowMovimientosDeCajaBundle:Movimientos:movimientos.html.twig');
    }
    
    public function movimientos_fechaAction($fecha)
    {
        return $this->render('ServinowMovimientosDeCajaBundle:Movimientos:movimientos_fecha.html.twig',
                array('fecha'=> $fecha));
    }
}
