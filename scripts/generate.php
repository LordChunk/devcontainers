<?php

$configuration = $argv[1];
$configurationPath = '../configurations/' . $configuration . '.json';
$json = json_decode(file_get_contents($configurationPath), true);

$template = file_get_contents('../templates/Dockerfile');

$dockerfile = str_replace('%FROM%', $json['from'], $template);
$dockerfile = str_replace('%EXTENSIONS%', implode(' ', $json['extensions']), $template);

if (!file_exists('../dockerfile')) {
    mkdir('../dockerfile', 0777, true);
}

file_put_contents('../Dockerfile', $dockerfile);
