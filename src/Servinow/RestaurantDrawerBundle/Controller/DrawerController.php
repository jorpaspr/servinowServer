<?php

namespace Servinow\RestaurantDrawerBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DrawerController extends Controller {

	public function indexAction($restaurantID) {
		//TODO
		return $this->render('ServinowRestaurantDrawerBundle:Drawer:index.html.twig'
						, array('restaurantID' => $restaurantID));
	}

}
