<?php

namespace Servinow\NavigationBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class NavigationController extends Controller {

	public function indexAction() {
		return $this->render('ServinowNavigationBundle:Navigation:index.html.twig', array('name' => "world"));
	}

	public function userAccountBlockAction() {
		//TODO
		return $this->render('ServinowNavigationBundle:Navigation:userAccountBlock.html.twig',
				array('userName' => "Paquito"));
	}

}
