<?php

namespace Servinow\PlatosBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($restaurantId)
    {
        $producto = new \Servinow\EntitiesBundle\Entity\Producto();
        $formulario = $this->createFormBuilder($producto)
                ->add('nombre', 'entity', array(
                    'class' => 'Servinow\\EntitiesBundle\\Entity\\Producto',
                    'property' => 'nombre',
                    'expanded' => false,
                    'multiple' => false
                    ))
                ->getForm();
        return $this->render('ServinowPlatosBundle:Default:index.html.twig',
                array('formulario' => $formulario->createView()
                ));
    }
}
