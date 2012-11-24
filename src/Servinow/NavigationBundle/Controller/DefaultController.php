<?php

namespace Servinow\NavigationBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('ServinowNavigationBundle:Default:index.html.twig', array('name' => "world"));
    }
}
