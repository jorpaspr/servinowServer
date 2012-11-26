<?php

namespace Servinow\EntitiesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ServinowEntitiesBundle:Default:index.html.twig', array('name' => $name));
    }
}
