#!/bin/bash

configuration="$1"
configurationPath="../configurations/$configuration.json"
json=$(jq -r '.' "$configurationPath")

from=$(echo "$json" | jq -r '.base_image')
extensions=$(echo "$json" | jq -r '.extensions | join(" ")')

dockerfile=$(cat "../templates/Dockerfile")

dockerfile=${dockerfile//'%FROM%'/$from}
dockerfile=${dockerfile//'%EXTENSIONS%'/$extensions}

if [[ ! -d "../dockerfile" ]]
then
    mkdir -p "../dockerfile"
fi

echo "$dockerfile" > "../dockerfile/Dockerfile"
