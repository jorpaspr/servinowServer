<?php

namespace Servinow\EntitiesBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Servinow\EntitiesBundle\Entity\Restaurante
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Servinow\EntitiesBundle\Entity\RestauranteRepository")
 */
class Restaurante
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
     * @var integer $ultimaActualizacion
     *
     * @ORM\Column(name="ultimaActualizacion", type="integer")
     */
    private $ultimaActualizacion;

    /**
     * @var string $nombre
     *
     * @ORM\Column(name="nombre", type="string", length=255)
     */
    private $nombre;

    /**
     * @var string $emailCuentaPaypal
     *
     * @ORM\Column(name="emailCuentaPaypal", type="string", length=255)
     */
    private $emailCuentaPaypal;

    /**
     * @var float $impuesto
     *
     * @ORM\Column(name="impuesto", type="float")
     */
    private $impuesto;

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
     * Set ultimaActualizacion
     *
     * @param integer $ultimaActualizacion
     * @return Restaurante
     */
    public function setUltimaActualizacion($ultimaActualizacion)
    {
        $this->ultimaActualizacion = $ultimaActualizacion;
    
        return $this;
    }

    /**
     * Get ultimaActualizacion
     *
     * @return integer 
     */
    public function getUltimaActualizacion()
    {
        return $this->ultimaActualizacion;
    }

    /**
     * Set nombre
     *
     * @param string $nombre
     * @return Restaurante
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
     * Set emailCuentaPaypal
     *
     * @param string $emailCuentaPaypal
     * @return Restaurante
     */
    public function setEmailCuentaPaypal($emailCuentaPaypal)
    {
        $this->emailCuentaPaypal = $emailCuentaPaypal;
    
        return $this;
    }

    /**
     * Get emailCuentaPaypal
     *
     * @return string 
     */
    public function getEmailCuentaPaypal()
    {
        return $this->emailCuentaPaypal;
    }

    /**
     * Set impuesto
     *
     * @param float $impuesto
     * @return Restaurante
     */
    public function setImpuesto($impuesto)
    {
        $this->impuesto = $impuesto;
    
        return $this;
    }

    /**
     * Get impuesto
     *
     * @return float 
     */
    public function getImpuesto()
    {
        return $this->impuesto;
    }

    /**
     * Set cantDisponible
     *
     * @param integer $cantDisponible
     * @return Restaurante
     */
    public function setCantDisponible($cantDisponible)
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
