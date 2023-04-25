#!/bin/bash

configurationFiles=("../configurations/"*.json)
configurations=()

# Iterate over all configuration files
for configurationFile in ${configurationFiles[@]}; do
    # Get the configuration name
    configurationName=$(basename $configurationFile .json)

    # Add the configuration to the configurations array
    configurations+=($configurationName)
done

# Print as json remove \n 
echo ${configurations[@]} | \
    jq -R -s -c 'split(" ")' | \
    sed 's/\\n//g'