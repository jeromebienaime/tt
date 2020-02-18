<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
    ];
});

$factory->define(App\Client::class, function (Faker\Generator $faker) {
    $gender = array_rand(["M", "F", "ND"], 1);
    $password = "tt_api";
    return [
        "password" => $password,
        "userName" => $faker->userName,
        "companyName" => $faker->company,
        "contact" => [
            "firstName" => $faker->userName,
            "lastName" => $faker->lastName,
            "gender" => $gender
        ],
        "URL" => $faker->url
    ];
});
