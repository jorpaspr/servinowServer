<?php

namespace Servinow\PlatosBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;

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
        $platos = $this->getDoctrine()->getRepository("ServinowEntitiesBundle:Plato")
                            ->findPlatosByRestaurant($restaurantID);
        
        return $this->render('ServinowPlatosBundle:Default:index.html.twig',
                    array(
                        'restaurantID' => $restaurantID, 
                        'platos' => $platos
              //          'platos' => array(
             //               array('id'=> 1, 'nombre' => 'nombre1'),
              //              array('id' =>2, 'nombre' => 'nombre2')
                        
                        
                    )
                );
    }
    
    public function decidirAction($restaurantID){
        
        $request = Request::createFromGlobals();
        
        if($request->request->has('platoID')){
            $platoID = $request->request->get('platoID');
        }
        
        if($request->request->has('action')){
            $tipo = $request->request->get('action');
        }
        else{
            $tipo = "editar"; //TODO
        }
        
        if($tipo == "editar") {
            $url = $this->generateUrl('servinow_platos_homepage_editar', array(
                'restaurantID' => $restaurantID,
                'productoID' => $platoID
            ));
        }
        
        if($tipo == "eliminar"){
            
            $this->getDoctrine()->getRepository("ServinowEntitiesBundle:Plato")
                ->deletePlatoByID($platoID);
            $url = $this->generateUrl('servinow_platos_homepage', array('restaurantID' => $restaurantID));
        }
        
        return new RedirectResponse($url);
    }
    
    public function editarAction($restaurantID, $productoID){
        
        $producto = $this->getDoctrine()->getRepository("ServinowEntitiesBundle:Producto")
                ->findProductoId($restaurantID, $productoID);
        
        return $this->render('ServinowPlatosBundle:Default:editar.html.twig',
                array('restaurantID' => $restaurantID,
                    'productoID' => $producto));
    }
}
