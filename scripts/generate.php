<?php

$configuration = $argv[1];
$configurationPath = '../configurations/' . $configuration . '.json';
$json = json_decode(file_get_contents($configurationPath), true);

$segments = [
    'FROM' => $json['base_image'],
    'EXTENSIONS' => implode(' ', $json['extensions']),
];

$dockerfile = file_get_contents('../templates/Dockerfile');

foreach ($segments as $segment => $value) {
    $dockerfile = str_replace('%' . $segment . '%', $value, $dockerfile);
}

if (!file_exists('../dockerfile')) {
    mkdir('../dockerfile', 0777, true);
}

file_put_contents('../Dockerfile', $dockerfile);
