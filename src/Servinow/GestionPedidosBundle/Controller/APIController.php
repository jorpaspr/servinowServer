<?php

namespace Servinow\GestionPedidosBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function pedidosCamareroAction($restaurantID)
    {
		
		$em = $this->getDoctrine()->getEntityManager();
		
		$pedidos = $em->getRepository('ServinowEntitiesBundle:Pedido')->findAll();
        return $this->render('ServinowGestionPedidosBundle:GestionPedidos:index.html.twig', array(
			'restaurantID' => $restaurantID
		));
    }
}

?>
