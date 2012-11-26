<?php

namespace Servinow\EntitiesBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Servinow\EntitiesBundle\Entity\Producto
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Servinow\EntitiesBundle\Entity\ProductoRepository")
 */
class Producto
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
     * @var string $nombre
     *
     * @ORM\Column(name="nombre", type="string", length=255)
     */
    private $nombre;

    /**
     * @var string $imagen
     *
     * @ORM\Column(name="imagen", type="string", length=2083)
     */
    private $imagen;

    /**
     * @var string $description
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var float $precio
     *
     * @ORM\Column(name="precio", type="float")
     */
    private $precio;

    /**
     * @var integer $cantDisponible
     *
     * @ORM\Column(name="cantDisponible", type="integer")
     */
    private $cantDisponible;


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
     * Set nombre
     *
     * @param string $nombre
     * @return Producto
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    
        return $this;
    }

    /**
     * Get nombre
     *
     * @return string 
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set imagen
     *
     * @param string $imagen
     * @return Producto
     */
    public function setImagen($imagen)
    {
        $this->imagen = $imagen;
    
        return $this;
    }

    /**
     * Get imagen
     *
     * @return string 
     */
    public function getImagen()
    {
        return $this->imagen;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Producto
     */
    public function setDescription($description)
    {
        $this->description = $description;
    
        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set precio
     *
     * @param float $precio
     * @return Producto
     */
    public function setPrecio(\double $precio)
    {
        $this->precio = $precio;
    
        return $this;
    }

    /**
     * Get precio
     *
     * @return float
     */
    public function getPrecio()
    {
        return $this->precio;
    }

    /**
     * Set cantDisponible
     *
     * @param integer $cantDisponible
     * @return Producto
     */
    public function setCantDisponible(\int $cantDisponible)
    {
        $this->cantDisponible = $cantDisponible;
    
        return $this;
    }

    /**
     * Get cantDisponible
     *
     * @return integer 
     */
    public function getCantDisponible()
    {
        return $this->cantDisponible;
    }
}
