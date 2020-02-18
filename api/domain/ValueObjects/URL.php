<?php

namespace Domain\ValueObjects;
use Respect\Validation\Validator as v;
final class URL
{

    private $URL;

    public function __construct($URL) {
        if (empty($URL)) {
            throw new \InvalidArgumentException("URL cannot be empty");
        }
        if (!v::url()->validate($URL)) {
            throw new \InvalidArgumentException("URL must be valid");
        }

        $this->URL = $URL;
    }

    public function reachable($URL) {
        $ping = new Ping($URL);
        if ($ping->ping()) {
            throw new \InvalidArgumentException("URL must be reachable");
        }

    }

    public function getValue() {
        return $this->URL;
    }
}
