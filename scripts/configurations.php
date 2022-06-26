<?php

$configurationFiles = glob("../configurations/*.json");

$configurations = [];
foreach ($configurationFiles as $configurationFile) {
    $configurations[] = pathinfo($configurationFile, PATHINFO_FILENAME);
}

echo json_encode($configurations);
