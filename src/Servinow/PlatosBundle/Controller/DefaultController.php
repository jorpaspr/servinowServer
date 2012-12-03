<?php

namespace Servinow\PlatosBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;

class DefaultController extends Controller
{
    public function indexAction($restaurantID)
    {
//        $producto = new \Servinow\EntitiesBundle\Entity\Producto();
//        $formulario = $this->createFormBuilder($producto)
//                ->add('nombre', 'entity', array(
//                    'class' => 'Servinow\\EntitiesBundle\\Entity\\Producto',
//                    'property' => 'nombre',
//                    'expanded' => false,
//                    'multiple' => false
//                    ))
//                ->getForm();
//        return $this->render('ServinowPlatosBundle:Default:index.html.twig',
//                array('formulario' => $formulario->createView()
//                ));
        
        return $this->render('ServinowPlatosBundle:Default:index.html.twig',
                    array(
                        'restaurantID' => $restaurantID,
                        'platos' => array(
                            array('id'=> 1, 'nombre' => 'nombre1'),
                            array('id' =>2, 'nombre' => 'nombre2')
                        )
                    )
                );
    }
    
    public function decidirAction($restaurantID){
        $tipo = "editar"; //TODO
        $platoID = "1"; //TODO
        
        if($tipo == "editar") {
            $url = $this->generateUrl('servinow_platos_homepage_editar', array(
                'restaurantID' => $restaurantID,
                'platoID' => $platoID
            ));
        }
        
        return new RedirectResponse($url);
    }
    
    public function editarAction($restaurantID, $platoID){
        $plato = array(
            'id' => 1,
            'nombre' => 'plato1'
        ); //TODO
        
        return $this->render('ServinowPlatosBundle:Default:editar.html.twig',
                array('restaurantID' => $restaurantID,
                    'platoID' => $plato));
    }
}
