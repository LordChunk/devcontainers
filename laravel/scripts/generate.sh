#!/bin/bash
configuration="$1"
configurationPath="../configurations/$configuration.json"
env_file=$(
  jq -r '[
    to_entries[] 
    | .key + "=" + 
      (if .value 
        | type == "array" then .value 
        | join(" ") else .value 
      end)
  ]
  | join("\n")' "$configurationPath"
)

dockerfile=$(cat "../templates/Dockerfile")

# Write env file to name of config
echo "$env_file" > "../env."$configuration