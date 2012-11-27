<?php

namespace Servinow\EntitiesBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Servinow\EntitiesBundle\Entity\Menu
 *
 * 
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Servinow\EntitiesBundle\Entity\MenuRepository")
 */
class Menu extends Producto
{
    /**
     * @ORM\ManyToMany(targetEntity="Plato", inversedBy="menus")
     * @ORM\JoinTable(name="menus_platos")
     */
    private $platos;
    
    public function __construct() {
        $this->platos = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add platos
     *
     * @param Servinow\EntitiesBundle\Entity\Plato $platos
     * @return Menu
     */
    public function addPlato(\Servinow\EntitiesBundle\Entity\Plato $platos)
    {
        $this->platos[] = $platos;
    
        return $this;
    }

    /**
     * Remove platos
     *
     * @param Servinow\EntitiesBundle\Entity\Plato $platos
     */
    public function removePlato(\Servinow\EntitiesBundle\Entity\Plato $platos)
    {
        $this->platos->removeElement($platos);
    }

    /**
     * Get platos
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getPlatos()
    {
        return $this->platos;
    }
}