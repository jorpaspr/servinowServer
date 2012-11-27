<?php

namespace Servinow\EntitiesBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Servinow\EntitiesBundle\Entity\Plato
 *
 * 
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Servinow\EntitiesBundle\Entity\PlatoRepository")
 */
class Plato extends Producto
{
    /**
     * @ORM\ManyToMany(targetEntity="Menu", mappedBy="platos")
     */
    private $menus;

    
    public function __construct() {
        $this->menus = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add menus
     *
     * @param Servinow\EntitiesBundle\Entity\Menu $menus
     * @return Plato
     */
    public function addMenu(\Servinow\EntitiesBundle\Entity\Menu $menus)
    {
        $this->menus[] = $menus;
    
        return $this;
    }

    /**
     * Remove menus
     *
     * @param Servinow\EntitiesBundle\Entity\Menu $menus
     */
    public function removeMenu(\Servinow\EntitiesBundle\Entity\Menu $menus)
    {
        $this->menus->removeElement($menus);
    }

    /**
     * Get menus
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getMenus()
    {
        return $this->menus;
    }
}