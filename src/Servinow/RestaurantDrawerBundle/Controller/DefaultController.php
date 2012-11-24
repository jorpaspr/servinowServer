<?php

namespace Servinow\RestaurantDrawerBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($restaurantID)
    {
        return $this->render('ServinowRestaurantDrawerBundle:Default:index.html.twig', array('name' => $restaurantID));
    }
}
