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
        
        if($tipo == "nuevo") {
            $url = $this->generateUrl('servinow_platos_homepage_nuevo', array(
                'restaurantID' => $restaurantID
            ));
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
        
        
        if($request->request->has('nombre')){
            $productoNombre = $request->request->get('nombre');
        }
        if($request->request->has('descripcion')){
            $productoDescripcion = $request->request->get('descripcion');
        }
        if($request->request->has('precio')){
            $productoPrecio = $request->request->get('precio');
        }
        if($request->request->has('disponible')){
            $productoDisponible = true;   
        } else {
            $productoDisponible=false;
        }
        
        if($tipo == "aceptarEditar") {
            $url = $this->generateUrl('servinow_platos_homepage', array('restaurantID' => $restaurantID));
            $this->getDoctrine()->getRepository("ServinowEntitiesBundle:Producto")
                ->updateProductoById($restaurantID, $platoID, $productoNombre, $productoDescripcion,
                        $productoPrecio, $productoDisponible);
        }
        
        if($tipo == "descartarEditar"){
            $url = $this->generateUrl('servinow_platos_homepage', array('restaurantID' => $restaurantID));
        }
        
        if($tipo == "aceptarNuevo") {
            $url = $this->generateUrl('servinow_platos_homepage', array('restaurantID' => $restaurantID));
            $this->getDoctrine()->getRepository("ServinowEntitiesBundle:Plato")
                ->insertPlato($restaurantID, $productoNombre, $productoDescripcion,
                        $productoPrecio, $productoDisponible);
        }
        
        if($tipo == "descartarNuevo"){
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
    
    public function nuevoAction($restaurantID){
        
        
        return $this->render('ServinowPlatosBundle:Default:nuevo.html.twig',
                array('restaurantID' => $restaurantID));
    }
}
