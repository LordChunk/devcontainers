#!/bin/bash
configuration="$1"
configurationPath="../configurations/$configuration.json"
env_file=$(
  jq 'to_entries | map(if .value | type == "array" then {key: .key, value: (.value | join(" "))} else . end) | from_entries' "$configurationPath"
)

dockerfile=$(cat "../templates/Dockerfile")

# Write env file to name of config
echo "$env_file" > "../env."$configuration