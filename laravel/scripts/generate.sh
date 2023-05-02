#!/bin/bash
configuration="$1"
configurationPath="../configurations/$configuration.json"
env_file=$(
  jq -jr 'to_entries |
    map("\(.key)=\(.value |
      if type == "array" then
        join(" ")
      else
        tostring
      end)")' "$configurationPath"
)

dockerfile=$(cat "../templates/Dockerfile")

# Write env file to name of config
echo "$env_file" > "../env."$configuration