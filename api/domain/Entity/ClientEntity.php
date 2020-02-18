<?php
namespace Domain\Entity;

use Domain\ValueObjects\ClientId;
use Domain\ValueObjects\Timestamp;
use Domain\ValueObjects\Password;
use Domain\ValueObjects\Name;

/**
 * @file domain/Entity/ClientEntity.php
 */
final class ClientEntity {
    /**
     * @var [ClientId] $id - auto increments
     */
    private $id;

    /**
     * @var [Timestamp] $createdAt
     */
    private $createdAt;

    /**
     * @var [Timestamp] $updatedAt
     */
    private $updatedAt;

    /**
     * @var [Password] $password
     */
    private $password;

    /**
     * @var [Name] $userName
     */
    private $userName;

    /**
     * @var [Name] $companyName
     */
    private $companyName;

    /**
     * @var [Contact] $contact
     */
    private $contact;

    /**
     * @var [URL] $URL
     */
    private $URL;

    /**
     * @var [bool] $active
     */
    private $active;

    public function setId(ClientId $id) {
        $this->id = $id;
    }

    public function setTimestamp(Timestamp $createdAt, Timestamp $updatedAt) {
        $this->createdAt = $createdAt;
        $this->updatedAt = $updatedAt;
    }

    public function setPassword(Password $password) {
        $this->password = $password;
    }

    public function setUserName(Name $userName) {
        $this->userName = $userName;
    }

    public function setCompanyName(Name $companyName) {
        $this->companyName = $companyName;
    }

    public function setContact(Contact $contact) {
        $this->contact = $contact;
    }

    public function setURL(URL $url) {
        $this->url = $url;
    }

    public function setActive(bool $active) {
        $this->active = $active;
    }

}
