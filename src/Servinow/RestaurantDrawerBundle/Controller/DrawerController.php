<?php

namespace Servinow\RestaurantDrawerBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DrawerController extends Controller {

	public function indexAction($restaurantID) {
		//TODO
		
		$drawerKnowledge = array(
			'objects' => array(
				array(
					'id' => 1,
					'x' => 0,
					'y' => 0,
					'wide' => 1,
					'tall' => 1,
					'name' => 'portón'
				),
				array(
					'id' => 2,
					'x' => 7,
					'y' => 4,
					'wide' => 2,
					'tall' => 1,
					'name' => 'ventana'
				),
				array(
					'id' => 3,
					'x' => 0,
					'y' => 3,
					'wide' => 1,
					'tall' => 4,
					'name' => 'barr2a'
				),
			),
			'tables' => array()
		);
		
		return $this->render('ServinowRestaurantDrawerBundle:Drawer:index.html.twig'
						, array('restaurantID' => $restaurantID,
								'drawerKnowledge' => json_encode($drawerKnowledge)
							));
	}

}
