<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class CreateClientUseCaseTest extends TestCase
{
    /**
     * @return void
     */
    public function testShouldHaveClientFactory()
    {
        $client = factory("App\Client")->make();

        $this->assertNotNull($client);
    }

    public function testShouldHavePostNewClientAPI() {
        $client = factory("App\Client")->make()->toArray();

        $this->json("POST", "/client", $client)
            ->seeJson(["active" => false]);
    }
}
