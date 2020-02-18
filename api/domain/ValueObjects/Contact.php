<?php

namespace Domain\ValueObjects;

final class Contact {
    private $contact;
    private $props = ["firstName", "lastName", "gender"];

    public function __construct($contact) {
        $this->contact = $contact;
    }
    public function getValue() {
        return $this->contact;
    }
}
