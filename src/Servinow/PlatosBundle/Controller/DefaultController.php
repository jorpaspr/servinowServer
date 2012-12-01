<?php

namespace Servinow\PlatosBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($restaurantId)
    {
        return $this->render('ServinowPlatosBundle:Default:index.html.twig', array('name' => 'plato'));
    }
}
