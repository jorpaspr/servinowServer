<?php

namespace Servinow\EntitiesBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Servinow\EntitiesBundle\Entity\Pedido
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Servinow\EntitiesBundle\Entity\PedidoRepository")
 */
class Pedido
{
    /**
     * @var integer $id
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime $fecha
     *
     * @ORM\Column(name="fecha", type="datetime")
     */
    private $fecha;

    /**
     * @var boolean $pagado
     *
     * @ORM\Column(name="pagado", type="boolean")
     */
    private $pagado;

    /**
     * @var boolean $confirmado
     *
     * @ORM\Column(name="confirmado", type="boolean")
     */
    private $confirmado;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set fecha
     *
     * @param \DateTime $fecha
     * @return Pedido
     */
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    
        return $this;
    }

    /**
     * Get fecha
     *
     * @return \DateTime 
     */
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * Set pagado
     *
     * @param boolean $pagado
     * @return Pedido
     */
    public function setPagado($pagado)
    {
        $this->pagado = $pagado;
    
        return $this;
    }

    /**
     * Get pagado
     *
     * @return boolean 
     */
    public function getPagado()
    {
        return $this->pagado;
    }

    /**
     * Set confirmado
     *
     * @param boolean $confirmado
     * @return Pedido
     */
    public function setConfirmado($confirmado)
    {
        $this->confirmado = $confirmado;
    
        return $this;
    }

    /**
     * Get confirmado
     *
     * @return boolean 
     */
    public function getConfirmado()
    {
        return $this->confirmado;
    }
}
