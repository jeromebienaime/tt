<?php

namespace Domain\ValueObjects;

final class ClientId {
    private $clientId;

    public function __construct(int $clientId) {
        if (empty($clientId)) {
            throw new \InvalidArgumentException("ClientId cannot be empty");
        }


        $this->clientId = $clientId;
    }

    public function getValue(): int {
        return $this->clientId;
    }
}
