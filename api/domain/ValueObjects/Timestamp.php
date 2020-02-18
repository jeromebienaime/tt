<?php

namespace Domain\ValueObjects;

use Respect\Validation\Validator as v;

final class Timestamp {
    private $timestamp;

    public function __construct(string $timestamp) {
        if (empty($timestamp)) {
            throw new \InvalidArgumentException("Timestamp cannot be empty");
        }

        if (!v::date()->validate($timestamp)) {
            throw new \InvalidArgumentException("Timestamp is not date");
        }

        $this->timestamp = $timestamp;
    }
    public function getValue(): string {
        return $this->timestamp;
    }
}
